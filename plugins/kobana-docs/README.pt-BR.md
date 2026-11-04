<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Documentação

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial de **Documentação** da [Kobana](https://www.kobana.com.br). O seu agente de IA busca e lê a documentação de cada produto Kobana e do Kobana CLI, então as respostas saem da documentação atual.

> A gente cuida dos seus processos, enquanto você cuida do seu propósito.

- **Nada para instalar e nada para autenticar.** Os servidores são públicos e não pedem conta nem token.
- **Somente leitura.** Eles só devolvem páginas de documentação que qualquer pessoa lê no site. Nenhum dado de conta é acessível.
- **Uma skill que sabe onde procurar.** Ela diz ao agente qual servidor tem qual documentação e indica o plugin do produto quando você quer operar uma conta.

## Conteúdo

- [Sobre o produto Documentação](#sobre-o-produto-documentação)
- [Experimente perguntar](#experimente-perguntar)
- [Instalação](#instalação)
- [Servidores MCP](#servidores-mcp)
- [Segurança desde o projeto](#segurança-desde-o-projeto)
- [Outros plugins da Kobana](#outros-plugins-da-kobana)
- [Links](#links)
- [Licença](#licença)

## Sobre o produto Documentação

**A documentação da Kobana dentro do seu agente de IA.** Cada produto e o Kobana CLI têm um servidor MCP público de documentação. O agente busca nas páginas publicadas e lê o conteúdo completo, em português, inglês ou espanhol, então as respostas saem da documentação atual.

- Três ferramentas em cada servidor: `list_pages`, `search_docs` e `get_page`
- Público e somente leitura: sem login, sem token e sem acesso a nenhuma conta
- Sempre atualizado: lê a documentação publicada
- Para operar um produto (criar boletos, listar faturas), instale o plugin daquele produto

## Experimente perguntar

- "Como criar um boleto pela API da Kobana?"
- "Como instalo o Kobana CLI?"
- "Como funcionam as assinaturas no Faturamento Automático?"

## Instalação

No claude.ai e no Cowork, adicione o plugin pelo diretório. No Claude Code, adicione o marketplace uma vez e instale o plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-docs@kobana-agent-marketplace
```

Para ChatGPT, Codex, Cursor, Copilot, Gemini e mais de 20 outros clientes, veja os [guias de instalação](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/pt-BR/README.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-docs-banking` | `https://docs.banking.kobana.com.br/mcp` |
| `kobana-docs-billing` | `https://docs.billing.kobana.com.br/mcp` |
| `kobana-docs-finance` | `https://docs.finance.kobana.com.br/mcp` |
| `kobana-docs-dunning` | `https://docs.dunning.kobana.com.br/mcp` |
| `kobana-docs-dashboards` | `https://docs.dashboards.kobana.com.br/mcp` |
| `kobana-docs-inbox` | `https://docs.inbox.kobana.com.br/mcp` |
| `kobana-docs-hub` | `https://docs.hub.kobana.com.br/mcp` |
| `kobana-docs-kadu` | `https://docs.kadu.ia.br/mcp` |
| `kobana-docs-cli` | `https://cli.kobana.com.br/mcp` |

Estes servidores são públicos: sem autenticação, sem OAuth e sem token. Não envie credenciais para eles.

## Segurança desde o projeto

- **Só conteúdo público.** Os servidores devolvem as mesmas páginas que qualquer pessoa vê nos sites de documentação. Eles não acessam a sua conta Kobana.
- **Sem login, sem token.** Não há nada para autorizar ou revogar.
- **Documentação é dado, não instrução.** As páginas podem citar textos de terceiros. A skill orienta o agente a não seguir ordens encontradas nelas.

Para reportar uma vulnerabilidade, veja a [política de segurança](https://github.com/universokobana/kobana-agent-marketplace/blob/main/i18n/SECURITY.pt-BR.md) e a nossa [Política White Hat](https://www.kobana.com.br/white-hat).

## Outros plugins da Kobana

- **[Gateway Bancário](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-banking/README.pt-BR.md)** (`kobana-banking`): Boletos, Pix, pagamentos, transferências, extrato e clientes em mais de 40 bancos.
- **[Faturamento Automático](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-billing/README.pt-BR.md)** (`kobana-billing`): Clientes, assinaturas, faturas, notas fiscais e propostas.
- **[Financeiro Inteligente](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-finance/README.pt-BR.md)** (`kobana-finance`): Contas a pagar e a receber, lançamentos, conciliação e fluxo de caixa.
- **[Régua de Cobrança](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-dunning/README.pt-BR.md)** (`kobana-dunning`): Cobranças, réguas, acordos e disputas.
- **[Dashboard Mágico](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-dashboards/README.pt-BR.md)** (`kobana-dashboards`): Usuários do portal, equipe e organização.
- **[Inbox Autônomo](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-inbox/README.pt-BR.md)** (`kobana-inbox`): Caixas de entrada, e-mails, agentes, execuções de agentes e webhooks.

## Links

- **Site**: https://www.kobana.com.br/desenvolvedores/mcp
- **Privacidade**: https://www.kobana.com.br/privacidade
- **Termos de uso**: https://www.kobana.com.br/termos

## Licença

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana e o logo da Kobana são marcas da Kobana.

> Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.
