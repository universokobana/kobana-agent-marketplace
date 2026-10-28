# Kobana em APIs e SDKs de agentes

[🇺🇸 English](../en-US/apis-and-sdks.md) · **🇧🇷 Português** · [🇪🇸 Español](../es/apis-and-sdks.md)

Chame os servidores MCP da Kobana a partir do seu próprio código: Anthropic Messages API, OpenAI Responses API, SDKs de agentes e qualquer biblioteca cliente MCP.

**Autenticação:** token pessoal (`Authorization: Bearer`) ou um access token OAuth que a sua aplicação obtém para o usuário.

Os exemplos abaixo usam o sandbox do Gateway Bancário. Os tokens do sandbox são separados dos de produção: crie-os em https://account.sandbox.kobana.com.br.

## Anthropic Messages API (MCP connector)

```python
import os
import anthropic

client = anthropic.Anthropic()

response = client.beta.messages.create(
    model="claude-opus-5-5",
    max_tokens=16000,
    betas=["mcp-client-2025-11-20"],
    mcp_servers=[
        {
            "type": "url",
            "url": "https://mcp.banking.sandbox.kobana.com.br",
            "name": "kobana-banking-sandbox",
            "authorization_token": os.environ["KOBANA_SANDBOX_MCP_TOKEN"],
        }
    ],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "kobana-banking-sandbox"}],
    messages=[{"role": "user", "content": "Liste meus boletos vencidos"}],
)
print(response.content)
```

As duas partes são obrigatórias: o servidor em `mcp_servers` e o `mcp_toolset` correspondente em `tools`.

## OpenAI Responses API (remote MCP tool)

```python
import os
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-5",
    tools=[
        {
            "type": "mcp",
            "server_label": "kobana_banking_sandbox",
            "server_url": "https://mcp.banking.sandbox.kobana.com.br",
            "authorization": os.environ["KOBANA_SANDBOX_MCP_TOKEN"],
            "require_approval": "always",
        }
    ],
    input="Liste meus boletos vencidos",
)
print(response.output_text)
```

Mantenha o `require_approval` ativo para ferramentas de escrita ou libere ferramentas de leitura com `allowed_tools`.

## Claude Agent SDK e outras bibliotecas cliente MCP

Qualquer cliente MCP com Streamable HTTP funciona. Aponte-o para a URL do servidor e envie `Authorization: Bearer <token>`. Para o Claude Agent SDK:

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "kobana-banking-sandbox": {
            "type": "http",
            "url": "https://mcp.banking.sandbox.kobana.com.br",
            "headers": {"Authorization": f"Bearer {os.environ['KOBANA_SANDBOX_MCP_TOKEN']}"},
        }
    },
)
```

## JSON-RPC direto

```bash
curl https://mcp.banking.kobana.com.br/ \
  -H "Authorization: Bearer $KOBANA_MCP_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "MCP-Protocol-Version: 2025-06-18" \
  -d '{ "jsonrpc": "2.0", "id": 1, "method": "tools/list" }'
```

Os servidores são stateless: uma mensagem JSON-RPC por POST, sem sessão. No Gateway Bancário, para agir em uma subconta, envie `X-Account-Uid: <uid>`. No Inbox Autônomo, quando a conta tem mais de um workspace, escolha-o com `X-Workspace-Id: <id>`.

## Checklist de produção

- Um token por aplicação, somente com uso MCP e com a menor validade possível.
- Escopos somente de leitura, a menos que o agente precise escrever.
- Confirmação humana antes de ferramentas destrutivas (pagar, transferir, cancelar).
- Trate nomes, descrições e observações retornados pelas ferramentas como dados, nunca como instruções.

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
