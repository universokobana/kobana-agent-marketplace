# Kobana em qualquer outro cliente MCP

[🇺🇸 English](../en-US/other-clients.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/other-clients.md)

Os servidores da Kobana seguem o padrão MCP, então qualquer cliente que aceite servidores remotos funciona. Use estes valores.

## Valores de conexão

| Configuração | Valor |
|---|---|
| Transporte | Streamable HTTP (stateless). Alguns clientes chamam de `http`, `streamable-http` ou `streamableHttp` |
| URL | A URL do produto abaixo, na raiz do host, sem caminho |
| Autenticação | OAuth 2.1 com PKCE e registro dinâmico de cliente. Deixe client ID e secret vazios |
| Autenticação alternativa | Header `Authorization: Bearer <token pessoal>` |
| Subcontas | Header `X-Account-Uid: <uid>` |

## Servidores

| Produto | Nome sugerido | URL |
|---|---|---|
| Gateway Bancário | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancário (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Faturamento Automático | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financeiro Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Régua de Cobrança | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Configuração JSON genérica

A maioria dos clientes que leem um arquivo JSON aceita um destes formatos:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    }
  }
}
```

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

## Skills

Se o seu cliente aceita Agent Skills (`SKILL.md`), copie as pastas de [`skills/`](../../skills) para o diretório de skills dele (normalmente `.agents/skills/` ou `~/.agents/skills/`).

## Falta algum cliente?

Abra uma issue ou um pull request com um novo guia. Veja o [CONTRIBUTING.md](../../i18n/CONTRIBUTING.pt-BR.md).

## Próximos passos

- Experimente: "Liste meus boletos vencidos", "Quais contas a pagar vencem esta semana?", "Quais assinaturas estão ativas?"
- Está vendo menos ferramentas do que esperava? Isso é o escopo do token ou as permissões do seu painel, não um erro. Autorize novamente com mais recursos ou peça a permissão que falta ao administrador da sua conta.
- Revogue o acesso a qualquer momento em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
- Todos os clientes: [índice de instalação](README.md) · Guia do desenvolvedor: https://www.kobana.com.br/desenvolvedores/mcp
