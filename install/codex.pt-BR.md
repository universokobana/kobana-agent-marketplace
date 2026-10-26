# Kobana no OpenAI Codex (CLI, extensão de IDE e app)

[English](codex.md) · **Português** · [Español](codex.es.md)

Instale o **plugin Kobana** deste marketplace ou adicione os servidores MCP da Kobana diretamente no Codex.

**Autenticação:** OAuth (`codex mcp login`) ou token pessoal.

## Instale o plugin

Este repositório traz um marketplace do Codex em `.agents/plugins/marketplace.json` e o manifesto do plugin em `plugins/kobana/.codex-plugin/plugin.json`.

```bash
codex plugin marketplace add universokobana/kobana-agent-marketplace
```

Depois, abra `/plugins` em uma sessão do Codex, encontre **Kobana** e instale. Entre em cada servidor Kobana quando o Codex pedir, ou rode `codex mcp login <server>`.

## Adicione os servidores manualmente

```bash
codex mcp add kobana-banking --url https://mcp.banking.kobana.com.br
codex mcp login kobana-banking
```

Ou edite o `~/.codex/config.toml`:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"

[mcp_servers.kobana-finance]
url = "https://mcp.finance.kobana.com.br"
```

Com um token pessoal, guarde o token em uma variável de ambiente:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"
bearer_token_env_var = "KOBANA_MCP_TOKEN"
```

## Só as skills

O Codex lê Agent Skills de `~/.agents/skills/` (pessoais) e `.agents/skills/` (do repositório). Copie as pastas de `plugins/kobana/skills/` para lá se quiser apenas as skills.

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
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
