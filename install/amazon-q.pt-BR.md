# Kobana no Amazon Q Developer

[🇺🇸 English](amazon-q.md) · **🇧🇷 Português** · [🇪🇸 Español](amazon-q.es.md)

Adicione os servidores MCP da Kobana ao Amazon Q Developer (CLI e plugins para IDE).

**Autenticação:** OAuth ou token pessoal.

## Passos

Edite `~/.aws/amazonq/mcp.json` (global) ou `.amazonq/mcp.json` (workspace):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Na IDE, você também pode usar o ícone **Configure MCP servers** (ferramentas) no painel de chat do Q → **+** → transporte **HTTP**.

Com um token pessoal, adicione `"headers": { "Authorization": "Bearer <token>" }`.

O Amazon Q Developer CLI está evoluindo para o Kiro CLI. Se você usa o Kiro, veja [kiro](kiro.pt-BR.md).

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
