# Kobana no Warp

[🇺🇸 English](../en-US/warp.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/warp.md)

Adicione os servidores MCP da Kobana aos agentes do Warp.

**Autenticação:** OAuth ou token pessoal.

## Passos

1. Abra **Settings → AI → Manage MCP servers** (ou procure **Open MCP Servers** na Command Palette).
2. Clique em **+ Add** e cole:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

3. Salve e inicie os servidores. Conclua o login na Kobana quando for solicitado.

Com um token pessoal, adicione `"headers": { "Authorization": "Bearer <token>" }` a cada servidor.

## Servidores

| Produto | Nome sugerido | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |
| Inbox Autônomo | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as permissões do seu painel, não um erro. Autorize novamente com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso a qualquer momento em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
