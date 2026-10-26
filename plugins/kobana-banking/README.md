<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Kobana Banking Gateway plugin

**🇺🇸 English** · [🇧🇷 Português](README.pt-BR.md) · [🇪🇸 Español](README.es.md)

The official Kobana plugin for Banking Gateway: boletos, Pix, payments, transfers, bank statements and customers on 40+ Brazilian banks. It connects your AI agent to Kobana's remote MCP server and adds a skill with the product's workflows and safety rules.

## Install

In Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-banking@kobana-agent-marketplace
```

For other clients, see the [install guides](../../install/README.md).

## MCP servers

| Server | URL |
|---|---|
| `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` (sandbox, data isolated from production) | `https://mcp.banking.sandbox.kobana.com.br` |

Authentication is OAuth 2.1: on first use, your client opens the Kobana login.

[Learn more about the product](https://www.kobana.com.br/en/products/banking-gateway) · [MCP docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction)

> This folder is generated from the repository's `catalog.json` and `src/`. Do not edit it by hand.
