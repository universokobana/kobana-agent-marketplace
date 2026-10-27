# Kobana on Continue

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/continue.md) · [🇪🇸 Español](../es/continue.md)

Add the Kobana MCP servers to Continue (VS Code and JetBrains).

**Auth:** personal token, or OAuth through `mcp-remote`. MCP tools are available in Continue's **Agent** mode.

## Steps

Create a file in `.continue/mcpServers/` (for example `.continue/mcpServers/kobana.yaml`):

```yaml
name: Kobana MCP servers
version: 0.0.1
schema: v1
mcpServers:
  - name: kobana-banking
    type: streamable-http
    url: https://mcp.banking.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN }}
  - name: kobana-finance
    type: streamable-http
    url: https://mcp.finance.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN_FINANCE }}
```

Store the tokens as Continue secrets (Hub) or in a local `.env` in `~/.continue/`.

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
