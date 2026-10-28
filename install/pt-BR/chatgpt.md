# Kobana no ChatGPT

[🇺🇸 English](../en-US/chatgpt.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/chatgpt.md)

Adicione cada produto Kobana como um **app personalizado (conector)** no ChatGPT, usando a URL do servidor MCP.

**Autenticação:** OAuth · **Planos:** conectores MCP personalizados exigem um plano que os permita (por exemplo Plus, Pro, Business, Enterprise e Edu). Em planos de workspace, talvez um administrador precise ativar o modo desenvolvedor ou publicar o conector para o workspace.

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

## Passo a passo

1. No ChatGPT, abra **Configurações → Apps e Conectores** (Settings → Apps & Connectors), chamado apenas de **Conectores** (Connectors) em algumas versões.
2. Em **Configurações avançadas** (Advanced settings), ative o **Modo desenvolvedor** (Developer mode).
3. Clique em **Criar** (Create) ou **Adicionar conector personalizado** (Add custom connector).
4. Preencha:
   - **Nome:** `Kobana Banking`
   - **Descrição:** `Boletos, Pix, pagamentos e transferências na Kobana`
   - **URL do servidor MCP:** `https://mcp.banking.kobana.com.br`
   - **Autenticação:** `OAuth`
5. Confirme que confia no aplicativo e clique em **Criar** (Create).
6. O ChatGPT abre o login da Kobana. Escolha a conta, os recursos e o nível de acesso e autorize.
7. Em uma nova conversa, clique em **+** → **Mais** (More) ou **Modo desenvolvedor** (Developer mode) e selecione o conector da Kobana.

Repita para cada produto.

**Somente leitura fora do Gateway Bancário.** Fora do Gateway Bancário, clientes OAuth registrados dinamicamente, como o ChatGPT, recebem acesso somente leitura. Para criar ou alterar registros nos outros produtos, use um token pessoal em um cliente que aceite token, como o [Codex](codex.md).

## Administradores de workspace (Business e Enterprise)

Os administradores podem criar o conector uma única vez em **Configurações do workspace → Apps e Conectores** (Workspace settings → Apps & Connectors) e publicá-lo para os membros. Mesmo assim, cada membro entra na Kobana com o próprio usuário, então as permissões são individuais.

## Ações de escrita

No ChatGPT, ferramentas de escrita só estão disponíveis para o Gateway Bancário. O ChatGPT pede confirmação antes de rodar ferramentas que alteram dados, e as ferramentas destrutivas da Kobana (pagar, transferir, cancelar) também exigem confirmação. Leia o resumo antes de aprovar.

## Codex

Para o Codex CLI e a extensão de IDE da OpenAI, veja [codex](codex.md).

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
