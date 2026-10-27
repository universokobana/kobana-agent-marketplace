# Kobana no Slack (Slackbot)

[🇺🇸 English](../en-US/slack.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/slack.md)

Use a Kobana com o **Slackbot**, o assistente de IA do Slack, pelos apps oficiais da Kobana para o Slack, um por produto. Você não precisa criar nem configurar nada: instale os apps que a sua equipe usa e cada pessoa conecta a própria conta Kobana.

**Autenticação:** OAuth com o seu próprio login da Kobana · **Planos:** o acesso do Slackbot a apps depende do plano do Slack. O controle de acesso por ferramenta existe no Enterprise Grid e no Enterprise+.

## Apps da Kobana para o Slack

| App | No Slackbot | O que você pode perguntar |
|---|---|---|
| Kobana Banking Gateway (Gateway Bancário) | Kobana - Banking Gateway | "Liste meus boletos vencidos", "Qual o saldo das minhas contas financeiras?" |
| Kobana Automatic Billing (Faturamento Automático) | Kobana - Billing | "Quais assinaturas estão ativas?", "Quais faturas estão em aberto este mês?" |
| Kobana Smart Finance (Financeiro Inteligente) | Kobana - Smart Finance | "Quais contas a pagar vencem esta semana?", "Como está o fluxo de caixa do mês?" |
| Kobana Dunning (Régua de Cobrança) | Kobana - Dunning | "Quais cobranças estão vencidas?", "Quais acordos estão em andamento?" |
| Kobana Magic Dashboard (Dashboard Mágico) | Kobana - Magic Dashboard | "Quais usuários do portal ainda não aceitaram o convite?", "Quem faz parte da minha equipe?" |

> Os links de **Add to Slack** e as listagens no Slack Marketplace vão aparecer aqui assim que os apps forem publicados.

Cada pessoa pode ter até 5 servidores MCP ativos no Slackbot ao mesmo tempo, então instale só os produtos que a sua equipe usa.

## 1. Instale o app

1. Abra o link de **Add to Slack** do app ou encontre-o no Slack em **Agents & tools → Apps**.
2. Clique em **Add to Slack**, revise a permissão (`mcp:connect`, que deixa o Slackbot se conectar à Kobana) e autorize.
3. Se o seu workspace exige aprovação de apps, o Slack envia o pedido aos administradores. No Enterprise, um Org Owner ou Org Admin instala o app no nível da organização e o adiciona aos workspaces.

Instalar um app não conecta nenhuma conta Kobana nem compartilha o acesso de ninguém.

## 2. Conecte a sua conta Kobana

1. No Slack, abra **Slackbot → Apps** e clique em **Connect** ao lado do app da Kobana.
2. Entre na Kobana, escolha a conta, os recursos e o nível de acesso, e autorize.
3. O Slack mostra **Your account is connected**. Feche a janela e volte ao Slack.

Cada pessoa conecta a própria conta, e cada app só recebe acesso ao seu produto. O Slackbot só vê e faz o que essa pessoa pode fazer na Kobana.

## 3. Use

1. Abra uma conversa com o **Slackbot** e confira se o app da Kobana está ligado no menu de apps da caixa de mensagem.
2. Pergunte com as suas palavras, em português, inglês ou espanhol. Há exemplos na tabela acima.
3. Antes de qualquer ação que movimente dinheiro ou apague dados, como pagar, transferir ou cancelar, o Slackbot mostra o que vai acontecer e pede a sua confirmação. Leia o resumo antes de aprovar.

## Para administradores

No Enterprise Grid e no Enterprise+, os administradores escolhem quem pode usar cada app da Kobana e a permissão padrão das ferramentas de leitura, de escrita e das demais. Recomendamos **Needs approval** para as ferramentas de escrita, porque as ferramentas de escrita da Kobana podem pagar contas, transferir dinheiro e cancelar cobranças.

## Problemas comuns

- **O Slackbot não usa a Kobana:** confira se o app está ligado no menu de apps da caixa de mensagem e se a sua conta está conectada em **Slackbot → Apps**.
- **Menos ferramentas do que o esperado:** é o acesso que você concedeu ou as suas permissões na Kobana, não um erro. Conecte de novo escolhendo mais recursos ou peça ao administrador da conta a permissão que falta.
- **A conexão falha:** desconecte o app em **Slackbot → Apps**, conecte de novo e confira se está entrando na conta Kobana certa.

## Próximos passos

- Guia do Slack: [Connect Slackbot to other apps with MCP](https://slack.com/help/articles/52414744085139-Connect-Slackbot-to-other-apps-with-MCP)
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**, ou desconecte o app em **Slackbot → Apps**.
- Todos os clientes: [índice de instalação](README.md) · Guia para desenvolvedores: https://www.kobana.com.br/desenvolvedores/mcp
