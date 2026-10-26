# Kobana on Cursor

**English** · [Português](cursor.pt-BR.md) · [Español](cursor.es.md)

Install the **Kobana plugin** in Cursor, or add the Kobana MCP servers with one click.

**Auth:** OAuth (Cursor opens the browser) or personal token.

## Install the plugin

This repository ships a Cursor marketplace at `.cursor-plugin/marketplace.json` and the plugin at `plugins/kobana/` (with `.cursor-plugin/plugin.json`, `mcp.json` and `skills/`). Add the repository as a plugin source in **Cursor Settings → Plugins**, or install **Kobana** from the Cursor Marketplace once it is listed.

## One-click install of a server

Open a link in a browser with Cursor installed:

- [Banking Gateway](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5rb2JhbmEuY29tLmJyIn0=)
- [Banking Gateway (sandbox)](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking-sandbox&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5zYW5kYm94LmtvYmFuYS5jb20uYnIifQ==)
- [Automatic Billing](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-billing&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmlsbGluZy5rb2JhbmEuY29tLmJyIn0=)
- [Smart Finance](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-finance&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZmluYW5jZS5rb2JhbmEuY29tLmJyIn0=)
- [Dunning](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dunning&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZHVubmluZy5rb2JhbmEuY29tLmJyIn0=)
- [Magic Dashboard](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dashboards&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZGFzaGJvYXJkcy5rb2JhbmEuY29tLmJyIn0=)

## Add servers manually

Create `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (this project):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    },
    "kobana-dunning": {
      "url": "https://mcp.dunning.kobana.com.br"
    },
    "kobana-dashboards": {
      "url": "https://mcp.dashboards.kobana.com.br"
    }
  }
}
```

Then open **Cursor Settings → MCP**, and click **Login** (or **Needs login**) next to each Kobana server.

With a personal token:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

MCP tools are used by Cursor's **Agent** mode.

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
