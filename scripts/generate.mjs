#!/usr/bin/env node
// Generates every vendor manifest from catalog.json.
//
//   node scripts/generate.mjs           write files
//   node scripts/generate.mjs --check   fail if any generated file is out of date
//
// No dependencies: runs on any Node.js >= 18.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const catalog = JSON.parse(readFileSync(join(root, "catalog.json"), "utf8"));
const { marketplace: mkt, plugin, servers } = catalog;

const pluginDir = `plugins/${plugin.name}`;
const author = { name: mkt.owner.name, email: mkt.owner.email, url: mkt.owner.url };
const header = "Generated from catalog.json by scripts/generate.mjs. Do not edit by hand.";

// Shape shared by Claude Code, Codex, Cursor and Agent Plugins: { mcpServers: { id: { type, url } } }
const httpServers = Object.fromEntries(servers.map((s) => [s.id, { type: "http", url: s.url }]));

const files = {
  // --- Agent Plugins 1.0 (vendor-neutral: VS Code, Copilot CLI, Cursor, ...) ---
  [`${pluginDir}/plugin.json`]: {
    $schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
    name: plugin.name,
    version: plugin.version,
    description: plugin.description,
    author,
    homepage: plugin.homepage,
    repository: mkt.repository,
    license: plugin.license,
    keywords: plugin.keywords,
  },
  [`${pluginDir}/mcp.json`]: { mcpServers: httpServers },

  // --- Claude Code ---
  [`${pluginDir}/.claude-plugin/plugin.json`]: {
    name: plugin.name,
    version: plugin.version,
    description: plugin.description,
    author,
    homepage: plugin.homepage,
    repository: mkt.repository,
    license: plugin.license,
    keywords: plugin.keywords,
    icon: "./assets/icon.png",
    privacyPolicyUrl: plugin.privacyPolicy,
  },
  [`${pluginDir}/.mcp.json`]: { mcpServers: httpServers },
  [".claude-plugin/marketplace.json"]: {
    $schema: "https://anthropic.com/claude-code/marketplace.schema.json",
    name: mkt.name,
    owner: { name: mkt.owner.name, email: mkt.owner.email },
    metadata: { description: `${mkt.displayName}. ${mkt.description}`, version: plugin.version },
    plugins: [
      {
        name: plugin.name,
        source: `./${pluginDir}`,
        description: plugin.description,
        version: plugin.version,
        author,
        homepage: plugin.homepage,
        repository: mkt.repository,
        license: plugin.license,
        keywords: plugin.keywords,
        category: plugin.category.toLowerCase(),
      },
    ],
  },

  // --- OpenAI Codex ---
  [`${pluginDir}/.codex-plugin/plugin.json`]: {
    name: plugin.name,
    version: plugin.version,
    description: plugin.description,
    author,
    homepage: plugin.homepage,
    repository: mkt.repository,
    license: plugin.license,
    keywords: plugin.keywords,
    skills: "./skills/",
    mcpServers: "./.mcp.json",
    interface: {
      displayName: plugin.displayName,
      shortDescription: plugin.shortDescription,
      longDescription: plugin.description,
      developerName: mkt.owner.name,
      category: plugin.category,
      capabilities: ["Read", "Write"],
      websiteURL: plugin.homepage,
      privacyPolicyURL: plugin.privacyPolicy,
      termsOfServiceURL: plugin.termsOfService,
      defaultPrompt: plugin.defaultPrompts,
      brandColor: plugin.brandColor,
      composerIcon: "./assets/icon.png",
      logo: "./assets/icon.png",
    },
  },
  [".agents/plugins/marketplace.json"]: {
    name: mkt.name,
    interface: { displayName: mkt.displayName },
    plugins: [
      {
        name: plugin.name,
        source: { source: "local", path: `./${pluginDir}` },
        policy: { installation: "AVAILABLE", authentication: "ON_FIRST_USE" },
        category: plugin.category,
      },
    ],
  },

  // --- Cursor ---
  [`${pluginDir}/.cursor-plugin/plugin.json`]: {
    name: plugin.name,
    displayName: plugin.displayName,
    logo: "assets/icon.svg",
    version: plugin.version,
    description: plugin.description,
    author,
    homepage: plugin.homepage,
    repository: mkt.repository,
    license: plugin.license,
    keywords: plugin.keywords,
  },
  [".cursor-plugin/marketplace.json"]: {
    name: mkt.name,
    owner: { name: mkt.owner.name, email: mkt.owner.email },
    metadata: { description: mkt.description, version: plugin.version },
    plugins: [{ name: plugin.name, source: pluginDir, description: plugin.description }],
  },

  // --- Gemini CLI / Antigravity CLI (installed from the repository root) ---
  ["gemini-extension.json"]: {
    name: plugin.name,
    version: plugin.version,
    description: plugin.description,
    contextFileName: "GEMINI.md",
    mcpServers: Object.fromEntries(servers.map((s) => [s.id, { httpUrl: s.url }])),
  },
};

// --- Gemini context file: the router skill plus pointers to the product skills ---
const routerSkill = readFileSync(join(root, pluginDir, "skills", plugin.name, "SKILL.md"), "utf8");
files["GEMINI.md"] = [
  `<!-- ${header} Source: ${pluginDir}/skills/${plugin.name}/SKILL.md -->`,
  routerSkill.replace(/^---\n[\s\S]*?\n---\n+/, "").trimEnd(),
  "## Product guides",
  "For product-specific workflows, read:",
  servers
    .filter((s) => !s.id.endsWith("-sandbox"))
    .map((s) => `- \`${pluginDir}/skills/${s.id}/SKILL.md\` (${s.product})`)
    .join("\n"),
].join("\n\n") + "\n";

// --- Official MCP Registry: one server.json per remote server ---
for (const s of servers) {
  files[`registry/${s.id.replace(/^kobana-/, "")}/server.json`] = {
    $schema: "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
    name: s.registryName,
    title: `Kobana ${s.product}`,
    description: s.description.slice(0, 100),
    version: plugin.version,
    websiteUrl: s.docs,
    repository: { url: mkt.repository, source: "github" },
    remotes: [{ type: "streamable-http", url: s.url }],
  };
}

let stale = [];
for (const [path, data] of Object.entries(files)) {
  const target = join(root, path);
  const content = typeof data === "string" ? data : JSON.stringify(data, null, 2) + "\n";
  const current = existsSync(target) ? readFileSync(target, "utf8") : null;
  if (current === content) continue;
  if (check) {
    stale.push(path);
    continue;
  }
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
  console.log(`wrote ${path}`);
}

// --- Skills sanity check (Agent Skills spec: directory name must equal frontmatter name) ---
const skillsDir = join(root, pluginDir, "skills");
const problems = [];
for (const dir of readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  const file = join(skillsDir, dir.name, "SKILL.md");
  if (!existsSync(file)) {
    problems.push(`${relative(root, file)} is missing`);
    continue;
  }
  const front = readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
  const name = front?.[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = front?.[1].match(/^description:\s*(.+)$/m)?.[1].trim();
  if (name !== dir.name) problems.push(`${relative(root, file)}: name "${name}" must equal "${dir.name}"`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(dir.name)) problems.push(`${dir.name}: skill names must be kebab-case`);
  if (!description) problems.push(`${relative(root, file)}: description is required`);
  else if (description.length > 1024) problems.push(`${relative(root, file)}: description exceeds 1024 characters`);
}

if (stale.length) {
  console.error(`Out of date (run \`npm run generate\`):\n  ${stale.join("\n  ")}`);
}
if (problems.length) {
  console.error(`Skill problems:\n  ${problems.join("\n  ")}`);
}
if (stale.length || problems.length) process.exit(1);
console.log(check ? "All generated files are up to date." : `Done. ${header}`);
