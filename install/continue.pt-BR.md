# Kobana no Continue

[🇺🇸 English](continue.md) · **🇧🇷 Português** · [🇪🇸 Español](continue.es.md)

Adicione os servidores MCP da Kobana ao Continue (VS Code e JetBrains).

**Autenticação:** token pessoal ou OAuth via `mcp-remote`. As ferramentas MCP ficam disponíveis no modo **Agent** do Continue.

## Passos

Crie um arquivo em `.continue/mcpServers/` (por exemplo, `.continue/mcpServers/kobana.yaml`):

```yaml
name: Kobana MCP servers
version: 0.0.1
schema: v1
mcpServers:
  - name: kobana-banking
    type: streamable-http
    url: https://mcp.banking.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN }}
  - name: kobana-finance
    type: streamable-http
    url: https://mcp.finance.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN_FINANCE }}
```

Guarde os tokens como secrets do Continue (Hub) ou em um `.env` local em `~/.continue/`.

### Usando um token pessoal em vez de OAuth

Crie um token em **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token**, escolhendo o app do produto e o uso **MCP**, com a menor validade que funcione para você. Envie-o como `Authorization: Bearer <token>`. Trate qualquer arquivo que contenha o token como segredo e nunca faça commit dele.

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
