# Kobana on VS Code with GitHub Copilot

**🇺🇸 English** · [🇧🇷 Português](../pt-BR/vscode-copilot.md) · [🇪🇸 Español](../es/vscode-copilot.md)

Install the **Kobana agent plugins** (Agent Plugins 1.0, one per product) in VS Code, or add the Kobana MCP servers to `mcp.json`.

**Auth:** OAuth (VS Code handles the browser login) or personal token. **Requires:** GitHub Copilot with agent mode. In organizations, an admin may need to allow MCP servers and agent plugins.

## Install the plugins

Add this repository as a plugin marketplace in your VS Code `settings.json`:

```json
{
  "chat.plugins.marketplaces": [
    "universokobana/kobana-agent-marketplace"
  ]
}
```

Then open the **Extensions** view, search for `@agentPlugins kobana` and install the products you use. Each plugin brings its MCP server (`plugins/<plugin>/mcp.json`) and its skill (`plugins/<plugin>/skills/`).

| Plugin | Product | MCP servers |
|---|---|---|
| `kobana-banking` | Banking Gateway | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Automatic Billing | `kobana-billing` |
| `kobana-finance` | Smart Finance | `kobana-finance` |
| `kobana-dunning` | Dunning | `kobana-dunning` |
| `kobana-dashboards` | Magic Dashboard | `kobana-dashboards` |

To recommend it to everyone working on a repository, add to `.vscode/settings.json`:

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

## Add servers manually

Run **MCP: Add Server** from the Command Palette, choose **HTTP**, paste the URL and give it a name. Or create `.vscode/mcp.json` (workspace) or use **MCP: Open User Configuration**:

```json
{
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "type": "http",
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "type": "http",
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

From the command line:

```bash
code --add-mcp '{"name":"kobana-banking","type":"http","url":"https://mcp.banking.kobana.com.br"}'
```

When you start the server, VS Code asks you to sign in to Kobana. Open Copilot Chat in **Agent** mode and pick the Kobana tools in the tools menu.

With a personal token, use an input so the token is not stored in plain text:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "kobana-token",
      "description": "Kobana MCP token",
      "password": true
    }
  ],
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${input:kobana-token}"
      }
    }
  }
}
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

Visual Studio, JetBrains, Eclipse and Xcode with GitHub Copilot use the same `servers` format in their own MCP settings.

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
