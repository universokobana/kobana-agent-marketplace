# Changelog

All notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/universokobana/kobana-agent-marketplace/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/universokobana/kobana-agent-marketplace/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/universokobana/kobana-agent-marketplace/releases/tag/v1.0.0
