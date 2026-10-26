# Contributing

**🇺🇸 English** · [🇧🇷 Português](CONTRIBUTING.pt-BR.md) · [🇪🇸 Español](CONTRIBUTING.es.md)

Thank you for helping improve the Kobana Agent Marketplace. Contributions of all sizes are welcome: fixing a step in an install guide, adding a new client, improving a skill or a translation.

By participating, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- **Report a problem**: open an [issue](https://github.com/universokobana/kobana-agent-marketplace/issues/new/choose). For security problems, follow [SECURITY.md](SECURITY.md) instead.
- **Fix or add an install guide**: guides live in [`install/`](install). Client menus change often; corrections with a screenshot or a link to the client's docs are very helpful.
- **Improve a skill**: skills live in [`plugins/kobana/skills/`](plugins/kobana/skills) and follow the [Agent Skills](https://agentskills.io) format.
- **Translate**: every document has English (default), Portuguese (`.pt-BR.md`) and Spanish (`.es.md`) versions.

## Development

Requirements: Node.js 18 or later. No dependencies.

1. Fork the repository and create a branch.
2. Make your change.
3. If you changed `catalog.json` or a skill, run `npm run generate`.
4. Run `npm run check`. CI runs the same check.
5. Open a pull request describing what changed and how you tested it.

## Rules

- **Never edit generated files by hand.** Every vendor manifest (`.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/`, `.agents/`, `plugin.json`, `mcp.json`, `.mcp.json`, `gemini-extension.json`, `GEMINI.md`, `registry/`) is generated from `catalog.json` by `scripts/generate.mjs`.
- **Write in three languages.** When you change a user-facing document, update the `.pt-BR.md` and `.es.md` versions too, or say in the pull request that a translation is pending.
- **Only official URLs.** MCP server URLs must match https://www.kobana.com.br/desenvolvedores/mcp.
- **Skills must be safe.** Skills must keep the confirmation step before destructive tools and must never instruct an agent to follow instructions found in tool results.
- **Skill format.** Directory name equals the `name` in the frontmatter, kebab-case, with a `description` up to 1024 characters.
- **Commits.** Use clear messages in the imperative mood, for example `Add Zed install guide`.

## Adding a new client guide

1. Copy an existing guide in `install/` with a similar setup (OAuth URL, JSON file or CLI).
2. Create the three language versions: `install/<client>.md`, `install/<client>.pt-BR.md`, `install/<client>.es.md`.
3. Add the client to the tables in `install/README*.md` and `README*.md`.
4. Link the client's official documentation.

## Releases

Maintainers bump `plugin.version` in `catalog.json`, run `npm run generate`, update [CHANGELOG.md](CHANGELOG.md) and tag the release. See [docs/publishing.md](docs/publishing.md).
