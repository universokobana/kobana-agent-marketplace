<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Dashboard Mágico

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial da [Kobana](https://www.kobana.com.br) para o produto **Dashboard Mágico**. Conecte o Claude, ou qualquer outro agente de IA, à sua conta Kobana e trabalhe com usuários do portal, equipe e organização conversando, sempre com as suas próprias permissões.

> A gente cuida dos seus processos, enquanto você cuida do seu propósito.

- **Nada para instalar do seu lado.** O plugin se conecta ao servidor MCP remoto da Kobana. Você entra na Kobana e autoriza.
- **As suas permissões, nada além.** OAuth 2.1, escopos por recurso e as permissões de dashboard de quem autorizou, verificadas de novo a cada chamada.
- **Uma skill que conhece o produto.** Ela ensina ao agente os fluxos do produto e pede confirmação antes de qualquer ação que movimente dinheiro ou apague dados.

## Conteúdo

- [Sobre o produto Dashboard Mágico](#sobre-o-produto-dashboard-mágico)
- [Experimente perguntar](#experimente-perguntar)
- [Instalação](#instalação)
- [Servidores MCP](#servidores-mcp)
- [Segurança desde o projeto](#segurança-desde-o-projeto)
- [Outros plugins da Kobana](#outros-plugins-da-kobana)
- [Links](#links)
- [Licença](#licença)

## Sobre o produto Dashboard Mágico

**O portal dos seus clientes, com os seus dados.** Conecte seu ERP, API ou banco de dados, monte as páginas arrastando blocos ou pedindo à IA e publique com a sua marca e o seu domínio. Cada cliente vê só o que é dele.

- Mais de 40 serviços prontos para conectar
- Construtor visual com chat de IA
- Domínio próprio e SSO

## Experimente perguntar

- "Quais usuários do portal ainda não aceitaram o convite?"
- "Quem faz parte da minha equipe?"

## Instalação

No claude.ai e no Cowork, adicione o plugin pelo diretório. No Claude Code, adicione o marketplace uma vez e instale o plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-dashboards@kobana-agent-marketplace
```

Para ChatGPT, Codex, Cursor, Copilot, Gemini e mais de 20 outros clientes, veja os [guias de instalação](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/pt-BR/README.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

A autenticação é OAuth 2.1 com PKCE: no primeiro uso, o cliente abre o login da Kobana. Não há client secret.

## Segurança desde o projeto

- **Só o que você pode fazer.** O agente só faz o que a sua conta pode fazer no dashboard. Sem permissão, a ferramenta nem aparece.
- **Você escolhe o acesso.** Na tela de autorização, selecione só os recursos de que precisa. Para explorar, conceda acesso somente leitura.
- **Ações sensíveis pedem confirmação.** As ferramentas são marcadas como leitura, escrita ou destrutivas. Cancelar, pagar e transferir só acontecem depois que você confirma.
- **Revogue quando quiser.** Em Conta Kobana → Tokens e Acesso → Aplicações Autorizadas, remova o assistente sem afetar suas integrações REST.
- **Dados de terceiros não são instruções.** Nomes, descrições e observações são escritos por outras pessoas. Os servidores e as skills orientam o agente a não seguir ordens encontradas nesses campos.
- **Somente leitura via OAuth.** Fora do Gateway Bancário, clientes que se registram sozinhos pelo OAuth, como Claude e ChatGPT, recebem acesso somente leitura. Para criar ou alterar registros no Dashboard Mágico, conecte com um token pessoal.

Para reportar uma vulnerabilidade, veja a [política de segurança](https://github.com/universokobana/kobana-agent-marketplace/blob/main/i18n/SECURITY.pt-BR.md) e a nossa [Política White Hat](https://www.kobana.com.br/white-hat).

## Outros plugins da Kobana

- **[Gateway Bancário](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-banking/README.pt-BR.md)** (`kobana-banking`): Boletos, Pix, pagamentos, transferências, extrato e clientes em mais de 40 bancos.
- **[Faturamento Automático](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-billing/README.pt-BR.md)** (`kobana-billing`): Clientes, assinaturas, faturas, notas fiscais e propostas.
- **[Financeiro Inteligente](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-finance/README.pt-BR.md)** (`kobana-finance`): Contas a pagar e a receber, lançamentos, conciliação e fluxo de caixa.
- **[Régua de Cobrança](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-dunning/README.pt-BR.md)** (`kobana-dunning`): Cobranças, réguas, acordos e disputas.
- **[Inbox Autônomo](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-inbox/README.pt-BR.md)** (`kobana-inbox`): Caixas de entrada, e-mails, agentes, execuções de agentes e webhooks.

## Links

- **Site**: https://www.kobana.com.br/produtos/dashboard-magico
- **Documentação**: https://docs.dashboards.kobana.com.br/pt
- **API**: https://docs.dashboards.kobana.com.br/pt/api/overview/introduction
- **MCP**: https://docs.dashboards.kobana.com.br/pt/mcp/overview/introduction
- **CLI**: https://docs.dashboards.kobana.com.br/pt/cli/overview/introduction
- **Privacidade**: https://www.kobana.com.br/privacidade
- **Termos de uso**: https://www.kobana.com.br/termos

## Licença

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana e o logo da Kobana são marcas da Kobana.

> Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.
