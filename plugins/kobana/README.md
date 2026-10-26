# Kobana plugin

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official Kobana plugin for AI agents. It connects your agent to Kobana's remote MCP servers and adds skills that teach it how to operate Brazilian finance safely.

## Install

In Claude Code:

```text
/plugin install kobana --marketplace universokobana/kobana-agent-marketplace
```

For other clients, see the [install guides](../../install/README.md).

## MCP servers

| Server | Product | URL |
|---|---|---|
| `kobana-banking` | Banking Gateway | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` | Banking Gateway (sandbox) | `https://mcp.banking.sandbox.kobana.com.br` |
| `kobana-billing` | Automatic Billing | `https://mcp.billing.kobana.com.br` |
| `kobana-finance` | Smart Finance | `https://mcp.finance.kobana.com.br` |
| `kobana-dunning` | Dunning | `https://mcp.dunning.kobana.com.br` |
| `kobana-dashboards` | Magic Dashboard | `https://mcp.dashboards.kobana.com.br` |

Authentication is OAuth 2.1: on first use, your client opens the Kobana login. Servers you never authenticate stay idle.

## Skills

| Skill | Use it for |
|---|---|
| `kobana` | Choosing the right server, permissions and safety rules |
| `kobana-banking` | Boletos, Pix, payments, transfers, accounts and statements |
| `kobana-billing` | Customers, plans, subscriptions, invoices and NFS-e |
| `kobana-finance` | Workspaces, payables, receivables, reconciliation and cash flow |
| `kobana-dunning` | Overdue charges, dunning workflows, agreements and disputes |
| `kobana-dashboards` | Portal users, team and organization |

## Files

| File | Read by |
|---|---|
| `plugin.json`, `mcp.json` | Agent Plugins 1.0 clients (VS Code, Copilot CLI, Cursor) |
| `.claude-plugin/plugin.json`, `.mcp.json` | Claude Code |
| `.codex-plugin/plugin.json`, `.mcp.json` | OpenAI Codex |
| `.cursor-plugin/plugin.json`, `mcp.json` | Cursor |
| `skills/*/SKILL.md` | Every client that supports Agent Skills |

All manifests are generated from the repository's `catalog.json`. Install instructions: [install guides](../../install/README.md).
