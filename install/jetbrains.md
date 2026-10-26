# Kobana on JetBrains AI Assistant and Junie

**🇺🇸 English** · [🇧🇷 Português](jetbrains.pt-BR.md) · [🇪🇸 Español](jetbrains.es.md)

Add the Kobana MCP servers to JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, …) for AI Assistant and Junie.

**Auth:** OAuth through `mcp-remote` or personal token.

## AI Assistant

1. Open **Settings → Tools → AI Assistant → Model Context Protocol (MCP)**.
2. Click **Add** and choose **As JSON**.
3. Paste:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

4. Apply. If your IDE version only accepts local servers, use the `mcp-remote` bridge below.

## Junie

Open **Settings → Tools → Junie → MCP Settings** and add the same JSON, or edit `~/.junie/mcp/mcp.json` (global) or `.junie/mcp/mcp.json` (project).

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

For GitHub Copilot inside JetBrains, see [vscode-copilot](vscode-copilot.md): the `servers` format is the same.

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
