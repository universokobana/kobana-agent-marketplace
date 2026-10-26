# Plugin Kobana

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial da Kobana para agentes de IA. Ele conecta o seu agente aos servidores MCP remotos da Kobana e adiciona skills que ensinam a operar o financeiro brasileiro com segurança.

## Instalação

No Claude Code:

```text
/plugin install kobana --marketplace universokobana/kobana-agent-marketplace
```

Para outros clientes, veja os [guias de instalação](../../install/README.pt-BR.md).

## Servidores MCP

| Servidor | Produto | URL |
|---|---|---|
| `kobana-banking` | Gateway Bancário | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` | Gateway Bancário (sandbox) | `https://mcp.banking.sandbox.kobana.com.br` |
| `kobana-billing` | Faturamento Automático | `https://mcp.billing.kobana.com.br` |
| `kobana-finance` | Financeiro Inteligente | `https://mcp.finance.kobana.com.br` |
| `kobana-dunning` | Régua de Cobrança | `https://mcp.dunning.kobana.com.br` |
| `kobana-dashboards` | Dashboard Mágico | `https://mcp.dashboards.kobana.com.br` |

A autenticação é OAuth 2.1: no primeiro uso, o seu cliente abre o login da Kobana. Os servidores em que você nunca se autentica ficam inativos.

## Skills

| Skill | Use para |
|---|---|
| `kobana` | Escolher o servidor certo, permissões e regras de segurança |
| `kobana-banking` | Boletos, Pix, pagamentos, transferências, contas e extratos |
| `kobana-billing` | Clientes, planos, assinaturas, faturas e NFS-e |
| `kobana-finance` | Workspaces, contas a pagar, contas a receber, conciliação e fluxo de caixa |
| `kobana-dunning` | Cobranças vencidas, réguas de cobrança, acordos e contestações |
| `kobana-dashboards` | Usuários do portal, equipe e organização |

## Arquivos

| Arquivo | Lido por |
|---|---|
| `plugin.json`, `mcp.json` | Clientes Agent Plugins 1.0 (VS Code, Copilot CLI, Cursor) |
| `.claude-plugin/plugin.json`, `.mcp.json` | Claude Code |
| `.codex-plugin/plugin.json`, `.mcp.json` | OpenAI Codex |
| `.cursor-plugin/plugin.json`, `mcp.json` | Cursor |
| `skills/*/SKILL.md` | Todos os clientes compatíveis com Agent Skills |

Todos os manifestos são gerados a partir do `catalog.json` do repositório. Instruções de instalação: [guias de instalação](../../install/README.pt-BR.md).
