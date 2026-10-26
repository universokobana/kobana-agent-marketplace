# Kobana on Manus

**English** · [Português](manus.pt-BR.md) · [Español](manus.es.md)

Add the Kobana MCP servers to Manus as **custom MCP connectors**.

**Auth:** OAuth when your Manus version supports it, otherwise personal token in a header.

## Steps

1. In Manus, open **Settings → Connectors** (or **Integrations**).
2. Click **Add connectors → Custom MCP → Add custom MCP**.
3. Choose **Direct configuration** (or **Import by JSON**).
4. Fill in:
   - **Server name:** `kobana-banking`
   - **Transport:** HTTP (Streamable HTTP)
   - **URL:** `https://mcp.banking.kobana.com.br`
   - **Headers:** `Authorization: Bearer <your Kobana MCP token>` (if OAuth is not offered)
5. Save and enable the connector in your task.

Import by JSON:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

### Using a personal token instead of OAuth

Create a token in **Kobana Account → Tokens and Access → My Personal Tokens → New Token**, choosing the product's app and the **MCP** usage, with the shortest validity that works for you. Send it as `Authorization: Bearer <token>`. Treat any file that contains the token as a secret and never commit it.

Manus runs tasks autonomously. Prefer read-only tokens, and start Banking Gateway work on the sandbox.

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
