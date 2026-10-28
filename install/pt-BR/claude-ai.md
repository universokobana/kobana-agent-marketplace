# Kobana no Claude (web, desktop e mobile)

[🇺🇸 English](../en-US/claude-ai.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/claude-ai.md)

Adicione a Kobana como **conector personalizado** no Claude. Não precisa instalar nada: você cola uma URL e entra na Kobana.

**Autenticação:** OAuth (recomendado) · **Planos:** conectores personalizados estão disponíveis nos planos pagos do Claude e, com limites, no plano Free. Nos planos Team e Enterprise, talvez um proprietário precise adicionar o conector para a organização primeiro.

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

Adicione um conector para cada produto que quiser usar.

## Passo a passo

1. Abra o [claude.ai](https://claude.ai) (ou o app desktop) → **Configurações → Conectores** (Settings → Connectors).
2. Clique em **Adicionar conector personalizado** (Add custom connector).
3. Nome: `Kobana Banking` (por exemplo). URL: `https://mcp.banking.kobana.com.br`.
4. Deixe **OAuth Client ID** e **OAuth Client Secret** em branco nas configurações avançadas.
5. Clique em **Adicionar** (Add) e depois em **Conectar** (Connect). O Claude abre a página de login da Kobana.
6. Escolha a conta e os recursos e autorize.
7. Em uma conversa, abra o menu **Pesquisa e ferramentas** (Search and tools) e confira se o conector da Kobana está ativado.

**Somente leitura fora do Gateway Bancário.** Fora do Gateway Bancário, clientes OAuth registrados dinamicamente, como o Claude, recebem acesso somente leitura. Para criar ou alterar registros nos outros produtos, use um token pessoal em um cliente que aceite token, como o [Claude Code](claude-code.md).

Os conectores adicionados na web também ficam disponíveis nos apps mobile do Claude.

### Team e Enterprise

Os proprietários adicionam o conector em **Configurações de administrador → Conectores** (Admin settings → Connectors) ou **Configurações da organização → Conectores** (Organization settings → Connectors). Depois, cada membro se conecta com o próprio login da Kobana, e assim cada pessoa mantém as suas permissões.

### Claude Desktop com servidores locais

O Claude Desktop também lê o `claude_desktop_config.json` para servidores locais. Para a Kobana, o caminho recomendado são os conectores personalizados (acima), já que os servidores são remotos. Se precisar usar o arquivo de configuração, use a ponte `mcp-remote`:

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
    },
    "kobana-finance": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.finance.kobana.com.br"
      ]
    }
  }
}
```

### Quer as skills também?

As skills da Kobana ([`skills/`](../../skills), uma por produto) podem ser enviadas em **Configurações → Capacidades → Skills** (Settings → Capabilities → Skills): compacte a pasta de uma skill em zip (por exemplo `kobana-banking/`) e faça o upload.

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as suas permissões no dashboard, não um erro. Autorize de novo com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
