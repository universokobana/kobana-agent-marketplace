# Kobana no Mistral Le Chat

[🇺🇸 English](../en-US/le-chat.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/le-chat.md)

Adicione a Kobana ao Mistral Le Chat como **conector MCP personalizado**.

**Autenticação:** OAuth ou token pessoal.

## Passo a passo

1. No Le Chat, abra **Intelligence → Connectors** (menu à esquerda).
2. Clique em **+ Add connector** → **Custom MCP Connector**.
3. Preencha:
   - **Connector name:** `kobana-banking`
   - **Connector server:** `https://mcp.banking.kobana.com.br`
   - **Description:** `Gateway Bancário Kobana: boletos, Pix, pagamentos e transferências`
4. Escolha a autenticação: **OAuth 2.1** (recomendado) ou **API key / HTTP header** com `Authorization: Bearer <token>`.
5. Clique em **Connect** e conclua o login na Kobana.
6. Em uma conversa, abra **Tools** e ative o conector.

No Le Chat Enterprise, os administradores podem adicionar o conector para toda a organização.

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
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
