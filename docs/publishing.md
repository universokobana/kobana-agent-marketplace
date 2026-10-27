# Publishing

How a release of this repository reaches each directory. Internal maintainer notes (English only).

## Repositories

The private repository is the source of truth: `main` there is mirrored to the public repository by `.github/workflows/mirror.yml` (fast-forward only, same history). The claude.ai organization marketplace syncs from the private repository, because it only accepts private or internal repositories.

Pull requests and issues from the community arrive on the public repository. To merge a pull request: `git fetch public pull/<N>/head:pr-<N>`, merge it into `main`, push to `origin` and the mirror publishes it. Never push directly to the public `main`: the mirror would fail until both are equal again.

## Release

1. Bump `version` in `catalog.json`.
2. `npm run generate && npm run check`.
3. Update `CHANGELOG.md`.
4. Commit, tag `vX.Y.Z` and create a GitHub release.

Git-based marketplaces (Claude Code, Codex, Cursor, VS Code / Copilot, Gemini CLI) pick up the new version from the repository; users run their client's update command.

## Directories

| Where | What to submit | Notes |
|---|---|---|
| Claude Code | Nothing, the repo is the marketplace (`.claude-plugin/marketplace.json`) | Optionally submit to Anthropic's official plugin directory |
| Claude connectors directory | Each remote MCP server | Submitted through Anthropic's connector review form; requires OAuth, privacy policy and tool annotations |
| ChatGPT Apps Directory | Each remote MCP server as an app | Curated by OpenAI; until approved, users add servers in developer mode |
| OpenAI Codex | Nothing, the repo is the marketplace (`.agents/plugins/marketplace.json`) | Submit to the Codex plugin directory when available |
| Cursor | `.cursor-plugin/marketplace.json` + `plugins/<plugin>/.cursor-plugin/plugin.json` | Cursor Marketplace is reviewed manually and requires open source; also list on cursor.directory |
| VS Code / GitHub Copilot | Root of each `plugins/<plugin>` (Agent Plugins 1.0 `plugin.json`) | Installed from the repo via `chat.plugins.marketplaces` |
| Gemini CLI / Antigravity | `gemini-extension.json` at repo root | Add the `gemini-cli-extension` topic to the GitHub repo to appear in the extensions gallery |
| Official MCP Registry | `registry/<server>/server.json` | See below; the GitHub MCP Registry uses it as a source |

## Official MCP Registry

Server names use the `br.com.kobana/*` namespace, which requires proving control of `kobana.com.br` via DNS.

```bash
# Install the publisher CLI (see https://github.com/modelcontextprotocol/registry)
brew install mcp-publisher

# One-time: create the DNS TXT record printed by this command, then log in
mcp-publisher login dns --domain kobana.com.br --private-key <ed25519-private-key-hex>

# Publish each server
for d in registry/*/; do (cd "$d" && mcp-publisher publish); done
```

If DNS verification is not an option, switch `registryName` in `catalog.json` to `io.github.universokobana/<server>` and log in with `mcp-publisher login github`.

## MCPB (Claude Desktop bundles)

MCPB packages local servers. Kobana's servers are remote, so no `.mcpb` bundle is needed: Claude Desktop users add a custom connector instead (see `install/claude-ai.md`).
