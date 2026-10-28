# Changelog

All notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2026-10-28

### Added

- `kobana-inbox` plugin for Autonomous Inbox (`https://mcp.inbox.kobana.com.br`): inboxes, e-mails, AI agents, agent runs and webhooks.
- Skills for Dunning and Magic Dashboard pick the workspace first, with `dunning_workspaces_list` and `dashboards_workspaces_list`.
- Release tags (`vX.Y.Z`) for every version, published to the public repository.

### Changed

- Outside Banking Gateway, OAuth clients that register themselves (Claude, ChatGPT) only read. The skills, plugin READMEs and install guides now say so and point to a personal token for writes.
- The "start in the sandbox" advice only appears where there is a sandbox server: Banking Gateway.
- `X-Account-Uid` is documented for Banking Gateway only.
- Documentation links in English and Spanish point to the documentation in the same language.
- Skill frontmatter carries the release version.

### Fixed

- `npm run generate` on Windows no longer removes the files it has just written.
- VS Code team setup uses `.github/copilot/settings.json` instead of `.vscode/settings.json`.

## [2.0.8] - 2026-10-26

### Added

- Slack install guide in English, Portuguese and Spanish: install Kobana's official Slack apps, connect your Kobana account and use Kobana in Slackbot.

### Changed

- Install guides are organized in one folder per language: `install/en-US/`, `install/pt-BR/` and `install/es/`, with the same file name in each.

## [2.0.7] - 2026-10-26

### Added

- The Kobana logo at the top of every plugin README, bundled in the plugin folder as 280 px images, black for light themes and white for dark themes on GitHub.

## [2.0.6] - 2026-10-26

### Changed

- Plugin READMEs, shown as the plugin directory listing, now follow the main README in each language: introduction, highlights, contents, product description, example questions, install, MCP servers, security, other Kobana plugins, links and license. Links are absolute, because the directory receives only the plugin folder.
- The main READMEs have a links section with the website, documentation, API, MCP and CLI of every product, plus Kobana's general pages.

## [2.0.5] - 2026-10-26

### Added

- Plugin READMEs have a links section in each language: website, documentation, API, MCP, CLI, privacy and terms of use. Dunning has no CLI docs yet, so it links to the Kobana CLI page.
- The Claude plugin manifests declare `documentationUrl` (the product's MCP docs in English), `supportUrl` (SUPPORT.md) and `termsOfServiceUrl` for the plugin directory listing.

## [2.0.4] - 2026-10-26

### Changed

- The Claude plugin manifests declare `privacyPolicyUrl` again, because the plugin directory reads the privacy policy from there. The claude.ai marketplace sync does not know this field and shows a warning that it was ignored; the sync still works.

## [2.0.3] - 2026-10-26

### Fixed

- Skills no longer include the `curl` connection test that sent `$MCP_TOKEN` to the MCP server. The plugin directory flagged it as reading a credential from the user's machine. The test stays in the install guides and the developer guide, and the skills now tell the agent never to ask for a token in the conversation.

## [2.0.2] - 2026-10-26

### Fixed

- Plugin display names use English and Portuguese only, for example "Kobana - Automatic Billing / Faturamento Automático", because claude.ai rejects names longer than 64 characters. The generator now checks this limit.

## [2.0.1] - 2026-10-26

### Changed

- Plugins have readable names in the three languages, with a `displayName` built from the product name in each language.
- The Claude plugin manifests no longer declare `icon` and `privacyPolicyUrl`, which the claude.ai marketplace sync ignores with a warning. The icon is read from `assets/icon.png`, and each plugin README links the privacy policy in its language.
- The Kobana logo appears at the top of the READMEs.

## [2.0.0] - 2026-10-26

### Changed

- **Breaking:** the single `kobana` plugin is replaced by one plugin per product: `kobana-banking` (with the sandbox server), `kobana-billing`, `kobana-finance`, `kobana-dunning` and `kobana-dashboards`. Install only the products you use, for example `/plugin install kobana-finance@kobana-agent-marketplace`. Uninstall `kobana` before installing the new plugins.
- The `kobana` router skill is gone. Its rules (authentication, permissions, safety and formatting) are now part of every product skill, generated from `src/shared/core.md`.
- Skills are also published without a plugin in `skills/`. The Gemini CLI extension keeps every product in one extension and now bundles the skills.
- Translations of the community files moved to `i18n/`, so GitHub shows the English versions by default.
- Links to the Kobana website point to the page in the document's language, and the security policy links to the White Hat Policy in each language.

## [1.0.0] - 2026-10-26

### Added

- Kobana plugin with the six official remote MCP servers: Banking Gateway (production and sandbox), Automatic Billing, Smart Finance, Dunning and Magic Dashboard.
- Agent Skills: `kobana`, `kobana-banking`, `kobana-billing`, `kobana-finance`, `kobana-dunning` and `kobana-dashboards`.
- Manifests for Agent Plugins 1.0, Claude Code, OpenAI Codex, Cursor, Gemini CLI and the official MCP Registry, generated from `catalog.json`.
- Install guides for 29 clients in English, Portuguese and Spanish.

[Unreleased]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.8...v2.1.0
[2.0.8]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.7...v2.0.8
[2.0.7]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.6...v2.0.7
[2.0.6]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/universokobana/kobana-agent-marketplace/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/universokobana/kobana-agent-marketplace/releases/tag/v1.0.0
