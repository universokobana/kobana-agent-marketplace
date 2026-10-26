# Kobana on any other MCP client

**English** · [Português](other-clients.pt-BR.md) · [Español](other-clients.es.md)

Kobana's servers follow the MCP standard, so any client that supports remote servers works. Use these values.

## Connection values

| Setting | Value |
|---|---|
| Transport | Streamable HTTP (stateless). Some clients call it `http`, `streamable-http` or `streamableHttp` |
| URL | The product URL below, host root, no path |
| Authentication | OAuth 2.1 with PKCE and dynamic client registration. Leave client ID and secret empty |
| Fallback auth | Header `Authorization: Bearer <personal token>` |
| Sub-accounts | Header `X-Account-Uid: <uid>` |

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Generic JSON configuration

Most clients that read a JSON file accept one of these shapes:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    }
  }
}
```

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

### Clients that only support local (stdio) servers

Use [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) as a bridge. It runs locally, talks Streamable HTTP to Kobana and opens the OAuth login in your browser (requires Node.js 18+):

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
    }
  }
}
```

### Using a personal token instead of OAuth

Create a token in **Kobana Account → Tokens and Access → My Personal Tokens → New Token**, choosing the product's app and the **MCP** usage, with the shortest validity that works for you. Send it as `Authorization: Bearer <token>`. Treat any file that contains the token as a secret and never commit it.

## Skills

If your client supports Agent Skills (`SKILL.md`), copy the folders from [`plugins/kobana/skills/`](../plugins/kobana/skills) into its skills directory (commonly `.agents/skills/` or `~/.agents/skills/`).

## Missing a client?

Open an issue or a pull request with a new guide. See [CONTRIBUTING.md](../CONTRIBUTING.md).

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
