# Kobana on Perplexity

**🇺🇸 English** · [🇧🇷 Português](perplexity.pt-BR.md) · [🇪🇸 Español](perplexity.es.md)

Connect Kobana to Perplexity through **custom connectors** (remote MCP) or, on the Mac app, a local MCP bridge.

**Auth:** OAuth or personal token. **Plans:** custom connectors depend on your Perplexity plan (Pro, Max or Enterprise) and may be rolled out gradually.

## Custom remote connector

1. Open **Settings → Connectors**.
2. Click **+ Custom connector** (or **Add connector → Custom MCP**).
3. Name it `Kobana Banking` and paste `https://mcp.banking.kobana.com.br`.
4. Choose **OAuth** as the authentication method and complete the Kobana login. If OAuth is not offered, use **API key / header** with a personal token.
5. Enable the connector under **Sources** when you start a thread.

## Perplexity for Mac (local MCP)

The Mac app supports local MCP servers. Install **PerplexityXPC** when prompted, then go to **Settings → Connectors → Add Connector → Advanced** and paste:

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

`mcp-remote` opens the Kobana login in your browser on first use.

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
