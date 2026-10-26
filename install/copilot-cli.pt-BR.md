# Kobana no GitHub Copilot CLI

[English](copilot-cli.md) · **Português** · [Español](copilot-cli.es.md)

Instale o **plugin Kobana** no GitHub Copilot CLI ou adicione os servidores MCP da Kobana.

**Autenticação:** OAuth ou token pessoal.

## Instale o plugin

Em uma sessão do Copilot CLI:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

## Adicione os servidores manualmente

Rode `/mcp add`, escolha **HTTP** e preencha o nome e a URL. Ou edite o `~/.copilot/mcp-config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "tools": [
        "*"
      ]
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br",
      "tools": [
        "*"
      ]
    }
  }
}
```

Com um token pessoal, adicione `"headers": { "Authorization": "Bearer <token>" }` ao servidor.

## Copilot coding agent (github.com)

Para o Copilot coding agent, adicione os servidores em **Repository → Settings → Copilot → Coding agent → MCP configuration** usando o mesmo formato com `"type": "http"`, e guarde o token como secret de ambiente do Copilot. Prefira tokens somente leitura nesse caso: o coding agent roda sem uma pessoa aprovando cada chamada.

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
