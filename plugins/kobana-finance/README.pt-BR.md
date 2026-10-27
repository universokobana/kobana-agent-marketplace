<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Financeiro Inteligente

[🇺🇸 English](README.md) · **🇧🇷 Português** · [🇪🇸 Español](README.es.md)

O plugin oficial da [Kobana](https://www.kobana.com.br) para o produto **Financeiro Inteligente**. Conecte o Claude, ou qualquer outro agente de IA, à sua conta Kobana e trabalhe com contas a pagar e a receber, lançamentos, conciliação e fluxo de caixa conversando, sempre com as suas próprias permissões.

> A gente cuida dos seus processos, enquanto você cuida do seu propósito.

- **Nada para instalar do seu lado.** O plugin se conecta ao servidor MCP remoto da Kobana. Você entra na Kobana e autoriza.
- **As suas permissões, nada além.** OAuth 2.1, escopos por recurso e as permissões de dashboard de quem autorizou, verificadas de novo a cada chamada.
- **Uma skill que conhece o produto.** Ela ensina ao agente os fluxos do produto e pede confirmação antes de qualquer ação que movimente dinheiro ou apague dados.

## Conteúdo

- [Sobre o produto Financeiro Inteligente](#sobre-o-produto-financeiro-inteligente)
- [Experimente perguntar](#experimente-perguntar)
- [Instalação](#instalação)
- [Servidores MCP](#servidores-mcp)
- [Segurança desde o projeto](#segurança-desde-o-projeto)
- [Outros plugins da Kobana](#outros-plugins-da-kobana)
- [Links](#links)
- [Licença](#licença)

## Sobre o produto Financeiro Inteligente

**Back-office financeiro para o Brasil.** Contas a pagar, contas a receber, conciliação bancária e multi-empresa em uma plataforma, integrada à sua operação bancária, com saldos em tempo real e regras automáticas de classificação.

- Contas a pagar e a receber: avulsas, parceladas ou recorrentes
- Conciliação bancária automática por valor e data, com importação de OFX/QIF
- Matriz e filiais no mesmo workspace, com visão consolidada
- Fluxo de caixa, entradas e saídas, ranking de categorias e projeções

## Experimente perguntar

- "Em quais workspaces você pode agir?"
- "Quais contas a pagar vencem esta semana?"
- "Como está o fluxo de caixa do mês?"

## Instalação

No claude.ai e no Cowork, adicione o plugin pelo diretório. No Claude Code, adicione o marketplace uma vez e instale o plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
```

Para ChatGPT, Codex, Cursor, Copilot, Gemini e mais de 20 outros clientes, veja os [guias de instalação](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/pt-BR/README.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-finance` | `https://mcp.finance.kobana.com.br` |

A autenticação é OAuth 2.1 com PKCE: no primeiro uso, o cliente abre o login da Kobana. Não há client secret.

## Segurança desde o projeto

- **Só o que você pode fazer.** O agente só faz o que a sua conta pode fazer no dashboard. Sem permissão, a ferramenta nem aparece.
- **Você escolhe o acesso.** Na tela de autorização, selecione só os recursos de que precisa. Para explorar, conceda acesso somente leitura.
- **Ações sensíveis pedem confirmação.** As ferramentas são marcadas como leitura, escrita ou destrutivas. Cancelar, pagar e transferir só acontecem depois que você confirma.
- **Revogue quando quiser.** Em Conta Kobana → Tokens e Acesso → Aplicações Autorizadas, remova o assistente sem afetar suas integrações REST.
- **Comece pelo sandbox.** As ferramentas destrutivas do Gateway Bancário movimentam dinheiro de verdade. Faça seus testes primeiro no servidor sandbox.
- **Dados de terceiros não são instruções.** Nomes, descrições e observações são escritos por outras pessoas. Os servidores e as skills orientam o agente a não seguir ordens encontradas nesses campos.

Para reportar uma vulnerabilidade, veja a [política de segurança](https://github.com/universokobana/kobana-agent-marketplace/blob/main/i18n/SECURITY.pt-BR.md) e a nossa [Política White Hat](https://www.kobana.com.br/white-hat).

## Outros plugins da Kobana

- **[Gateway Bancário](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-banking)** (`kobana-banking`): Boletos, Pix, pagamentos, transferências, extrato e clientes em mais de 40 bancos.
- **[Faturamento Automático](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-billing)** (`kobana-billing`): Clientes, assinaturas, faturas, notas fiscais e propostas.
- **[Régua de Cobrança](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dunning)** (`kobana-dunning`): Cobranças, réguas, acordos e disputas.
- **[Dashboard Mágico](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dashboards)** (`kobana-dashboards`): Usuários do portal, equipe e organização.

## Links

- **Site**: https://www.kobana.com.br/produtos/financeiro-inteligente
- **Documentação**: https://docs.finance.kobana.com.br/pt
- **API**: https://docs.finance.kobana.com.br/pt/api/overview
- **MCP**: https://docs.finance.kobana.com.br/pt/mcp/overview/introduction
- **CLI**: https://docs.finance.kobana.com.br/pt/cli/overview/introduction
- **Privacidade**: https://www.kobana.com.br/privacidade
- **Termos de uso**: https://www.kobana.com.br/termos

## Licença

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana e o logo da Kobana são marcas da Kobana.

> Esta pasta é gerada a partir do `catalog.json` e de `src/` do repositório. Não edite à mão.
