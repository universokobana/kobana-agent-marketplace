# Kobana on n8n

**🇺🇸 English** · [🇧🇷 Português](n8n.pt-BR.md) · [🇪🇸 Español](n8n.es.md)

Give n8n AI Agents Kobana tools with the **MCP Client Tool** node.

**Auth:** Bearer (personal token) recommended for automations; OAuth2 also available.

## Steps

1. In a workflow, add an **AI Agent** node.
2. Under **Tool**, add **MCP Client Tool**.
3. Configure:
   - **Endpoint:** `https://mcp.banking.kobana.com.br`
   - **Server Transport:** HTTP Streamable
   - **Authentication:** Bearer Auth → create a credential with your Kobana MCP token
   - **Tools to Include:** **Selected**, and pick only the tools the workflow needs
4. Add one MCP Client Tool node per Kobana product.

Automations run without a human approving each call. Use a dedicated token per workflow, with read-only scopes unless the workflow must write, and test against the Banking Gateway sandbox first.

### Using a personal token instead of OAuth

Create a token in **Kobana Account → Tokens and Access → My Personal Tokens → New Token**, choosing the product's app and the **MCP** usage, with the shortest validity that works for you. Send it as `Authorization: Bearer <token>`. Treat any file that contains the token as a secret and never commit it.

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
