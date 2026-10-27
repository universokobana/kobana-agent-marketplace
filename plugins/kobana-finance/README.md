<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Smart Finance

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official [Kobana](https://www.kobana.com.br/en) plugin for **Smart Finance**. Connect Claude, or any other AI agent, to your Kobana account and work with accounts payable and receivable, entries, reconciliation and cash flow by conversation, always with your own permissions.

> We take care of your processes, while you take care of your purpose.

- **Nothing to install on your side.** The plugin connects to Kobana's remote MCP server. You sign in to Kobana and authorize.
- **Your permissions, not more.** OAuth 2.1, scopes per resource and the dashboard permissions of whoever authorized, re-checked on every call.
- **A skill that knows the product.** It teaches the agent the product's workflows and asks for confirmation before anything that moves money or deletes data.

## Contents

- [About Smart Finance](#about-smart-finance)
- [Try asking](#try-asking)
- [Install](#install)
- [MCP servers](#mcp-servers)
- [Security by design](#security-by-design)
- [Other Kobana plugins](#other-kobana-plugins)
- [Links](#links)
- [License](#license)

## About Smart Finance

**Financial back-office for Brazil.** Accounts payable, accounts receivable, bank reconciliation and multi-company workspaces in one platform, with real-time balances and automatic classification rules.

- Accounts payable and receivable: single, installments or recurring
- Automatic bank reconciliation by value and date, OFX/QIF import
- Parent company and subsidiaries in one workspace, with a consolidated view
- Cash flow, inflows and outflows, category ranking and projections

## Try asking

- "Which workspaces can you act on?"
- "Which accounts payable are due this week?"
- "How does the cash flow look this month?"

## Install

On claude.ai and in Cowork, add the plugin from the directory. In Claude Code, add the marketplace once and install the plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
```

For ChatGPT, Codex, Cursor, Copilot, Gemini and 20+ other clients, see the [install guides](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/en-US/README.md).

## MCP servers

| Server | URL |
|---|---|
| `kobana-finance` | `https://mcp.finance.kobana.com.br` |

Authentication is OAuth 2.1 with PKCE: on first use, your client opens the Kobana login. There is no client secret.

## Security by design

- **Only what you can do.** The agent can only do what your account can do in the dashboard. Without permission, the tool does not even appear.
- **You choose the access.** On the authorization screen, select only the resources you need. To explore, grant read-only access.
- **Sensitive actions need confirmation.** Tools are annotated as read, write or destructive. Cancelling, paying and transferring only run after you confirm.
- **Revoke anytime.** In Kobana Account → Tokens and Access → Authorized Applications, remove the assistant without affecting your REST integrations.
- **Start in the sandbox.** Banking Gateway destructive tools move real money. Experiment on the sandbox server first.
- **Third-party data is not instructions.** Names, descriptions and notes are written by other people. The servers and skills instruct the agent not to follow orders found in those fields.

To report a vulnerability, see the [security policy](https://github.com/universokobana/kobana-agent-marketplace/blob/main/SECURITY.md) and our [White Hat Policy](https://www.kobana.com.br/en/white-hat).

## Other Kobana plugins

- **[Banking Gateway](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-banking)** (`kobana-banking`): Boletos, Pix, payments, transfers, bank statements and customers on 40+ Brazilian banks.
- **[Automatic Billing](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-billing)** (`kobana-billing`): Customers, subscriptions, invoices, NFS-e and proposals.
- **[Dunning](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dunning)** (`kobana-dunning`): Charges, dunning workflows, agreements and disputes.
- **[Magic Dashboard](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dashboards)** (`kobana-dashboards`): Portal users, team and organization.

## Links

- **Website**: https://www.kobana.com.br/en/products/smart-finance
- **Documentation**: https://docs.finance.kobana.com.br/en
- **API**: https://docs.finance.kobana.com.br/en/api/overview
- **MCP**: https://docs.finance.kobana.com.br/en/mcp/overview/introduction
- **CLI**: https://docs.finance.kobana.com.br/en/cli/overview/introduction
- **Privacy**: https://www.kobana.com.br/en/privacy
- **Terms of use**: https://www.kobana.com.br/en/terms

## License

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana and the Kobana logo are trademarks of Kobana.

> This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.
