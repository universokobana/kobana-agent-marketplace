<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Kobana Automatic Billing plugin

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official Kobana plugin for Automatic Billing: customers, subscriptions, invoices, NFS-e and proposals. It connects your AI agent to Kobana's remote MCP server and adds a skill with the product's workflows and safety rules.

## Install

In Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-billing@kobana-agent-marketplace
```

For other clients, see the [install guides](../../install/README.md).

## MCP servers

| Server | URL |
|---|---|
| `kobana-billing` | `https://mcp.billing.kobana.com.br` |

Authentication is OAuth 2.1: on first use, your client opens the Kobana login.

[Learn more about the product](https://www.kobana.com.br/en/products/automatic-billing) · [MCP docs](https://docs.billing.kobana.com.br/pt/mcp/overview/introduction) · [Privacy](https://www.kobana.com.br/en/privacy)

> This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.
