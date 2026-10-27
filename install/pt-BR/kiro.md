# Kobana no Kiro

[🇺🇸 English](../en-US/kiro.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/kiro.md)

Adicione os servidores MCP da Kobana ao Kiro (IDE e CLI).

**Autenticação:** OAuth ou token pessoal.

## Passos

Abra o painel do **Kiro** → **MCP Servers** → **Edit config** ou edite `~/.kiro/settings/mcp.json` (usuário) ou `.kiro/settings/mcp.json` (workspace):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Salve. O Kiro se conecta e abre o login da Kobana quando o servidor exigir.

Com um token pessoal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

Não adicione ferramentas de escrita da Kobana ao `autoApprove`.

O Kiro também carrega Agent Skills: copie `skills/*` para `.kiro/skills/` para usá-las.

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
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as permissões do seu painel, não um erro. Autorize novamente com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso a qualquer momento em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
