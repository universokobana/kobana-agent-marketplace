# Kobana no Goose

[🇺🇸 English](goose.md) · **🇧🇷 Português** · [🇪🇸 Español](goose.es.md)

Adicione os servidores MCP da Kobana ao Goose (desktop e CLI) como extensões remotas.

**Autenticação:** OAuth ou token pessoal.

## Desktop

1. **Extensions → Add custom extension**.
2. Tipo: **Streamable HTTP**. Nome: `kobana-banking`. Endpoint: `https://mcp.banking.kobana.com.br`.
3. Se quiser, adicione o header `Authorization: Bearer <token>`.
4. Salve e ative.

## CLI

```bash
goose configure
# Add Extension → Remote Extension (Streamable HTTP)
# name: kobana-banking
# URI: https://mcp.banking.kobana.com.br
```

Ou edite `~/.config/goose/config.yaml`:

```yaml
extensions:
  kobana-banking:
    enabled: true
    type: streamable_http
    name: kobana-banking
    uri: https://mcp.banking.kobana.com.br
    timeout: 300
```

O Goose também carrega Agent Skills: copie `skills/*` para `~/.config/goose/skills/` ou `.agents/skills/`.

## Servidores

| Produto | Nome sugerido | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as permissões do seu painel, não um erro. Autorize novamente com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso a qualquer momento em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
