# Kobana no VS Code com GitHub Copilot

[English](vscode-copilot.md) · **Português** · [Español](vscode-copilot.es.md)

Instale o **agent plugin da Kobana** (Agent Plugins 1.0) no VS Code ou adicione os servidores MCP da Kobana ao `mcp.json`.

**Autenticação:** OAuth (o VS Code cuida do login no navegador) ou token pessoal. **Requisitos:** GitHub Copilot com modo agente. Em organizações, talvez um administrador precise liberar servidores MCP e agent plugins.

## Instale o plugin

Adicione este repositório como marketplace de plugins no `settings.json` do VS Code:

```json
{
  "chat.plugins.marketplaces": [
    "universokobana/kobana-agent-marketplace"
  ]
}
```

Depois, abra a visualização **Extensions**, pesquise `@agentPlugins kobana` e instale **Kobana**. O plugin traz os servidores MCP (`plugins/kobana/mcp.json`) e as skills (`plugins/kobana/skills/`).

Para recomendá-lo a todos que trabalham em um repositório, adicione ao `.vscode/settings.json`:

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

## Adicione os servidores manualmente

Rode **MCP: Add Server** na Command Palette, escolha **HTTP**, cole a URL e dê um nome. Ou crie o `.vscode/mcp.json` (workspace) ou use **MCP: Open User Configuration**:

```json
{
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "type": "http",
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "type": "http",
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Pela linha de comando:

```bash
code --add-mcp '{"name":"kobana-banking","type":"http","url":"https://mcp.banking.kobana.com.br"}'
```

Quando você inicia o servidor, o VS Code pede para entrar na Kobana. Abra o Copilot Chat no modo **Agent** e escolha as ferramentas da Kobana no menu de ferramentas.

Com um token pessoal, use um input para que o token não fique salvo em texto puro:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "kobana-token",
      "description": "Token MCP da Kobana",
      "password": true
    }
  ],
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${input:kobana-token}"
      }
    }
  }
}
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

Visual Studio, JetBrains, Eclipse e Xcode com GitHub Copilot usam o mesmo formato `servers` nas próprias configurações de MCP.

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
