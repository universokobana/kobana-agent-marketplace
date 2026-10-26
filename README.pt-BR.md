# Kobana Agent Marketplace

[English](README.md) · **Português** · [Español](README.es.md)

O plugin oficial da [Kobana](https://www.kobana.com.br) para agentes de IA. Conecte Claude, ChatGPT, Codex, Cursor, Gemini, Copilot e qualquer outro cliente MCP à sua conta Kobana e opere o back-office financeiro conversando: consulte cobranças, concilie contas e faça pagamentos, sempre com as suas próprias permissões.

> A gente cuida dos seus processos, enquanto você cuida do seu propósito.

- **Um plugin, todos os clientes.** As mesmas skills e a mesma configuração MCP estão empacotadas para Claude Code, OpenAI Codex, Cursor, VS Code / GitHub Copilot (Agent Plugins 1.0), Gemini CLI e o MCP Registry oficial.
- **Nada para instalar do seu lado.** Cada produto Kobana tem um servidor MCP remoto. Você cola uma URL, entra na Kobana e autoriza.
- **As suas permissões, nada além.** OAuth 2.1, escopos por recurso e as permissões de dashboard de quem autorizou, verificadas de novo a cada chamada.

## Conteúdo

- [Produtos Kobana](#produtos-kobana)
- [Servidores MCP](#servidores-mcp)
- [Instalação](#instalação)
- [O que vem no plugin](#o-que-vem-no-plugin)
- [Segurança desde o projeto](#segurança-desde-o-projeto)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Desenvolvimento](#desenvolvimento)
- [Contribuição, suporte e licença](#contribuição-suporte-e-licença)

## Produtos Kobana

Somos uma plataforma financeira com IA nativa. São sete produtos em três camadas, da infraestrutura bancária à inteligência artificial, trabalhando juntos para automatizar suas operações financeiras de ponta a ponta. Cinco deles têm servidor MCP e estão incluídos neste plugin.

### Plataforma de infraestrutura

#### Gateway Bancário

**Operações bancárias unificadas. Uma API, mais de 40 bancos.** Conecte sua empresa ao sistema bancário brasileiro com uma única integração. Emita boletos, receba Pix, faça TED, gerencie contas e saldos, tudo sem trocar de banco.

- Cobranças: Pix, boleto, BolePix e links de pagamento
- Pagamentos: boletos, Pix e tributos, em lote ou agendados
- Transferências: Pix, TED e entre contas
- Contas bancárias, saldos, extratos, conciliação e DDA

[Conhecer o Gateway Bancário](https://www.kobana.com.br/produtos/gateway-bancario)

### Sistemas de gestão

#### Faturamento Automático

**Billing recorrente e flexível, feito para empresas brasileiras.** Plataforma de cobrança recorrente para SaaS e serviços: assinaturas, faturas, gestão de clientes, portal próprio com a sua marca, NFS-e e régua de cobrança, tudo integrado. Automatize o ciclo completo de billing.

- Assinaturas com trial, pro rata, upgrade e downgrade
- Faturas automáticas com PDF, email e NFS-e
- Pagamento por cartão, boleto, Pix e transferência
- Relatórios de MRR, ARR, churn e coortes

[Conhecer o Faturamento Automático](https://www.kobana.com.br/produtos/faturamento-automatico)

#### Financeiro Inteligente

**Back-office financeiro para o Brasil.** Contas a pagar, contas a receber, conciliação bancária e multi-empresa em uma plataforma, integrada à sua operação bancária, com saldos em tempo real e regras automáticas de classificação.

- Contas a pagar e a receber: avulsas, parceladas ou recorrentes
- Conciliação bancária automática por valor e data, com importação de OFX/QIF
- Matriz e filiais no mesmo workspace, com visão consolidada
- Fluxo de caixa, entradas e saídas, ranking de categorias e projeções

[Conhecer o Financeiro Inteligente](https://www.kobana.com.br/produtos/financeiro-inteligente)

#### Régua de Cobrança

**Cobrança automática do vencimento ao pagamento.** Acompanhe cada cobrança do vencimento ao pagamento. Contato no momento certo, pelo canal certo, com a forma de pagamento na mensagem. Pagou? A régua para na hora. Contestou? Ela pausa e registra.

- Régua multicanal por email, SMS e WhatsApp
- Acordos e portal do devedor
- Compliance e trilha de auditoria

[Conhecer a Régua de Cobrança](https://www.kobana.com.br/produtos/regua-de-cobranca)

#### Dashboard Mágico

**O portal dos seus clientes, com os seus dados.** Conecte seu ERP, API ou banco de dados, monte as páginas arrastando blocos ou pedindo à IA e publique com a sua marca e o seu domínio. Cada cliente vê só o que é dele.

- Mais de 40 serviços prontos para conectar
- Construtor visual com chat de IA
- Domínio próprio e SSO

[Conhecer o Dashboard Mágico](https://www.kobana.com.br/produtos/dashboard-magico)

### Inteligência artificial

- **[Kia](https://www.kobana.com.br/ia/kia)**: o ambiente integrado do financeiro. Lê os arquivos que você já usa, analisa e executa operações bancárias, sempre com a sua aprovação.
- **[Kadu](https://www.kobana.com.br/ia/kadu)**: o agente de IA que assume o operacional do financeiro (cobranças, pagamentos e conciliação), com a aprovação sempre sua.

## Servidores MCP

Cada produto tem seu próprio servidor MCP remoto: Streamable HTTP, stateless, OAuth 2.1 com PKCE (sem client secret). A URL é a raiz do host, sem caminho.

| Produto | Nome do servidor | URL de produção | Ferramentas | Docs |
|---|---|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` | 293 | [docs](https://docs.billing.kobana.com.br/pt/mcp/overview/introduction) |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` | 96 | [docs](https://docs.finance.kobana.com.br/pt/mcp/overview/introduction) |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` | — | [docs](https://docs.dunning.kobana.com.br/pt/mcp/overview/introduction) |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` | 220 | [docs](https://docs.dashboards.kobana.com.br/pt/mcp/overview/introduction) |

O sandbox tem contas e tokens próprios, separados da produção. A quantidade de ferramentas que você vê depende dos escopos que concede e das suas permissões.

## Instalação

### Claude Code

```bash
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

Depois rode `/mcp` e escolha **Authenticate** em cada servidor Kobana que quiser usar.

### Qualquer outro cliente

Escolha o seu cliente para ver o passo a passo:

| Cliente | Guia | Cliente | Guia |
|---|---|---|---|
| Claude (web, desktop, mobile) | [claude-ai](install/claude-ai.pt-BR.md) | Claude Code | [claude-code](install/claude-code.pt-BR.md) |
| ChatGPT | [chatgpt](install/chatgpt.pt-BR.md) | OpenAI Codex | [codex](install/codex.pt-BR.md) |
| Cursor | [cursor](install/cursor.pt-BR.md) | VS Code + GitHub Copilot | [vscode-copilot](install/vscode-copilot.pt-BR.md) |
| GitHub Copilot CLI | [copilot-cli](install/copilot-cli.pt-BR.md) | Gemini CLI | [gemini-cli](install/gemini-cli.pt-BR.md) |
| Google Antigravity | [antigravity](install/antigravity.pt-BR.md) | Manus | [manus](install/manus.pt-BR.md) |
| Perplexity | [perplexity](install/perplexity.pt-BR.md) | Mistral Le Chat | [le-chat](install/le-chat.pt-BR.md) |
| Microsoft Copilot Studio | [copilot-studio](install/copilot-studio.pt-BR.md) | Windsurf | [windsurf](install/windsurf.pt-BR.md) |
| Cline | [cline](install/cline.pt-BR.md) | Roo Code | [roo-code](install/roo-code.pt-BR.md) |
| Continue | [continue](install/continue.pt-BR.md) | Zed | [zed](install/zed.pt-BR.md) |
| JetBrains AI Assistant / Junie | [jetbrains](install/jetbrains.pt-BR.md) | Kiro | [kiro](install/kiro.pt-BR.md) |
| Amazon Q Developer | [amazon-q](install/amazon-q.pt-BR.md) | Goose | [goose](install/goose.pt-BR.md) |
| OpenCode | [opencode](install/opencode.pt-BR.md) | Warp | [warp](install/warp.pt-BR.md) |
| LM Studio | [lm-studio](install/lm-studio.pt-BR.md) | Raycast | [raycast](install/raycast.pt-BR.md) |
| n8n | [n8n](install/n8n.pt-BR.md) | APIs e SDKs (Anthropic, OpenAI, …) | [apis-and-sdks](install/apis-and-sdks.pt-BR.md) |
| Qualquer outro cliente MCP | [other-clients](install/other-clients.pt-BR.md) | | |

Veja o [índice de instalação](install/README.pt-BR.md) para um resumo de cada cliente.

## O que vem no plugin

O plugin fica em [`plugins/kobana`](plugins/kobana) e contém:

- **Configuração MCP** para os seis servidores acima.
- **Agent Skills** que ensinam o agente a usar bem a Kobana:

| Skill | O que faz |
|---|---|
| [`kobana`](plugins/kobana/skills/kobana/SKILL.md) | Encaminha cada pedido ao servidor certo, explica autenticação e permissões e define as regras de segurança |
| [`kobana-banking`](plugins/kobana/skills/kobana-banking/SKILL.md) | Boletos, Pix, pagamentos, transferências, contas e extratos |
| [`kobana-billing`](plugins/kobana/skills/kobana-billing/SKILL.md) | Clientes, planos, assinaturas, faturas e NFS-e |
| [`kobana-finance`](plugins/kobana/skills/kobana-finance/SKILL.md) | Workspaces, contas a pagar, contas a receber, conciliação e fluxo de caixa |
| [`kobana-dunning`](plugins/kobana/skills/kobana-dunning/SKILL.md) | Cobranças vencidas, réguas de cobrança, acordos e contestações |
| [`kobana-dashboards`](plugins/kobana/skills/kobana-dashboards/SKILL.md) | Usuários do portal, equipe e organização |

### Experimente pedir

- "Liste meus boletos vencidos"
- "Qual o saldo das minhas contas financeiras?"
- "Quais contas a pagar vencem esta semana?"
- "Quais assinaturas estão ativas?"
- "Quais acordos estão em andamento?"
- "Quais usuários do portal ainda não aceitaram o convite?"

## Segurança desde o projeto

- **Só o que você pode fazer.** O agente só faz o que a sua conta pode fazer no dashboard. Sem permissão, a ferramenta nem aparece.
- **Você escolhe o acesso.** Na tela de autorização, selecione só os recursos de que precisa. Para explorar, conceda acesso somente leitura.
- **Ações sensíveis pedem confirmação.** As ferramentas são marcadas como leitura, escrita ou destrutivas. Cancelar, pagar e transferir só acontecem depois que você confirma.
- **Revogue quando quiser.** Em Conta Kobana → Tokens e Acesso → Aplicações Autorizadas, remova o assistente sem afetar suas integrações REST.
- **Comece pelo sandbox.** As ferramentas destrutivas do Gateway Bancário movimentam dinheiro de verdade. Faça seus testes primeiro no servidor sandbox.
- **Dados de terceiros não são instruções.** Nomes, descrições e observações são escritos por outras pessoas. Os servidores e as skills orientam o agente a não seguir ordens encontradas nesses campos.

Para reportar uma vulnerabilidade, veja [SECURITY.pt-BR.md](SECURITY.pt-BR.md).

## Estrutura do repositório

```text
.
├── catalog.json                      # Single source of truth (plugin metadata + servers)
├── scripts/generate.mjs              # Builds every manifest below from catalog.json
├── plugins/kobana/                   # The plugin
│   ├── skills/<skill>/SKILL.md       # Agent Skills (open standard, written once)
│   ├── plugin.json + mcp.json        # Agent Plugins 1.0 (VS Code, Copilot, Cursor, ...)
│   ├── .claude-plugin/plugin.json    # Claude Code
│   ├── .codex-plugin/plugin.json     # OpenAI Codex
│   ├── .cursor-plugin/plugin.json    # Cursor
│   └── .mcp.json                     # MCP servers for Claude Code and Codex
├── .claude-plugin/marketplace.json   # Claude Code marketplace catalog
├── .agents/plugins/marketplace.json  # Codex marketplace catalog
├── .cursor-plugin/marketplace.json   # Cursor marketplace catalog
├── gemini-extension.json + GEMINI.md # Gemini CLI / Antigravity CLI extension
├── registry/<server>/server.json     # Official MCP Registry entries
└── install/                          # Install guides per client (en, pt-BR, es)
```

## Desenvolvimento

Requisitos: Node.js 18 ou superior. Não há dependências.

```bash
# Edit catalog.json or a skill, then rebuild every manifest
npm run generate

# Verify that generated files are up to date and skills are valid (runs in CI)
npm run check
```

Nunca edite os manifestos gerados à mão; altere o `catalog.json` e gere de novo. Veja [CONTRIBUTING.pt-BR.md](CONTRIBUTING.pt-BR.md) e [docs/publishing.md](docs/publishing.md) para saber como as versões chegam a cada diretório.

## Contribuição, suporte e licença

- [Guia de contribuição](CONTRIBUTING.pt-BR.md)
- [Código de conduta](CODE_OF_CONDUCT.pt-BR.md)
- [Suporte](SUPPORT.pt-BR.md)
- [Política de segurança](SECURITY.pt-BR.md)
- [Changelog](CHANGELOG.md)

Distribuído sob a [Licença MIT](LICENSE). Kobana e o logotipo da Kobana são marcas da Kobana; a licença não concede direitos de uso sobre elas.

Quer ajuda para construir o seu agente? [Agende um bate-papo](https://www.kobana.com.br/agendar) com a gente.
