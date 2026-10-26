# Kobana no Manus

[🇺🇸 English](manus.md) · **🇧🇷 Português** · [🇪🇸 Español](manus.es.md)

Adicione os servidores MCP da Kobana ao Manus como **conectores MCP personalizados**.

**Autenticação:** OAuth quando a sua versão do Manus oferecer; caso contrário, token pessoal em um header.

## Passo a passo

1. No Manus, abra **Configurações → Conectores** (Settings → Connectors), ou **Integrações** (Integrations).
2. Clique em **Add connectors → Custom MCP → Add custom MCP**.
3. Escolha **Direct configuration** (ou **Import by JSON**).
4. Preencha:
   - **Server name:** `kobana-banking`
   - **Transport:** HTTP (Streamable HTTP)
   - **URL:** `https://mcp.banking.kobana.com.br`
   - **Headers:** `Authorization: Bearer <seu token MCP da Kobana>` (se OAuth não for oferecido)
5. Salve e ative o conector na sua tarefa.

Importação por JSON:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

### Usando um token pessoal em vez de OAuth

Crie um token em **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token**, escolhendo o app do produto e o uso **MCP**, com a menor validade que funcione para você. Envie como `Authorization: Bearer <token>`. Trate qualquer arquivo que contenha o token como segredo e nunca faça commit dele.

O Manus executa tarefas de forma autônoma. Prefira tokens somente leitura e comece o trabalho com o Gateway Bancário pelo sandbox.

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
