# Kobana no Windsurf

[English](windsurf.md) · **Português** · [Español](windsurf.es.md)

Adicione os servidores MCP da Kobana ao Cascade, do Windsurf.

**Autenticação:** OAuth ou token pessoal.

## Passo a passo

1. Abra **Windsurf Settings → Cascade → MCP Servers** e clique em **View raw config** (ou **Add custom server**).
2. Edite o `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-billing": {
      "serverUrl": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

3. Salve e clique em **Refresh**. O Windsurf abre o login da Kobana quando necessário.

Com um token pessoal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

O Cascade tem um limite para o total de ferramentas ativas. Ative só os servidores Kobana de que você precisa, ou desligue no painel MCP as ferramentas que não usa.

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
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
