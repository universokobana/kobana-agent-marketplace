#!/usr/bin/env node
// Generates every plugin, skill copy and vendor manifest from catalog.json and src/.
//
//   node scripts/generate.mjs           write files
//   node scripts/generate.mjs --check   fail if any generated file is out of date
//
// No dependencies: runs on any Node.js >= 18.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const catalog = JSON.parse(readFileSync(join(root, "catalog.json"), "utf8"));
const { version, marketplace: mkt, shared, plugins } = catalog;

const author = { name: mkt.owner.name, email: mkt.owner.email, url: mkt.owner.url };
const header = "Generated from catalog.json by scripts/generate.mjs. Do not edit by hand.";
const allServers = plugins.flatMap((p) => p.servers);
const read = (path) => readFileSync(join(root, path), "utf8");
const httpServers = (servers) => Object.fromEntries(servers.map((s) => [s.id, { type: "http", url: s.url }]));
const installCommand = (p) => `/plugin install ${p.name}@${mkt.name}`;

// --- Skills: product skill + shared core rules (with the product table) ---
const productsTable = [
  "| Product | Plugin | MCP server | Claude Code install |",
  "|---|---|---|---|",
  ...plugins.flatMap((p) =>
    p.servers.map((s) => `| ${p.product}${s.sandbox ? " (sandbox)" : ""} | \`${p.name}\` | \`${s.url}\` | \`${installCommand(p)}\` |`),
  ),
].join("\n");
const core = read("src/shared/core.md").replace("{{products}}", productsTable).trimEnd();
const skill = (name) => read(`src/skills/${name}/SKILL.md`).replace("{{core}}", core);

const files = {};
const binaries = {};

// --- Per-plugin README in each language ---
const readmeText = {
  en: {
    switcher: (n) => `**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)`,
    title: (p, t) => `Kobana ${t.product} plugin`,
    intro: (t) => `The official Kobana plugin for ${t.product}: ${t.summary.charAt(0).toLowerCase() + t.summary.slice(1)} It connects your AI agent to Kobana's remote MCP server and adds a skill with the product's workflows and safety rules.`,
    install: "Install",
    inClaude: "In Claude Code:",
    other: "For other clients, see the",
    guides: "install guides",
    guidesPath: "../../install/README.md",
    servers: "MCP servers",
    cols: "| Server | URL |",
    sandbox: "sandbox, data isolated from production",
    auth: "Authentication is OAuth 2.1: on first use, your client opens the Kobana login.",
    learn: "Learn more about the product",
    privacy: "[Privacy](https://www.kobana.com.br/en/privacy)",
    generated: "This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.",
  },
  "pt-BR": {
    switcher: () => `[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)`,
    title: (p, t) => `Plugin Kobana ${t.product}`,
    intro: (t) => `O plugin oficial da Kobana para ${t.product}: ${t.summary.charAt(0).toLowerCase() + t.summary.slice(1)} Ele conecta o seu agente de IA ao servidor MCP remoto da Kobana e adiciona uma skill com os fluxos e as regras de segurança do produto.`,
    install: "Instalação",
    inClaude: "No Claude Code:",
    other: "Para outros clientes, veja os",
    guides: "guias de instalação",
    guidesPath: "../../install/README.pt-BR.md",
    servers: "Servidores MCP",
    cols: "| Servidor | URL |",
    sandbox: "sandbox, dados separados da produção",
    auth: "A autenticação é OAuth 2.1: no primeiro uso, o cliente abre o login da Kobana.",
    learn: "Saiba mais sobre o produto",
    privacy: "[Privacidade](https://www.kobana.com.br/privacidade)",
    generated: "Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.",
  },
  es: {
    switcher: () => `[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**`,
    title: (p, t) => `Plugin Kobana ${t.product}`,
    intro: (t) => `El plugin oficial de Kobana para ${t.product}: ${t.summary.charAt(0).toLowerCase() + t.summary.slice(1)} Conecta tu agente de IA al servidor MCP remoto de Kobana y agrega una skill con los flujos y las reglas de seguridad del producto.`,
    install: "Instalación",
    inClaude: "En Claude Code:",
    other: "Para otros clientes, consulta las",
    guides: "guías de instalación",
    guidesPath: "../../install/README.es.md",
    servers: "Servidores MCP",
    cols: "| Servidor | URL |",
    sandbox: "sandbox, datos aislados de producción",
    auth: "La autenticación es OAuth 2.1: en el primer uso, tu cliente abre el inicio de sesión de Kobana.",
    learn: "Conoce más sobre el producto",
    privacy: "[Privacidad](https://www.kobana.com.br/es/privacidad)",
    generated: "Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.",
  },
};

for (const p of plugins) {
  const dir = `plugins/${p.name}`;
  const displayName = `Kobana ${p.product}`;
  const keywords = [...shared.keywords, ...p.keywords];
  const meta = {
    name: p.name,
    version,
    description: p.description,
    author,
    homepage: p.pages.en,
    repository: mkt.repository,
    license: shared.license,
    keywords,
  };

  // Agent Plugins 1.0 (VS Code, Copilot CLI, Cursor, ...)
  files[`${dir}/plugin.json`] = { $schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json", ...meta };
  files[`${dir}/mcp.json`] = { mcpServers: httpServers(p.servers) };

  // Claude Code (also read by Codex). The icon is found at assets/icon.png and the privacy policy through the
  // README link: claude.ai marketplace sync strips unknown plugin.json keys such as `icon` and `privacyPolicyUrl`.
  files[`${dir}/.claude-plugin/plugin.json`] = meta;
  files[`${dir}/.mcp.json`] = { mcpServers: httpServers(p.servers) };

  // OpenAI Codex
  files[`${dir}/.codex-plugin/plugin.json`] = {
    ...meta,
    skills: "./skills/",
    mcpServers: "./.mcp.json",
    interface: {
      displayName,
      shortDescription: p.shortDescription,
      longDescription: p.description,
      developerName: mkt.owner.name,
      category: shared.category,
      capabilities: ["Read", "Write"],
      websiteURL: p.pages.en,
      privacyPolicyURL: shared.privacyPolicy,
      termsOfServiceURL: shared.termsOfService,
      defaultPrompt: p.defaultPrompts,
      brandColor: shared.brandColor,
      composerIcon: "./assets/icon.png",
      logo: "./assets/icon.png",
    },
  };

  // Cursor
  files[`${dir}/.cursor-plugin/plugin.json`] = { ...meta, displayName, logo: "assets/icon.svg" };

  // Skill, license and icons
  files[`${dir}/skills/${p.name}/SKILL.md`] = skill(p.name);
  files[`${dir}/skills/${p.name}/LICENSE`] = read("LICENSE");
  files[`${dir}/LICENSE`] = read("LICENSE");
  files[`${dir}/assets/icon.svg`] = read("assets/icon.svg");
  binaries[`${dir}/assets/icon.png`] = "assets/icon.png";

  // README in three languages
  for (const [lang, t] of Object.entries(readmeText)) {
    const l = p.i18n[lang];
    const serverRows = p.servers
      .map((s) => `| \`${s.id}\`${s.sandbox ? ` (${t.sandbox})` : ""} | \`${s.url}\` |`)
      .join("\n");
    const name = lang === "en" ? "README.md" : `README.${lang}.md`;
    files[`${dir}/${name}`] = [
      `<!-- ${header} -->`,
      `# ${t.title(p, l)}`,
      t.switcher(),
      t.intro(l),
      `## ${t.install}`,
      t.inClaude,
      "```text\n" + `/plugin marketplace add universokobana/${mkt.name}\n${installCommand(p)}` + "\n```",
      `${t.other} [${t.guides}](${t.guidesPath}).`,
      `## ${t.servers}`,
      `${t.cols}\n|---|---|\n${serverRows}`,
      t.auth,
      `[${t.learn}](${p.pages[lang]}) · [MCP docs](${p.servers[0].docs}) · ${t.privacy}`,
      `> ${t.generated}`,
    ].join("\n\n") + "\n";
  }
}

// --- Marketplace catalogs ---
files[".claude-plugin/marketplace.json"] = {
  $schema: "https://anthropic.com/claude-code/marketplace.schema.json",
  name: mkt.name,
  owner: { name: mkt.owner.name, email: mkt.owner.email },
  metadata: { description: `${mkt.displayName}. ${mkt.description}`, version },
  plugins: plugins.map((p) => ({
    name: p.name,
    source: `./plugins/${p.name}`,
    description: p.description,
    version,
    author,
    homepage: p.pages.en,
    repository: mkt.repository,
    license: shared.license,
    keywords: [...shared.keywords, ...p.keywords],
    category: shared.category.toLowerCase(),
  })),
};
files[".agents/plugins/marketplace.json"] = {
  name: mkt.name,
  interface: { displayName: mkt.displayName },
  plugins: plugins.map((p) => ({
    name: p.name,
    source: { source: "local", path: `./plugins/${p.name}` },
    policy: { installation: "AVAILABLE", authentication: "ON_FIRST_USE" },
    category: shared.category,
  })),
};
files[".cursor-plugin/marketplace.json"] = {
  name: mkt.name,
  owner: { name: mkt.owner.name, email: mkt.owner.email },
  metadata: { description: mkt.description, version },
  plugins: plugins.map((p) => ({ name: p.name, source: `plugins/${p.name}`, description: p.description })),
};

// --- Skills only, at the repository root (Gemini CLI extension and any Agent Skills client) ---
for (const p of plugins) {
  files[`skills/${p.name}/SKILL.md`] = skill(p.name);
  files[`skills/${p.name}/LICENSE`] = read("LICENSE");
}

// --- Gemini CLI / Antigravity CLI: one extension with every product, installed from the repo root ---
files["gemini-extension.json"] = {
  name: "kobana",
  version,
  description: mkt.description,
  contextFileName: "GEMINI.md",
  mcpServers: Object.fromEntries(allServers.map((s) => [s.id, { httpUrl: s.url }])),
};
files["GEMINI.md"] = [
  `<!-- ${header} Source: src/shared/core.md -->`,
  "# Kobana",
  "This extension connects you to every Kobana MCP server. Product workflows are in the bundled skills:",
  plugins.map((p) => `- \`skills/${p.name}/SKILL.md\` (${p.product})`).join("\n"),
  core,
].join("\n\n") + "\n";

// --- Official MCP Registry: one server.json per remote server ---
for (const p of plugins) {
  for (const s of p.servers) {
    files[`registry/${s.id.replace(/^kobana-/, "")}/server.json`] = {
      $schema: "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
      name: s.registryName,
      title: `Kobana ${p.product}${s.sandbox ? " (sandbox)" : ""}`,
      description: s.description.slice(0, 100),
      version,
      websiteUrl: s.docs,
      repository: { url: mkt.repository, source: "github" },
      remotes: [{ type: "streamable-http", url: s.url }],
    };
  }
}

// --- Write, or compare in --check mode ---
const stale = [];
const write = (path, content) => {
  const target = join(root, path);
  const current = existsSync(target) ? readFileSync(target) : null;
  if (current && Buffer.compare(current, content) === 0) return;
  if (check) return stale.push(path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
  console.log(`wrote ${path}`);
};
for (const [path, data] of Object.entries(files)) {
  write(path, Buffer.from(typeof data === "string" ? data : JSON.stringify(data, null, 2) + "\n"));
}
for (const [path, source] of Object.entries(binaries)) write(path, readFileSync(join(root, source)));

// Generated directories must not keep files that are no longer generated
const expected = new Set([...Object.keys(files), ...Object.keys(binaries)]);
const walk = (dir) =>
  readdirSync(join(root, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
for (const dir of ["plugins", "skills", "registry"]) {
  if (!existsSync(join(root, dir))) continue;
  for (const path of walk(dir).filter((f) => !expected.has(f))) {
    if (check) stale.push(`${path} (should not exist)`);
    else {
      rmSync(join(root, path));
      console.log(`removed ${path}`);
    }
  }
}

// --- Skills sanity check (Agent Skills spec: directory name must equal frontmatter name) ---
const problems = [];
for (const p of plugins) {
  const file = `src/skills/${p.name}/SKILL.md`;
  if (!existsSync(join(root, file))) {
    problems.push(`${file} is missing`);
    continue;
  }
  const front = read(file).match(/^---\n([\s\S]*?)\n---/);
  const name = front?.[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = front?.[1].match(/^description:\s*"?(.+?)"?$/m)?.[1].trim();
  if (name !== p.name) problems.push(`${file}: name "${name}" must equal "${p.name}"`);
  if (!description) problems.push(`${file}: description is required`);
  else if (description.length > 1024) problems.push(`${file}: description exceeds 1024 characters`);
  if (!read(file).includes("{{core}}")) problems.push(`${file}: must include the {{core}} marker`);
}

if (stale.length) console.error(`Out of date (run \`npm run generate\`):\n  ${stale.join("\n  ")}`);
if (problems.length) console.error(`Skill problems:\n  ${problems.join("\n  ")}`);
if (stale.length || problems.length) process.exit(1);
console.log(check ? "All generated files are up to date." : `Done. ${header}`);
