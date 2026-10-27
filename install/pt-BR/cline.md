# Kobana no Cline

[🇺🇸 English](../en-US/cline.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/cline.md)

Adicione os servidores MCP da Kobana ao Cline (VS Code e JetBrains).

**Autenticação:** OAuth ou token pessoal.

## Passos

1. Clique no ícone **MCP Servers** no painel do Cline → **Remote Servers**.
2. Nome do servidor: `kobana-banking`. URL do servidor: `https://mcp.banking.kobana.com.br`. Transporte: **Streamable HTTP**.
3. Clique em **Add Server** e conclua o login na Kobana, se for solicitado.

Ou clique em **Configure MCP Servers** e edite o `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "disabled": false
    },
    "kobana-finance": {
      "type": "streamableHttp",
      "url": "https://mcp.finance.kobana.com.br",
      "disabled": false
    }
  }
}
```

Com um token pessoal, adicione `"headers": { "Authorization": "Bearer <token>" }`.

Mantenha o **auto-approve** desligado para as ferramentas de escrita da Kobana.

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
