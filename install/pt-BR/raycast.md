# Kobana no Raycast

[🇺🇸 English](../en-US/raycast.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/raycast.md)

Use a Kobana no Raycast AI por meio da extensão MCP.

**Autenticação:** OAuth via `mcp-remote` ou token pessoal.

## Passos

1. Instale a extensão **Model Context Protocol** pela Raycast Store.
2. Execute **Install Server** e preencha:
   - **Name:** `kobana-banking`
   - **Command:** `npx`
   - **Arguments:** `-y mcp-remote https://mcp.banking.kobana.com.br`
3. No Raycast AI Chat, mencione `@kobana-banking` para usar as ferramentas.

Ou cole uma configuração JSON com o formulário **Install Server** aberto (o Raycast preenche o formulário):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.banking.kobana.com.br"
      ]
    }
  }
}
```

Requer Node.js 18 ou superior.

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
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
