# Instale a Kobana no seu cliente de IA

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

Cada produto Kobana tem um servidor MCP remoto. A maioria dos clientes se conecta só com a URL e um login na Kobana (OAuth). Os clientes marcados com **Plugin** também podem instalar plugins Kobana deste marketplace: um por produto (`kobana-banking`, `kobana-billing`, `kobana-finance`, `kobana-dunning`, `kobana-dashboards`), cada um com o seu servidor MCP e a sua skill. Instale só os produtos que você usa.

| Cliente | Tipo | Como | Autenticação | Guia |
|---|---|---|---|---|
| Claude (web, desktop, mobile) | Chat | Conector personalizado | OAuth | [claude-ai](claude-ai.pt-BR.md) |
| Claude Code | Agente de código | **Plugin** ou `claude mcp add` | OAuth | [claude-code](claude-code.pt-BR.md) |
| ChatGPT | Chat | App personalizado (modo desenvolvedor) | OAuth | [chatgpt](chatgpt.pt-BR.md) |
| OpenAI Codex | Agente de código | **Plugin** ou `codex mcp add` | OAuth / token | [codex](codex.pt-BR.md) |
| Cursor | IDE | **Plugin**, link de um clique ou `mcp.json` | OAuth / token | [cursor](cursor.pt-BR.md) |
| VS Code + GitHub Copilot | IDE | **Agent plugin** ou `mcp.json` | OAuth / token | [vscode-copilot](vscode-copilot.pt-BR.md) |
| GitHub Copilot CLI | Agente de código | **Plugin** ou `/mcp add` | OAuth / token | [copilot-cli](copilot-cli.pt-BR.md) |
| Gemini CLI | Agente de código | **Extensão** ou `settings.json` | OAuth / token | [gemini-cli](gemini-cli.pt-BR.md) |
| Google Antigravity | IDE / CLI | `mcp_config.json` / extensão | OAuth / token | [antigravity](antigravity.pt-BR.md) |
| Manus | Agente autônomo | Conector MCP personalizado | Token / OAuth | [manus](manus.pt-BR.md) |
| Perplexity | Chat | Conector personalizado / MCP local no Mac | OAuth / token | [perplexity](perplexity.pt-BR.md) |
| Mistral Le Chat | Chat | Conector MCP personalizado | OAuth / token | [le-chat](le-chat.pt-BR.md) |
| Microsoft Copilot Studio | Construtor de agentes | Ferramenta MCP | OAuth / chave de API | [copilot-studio](copilot-studio.pt-BR.md) |
| Windsurf | IDE | `mcp_config.json` | OAuth / token | [windsurf](windsurf.pt-BR.md) |
| Cline | Extensão de IDE | Servidor remoto | OAuth / token | [cline](cline.pt-BR.md) |
| Roo Code | Extensão de IDE | `mcp.json` | Token | [roo-code](roo-code.pt-BR.md) |
| Continue | Extensão de IDE | Bloco YAML | Token | [continue](continue.pt-BR.md) |
| Zed | IDE | `context_servers` | OAuth / token | [zed](zed.pt-BR.md) |
| JetBrains AI Assistant / Junie | IDE | Configurações de MCP | Token / `mcp-remote` | [jetbrains](jetbrains.pt-BR.md) |
| Kiro | IDE / CLI | `mcp.json` | OAuth / token | [kiro](kiro.pt-BR.md) |
| Amazon Q Developer | IDE / CLI | `mcp.json` | OAuth / token | [amazon-q](amazon-q.pt-BR.md) |
| Goose | Agente desktop / CLI | Extensão remota | OAuth / token | [goose](goose.pt-BR.md) |
| OpenCode | Agente de código | `opencode.json` | OAuth / token | [opencode](opencode.pt-BR.md) |
| Warp | Terminal | Servidores MCP | OAuth / token | [warp](warp.pt-BR.md) |
| LM Studio | Modelos locais | `mcp.json` | Token / `mcp-remote` | [lm-studio](lm-studio.pt-BR.md) |
| Raycast | Launcher | Extensão MCP | `mcp-remote` | [raycast](raycast.pt-BR.md) |
| n8n | Automação | MCP Client Tool | Token / OAuth2 | [n8n](n8n.pt-BR.md) |
| SDKs da Anthropic, da OpenAI e de agentes | Código | Conector MCP / ferramenta MCP remota | Token | [apis-and-sdks](apis-and-sdks.pt-BR.md) |
| Qualquer outro | — | Valores genéricos | OAuth / token | [other-clients](other-clients.pt-BR.md) |

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
