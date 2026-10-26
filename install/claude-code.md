# Kobana on Claude Code

**English** · [Português](claude-code.pt-BR.md) · [Español](claude-code.es.md)

Install the **Kobana plugin** from this marketplace. It configures all Kobana MCP servers and adds the Kobana skills.

**Auth:** OAuth via `/mcp` (recommended) or personal token.

## Install the plugin (recommended)

In a Claude Code session:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

Or from your shell:

```bash
claude plugin marketplace add universokobana/kobana-agent-marketplace
claude plugin install kobana@kobana-agent-marketplace
```

Then authenticate:

1. Run `/mcp`.
2. Select a Kobana server (for example `kobana-banking`) and choose **Authenticate**.
3. Sign in to Kobana in the browser and authorize.

Repeat for each product you use. Servers you never authenticate stay idle.

## Share with your team

Commit this to your project's `.claude/settings.json` so teammates are offered the plugin automatically:

```json
{
  "extraKnownMarketplaces": {
    "kobana-agent-marketplace": {
      "source": {
        "source": "github",
        "repo": "universokobana/kobana-agent-marketplace"
      }
    }
  },
  "enabledPlugins": {
    "kobana@kobana-agent-marketplace": true
  }
}
```

## Add servers manually (without the plugin)

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
claude mcp add --transport http kobana-finance https://mcp.finance.kobana.com.br
```

Use `--scope project` to write them to `.mcp.json`, or `--scope user` for all projects.

With a personal token:

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br \
  --header "Authorization: Bearer $KOBANA_MCP_TOKEN"
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

## Update or remove

```text
/plugin marketplace update kobana-agent-marketplace
/plugin uninstall kobana@kobana-agent-marketplace
```

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
