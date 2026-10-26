# Kobana on OpenAI Codex (CLI, IDE extension and app)

**🇺🇸 English** · [🇧🇷 Português](codex.pt-BR.md) · [🇪🇸 Español](codex.es.md)

Install the **Kobana plugin** from this marketplace, or add the Kobana MCP servers to Codex directly.

**Auth:** OAuth (`codex mcp login`) or personal token.

## Install the plugin

This repository ships a Codex marketplace at `.agents/plugins/marketplace.json` and the plugin manifest at `plugins/kobana/.codex-plugin/plugin.json`.

```bash
codex plugin marketplace add universokobana/kobana-agent-marketplace
```

Then open `/plugins` in a Codex session, find **Kobana** and install it. Sign in to each Kobana server when Codex asks, or run `codex mcp login <server>`.

## Add servers manually

```bash
codex mcp add kobana-banking --url https://mcp.banking.kobana.com.br
codex mcp login kobana-banking
```

Or edit `~/.codex/config.toml`:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"

[mcp_servers.kobana-finance]
url = "https://mcp.finance.kobana.com.br"
```

With a personal token, keep the token in an environment variable:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"
bearer_token_env_var = "KOBANA_MCP_TOKEN"
```

## Skills only

Codex reads Agent Skills from `~/.agents/skills/` (personal) and `.agents/skills/` (repository). Copy the folders from `plugins/kobana/skills/` there if you only want the skills.

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
