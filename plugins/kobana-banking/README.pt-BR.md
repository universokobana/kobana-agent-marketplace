<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Plugin Kobana Gateway Bancário

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial da Kobana para Gateway Bancário: boletos, Pix, pagamentos, transferências, extrato e clientes em mais de 40 bancos. Ele conecta o seu agente de IA ao servidor MCP remoto da Kobana e adiciona uma skill com os fluxos e as regras de segurança do produto.

## Instalação

No Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-banking@kobana-agent-marketplace
```

Para outros clientes, veja os [guias de instalação](../../install/README.pt-BR.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` (sandbox, dados separados da produção) | `https://mcp.banking.sandbox.kobana.com.br` |

A autenticação é OAuth 2.1: no primeiro uso, o cliente abre o login da Kobana.

[Saiba mais sobre o produto](https://www.kobana.com.br/produtos/gateway-bancario) · [MCP docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) · [Privacidade](https://www.kobana.com.br/privacidade)

> Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.
