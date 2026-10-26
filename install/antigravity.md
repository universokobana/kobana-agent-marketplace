# Kobana on Google Antigravity

**English** · [Português](antigravity.pt-BR.md) · [Español](antigravity.es.md)

Add the Kobana MCP servers to Google Antigravity (the agentic IDE) and Antigravity CLI.

**Auth:** OAuth or personal token.

## Antigravity IDE

1. Open the agent panel menu (**…**) → **MCP Servers** → **Manage MCP Servers**.
2. Click **View raw config** to open `mcp_config.json`.
3. Add the Kobana servers:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "serverUrl": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

4. Save and refresh the server list. Antigravity opens the Kobana login for each server.

With a personal token, add `"headers": { "Authorization": "Bearer <token>" }` to each server.

## Antigravity CLI

Antigravity CLI is the successor of Gemini CLI and keeps support for extensions. Install this repository as an extension the same way described in [gemini-cli](gemini-cli.md), using the `antigravity` command in place of `gemini` if your version renamed it.

## Skills

Copy the folders from `plugins/kobana/skills/` into your workspace's skills directory to give the agent Kobana's workflows and safety rules.

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
