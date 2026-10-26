# Kobana on Microsoft Copilot Studio

**English** · [Português](copilot-studio.pt-BR.md) · [Español](copilot-studio.es.md)

Give your Copilot Studio agents Kobana tools by adding the Kobana MCP servers.

**Auth:** OAuth 2.0 (dynamic discovery) or API key (personal token in a header).

## Steps

1. Open your agent in [Copilot Studio](https://copilotstudio.microsoft.com).
2. Go to **Tools → Add a tool → New tool → Model Context Protocol**.
3. Fill in:
   - **Server name:** `Kobana Banking`
   - **Server description:** `Boletos, Pix, payments, transfers and bank statements on Kobana`
   - **Server URL:** `https://mcp.banking.kobana.com.br`
4. Authentication:
   - **OAuth 2.0 → Dynamic discovery** (recommended). Leave client ID and secret empty if dynamic registration is offered.
   - Or **API key → Header**, header name `Authorization`, and store `Bearer <token>` as the key.
5. Click **Create**, then create a connection and sign in to Kobana.
6. Add the tool to the agent and choose which tools are enabled.

Copilot Studio agents can run without a human in the loop. Grant read-only access unless the agent really needs to write, and require confirmation for destructive tools in the agent instructions.

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
