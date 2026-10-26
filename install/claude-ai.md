# Kobana on Claude (web, desktop and mobile)

**English** · [Português](claude-ai.pt-BR.md) · [Español](claude-ai.es.md)

Add Kobana as a **custom connector** in Claude. No installation needed: you paste a URL and sign in to Kobana.

**Auth:** OAuth (recommended) · **Plans:** custom connectors are available on Claude's paid plans and, with limits, on the Free plan. On Team and Enterprise, an owner may need to add the connector for the organization first.

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

Add one connector per product you want to use.

## Steps

1. Open [claude.ai](https://claude.ai) (or the desktop app) → **Settings → Connectors**.
2. Click **Add custom connector**.
3. Name: `Kobana Banking` (for example). URL: `https://mcp.banking.kobana.com.br`.
4. Leave **OAuth Client ID** and **OAuth Client Secret** empty under advanced settings.
5. Click **Add**, then **Connect**. Claude opens the Kobana login page.
6. Choose the account, the resources and the access level (read or write), then authorize.
7. In a chat, open the **Search and tools** menu and make sure the Kobana connector is enabled.

Connectors added on the web are also available in the Claude mobile apps.

### Team and Enterprise

Owners add the connector in **Admin settings → Connectors** (or **Organization settings → Connectors**). Each member then connects with their own Kobana login, so everyone keeps their own permissions.

### Claude Desktop with local servers

Claude Desktop also reads `claude_desktop_config.json` for local servers. Custom connectors (above) are the recommended path for Kobana because the servers are remote. If you must use the config file, use the `mcp-remote` bridge:

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
    },
    "kobana-finance": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.finance.kobana.com.br"
      ]
    }
  }
}
```

### Want the skills too?

The Kobana skills (`plugins/kobana/skills/`) can be uploaded in **Settings → Capabilities → Skills**: zip a skill folder (for example `kobana-banking/`) and upload it.

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
