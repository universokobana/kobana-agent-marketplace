# Install Kobana in your AI client

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

Every Kobana product has a remote MCP server. Most clients connect with just the URL and a Kobana login (OAuth). Clients marked **Plugin** can also install Kobana plugins from this marketplace: one per product (`kobana-banking`, `kobana-billing`, `kobana-finance`, `kobana-dunning`, `kobana-dashboards`), each with its MCP server and skill. Install only the products you use.

| Client | Type | How | Auth | Guide |
|---|---|---|---|---|
| Claude (web, desktop, mobile) | Chat | Custom connector | OAuth | [claude-ai](claude-ai.md) |
| Claude Code | Coding agent | **Plugin** or `claude mcp add` | OAuth | [claude-code](claude-code.md) |
| ChatGPT | Chat | Custom app (developer mode) | OAuth | [chatgpt](chatgpt.md) |
| OpenAI Codex | Coding agent | **Plugin** or `codex mcp add` | OAuth / token | [codex](codex.md) |
| Cursor | IDE | **Plugin**, one-click link or `mcp.json` | OAuth / token | [cursor](cursor.md) |
| VS Code + GitHub Copilot | IDE | **Agent plugin** or `mcp.json` | OAuth / token | [vscode-copilot](vscode-copilot.md) |
| GitHub Copilot CLI | Coding agent | **Plugin** or `/mcp add` | OAuth / token | [copilot-cli](copilot-cli.md) |
| Gemini CLI | Coding agent | **Extension** or `settings.json` | OAuth / token | [gemini-cli](gemini-cli.md) |
| Google Antigravity | IDE / CLI | `mcp_config.json` / extension | OAuth / token | [antigravity](antigravity.md) |
| Manus | Autonomous agent | Custom MCP connector | Token / OAuth | [manus](manus.md) |
| Perplexity | Chat | Custom connector / Mac local MCP | OAuth / token | [perplexity](perplexity.md) |
| Mistral Le Chat | Chat | Custom MCP connector | OAuth / token | [le-chat](le-chat.md) |
| Microsoft Copilot Studio | Agent builder | MCP tool | OAuth / API key | [copilot-studio](copilot-studio.md) |
| Windsurf | IDE | `mcp_config.json` | OAuth / token | [windsurf](windsurf.md) |
| Cline | IDE extension | Remote server | OAuth / token | [cline](cline.md) |
| Roo Code | IDE extension | `mcp.json` | Token | [roo-code](roo-code.md) |
| Continue | IDE extension | YAML block | Token | [continue](continue.md) |
| Zed | IDE | `context_servers` | OAuth / token | [zed](zed.md) |
| JetBrains AI Assistant / Junie | IDE | MCP settings | Token / `mcp-remote` | [jetbrains](jetbrains.md) |
| Kiro | IDE / CLI | `mcp.json` | OAuth / token | [kiro](kiro.md) |
| Amazon Q Developer | IDE / CLI | `mcp.json` | OAuth / token | [amazon-q](amazon-q.md) |
| Goose | Desktop / CLI agent | Remote extension | OAuth / token | [goose](goose.md) |
| OpenCode | Coding agent | `opencode.json` | OAuth / token | [opencode](opencode.md) |
| Warp | Terminal | MCP servers | OAuth / token | [warp](warp.md) |
| LM Studio | Local models | `mcp.json` | Token / `mcp-remote` | [lm-studio](lm-studio.md) |
| Raycast | Launcher | MCP extension | `mcp-remote` | [raycast](raycast.md) |
| n8n | Automation | MCP Client Tool | Token / OAuth2 | [n8n](n8n.md) |
| Anthropic, OpenAI and agent SDKs | Code | MCP connector / remote MCP tool | Token | [apis-and-sdks](apis-and-sdks.md) |
| Anything else | — | Generic values | OAuth / token | [other-clients](other-clients.md) |

## Servers

| Product | Name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

> Client menus change often. If a step does not match what you see, look for **MCP**, **Connectors**, **Tools** or **Extensions** in the client settings, and open an issue so we can update the guide.
