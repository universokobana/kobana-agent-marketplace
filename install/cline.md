# Kobana on Cline

**🇺🇸 English** · [🇧🇷 Português](cline.pt-BR.md) · [🇪🇸 Español](cline.es.md)

Add the Kobana MCP servers to Cline (VS Code and JetBrains).

**Auth:** OAuth or personal token.

## Steps

1. Click the **MCP Servers** icon in the Cline panel → **Remote Servers**.
2. Server name: `kobana-banking`. Server URL: `https://mcp.banking.kobana.com.br`. Transport: **Streamable HTTP**.
3. Click **Add Server** and complete the Kobana login if asked.

Or click **Configure MCP Servers** and edit `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "disabled": false
    },
    "kobana-finance": {
      "type": "streamableHttp",
      "url": "https://mcp.finance.kobana.com.br",
      "disabled": false
    }
  }
}
```

With a personal token, add `"headers": { "Authorization": "Bearer <token>" }`.

Keep **auto-approve** off for Kobana write tools.

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
