# Kobana no OpenCode

[🇺🇸 English](../en-US/opencode.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/opencode.md)

Adicione os servidores MCP da Kobana ao OpenCode.

**Autenticação:** OAuth (automático) ou token pessoal.

## Passos

Edite o `opencode.json` do seu projeto (ou `~/.config/opencode/opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "kobana-banking": {
      "type": "remote",
      "url": "https://mcp.banking.kobana.com.br",
      "enabled": true
    },
    "kobana-finance": {
      "type": "remote",
      "url": "https://mcp.finance.kobana.com.br",
      "enabled": true
    }
  }
}
```

Depois, autentique:

```bash
opencode mcp auth kobana-banking
```

Com um token pessoal, use `"headers": { "Authorization": "Bearer {env:KOBANA_MCP_TOKEN}" }` e `"oauth": false`.

O OpenCode também carrega Agent Skills: copie `skills/*` para `.opencode/skills/` ou `.agents/skills/`.

## Servidores

| Produto | Nome sugerido | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |
| Inbox Autônomo | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as permissões do seu painel, não um erro. Autorize novamente com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso a qualquer momento em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
