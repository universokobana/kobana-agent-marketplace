# Kobana no Cursor

[🇺🇸 English](cursor.md) · **🇧🇷 Português** · [🇪🇸 Español](cursor.es.md)

Instale os **plugins Kobana** no Cursor (um por produto) ou adicione os servidores MCP da Kobana com um clique.

**Autenticação:** OAuth (o Cursor abre o navegador) ou token pessoal.

## Instale os plugins

Este repositório traz um marketplace do Cursor em `.cursor-plugin/marketplace.json` com um plugin por produto em `plugins/<plugin>/` (cada um com `.cursor-plugin/plugin.json`, `mcp.json` e `skills/`):

| Plugin | Produto | Servidores MCP |
|---|---|---|
| `kobana-banking` | Gateway Bancário | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Faturamento Automático | `kobana-billing` |
| `kobana-finance` | Financeiro Inteligente | `kobana-finance` |
| `kobana-dunning` | Régua de Cobrança | `kobana-dunning` |
| `kobana-dashboards` | Dashboard Mágico | `kobana-dashboards` |

Adicione o repositório como fonte de plugins em **Cursor Settings → Plugins** e instale os produtos que você usa, ou instale-os pelo Cursor Marketplace quando estiverem listados.

## Instalação de um servidor com um clique

Abra um link em um navegador com o Cursor instalado:

- [Gateway Bancário](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5rb2JhbmEuY29tLmJyIn0=)
- [Gateway Bancário (sandbox)](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking-sandbox&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5zYW5kYm94LmtvYmFuYS5jb20uYnIifQ==)
- [Faturamento Automático](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-billing&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmlsbGluZy5rb2JhbmEuY29tLmJyIn0=)
- [Financeiro Inteligente](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-finance&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZmluYW5jZS5rb2JhbmEuY29tLmJyIn0=)
- [Régua de Cobrança](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dunning&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZHVubmluZy5rb2JhbmEuY29tLmJyIn0=)
- [Dashboard Mágico](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dashboards&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZGFzaGJvYXJkcy5rb2JhbmEuY29tLmJyIn0=)

## Adicione os servidores manualmente

Crie o `~/.cursor/mcp.json` (todos os projetos) ou o `.cursor/mcp.json` (este projeto):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    },
    "kobana-dunning": {
      "url": "https://mcp.dunning.kobana.com.br"
    },
    "kobana-dashboards": {
      "url": "https://mcp.dashboards.kobana.com.br"
    }
  }
}
```

Depois, abra **Cursor Settings → MCP** e clique em **Login** (ou **Needs login**) ao lado de cada servidor Kobana.

Com um token pessoal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

As ferramentas MCP são usadas pelo modo **Agent** do Cursor.

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
