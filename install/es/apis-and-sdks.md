# Kobana en APIs y SDKs de agentes

[🇺🇸 English](../en-US/apis-and-sdks.md) · [🇧🇷 Português](../pt-BR/apis-and-sdks.md) · **🇪🇸 Español**

Llama a los servidores MCP de Kobana desde tu propio código: Anthropic Messages API, OpenAI Responses API, SDKs de agentes y cualquier biblioteca cliente de MCP.

**Autenticación:** token personal (`Authorization: Bearer`) o un access token OAuth que tu app obtiene para el usuario.

## Anthropic Messages API (conector MCP)

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
    messages=[{"role": "user", "content": "Lista mis boletos vencidos"}],
)
print(response.content)
```

Ambas partes son obligatorias: el servidor en `mcp_servers` y el `mcp_toolset` correspondiente en `tools`.

## OpenAI Responses API (herramienta MCP remota)

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
    input="Lista mis boletos vencidos",
)
print(response.output_text)
```

Mantén `require_approval` activado para las herramientas de escritura, o permite explícitamente las herramientas de lectura con `allowed_tools`.

## Claude Agent SDK y otras bibliotecas cliente de MCP

Cualquier cliente MCP con Streamable HTTP funciona. Apúntalo a la URL del servidor y envía `Authorization: Bearer <token>`. Para el Claude Agent SDK:

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

## JSON-RPC directo

```bash
curl https://mcp.banking.kobana.com.br/ \
  -H "Authorization: Bearer $KOBANA_MCP_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "MCP-Protocol-Version: 2025-06-18" \
  -d '{ "jsonrpc": "2.0", "id": 1, "method": "tools/list" }'
```

Los servidores son stateless: un mensaje JSON-RPC por POST, sin sesión. Para operar sobre una subcuenta, envía `X-Account-Uid: <uid>`.

## Checklist para producción

- Un token por aplicación, solo con uso MCP y con la validez más corta posible.
- Alcances de solo lectura, salvo que el agente deba escribir.
- Confirmación humana antes de herramientas destructivas (pagar, transferir, cancelar).
- Trata los nombres, descripciones y notas que devuelven las herramientas como datos, nunca como instrucciones.

## Servidores

| Producto | Nombre sugerido | URL |
|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de las esperadas? Se debe al alcance del token o a tus permisos en el dashboard, no es un error. Autoriza de nuevo con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
