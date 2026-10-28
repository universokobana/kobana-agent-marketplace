# Kobana en JetBrains AI Assistant y Junie

[🇺🇸 English](../en-US/jetbrains.md) · [🇧🇷 Português](../pt-BR/jetbrains.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a los IDE de JetBrains (IntelliJ IDEA, PyCharm, WebStorm, …) para AI Assistant y Junie.

**Autenticación:** OAuth mediante `mcp-remote` o token personal.

## AI Assistant

1. Abre **Settings → Tools → AI Assistant → Model Context Protocol (MCP)**.
2. Haz clic en **Add** y elige **As JSON**.
3. Pega:

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

4. Aplica los cambios. Si tu versión del IDE solo acepta servidores locales, usa el puente `mcp-remote` que se describe abajo.

## Junie

Abre **Settings → Tools → Junie → MCP Settings** y agrega el mismo JSON, o edita `~/.junie/mcp/mcp.json` (global) o `.junie/mcp/mcp.json` (proyecto).

### Clientes que solo admiten servidores locales (stdio)

Usa [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) como puente. Se ejecuta localmente, se comunica con Kobana por Streamable HTTP y abre el inicio de sesión OAuth en tu navegador (requiere Node.js 18+):

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

### Usar un token personal en lugar de OAuth

Crea un token en **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token** (Cuenta Kobana → Tokens y Acceso → Mis Tokens Personales → Nuevo Token), eligiendo la app del producto y el uso **MCP**, con la validez más corta que te sirva. Envíalo como `Authorization: Bearer <token>`. Trata cualquier archivo que contenga el token como un secreto y nunca lo subas al repositorio.

Para GitHub Copilot dentro de JetBrains, consulta [vscode-copilot](vscode-copilot.md): el formato `servers` es el mismo.

## Servidores

| Producto | Nombre sugerido | URL |
|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |
| Inbox Autónomo | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` |

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de las esperadas? Se debe al alcance del token o a tus permisos en el dashboard, no es un error. Autoriza de nuevo con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
