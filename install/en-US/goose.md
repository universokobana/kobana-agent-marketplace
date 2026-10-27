# Kobana on Goose

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/goose.md) · [🇪🇸 Español](../es/goose.md)

Add the Kobana MCP servers to Goose (desktop and CLI) as remote extensions.

**Auth:** OAuth or personal token.

## Desktop

1. **Extensions → Add custom extension**.
2. Type: **Streamable HTTP**. Name: `kobana-banking`. Endpoint: `https://mcp.banking.kobana.com.br`.
3. Optionally add the header `Authorization: Bearer <token>`.
4. Save and enable.

## CLI

```bash
goose configure
# Add Extension → Remote Extension (Streamable HTTP)
# name: kobana-banking
# URI: https://mcp.banking.kobana.com.br
```

Or edit `~/.config/goose/config.yaml`:

```yaml
extensions:
  kobana-banking:
    enabled: true
    type: streamable_http
    name: kobana-banking
    uri: https://mcp.banking.kobana.com.br
    timeout: 300
```

Goose also loads Agent Skills: copy `skills/*` into `~/.config/goose/skills/` or `.agents/skills/`.

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
