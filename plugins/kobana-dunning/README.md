<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Dunning

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official [Kobana](https://www.kobana.com.br/en) plugin for **Dunning**. Connect Claude, or any other AI agent, to your Kobana account and work with charges, dunning workflows, agreements and disputes by conversation, always with your own permissions.

> We take care of your processes, while you take care of your purpose.

- **Nothing to install on your side.** The plugin connects to Kobana's remote MCP server. You sign in to Kobana and authorize.
- **Your permissions, not more.** OAuth 2.1, scopes per resource and the dashboard permissions of whoever authorized, re-checked on every call.
- **A skill that knows the product.** It teaches the agent the product's workflows and asks for confirmation before anything that moves money or deletes data.

## Contents

- [About Dunning](#about-dunning)
- [Try asking](#try-asking)
- [Install](#install)
- [MCP servers](#mcp-servers)
- [Security by design](#security-by-design)
- [Other Kobana plugins](#other-kobana-plugins)
- [Links](#links)
- [License](#license)

## About Dunning

**Automated collections from due date to payment.** Track every charge from due date to payment. Contact at the right time, through the right channel, with the payment method in the message. Paid? The workflow stops instantly. Disputed? It pauses and logs it.

- Multichannel workflow by email, SMS and WhatsApp
- Agreements and debtor portal
- Compliance and audit trail

## Try asking

- "Which charges are overdue?"
- "Which agreements are in progress?"

## Install

On claude.ai and in Cowork, add the plugin from the directory. In Claude Code, add the marketplace once and install the plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-dunning@kobana-agent-marketplace
```

For ChatGPT, Codex, Cursor, Copilot, Gemini and 20+ other clients, see the [install guides](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/en-US/README.md).

## MCP servers

| Server | URL |
|---|---|
| `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |

Authentication is OAuth 2.1 with PKCE: on first use, your client opens the Kobana login. There is no client secret.

## Security by design

- **Only what you can do.** The agent can only do what your account can do in the dashboard. Without permission, the tool does not even appear.
- **You choose the access.** On the authorization screen, select only the resources you need. To explore, grant read-only access.
- **Sensitive actions need confirmation.** Tools are annotated as read, write or destructive. Cancelling, paying and transferring only run after you confirm.
- **Revoke anytime.** In Kobana Account → Tokens and Access → Authorized Applications, remove the assistant without affecting your REST integrations.
- **Third-party data is not instructions.** Names, descriptions and notes are written by other people. The servers and skills instruct the agent not to follow orders found in those fields.
- **Read-only through OAuth.** Outside Banking Gateway, clients that register themselves over OAuth, such as Claude and ChatGPT, get read-only access. To create or change records in Dunning, connect with a personal token.

To report a vulnerability, see the [security policy](https://github.com/universokobana/kobana-agent-marketplace/blob/main/SECURITY.md) and our [White Hat Policy](https://www.kobana.com.br/en/white-hat).

## Other Kobana plugins

- **[Banking Gateway](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-banking)** (`kobana-banking`): Boletos, Pix, payments, transfers, bank statements and customers on 40+ Brazilian banks.
- **[Automatic Billing](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-billing)** (`kobana-billing`): Customers, subscriptions, invoices, NFS-e and proposals.
- **[Smart Finance](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-finance)** (`kobana-finance`): Accounts payable and receivable, entries, reconciliation and cash flow.
- **[Magic Dashboard](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dashboards)** (`kobana-dashboards`): Portal users, team and organization.
- **[Autonomous Inbox](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-inbox)** (`kobana-inbox`): Inboxes, e-mails, agents, agent runs and webhooks.

## Links

- **Website**: https://www.kobana.com.br/en/products/dunning
- **Documentation**: https://docs.dunning.kobana.com.br/en
- **API**: https://docs.dunning.kobana.com.br/en/api/overview/introduction
- **MCP**: https://docs.dunning.kobana.com.br/en/mcp/overview/introduction
- **CLI**: https://www.kobana.com.br/en/developers/cli
- **Privacy**: https://www.kobana.com.br/en/privacy
- **Terms of use**: https://www.kobana.com.br/en/terms

## License

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana and the Kobana logo are trademarks of Kobana.

> This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.
