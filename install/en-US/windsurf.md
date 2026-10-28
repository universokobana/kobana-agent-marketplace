# Kobana on Windsurf

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/windsurf.md) · [🇪🇸 Español](../es/windsurf.md)

Add the Kobana MCP servers to Windsurf's Cascade.

**Auth:** OAuth or personal token.

## Steps

1. Open **Windsurf Settings → Cascade → MCP Servers** and click **View raw config** (or **Add custom server**).
2. Edit `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-billing": {
      "serverUrl": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

3. Save and click **Refresh**. Windsurf opens the Kobana login when needed.

With a personal token:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

Cascade has a limit on the total number of enabled tools. Enable only the Kobana servers you need, or turn off tools you don't use in the MCP panel.

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |
| Autonomous Inbox | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
