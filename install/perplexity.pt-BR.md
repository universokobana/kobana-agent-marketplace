# Kobana no Perplexity

[🇺🇸 English](perplexity.md) · **🇧🇷 Português** · [🇪🇸 Español](perplexity.es.md)

Conecte a Kobana ao Perplexity por meio de **conectores personalizados** (MCP remoto) ou, no app para Mac, de uma ponte MCP local.

**Autenticação:** OAuth ou token pessoal. **Planos:** conectores personalizados dependem do seu plano do Perplexity (Pro, Max ou Enterprise) e podem ser liberados aos poucos.

## Conector remoto personalizado

1. Abra **Configurações → Conectores** (Settings → Connectors).
2. Clique em **+ Custom connector** (ou **Add connector → Custom MCP**).
3. Dê o nome `Kobana Banking` e cole `https://mcp.banking.kobana.com.br`.
4. Escolha **OAuth** como método de autenticação e conclua o login na Kobana. Se OAuth não for oferecido, use **API key / header** com um token pessoal.
5. Ative o conector em **Sources** ao iniciar uma conversa.

## Perplexity para Mac (MCP local)

O app para Mac aceita servidores MCP locais. Instale o **PerplexityXPC** quando for solicitado, depois vá em **Settings → Connectors → Add Connector → Advanced** e cole:

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

O `mcp-remote` abre o login da Kobana no seu navegador no primeiro uso.

### Usando um token pessoal em vez de OAuth

Crie um token em **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token**, escolhendo o app do produto e o uso **MCP**, com a menor validade que funcione para você. Envie como `Authorization: Bearer <token>`. Trate qualquer arquivo que contenha o token como segredo e nunca faça commit dele.

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
