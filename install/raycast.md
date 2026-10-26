# Kobana on Raycast

**🇺🇸 English** · [🇧🇷 Português](raycast.pt-BR.md) · [🇪🇸 Español](raycast.es.md)

Use Kobana from Raycast AI through the MCP extension.

**Auth:** OAuth through `mcp-remote`, or personal token.

## Steps

1. Install the **Model Context Protocol** extension from the Raycast Store.
2. Run **Install Server** and fill in:
   - **Name:** `kobana-banking`
   - **Command:** `npx`
   - **Arguments:** `-y mcp-remote https://mcp.banking.kobana.com.br`
3. In Raycast AI Chat, mention `@kobana-banking` to use its tools.

Or paste a JSON configuration while the **Install Server** form is open (Raycast fills in the form):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.banking.kobana.com.br"
      ]
    }
  }
}
```

Requires Node.js 18 or later.

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
