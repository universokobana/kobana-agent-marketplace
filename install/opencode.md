# Kobana on OpenCode

**🇺🇸 English** · [🇧🇷 Português](opencode.pt-BR.md) · [🇪🇸 Español](opencode.es.md)

Add the Kobana MCP servers to OpenCode.

**Auth:** OAuth (automatic) or personal token.

## Steps

Edit `opencode.json` in your project (or `~/.config/opencode/opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "kobana-banking": {
      "type": "remote",
      "url": "https://mcp.banking.kobana.com.br",
      "enabled": true
    },
    "kobana-finance": {
      "type": "remote",
      "url": "https://mcp.finance.kobana.com.br",
      "enabled": true
    }
  }
}
```

Then authenticate:

```bash
opencode mcp auth kobana-banking
```

With a personal token, use `"headers": { "Authorization": "Bearer {env:KOBANA_MCP_TOKEN}" }` and `"oauth": false`.

OpenCode also loads Agent Skills: copy `skills/*` into `.opencode/skills/` or `.agents/skills/`.

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
