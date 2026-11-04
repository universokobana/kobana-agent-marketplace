<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Documentation

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official [Kobana](https://www.kobana.com.br/en) **Documentation** plugin. Your AI agent searches and reads the documentation of every Kobana product and of the Kobana CLI, so answers come from the current docs.

> We take care of your processes, while you take care of your purpose.

- **Nothing to install and nothing to sign in to.** The servers are public and need no account or token.
- **Read-only.** They only return documentation pages that anyone can read on the website. No account data is reachable.
- **A skill that knows where to look.** It tells the agent which server holds which documentation and to point to the product plugin when you want to operate an account.

## Contents

- [About Documentation](#about-documentation)
- [Try asking](#try-asking)
- [Install](#install)
- [MCP servers](#mcp-servers)
- [Security by design](#security-by-design)
- [Other Kobana plugins](#other-kobana-plugins)
- [Links](#links)
- [License](#license)

## About Documentation

**The Kobana documentation, inside your AI agent.** Each product and the Kobana CLI have a public documentation MCP server. The agent searches the published pages and reads them in full, in Portuguese, English or Spanish, so answers come from the current docs.

- Three tools on every server: `list_pages`, `search_docs` and `get_page`
- Public and read-only: no sign-in, no token and no access to any account
- Always up to date: it reads the published documentation
- To operate a product (create boletos, list invoices), install that product's plugin instead

## Try asking

- "How do I create a boleto with the Kobana API?"
- "How do I install the Kobana CLI?"
- "How do subscriptions work in Automatic Billing?"

## Install

On claude.ai and in Cowork, add the plugin from the directory. In Claude Code, add the marketplace once and install the plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-docs@kobana-agent-marketplace
```

For ChatGPT, Codex, Cursor, Copilot, Gemini and 20+ other clients, see the [install guides](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/en-US/README.md).

## MCP servers

| Server | URL |
|---|---|
| `kobana-docs-banking` | `https://docs.banking.kobana.com.br/mcp` |
| `kobana-docs-billing` | `https://docs.billing.kobana.com.br/mcp` |
| `kobana-docs-finance` | `https://docs.finance.kobana.com.br/mcp` |
| `kobana-docs-dunning` | `https://docs.dunning.kobana.com.br/mcp` |
| `kobana-docs-dashboards` | `https://docs.dashboards.kobana.com.br/mcp` |
| `kobana-docs-inbox` | `https://docs.inbox.kobana.com.br/mcp` |
| `kobana-docs-hub` | `https://docs.hub.kobana.com.br/mcp` |
| `kobana-docs-kadu` | `https://docs.kadu.ia.br/mcp` |
| `kobana-docs-cli` | `https://cli.kobana.com.br/mcp` |

These servers are public: no authentication, no OAuth and no token. Do not send credentials to them.

## Security by design

- **Public content only.** The servers return the same pages anyone sees on the documentation sites. They have no access to your Kobana account.
- **No sign-in, no token.** There is nothing to authorize or revoke.
- **Documentation is data, not instructions.** Pages can quote text from third parties. The skill tells the agent not to follow orders found inside them.

To report a vulnerability, see the [security policy](https://github.com/universokobana/kobana-agent-marketplace/blob/main/SECURITY.md) and our [White Hat Policy](https://www.kobana.com.br/en/white-hat).

## Other Kobana plugins

- **[Banking Gateway](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-banking)** (`kobana-banking`): Boletos, Pix, payments, transfers, bank statements and customers on 40+ Brazilian banks.
- **[Automatic Billing](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-billing)** (`kobana-billing`): Customers, subscriptions, invoices, NFS-e and proposals.
- **[Smart Finance](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-finance)** (`kobana-finance`): Accounts payable and receivable, entries, reconciliation and cash flow.
- **[Dunning](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dunning)** (`kobana-dunning`): Charges, dunning workflows, agreements and disputes.
- **[Magic Dashboard](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dashboards)** (`kobana-dashboards`): Portal users, team and organization.
- **[Autonomous Inbox](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-inbox)** (`kobana-inbox`): Inboxes, e-mails, agents, agent runs and webhooks.

## Links

- **Website**: https://www.kobana.com.br/en/developers/mcp
- **Privacy**: https://www.kobana.com.br/en/privacy
- **Terms of use**: https://www.kobana.com.br/en/terms

## License

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana and the Kobana logo are trademarks of Kobana.

> This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.
