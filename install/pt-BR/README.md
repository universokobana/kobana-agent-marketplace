# Instale a Kobana no seu cliente de IA

[🇺🇸 English](../en-US/README.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/README.md)

Cada produto Kobana tem um servidor MCP remoto. A maioria dos clientes se conecta só com a URL e um login na Kobana (OAuth). Os clientes marcados com **Plugin** também podem instalar plugins Kobana deste marketplace: um por produto (`kobana-banking`, `kobana-billing`, `kobana-finance`, `kobana-dunning`, `kobana-dashboards`), cada um com o seu servidor MCP e a sua skill. Instale só os produtos que você usa.

| Cliente | Tipo | Como | Autenticação | Guia |
|---|---|---|---|---|
| Claude (web, desktop, mobile) | Chat | Conector personalizado | OAuth | [claude-ai](claude-ai.md) |
| Claude Code | Agente de código | **Plugin** ou `claude mcp add` | OAuth | [claude-code](claude-code.md) |
| ChatGPT | Chat | App personalizado (modo desenvolvedor) | OAuth | [chatgpt](chatgpt.md) |
| OpenAI Codex | Agente de código | **Plugin** ou `codex mcp add` | OAuth / token | [codex](codex.md) |
| Cursor | IDE | **Plugin**, link de um clique ou `mcp.json` | OAuth / token | [cursor](cursor.md) |
| VS Code + GitHub Copilot | IDE | **Agent plugin** ou `mcp.json` | OAuth / token | [vscode-copilot](vscode-copilot.md) |
| GitHub Copilot CLI | Agente de código | **Plugin** ou `/mcp add` | OAuth / token | [copilot-cli](copilot-cli.md) |
| Gemini CLI | Agente de código | **Extensão** ou `settings.json` | OAuth / token | [gemini-cli](gemini-cli.md) |
| Google Antigravity | IDE / CLI | `mcp_config.json` / extensão | OAuth / token | [antigravity](antigravity.md) |
| Manus | Agente autônomo | Conector MCP personalizado | Token / OAuth | [manus](manus.md) |
| Perplexity | Chat | Conector personalizado / MCP local no Mac | OAuth / token | [perplexity](perplexity.md) |
| Mistral Le Chat | Chat | Conector MCP personalizado | OAuth / token | [le-chat](le-chat.md) |
| Microsoft Copilot Studio | Construtor de agentes | Ferramenta MCP | OAuth / chave de API | [copilot-studio](copilot-studio.md) |
| Windsurf | IDE | `mcp_config.json` | OAuth / token | [windsurf](windsurf.md) |
| Cline | Extensão de IDE | Servidor remoto | OAuth / token | [cline](cline.md) |
| Roo Code | Extensão de IDE | `mcp.json` | Token | [roo-code](roo-code.md) |
| Continue | Extensão de IDE | Bloco YAML | Token | [continue](continue.md) |
| Zed | IDE | `context_servers` | OAuth / token | [zed](zed.md) |
| JetBrains AI Assistant / Junie | IDE | Configurações de MCP | Token / `mcp-remote` | [jetbrains](jetbrains.md) |
| Kiro | IDE / CLI | `mcp.json` | OAuth / token | [kiro](kiro.md) |
| Amazon Q Developer | IDE / CLI | `mcp.json` | OAuth / token | [amazon-q](amazon-q.md) |
| Goose | Agente desktop / CLI | Extensão remota | OAuth / token | [goose](goose.md) |
| OpenCode | Agente de código | `opencode.json` | OAuth / token | [opencode](opencode.md) |
| Warp | Terminal | Servidores MCP | OAuth / token | [warp](warp.md) |
| LM Studio | Modelos locais | `mcp.json` | Token / `mcp-remote` | [lm-studio](lm-studio.md) |
| Raycast | Launcher | Extensão MCP | `mcp-remote` | [raycast](raycast.md) |
| Slack (Slackbot) | Chat | Apps oficiais da Kobana | OAuth | [slack](slack.md) |
| n8n | Automação | MCP Client Tool | Token / OAuth2 | [n8n](n8n.md) |
| SDKs da Anthropic, da OpenAI e de agentes | Código | Conector MCP / ferramenta MCP remota | Token | [apis-and-sdks](apis-and-sdks.md) |
| Qualquer outro | — | Valores genéricos | OAuth / token | [other-clients](other-clients.md) |

## Servidores

| Produto | Nome | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

> Os menus dos clientes mudam com frequência. Se algum passo não bater com o que você vê, procure por **MCP**, **Conectores** (Connectors), **Ferramentas** (Tools) ou **Extensões** (Extensions) nas configurações do cliente e abra uma issue para atualizarmos o guia.
