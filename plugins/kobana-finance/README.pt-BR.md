<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Plugin Kobana Financeiro Inteligente

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial da Kobana para Financeiro Inteligente: contas a pagar e a receber, lançamentos, conciliação e fluxo de caixa. Ele conecta o seu agente de IA ao servidor MCP remoto da Kobana e adiciona uma skill com os fluxos e as regras de segurança do produto.

## Instalação

No Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
```

Para outros clientes, veja os [guias de instalação](../../install/README.pt-BR.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-finance` | `https://mcp.finance.kobana.com.br` |

A autenticação é OAuth 2.1: no primeiro uso, o cliente abre o login da Kobana.

[Saiba mais sobre o produto](https://www.kobana.com.br/produtos/financeiro-inteligente) · [MCP docs](https://docs.finance.kobana.com.br/pt/mcp/overview/introduction)

> Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.
