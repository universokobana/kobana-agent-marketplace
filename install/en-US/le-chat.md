# Kobana on Mistral Le Chat

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/le-chat.md) · [🇪🇸 Español](../es/le-chat.md)

Add Kobana to Mistral Le Chat as a **custom MCP connector**.

**Auth:** OAuth or personal token.

## Steps

1. In Le Chat, open **Intelligence → Connectors** (left menu).
2. Click **+ Add connector** → **Custom MCP Connector**.
3. Fill in:
   - **Connector name:** `kobana-banking`
   - **Connector server:** `https://mcp.banking.kobana.com.br`
   - **Description:** `Kobana Banking Gateway: boletos, Pix, payments and transfers`
4. Choose the authentication: **OAuth 2.1** (recommended) or **API key / HTTP header** with `Authorization: Bearer <token>`.
5. Click **Connect** and complete the Kobana login.
6. In a chat, open **Tools** and enable the connector.

On Le Chat Enterprise, admins can add the connector for the whole organization.

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
