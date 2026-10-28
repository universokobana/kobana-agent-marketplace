# Instala Kobana en tu cliente de IA

[🇺🇸 English](../en-US/README.md) · [🇧🇷 Português](../pt-BR/README.md) · **🇪🇸 Español**

Cada producto Kobana tiene un servidor MCP remoto. La mayoría de los clientes se conecta solo con la URL y un login de Kobana (OAuth). Los clientes marcados como **Plugin** también pueden instalar plugins de Kobana desde este marketplace: uno por producto (`kobana-banking`, `kobana-billing`, `kobana-finance`, `kobana-dunning`, `kobana-dashboards`, `kobana-inbox`), cada uno con su servidor MCP y su skill. Instala solo los productos que usas.

Fuera del Gateway Bancario, los clientes OAuth registrados dinámicamente (Claude, ChatGPT) reciben acceso de solo lectura; para escribir, usa un token personal.

| Cliente | Tipo | Cómo | Autenticación | Guía |
|---|---|---|---|---|
| Claude (web, escritorio, móvil) | Chat | Conector personalizado | OAuth | [claude-ai](claude-ai.md) |
| Claude Code | Agente de código | **Plugin** o `claude mcp add` | OAuth | [claude-code](claude-code.md) |
| ChatGPT | Chat | App personalizada (modo desarrollador) | OAuth | [chatgpt](chatgpt.md) |
| OpenAI Codex | Agente de código | **Plugin** o `codex mcp add` | OAuth / token | [codex](codex.md) |
| Cursor | IDE | **Plugin**, enlace de un clic o `mcp.json` | OAuth / token | [cursor](cursor.md) |
| VS Code + GitHub Copilot | IDE | **Agent plugin** o `mcp.json` | OAuth / token | [vscode-copilot](vscode-copilot.md) |
| GitHub Copilot CLI | Agente de código | **Plugin** o `/mcp add` | OAuth / token | [copilot-cli](copilot-cli.md) |
| Gemini CLI | Agente de código | **Extensión** o `settings.json` | OAuth / token | [gemini-cli](gemini-cli.md) |
| Google Antigravity | IDE / CLI | `mcp_config.json` / extensión | OAuth / token | [antigravity](antigravity.md) |
| Manus | Agente autónomo | Conector MCP personalizado | Token / OAuth | [manus](manus.md) |
| Perplexity | Chat | Conector personalizado / MCP local en Mac | OAuth / token | [perplexity](perplexity.md) |
| Mistral Le Chat | Chat | Conector MCP personalizado | OAuth / token | [le-chat](le-chat.md) |
| Microsoft Copilot Studio | Constructor de agentes | Herramienta MCP | OAuth / API key | [copilot-studio](copilot-studio.md) |
| Windsurf | IDE | `mcp_config.json` | OAuth / token | [windsurf](windsurf.md) |
| Cline | Extensión de IDE | Servidor remoto | OAuth / token | [cline](cline.md) |
| Roo Code | Extensión de IDE | `mcp.json` | Token | [roo-code](roo-code.md) |
| Continue | Extensión de IDE | Bloque YAML | Token | [continue](continue.md) |
| Zed | IDE | `context_servers` | OAuth / token | [zed](zed.md) |
| JetBrains AI Assistant / Junie | IDE | Configuración MCP | Token / `mcp-remote` | [jetbrains](jetbrains.md) |
| Kiro | IDE / CLI | `mcp.json` | OAuth / token | [kiro](kiro.md) |
| Amazon Q Developer | IDE / CLI | `mcp.json` | OAuth / token | [amazon-q](amazon-q.md) |
| Goose | Agente de escritorio / CLI | Extensión remota | OAuth / token | [goose](goose.md) |
| OpenCode | Agente de código | `opencode.json` | OAuth / token | [opencode](opencode.md) |
| Warp | Terminal | Servidores MCP | OAuth / token | [warp](warp.md) |
| LM Studio | Modelos locales | `mcp.json` | Token / `mcp-remote` | [lm-studio](lm-studio.md) |
| Raycast | Lanzador | Extensión MCP | `mcp-remote` | [raycast](raycast.md) |
| Slack (Slackbot) | Chat | Apps oficiales de Kobana (próximamente) | OAuth | [slack](slack.md) |
| n8n | Automatización | MCP Client Tool | Token / OAuth2 | [n8n](n8n.md) |
| Anthropic, OpenAI y SDKs de agentes | Código | Conector MCP / herramienta MCP remota | Token | [apis-and-sdks](apis-and-sdks.md) |
| Cualquier otro | — | Valores genéricos | OAuth / token | [other-clients](other-clients.md) |

## Servidores

| Producto | Nombre | URL |
|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |
| Inbox Autónomo | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

Solo el Gateway Bancario tiene sandbox, con cuentas y tokens propios. En Inbox Autónomo, si tu cuenta tiene más de un workspace, elígelo en la conexión con el header `X-Workspace-Id`.

> Los menús de los clientes cambian con frecuencia. Si un paso no coincide con lo que ves, busca **MCP**, **Conectores** (Connectors), **Herramientas** (Tools) o **Extensiones** (Extensions) en la configuración del cliente y abre un issue para que actualicemos la guía.
