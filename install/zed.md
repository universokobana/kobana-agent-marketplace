# Kobana on Zed

**English** · [Português](zed.pt-BR.md) · [Español](zed.es.md)

Add the Kobana MCP servers to Zed's Agent Panel as context servers.

**Auth:** OAuth (Zed opens the browser when the server asks for it) or personal token.

## Steps

Open the Agent Panel → **Settings** → **Add Custom Server**, or edit `settings.json`:

```json
{
  "context_servers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

With a personal token:

```json
{
  "context_servers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

A green dot next to the server in the Agent Panel settings means it is running.

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
