# Kobana no Claude Code

[English](claude-code.md) · **Português** · [Español](claude-code.es.md)

Instale o **plugin Kobana** deste marketplace. Ele configura todos os servidores MCP da Kobana e adiciona as skills da Kobana.

**Autenticação:** OAuth via `/mcp` (recomendado) ou token pessoal.

## Instale o plugin (recomendado)

Em uma sessão do Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

Ou pelo terminal:

```bash
claude plugin marketplace add universokobana/kobana-agent-marketplace
claude plugin install kobana@kobana-agent-marketplace
```

Depois, autentique:

1. Rode `/mcp`.
2. Selecione um servidor Kobana (por exemplo `kobana-banking`) e escolha **Authenticate**.
3. Entre na Kobana pelo navegador e autorize.

Repita para cada produto que você usa. Os servidores em que você nunca se autentica ficam inativos.

## Compartilhe com a sua equipe

Faça commit disto no `.claude/settings.json` do seu projeto para que o plugin seja oferecido automaticamente às outras pessoas da equipe:

```json
{
  "extraKnownMarketplaces": {
    "kobana-agent-marketplace": {
      "source": {
        "source": "github",
        "repo": "universokobana/kobana-agent-marketplace"
      }
    }
  },
  "enabledPlugins": {
    "kobana@kobana-agent-marketplace": true
  }
}
```

## Adicione os servidores manualmente (sem o plugin)

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
claude mcp add --transport http kobana-finance https://mcp.finance.kobana.com.br
```

Use `--scope project` para gravá-los no `.mcp.json`, ou `--scope user` para todos os projetos.

Com um token pessoal:

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br \
  --header "Authorization: Bearer $KOBANA_MCP_TOKEN"
```

## Servidores

| Produto | Nome sugerido | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Atualize ou remova

```text
/plugin marketplace update kobana-agent-marketplace
/plugin uninstall kobana@kobana-agent-marketplace
```

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
