# Kobana no LM Studio

[English](lm-studio.md) · **Português** · [Español](lm-studio.es.md)

Use as ferramentas da Kobana com modelos locais no LM Studio.

**Autenticação:** token pessoal em um header ou OAuth via `mcp-remote`.

## Passos

1. Abra a aba **Program** na barra lateral direita → **Install → Edit mcp.json**.
2. Adicione:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

3. Salve. O LM Studio pede confirmação antes de cada chamada de ferramenta; leia com atenção as ações de escrita da Kobana antes de aprovar.

A qualidade do uso de ferramentas depende do modelo local. Prefira modelos com bom suporte a tool calling e comece pelo sandbox do Gateway Bancário.

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
