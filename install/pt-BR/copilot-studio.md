# Kobana no Microsoft Copilot Studio

[🇺🇸 English](../en-US/copilot-studio.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/copilot-studio.md)

Dê aos seus agentes do Copilot Studio as ferramentas da Kobana adicionando os servidores MCP da Kobana.

**Autenticação:** OAuth 2.0 (descoberta dinâmica) ou chave de API (token pessoal em um header).

## Passo a passo

1. Abra o seu agente no [Copilot Studio](https://copilotstudio.microsoft.com).
2. Vá em **Tools → Add a tool → New tool → Model Context Protocol**.
3. Preencha:
   - **Server name:** `Kobana Banking`
   - **Server description:** `Boletos, Pix, pagamentos, transferências e extratos bancários na Kobana`
   - **Server URL:** `https://mcp.banking.kobana.com.br`
4. Autenticação:
   - **OAuth 2.0 → Dynamic discovery** (recomendado). Deixe client ID e secret em branco se o registro dinâmico for oferecido.
   - Ou **API key → Header**, com o nome de header `Authorization`, guardando `Bearer <token>` como chave.
5. Clique em **Create**, depois crie uma conexão e entre na Kobana.
6. Adicione a ferramenta ao agente e escolha quais ferramentas ficam ativas.

Os agentes do Copilot Studio podem rodar sem uma pessoa acompanhando. Conceda acesso somente leitura, a menos que o agente realmente precise escrever, e exija confirmação para ferramentas destrutivas nas instruções do agente.

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
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
