# Kobana no Google Antigravity

[🇺🇸 English](antigravity.md) · **🇧🇷 Português** · [🇪🇸 Español](antigravity.es.md)

Adicione os servidores MCP da Kobana ao Google Antigravity (a IDE agêntica) e ao Antigravity CLI.

**Autenticação:** OAuth ou token pessoal.

## Antigravity IDE

1. Abra o menu do painel do agente (**…**) → **MCP Servers** → **Manage MCP Servers**.
2. Clique em **View raw config** para abrir o `mcp_config.json`.
3. Adicione os servidores Kobana:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "serverUrl": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

4. Salve e atualize a lista de servidores. O Antigravity abre o login da Kobana para cada servidor.

Com um token pessoal, adicione `"headers": { "Authorization": "Bearer <token>" }` a cada servidor.

## Antigravity CLI

O Antigravity CLI é o sucessor do Gemini CLI e continua com suporte a extensões. Instale este repositório como extensão do mesmo jeito descrito em [gemini-cli](gemini-cli.pt-BR.md), usando o comando `antigravity` no lugar de `gemini` caso a sua versão tenha mudado o nome.

## Skills

Copie as pastas de `plugins/kobana/skills/` para o diretório de skills do seu workspace para dar ao agente os fluxos e as regras de segurança da Kobana.

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
