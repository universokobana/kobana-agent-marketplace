# Kobana no JetBrains AI Assistant e no Junie

[English](jetbrains.md) · **Português** · [Español](jetbrains.es.md)

Adicione os servidores MCP da Kobana às IDEs da JetBrains (IntelliJ IDEA, PyCharm, WebStorm, …) para o AI Assistant e o Junie.

**Autenticação:** OAuth via `mcp-remote` ou token pessoal.

## AI Assistant

1. Abra **Settings → Tools → AI Assistant → Model Context Protocol (MCP)**.
2. Clique em **Add** e escolha **As JSON**.
3. Cole:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

4. Aplique. Se a sua versão da IDE só aceitar servidores locais, use a ponte `mcp-remote` abaixo.

## Junie

Abra **Settings → Tools → Junie → MCP Settings** e adicione o mesmo JSON, ou edite `~/.junie/mcp/mcp.json` (global) ou `.junie/mcp/mcp.json` (projeto).

### Clientes que só aceitam servidores locais (stdio)

Use o [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) como ponte. Ele roda localmente, conversa com a Kobana via Streamable HTTP e abre o login OAuth no seu navegador (requer Node.js 18+):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.banking.kobana.com.br"
      ]
    }
  }
}
```

### Usando um token pessoal em vez de OAuth

Crie um token em **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token**, escolhendo o app do produto e o uso **MCP**, com a menor validade que funcione para você. Envie-o como `Authorization: Bearer <token>`. Trate qualquer arquivo que contenha o token como segredo e nunca faça commit dele.

Para o GitHub Copilot dentro da JetBrains, veja [vscode-copilot](vscode-copilot.pt-BR.md): o formato `servers` é o mesmo.

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
- Todos os clientes: [índice de instalação](README.pt-BR.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
