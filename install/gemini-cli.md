# Kobana on Gemini CLI

**🇺🇸 English** · [🇧🇷 Português](gemini-cli.pt-BR.md) · [🇪🇸 Español](gemini-cli.es.md)

Install Kobana as a **Gemini CLI extension**. It registers all Kobana MCP servers and loads the Kobana context (`GEMINI.md`).

**Auth:** OAuth (`/mcp auth`) or personal token.

> Google announced Antigravity CLI as the successor of Gemini CLI. If you use Antigravity, see [antigravity](antigravity.md).

## Install the extension

```bash
gemini extensions install https://github.com/universokobana/kobana-agent-marketplace
```

Start `gemini`, then authenticate each server you want to use:

```text
/mcp auth kobana-banking
```

Check the status with `/mcp`. Update with `gemini extensions update kobana`, remove with `gemini extensions uninstall kobana`.

## Add servers manually

```bash
gemini mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
```

Or edit `~/.gemini/settings.json` (user) or `.gemini/settings.json` (project):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "httpUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

With a personal token:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer $KOBANA_MCP_TOKEN"
      }
    }
  }
}
```

## Gemini app and Gemini Enterprise

The consumer Gemini app does not let you add custom MCP servers. In **Gemini Enterprise**, admins can register custom MCP connectors in the admin console using the URLs below.

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
