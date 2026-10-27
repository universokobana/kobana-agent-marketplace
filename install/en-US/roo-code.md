# Kobana on Roo Code

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/roo-code.md) · [🇪🇸 Español](../es/roo-code.md)

Add the Kobana MCP servers to Roo Code.

**Auth:** personal token in a header (recommended), or OAuth through `mcp-remote`.

## Steps

1. Open the Roo Code panel → **…** → **MCP Servers** → **Edit Global MCP** (or **Edit Project MCP** for `.roo/mcp.json`).
2. Add:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamable-http",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

3. Save. The server appears in the list with its tools.

### Using a personal token instead of OAuth

Create a token in **Kobana Account → Tokens and Access → My Personal Tokens → New Token**, choosing the product's app and the **MCP** usage, with the shortest validity that works for you. Send it as `Authorization: Bearer <token>`. Treat any file that contains the token as a secret and never commit it.

### Clients that only support local (stdio) servers

Use [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) as a bridge. It runs locally, talks Streamable HTTP to Kobana and opens the OAuth login in your browser (requires Node.js 18+):

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
