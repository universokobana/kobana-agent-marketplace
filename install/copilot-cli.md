# Kobana on GitHub Copilot CLI

**🇺🇸 English** · [🇧🇷 Português](copilot-cli.pt-BR.md) · [🇪🇸 Español](copilot-cli.es.md)

Install the **Kobana plugin** in GitHub Copilot CLI, or add the Kobana MCP servers.

**Auth:** OAuth or personal token.

## Install the plugin

In a Copilot CLI session:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

## Add servers manually

Run `/mcp add`, choose **HTTP**, and fill in the name and URL. Or edit `~/.copilot/mcp-config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "tools": [
        "*"
      ]
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br",
      "tools": [
        "*"
      ]
    }
  }
}
```

With a personal token, add `"headers": { "Authorization": "Bearer <token>" }` to the server.

## Copilot coding agent (github.com)

For the Copilot coding agent, add the servers in **Repository → Settings → Copilot → Coding agent → MCP configuration** using the same format with `"type": "http"`, and store the token as a Copilot environment secret. Prefer read-only tokens there: the coding agent runs without a human approving each call.

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
