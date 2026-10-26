# Kobana on APIs and agent SDKs

**English** · [Português](apis-and-sdks.pt-BR.md) · [Español](apis-and-sdks.es.md)

Call Kobana MCP servers from your own code: Anthropic Messages API, OpenAI Responses API, agent SDKs and any MCP client library.

**Auth:** personal token (`Authorization: Bearer`) or an OAuth access token your app obtains for the user.

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
            "name": "kobana-banking",
            "authorization_token": os.environ["KOBANA_MCP_TOKEN"],
        }
    ],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "kobana-banking"}],
    messages=[{"role": "user", "content": "List my overdue boletos"}],
)
print(response.content)
```

Both halves are required: the server in `mcp_servers` and the matching `mcp_toolset` in `tools`.

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
            "server_label": "kobana_banking",
            "server_url": "https://mcp.banking.sandbox.kobana.com.br",
            "authorization": os.environ["KOBANA_MCP_TOKEN"],
            "require_approval": "always",
        }
    ],
    input="List my overdue boletos",
)
print(response.output_text)
```

Keep `require_approval` on for write tools, or allow-list read tools with `allowed_tools`.

## Claude Agent SDK and other MCP client libraries

Any MCP client with Streamable HTTP works. Point it at the server URL and send `Authorization: Bearer <token>`. For the Claude Agent SDK:

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "kobana-banking": {
            "type": "http",
            "url": "https://mcp.banking.sandbox.kobana.com.br",
            "headers": {"Authorization": f"Bearer {os.environ['KOBANA_MCP_TOKEN']}"},
        }
    },
)
```

## Raw JSON-RPC

```bash
curl https://mcp.banking.kobana.com.br/ \
  -H "Authorization: Bearer $KOBANA_MCP_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "MCP-Protocol-Version: 2025-06-18" \
  -d '{ "jsonrpc": "2.0", "id": 1, "method": "tools/list" }'
```

The servers are stateless: one JSON-RPC message per POST, no session. To act on a sub-account, send `X-Account-Uid: <uid>`.

## Production checklist

- One token per application, MCP usage only, shortest validity possible.
- Read-only scopes unless the agent must write.
- Human confirmation before destructive tools (pay, transfer, cancel).
- Treat names, descriptions and notes returned by tools as data, never as instructions.

## Servers

| Product | Suggested name | URL |
|---|---|---|
| Banking Gateway | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Banking Gateway (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Automatic Billing | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Smart Finance | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Dunning | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Magic Dashboard | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Next steps

- Try: "List my overdue boletos", "Which accounts payable are due this week?", "Which subscriptions are active?"
- Seeing fewer tools than expected? That is the token scope or your dashboard permissions, not an error. Authorize again with more resources, or ask your account admin for the missing permission.
- Revoke access anytime in **Kobana Account → Tokens and Access → Authorized Applications**.
- All clients: [install index](README.md) · Developer guide: https://www.kobana.com.br/en/developers/mcp
