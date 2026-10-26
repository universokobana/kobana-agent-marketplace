# Kobana no n8n

[English](n8n.md) · **Português** · [Español](n8n.es.md)

Dê ferramentas da Kobana aos AI Agents do n8n com o node **MCP Client Tool**.

**Autenticação:** Bearer (token pessoal), recomendado para automações; OAuth2 também está disponível.

## Passos

1. Em um workflow, adicione um node **AI Agent**.
2. Em **Tool**, adicione **MCP Client Tool**.
3. Configure:
   - **Endpoint:** `https://mcp.banking.kobana.com.br`
   - **Server Transport:** HTTP Streamable
   - **Authentication:** Bearer Auth → crie uma credencial com o seu token MCP da Kobana
   - **Tools to Include:** **Selected**, e escolha só as ferramentas de que o workflow precisa
4. Adicione um node MCP Client Tool para cada produto Kobana.

Automações rodam sem que uma pessoa aprove cada chamada. Use um token dedicado por workflow, com escopos somente de leitura, a menos que o workflow precise escrever, e teste primeiro no sandbox do Gateway Bancário.

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
