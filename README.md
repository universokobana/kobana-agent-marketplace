# Kobana Agent Marketplace

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official [Kobana](https://www.kobana.com.br) plugin for AI agents. Connect Claude, ChatGPT, Codex, Cursor, Gemini, Copilot and any other MCP client to your Kobana account, then operate your financial back-office by conversation: check charges, reconcile accounts and make payments, always with your own permissions.

> We take care of your processes, while you take care of your purpose.

- **One plugin, every client.** The same skills and MCP configuration are packaged for Claude Code, OpenAI Codex, Cursor, VS Code / GitHub Copilot (Agent Plugins 1.0), Gemini CLI and the official MCP Registry.
- **Nothing to install on your side.** Every Kobana product runs a remote MCP server. You paste a URL, sign in to Kobana and authorize.
- **Your permissions, not more.** OAuth 2.1, scopes per resource and the dashboard permissions of whoever authorized, re-checked on every call.

## Contents

- [Kobana products](#kobana-products)
- [MCP servers](#mcp-servers)
- [Install](#install)
- [What's in the plugin](#whats-in-the-plugin)
- [Security by design](#security-by-design)
- [Repository layout](#repository-layout)
- [Development](#development)
- [Contributing, support and license](#contributing-support-and-license)

## Kobana products

Kobana is a financial platform with native AI. Seven products in three layers, from banking infrastructure to artificial intelligence, work together to automate financial operations end to end. Five of them have an MCP server and are included in this plugin.

### Infrastructure platform

#### Banking Gateway

**Unified banking operations. One API, 40+ banks.** Connect your company to the Brazilian banking system through a single API. Issue boletos, receive Pix, make TED transfers, manage bank accounts and balances, all without changing banks.

- Receivables: Pix, boleto, bolepix and payment links
- Payments: boletos, Pix and taxes
- Transfers: Pix, TED and between accounts
- Bank accounts, balances, statements, reconciliation and DDA

[Learn more](https://www.kobana.com.br/en/products/banking-gateway)

### Management systems

#### Automatic Billing

**Recurring billing built for Brazilian companies.** A complete billing platform for SaaS and recurring services: subscriptions, invoices, payments, white-label customer portal, NFS-e and dunning, all integrated.

- Subscriptions with trial, proration, upgrade and downgrade
- Automatic invoices with PDF, email and NFS-e
- Card, boleto, Pix and bank transfer payments
- MRR, ARR, churn and cohort reports

[Learn more](https://www.kobana.com.br/en/products/automatic-billing)

#### Smart Finance

**Financial back-office for Brazil.** Accounts payable, accounts receivable, bank reconciliation and multi-company workspaces in one platform, with real-time balances and automatic classification rules.

- Accounts payable and receivable: single, installments or recurring
- Automatic bank reconciliation by value and date, OFX/QIF import
- Parent company and subsidiaries in one workspace, with a consolidated view
- Cash flow, inflows and outflows, category ranking and projections

[Learn more](https://www.kobana.com.br/en/products/smart-finance)

#### Dunning

**Automated collections from due date to payment.** Track every charge from due date to payment. Contact at the right time, through the right channel, with the payment method in the message. Paid? The workflow stops instantly. Disputed? It pauses and logs it.

- Multichannel workflow by email, SMS and WhatsApp
- Agreements and debtor portal
- Compliance and audit trail

[Learn more](https://www.kobana.com.br/en/products/dunning)

#### Magic Dashboard

**Your customer portal, powered by the data already in your systems.** Connect your ERP, API or database, build pages by dragging blocks or asking the AI, and publish with your brand on your own domain. Each customer signs in and sees only what belongs to them.

- 40+ ready-made connectors
- AI-assisted visual builder
- Custom domain and SSO

[Learn more](https://www.kobana.com.br/en/products/magic-dashboard)

### Artificial intelligence

- **[Kia](https://www.kobana.com.br/en/ai/kia)**: the integrated environment for finance. Reads the files you already use, analyzes them and runs banking operations, always with your approval.
- **[Kadu](https://www.kobana.com.br/en/ia/kadu)**: the AI agent that takes over the operational work in finance (charges, payments and reconciliation), with your approval.

## MCP servers

Each product has its own remote MCP server: Streamable HTTP, stateless, OAuth 2.1 with PKCE (no client secret). The URL is the host root, with no path.

| Product | Server name | Production URL | Tools | Docs |
|---|---|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` | 293 | [docs](https://docs.billing.kobana.com.br/pt/mcp/overview/introduction) |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` | 96 | [docs](https://docs.finance.kobana.com.br/pt/mcp/overview/introduction) |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` | — | [docs](https://docs.dunning.kobana.com.br/pt/mcp/overview/introduction) |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` | 220 | [docs](https://docs.dashboards.kobana.com.br/pt/mcp/overview/introduction) |

The sandbox has its own accounts and tokens, separate from production. The number of tools you see depends on the scopes you grant and on your permissions.

## Install

### Claude Code

```bash
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

Then run `/mcp` and choose **Authenticate** on each Kobana server you want to use.

### Any other client

Pick your client for step-by-step instructions:

| Client | Guide | Client | Guide |
|---|---|---|---|
| Claude (web, desktop, mobile) | [claude-ai](install/claude-ai.md) | Claude Code | [claude-code](install/claude-code.md) |
| ChatGPT | [chatgpt](install/chatgpt.md) | OpenAI Codex | [codex](install/codex.md) |
| Cursor | [cursor](install/cursor.md) | VS Code + GitHub Copilot | [vscode-copilot](install/vscode-copilot.md) |
| GitHub Copilot CLI | [copilot-cli](install/copilot-cli.md) | Gemini CLI | [gemini-cli](install/gemini-cli.md) |
| Google Antigravity | [antigravity](install/antigravity.md) | Manus | [manus](install/manus.md) |
| Perplexity | [perplexity](install/perplexity.md) | Mistral Le Chat | [le-chat](install/le-chat.md) |
| Microsoft Copilot Studio | [copilot-studio](install/copilot-studio.md) | Windsurf | [windsurf](install/windsurf.md) |
| Cline | [cline](install/cline.md) | Roo Code | [roo-code](install/roo-code.md) |
| Continue | [continue](install/continue.md) | Zed | [zed](install/zed.md) |
| JetBrains AI Assistant / Junie | [jetbrains](install/jetbrains.md) | Kiro | [kiro](install/kiro.md) |
| Amazon Q Developer | [amazon-q](install/amazon-q.md) | Goose | [goose](install/goose.md) |
| OpenCode | [opencode](install/opencode.md) | Warp | [warp](install/warp.md) |
| LM Studio | [lm-studio](install/lm-studio.md) | Raycast | [raycast](install/raycast.md) |
| n8n | [n8n](install/n8n.md) | APIs and SDKs (Anthropic, OpenAI, …) | [apis-and-sdks](install/apis-and-sdks.md) |
| Any other MCP client | [other-clients](install/other-clients.md) | | |

See the [install index](install/README.md) for a summary of each client.

## What's in the plugin

The plugin lives in [`plugins/kobana`](plugins/kobana) and contains:

- **MCP configuration** for all six servers above.
- **Agent Skills** that teach the agent how to use Kobana well:

| Skill | What it does |
|---|---|
| [`kobana`](plugins/kobana/skills/kobana/SKILL.md) | Routes each request to the right server, explains authentication and permissions, and sets the safety rules |
| [`kobana-banking`](plugins/kobana/skills/kobana-banking/SKILL.md) | Boletos, Pix, payments, transfers, accounts and statements |
| [`kobana-billing`](plugins/kobana/skills/kobana-billing/SKILL.md) | Customers, plans, subscriptions, invoices and NFS-e |
| [`kobana-finance`](plugins/kobana/skills/kobana-finance/SKILL.md) | Workspaces, payables, receivables, reconciliation and cash flow |
| [`kobana-dunning`](plugins/kobana/skills/kobana-dunning/SKILL.md) | Overdue charges, dunning workflows, agreements and disputes |
| [`kobana-dashboards`](plugins/kobana/skills/kobana-dashboards/SKILL.md) | Portal users, team and organization |

### Try asking

- "List my overdue boletos"
- "What is the balance of my financial accounts?"
- "Which accounts payable are due this week?"
- "Which subscriptions are active?"
- "Which agreements are in progress?"
- "Which portal users have not accepted the invitation yet?"

## Security by design

- **Only what you can do.** The agent can only do what your account can do in the dashboard. Without permission, the tool does not even appear.
- **You choose the access.** On the authorization screen, select only the resources you need. To explore, grant read-only access.
- **Sensitive actions need confirmation.** Tools are annotated as read, write or destructive. Cancelling, paying and transferring only run after you confirm.
- **Revoke anytime.** In Kobana Account → Tokens and Access → Authorized Applications, remove the assistant without affecting your REST integrations.
- **Start in the sandbox.** Banking Gateway destructive tools move real money. Experiment on the sandbox server first.
- **Third-party data is not instructions.** Names, descriptions and notes are written by other people. The servers and skills instruct the agent not to follow orders found in those fields.

To report a vulnerability, see [SECURITY.md](SECURITY.md).

## Repository layout

```text
.
├── catalog.json                      # Single source of truth (plugin metadata + servers)
├── scripts/generate.mjs              # Builds every manifest below from catalog.json
├── plugins/kobana/                   # The plugin
│   ├── skills/<skill>/SKILL.md       # Agent Skills (open standard, written once)
│   ├── plugin.json + mcp.json        # Agent Plugins 1.0 (VS Code, Copilot, Cursor, ...)
│   ├── .claude-plugin/plugin.json    # Claude Code
│   ├── .codex-plugin/plugin.json     # OpenAI Codex
│   ├── .cursor-plugin/plugin.json    # Cursor
│   └── .mcp.json                     # MCP servers for Claude Code and Codex
├── .claude-plugin/marketplace.json   # Claude Code marketplace catalog
├── .agents/plugins/marketplace.json  # Codex marketplace catalog
├── .cursor-plugin/marketplace.json   # Cursor marketplace catalog
├── gemini-extension.json + GEMINI.md # Gemini CLI / Antigravity CLI extension
├── registry/<server>/server.json     # Official MCP Registry entries
└── install/                          # Install guides per client (en, pt-BR, es)
```

## Development

Requirements: Node.js 18 or later. There are no dependencies.

```bash
# Edit catalog.json or a skill, then rebuild every manifest
npm run generate

# Verify that generated files are up to date and skills are valid (runs in CI)
npm run check
```

Never edit generated manifests by hand; change `catalog.json` and regenerate. See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/publishing.md](docs/publishing.md) for how releases reach each directory.

## Contributing, support and license

- [Contributing guide](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Support](SUPPORT.md)
- [Security policy](SECURITY.md)
- [Changelog](CHANGELOG.md)

Released under the [MIT License](LICENSE). Kobana and the Kobana logo are trademarks of Kobana; the license does not grant rights to use them.

Want help building your agent? [Schedule a chat](https://www.kobana.com.br/agendar) with us.
