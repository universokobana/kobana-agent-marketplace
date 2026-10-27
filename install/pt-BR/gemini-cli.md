# Kobana no Gemini CLI

[🇺🇸 English](../en-US/gemini-cli.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/gemini-cli.md)

Instale a Kobana como **extensão do Gemini CLI**. O Gemini CLI instala uma extensão por repositório, então esta inclui todos os produtos Kobana: todos os servidores MCP, as skills (`skills/`) e o contexto compartilhado (`GEMINI.md`).

**Autenticação:** OAuth (`/mcp auth`) ou token pessoal.

> O Google anunciou o Antigravity CLI como sucessor do Gemini CLI. Se você usa o Antigravity, veja [antigravity](antigravity.md).

## Instale a extensão

```bash
gemini extensions install https://github.com/universokobana/kobana-agent-marketplace
```

Inicie o `gemini` e autentique cada servidor que quiser usar:

```text
/mcp auth kobana-banking
```

Você só precisa autenticar os produtos que usa; os demais ficam inativos. Confira o status com `/mcp`. Atualize com `gemini extensions update kobana` e remova com `gemini extensions uninstall kobana`.

## Adicione os servidores manualmente

```bash
gemini mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
```

Ou edite o `~/.gemini/settings.json` (usuário) ou o `.gemini/settings.json` (projeto):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "httpUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Com um token pessoal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer $KOBANA_MCP_TOKEN"
      }
    }
  }
}
```

## App Gemini e Gemini Enterprise

O app Gemini para consumidores não permite adicionar servidores MCP personalizados. No **Gemini Enterprise**, os administradores podem registrar conectores MCP personalizados no console de administração usando as URLs abaixo.

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
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
