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
// "Kobana - Banking Gateway / Gateway Bancário": English and Portuguese product names, without repeats.
// Spanish is left out because claude.ai rejects display names longer than 64 characters.
const pluginTitle = (p) => `Kobana - ${[...new Set([p.i18n.en.product, p.i18n["pt-BR"].product])].join(" / ")}`;

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

// --- Per-plugin README in each language (the plugin directory shows it as the listing description) ---
// Links are absolute: the directory receives only the plugin folder, so repository-relative links would break there.
const repoUrl = (path) => `${mkt.repository}/blob/main/${path}`;
const treeUrl = (path) => `${mkt.repository}/tree/main/${path}`;
const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);
// GitHub heading anchors: lowercase, drop punctuation, spaces become hyphens
const anchor = (heading) =>
  "#" + heading.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").trim().replace(/\s/g, "-");
const readmeText = {
  en: {
    file: "README.md",
    title: (t) => `Kobana ${t.product}`,
    intro: (t, site) =>
      `The official [Kobana](${site}) plugin for **${t.product}**. Connect Claude, or any other AI agent, to your Kobana account and work with ${lower(t.summary).replace(/\.$/, "")} by conversation, always with your own permissions.`,
    highlights: [
      "**Nothing to install on your side.** The plugin connects to Kobana's remote MCP server. You sign in to Kobana and authorize.",
      "**Your permissions, not more.** OAuth 2.1, scopes per resource and the dashboard permissions of whoever authorized, re-checked on every call.",
      "**A skill that knows the product.** It teaches the agent the product's workflows and asks for confirmation before anything that moves money or deletes data.",
    ],
    contents: "Contents",
    about: (t) => `About ${t.product}`,
    ask: "Try asking",
    install: "Install",
    installText:
      "On claude.ai and in Cowork, add the plugin from the directory. In Claude Code, add the marketplace once and install the plugin:",
    other: (url) => `For ChatGPT, Codex, Cursor, Copilot, Gemini and 20+ other clients, see the [install guides](${url}).`,
    guides: "install/en-US/README.md",
    servers: "MCP servers",
    cols: "| Server | URL |",
    sandbox: "sandbox, data isolated from production",
    auth: "Authentication is OAuth 2.1 with PKCE: on first use, your client opens the Kobana login. There is no client secret.",
    security: "Security by design",
    report: (security, whiteHat) =>
      `To report a vulnerability, see the [security policy](${security}) and our [White Hat Policy](${whiteHat}).`,
    securityFile: "SECURITY.md",
    others: "Other Kobana plugins",
    links: "Links",
    labels: { site: "Website", docs: "Documentation", api: "API", mcp: "MCP", cli: "CLI", privacy: "Privacy", terms: "Terms of use" },
    license: "License",
    licenseText: (url) => `[MIT](${url}). Kobana and the Kobana logo are trademarks of Kobana.`,
    generated: "This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.",
    switcher: "**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)",
  },
  "pt-BR": {
    file: "README.pt-BR.md",
    title: (t) => `Kobana ${t.product}`,
    intro: (t, site) =>
      `O plugin oficial da [Kobana](${site}) para o produto **${t.product}**. Conecte o Claude, ou qualquer outro agente de IA, à sua conta Kobana e trabalhe com ${lower(t.summary).replace(/\.$/, "")} conversando, sempre com as suas próprias permissões.`,
    highlights: [
      "**Nada para instalar do seu lado.** O plugin se conecta ao servidor MCP remoto da Kobana. Você entra na Kobana e autoriza.",
      "**As suas permissões, nada além.** OAuth 2.1, escopos por recurso e as permissões de dashboard de quem autorizou, verificadas de novo a cada chamada.",
      "**Uma skill que conhece o produto.** Ela ensina ao agente os fluxos do produto e pede confirmação antes de qualquer ação que movimente dinheiro ou apague dados.",
    ],
    contents: "Conteúdo",
    about: (t) => `Sobre o produto ${t.product}`,
    ask: "Experimente perguntar",
    install: "Instalação",
    installText:
      "No claude.ai e no Cowork, adicione o plugin pelo diretório. No Claude Code, adicione o marketplace uma vez e instale o plugin:",
    other: (url) => `Para ChatGPT, Codex, Cursor, Copilot, Gemini e mais de 20 outros clientes, veja os [guias de instalação](${url}).`,
    guides: "install/pt-BR/README.md",
    servers: "Servidores MCP",
    cols: "| Servidor | URL |",
    sandbox: "sandbox, dados separados da produção",
    auth: "A autenticação é OAuth 2.1 com PKCE: no primeiro uso, o cliente abre o login da Kobana. Não há client secret.",
    security: "Segurança desde o projeto",
    report: (security, whiteHat) =>
      `Para reportar uma vulnerabilidade, veja a [política de segurança](${security}) e a nossa [Política White Hat](${whiteHat}).`,
    securityFile: "i18n/SECURITY.pt-BR.md",
    others: "Outros plugins da Kobana",
    links: "Links",
    labels: { site: "Site", docs: "Documentação", api: "API", mcp: "MCP", cli: "CLI", privacy: "Privacidade", terms: "Termos de uso" },
    license: "Licença",
    licenseText: (url) => `[MIT](${url}). Kobana e o logo da Kobana são marcas da Kobana.`,
    generated: "Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.",
    switcher: "[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)",
  },
  es: {
    file: "README.es.md",
    title: (t) => `Kobana ${t.product}`,
    intro: (t, site) =>
      `El plugin oficial de [Kobana](${site}) para **${t.product}**. Conecta Claude, o cualquier otro agente de IA, a tu cuenta Kobana y trabaja con ${lower(t.summary).replace(/\.$/, "")} conversando, siempre con tus propios permisos.`,
    highlights: [
      "**Nada que instalar de tu lado.** El plugin se conecta al servidor MCP remoto de Kobana. Inicias sesión en Kobana y autorizas.",
      "**Tus permisos, nada más.** OAuth 2.1, alcances por recurso y los permisos del panel de quien autorizó, verificados de nuevo en cada llamada.",
      "**Una skill que conoce el producto.** Le enseña al agente los flujos del producto y pide confirmación antes de cualquier acción que mueva dinero o borre datos.",
    ],
    contents: "Contenido",
    about: (t) => `Acerca de ${t.product}`,
    ask: "Prueba a preguntar",
    install: "Instalación",
    installText:
      "En claude.ai y en Cowork, agrega el plugin desde el directorio. En Claude Code, agrega el marketplace una vez e instala el plugin:",
    other: (url) => `Para ChatGPT, Codex, Cursor, Copilot, Gemini y más de 20 clientes, consulta las [guías de instalación](${url}).`,
    guides: "install/es/README.md",
    servers: "Servidores MCP",
    cols: "| Servidor | URL |",
    sandbox: "sandbox, datos aislados de producción",
    auth: "La autenticación es OAuth 2.1 con PKCE: en el primer uso, tu cliente abre el inicio de sesión de Kobana. No hay client secret.",
    security: "Seguridad desde el diseño",
    report: (security, whiteHat) =>
      `Para reportar una vulnerabilidad, consulta la [política de seguridad](${security}) y nuestra [Política White Hat](${whiteHat}).`,
    securityFile: "i18n/SECURITY.es.md",
    others: "Otros plugins de Kobana",
    links: "Enlaces",
    labels: { site: "Sitio web", docs: "Documentación", api: "API", mcp: "MCP", cli: "CLI", privacy: "Privacidad", terms: "Términos de uso" },
    license: "Licencia",
    licenseText: (url) => `[MIT](${url}). Kobana y el logo de Kobana son marcas de Kobana.`,
    generated: "Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.",
    switcher: "[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**",
  },
};
const sitePages = {
  home: { en: "https://www.kobana.com.br/en", "pt-BR": "https://www.kobana.com.br", es: "https://www.kobana.com.br/es" },
  privacy: { en: shared.privacyPolicy, "pt-BR": "https://www.kobana.com.br/privacidade", es: "https://www.kobana.com.br/es/privacidad" },
  terms: { en: shared.termsOfService, "pt-BR": "https://www.kobana.com.br/termos", es: "https://www.kobana.com.br/es/terminos" },
  whiteHat: { en: "https://www.kobana.com.br/en/white-hat", "pt-BR": "https://www.kobana.com.br/white-hat", es: "https://www.kobana.com.br/es/white-hat" },
};

for (const p of plugins) {
  const dir = `plugins/${p.name}`;
  const displayName = pluginTitle(p);
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

  // Claude Code (also read by Codex). The plugin directory reads its listing links from here; claude.ai marketplace
  // sync does not know these directory listing fields and strips them with a warning. The icon is found at assets/icon.png without a key.
  files[`${dir}/.claude-plugin/plugin.json`] = {
    ...meta,
    displayName,
    documentationUrl: `${p.docs.base}/en/mcp/overview/introduction`,
    supportUrl: `${mkt.repository}/blob/main/SUPPORT.md`,
    privacyPolicyUrl: shared.privacyPolicy,
    termsOfServiceUrl: shared.termsOfService,
  };
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
  binaries[`${dir}/assets/kobana-logo-light.png`] = "assets/brand/kobana-logo-light-small.png";
  binaries[`${dir}/assets/kobana-logo-dark.png`] = "assets/brand/kobana-logo-dark-small.png";

  // README in three languages
  for (const [lang, t] of Object.entries(readmeText)) {
    const l = p.i18n[lang];
    const docs = `${p.docs.base}/${lang === "pt-BR" ? "pt" : lang}`;
    const links = [
      ["site", p.pages[lang]],
      ["docs", docs],
      ["api", `${docs}/api/overview`],
      ["mcp", `${docs}/mcp/overview/introduction`],
      ["cli", p.docs.cli ? `${docs}/cli/overview/introduction` : shared.developerPages[lang]],
      ["privacy", sitePages.privacy[lang]],
      ["terms", sitePages.terms[lang]],
    ];
    const serverRows = p.servers
      .map((s) => `| \`${s.id}\`${s.sandbox ? ` (${t.sandbox})` : ""} | \`${s.url}\` |`)
      .join("\n");
    const others = plugins
      .filter((o) => o !== p)
      .map((o) => `- **[${o.i18n[lang].product}](${treeUrl(`plugins/${o.name}`)})** (\`${o.name}\`): ${o.i18n[lang].summary}`)
      .join("\n");
    const sections = [t.about(l), t.ask, t.install, t.servers, t.security, t.others, t.links, t.license];
    files[`${dir}/${t.file}`] = [
      `<!-- ${header} -->`,
      // Markdown images (the directory accepts only Markdown syntax for bundled images); the fragments pick the
      // logo for GitHub's light or dark theme
      "![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)\n![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)",
      `# ${t.title(l)}`,
      t.switcher,
      t.intro(l, sitePages.home[lang]),
      `> ${shared.i18n[lang].tagline}`,
      t.highlights.map((h) => `- ${h}`).join("\n"),
      `## ${t.contents}`,
      sections.map((h) => `- [${h}](${anchor(h)})`).join("\n"),
      `## ${t.about(l)}`,
      l.about,
      `## ${t.ask}`,
      l.prompts.map((q) => `- "${q}"`).join("\n"),
      `## ${t.install}`,
      t.installText,
      "```text\n" + `/plugin marketplace add universokobana/${mkt.name}\n${installCommand(p)}` + "\n```",
      t.other(repoUrl(t.guides)),
      `## ${t.servers}`,
      `${t.cols}\n|---|---|\n${serverRows}`,
      t.auth,
      `## ${t.security}`,
      shared.i18n[lang].security.join("\n"),
      t.report(repoUrl(t.securityFile), sitePages.whiteHat[lang]),
      `## ${t.others}`,
      others,
      `## ${t.links}`,
      links.map(([key, url]) => `- **${t.labels[key]}**: ${url}`).join("\n"),
      `## ${t.license}`,
      t.licenseText(repoUrl("LICENSE")),
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
    displayName: pluginTitle(p),
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

for (const p of plugins) {
  const title = pluginTitle(p);
  if (title.length > 64) problems.push(`${p.name}: display name "${title}" exceeds 64 characters (claude.ai limit)`);
}

if (stale.length) console.error(`Out of date (run \`npm run generate\`):\n  ${stale.join("\n  ")}`);
if (problems.length) console.error(`Skill problems:\n  ${problems.join("\n  ")}`);
if (stale.length || problems.length) process.exit(1);
console.log(check ? "All generated files are up to date." : `Done. ${header}`);
