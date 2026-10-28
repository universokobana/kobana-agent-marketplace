# Kobana on Claude Code

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/claude-code.md) · [🇪🇸 Español](../es/claude-code.md)

Install the **Kobana plugins** from this marketplace, one per product. Each plugin configures the product's MCP server and adds its skill.

**Auth:** OAuth via `/mcp` (recommended) or personal token.

## Install the plugins (recommended)

| Plugin | Product | MCP servers |
|---|---|---|
| `kobana-banking` | Banking Gateway | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Automatic Billing | `kobana-billing` |
| `kobana-finance` | Smart Finance | `kobana-finance` |
| `kobana-dunning` | Dunning | `kobana-dunning` |
| `kobana-dashboards` | Magic Dashboard | `kobana-dashboards` |
| `kobana-inbox` | Autonomous Inbox | `kobana-inbox` |

In a Claude Code session, add the marketplace once and install the products you use:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-banking@kobana-agent-marketplace
/plugin install kobana-billing@kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
/plugin install kobana-dunning@kobana-agent-marketplace
/plugin install kobana-dashboards@kobana-agent-marketplace
/plugin install kobana-inbox@kobana-agent-marketplace
```

Or from your shell:

```bash
claude plugin marketplace add universokobana/kobana-agent-marketplace
claude plugin install kobana-finance@kobana-agent-marketplace
```

You can also run `/plugin`, open the **Discover** tab and pick the Kobana plugins.

Then authenticate:

1. Run `/mcp`.
2. Select a Kobana server (for example `kobana-banking`) and choose **Authenticate**.
3. Sign in to Kobana in the browser and authorize.

Repeat for each plugin you installed.

## Share with your team

Commit this to your project's `.claude/settings.json` so teammates are offered the plugins automatically:

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
    "kobana-banking@kobana-agent-marketplace": true,
    "kobana-finance@kobana-agent-marketplace": true
  }
}
```

List only the plugins your team uses.

## Add servers manually (without the plugins)

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
| Autonomous Inbox | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

## Update or remove

```text
/plugin marketplace update kobana-agent-marketplace
/plugin uninstall kobana-finance@kobana-agent-marketplace
```

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
