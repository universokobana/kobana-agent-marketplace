# Kobana en Raycast

[English](raycast.md) · [Português](raycast.pt-BR.md) · **Español**

Usa Kobana desde Raycast AI mediante la extensión MCP.

**Autenticación:** OAuth mediante `mcp-remote` o token personal.

## Pasos

1. Instala la extensión **Model Context Protocol** desde la Raycast Store.
2. Ejecuta **Install Server** y completa:
   - **Name:** `kobana-banking`
   - **Command:** `npx`
   - **Arguments:** `-y mcp-remote https://mcp.banking.kobana.com.br`
3. En Raycast AI Chat, menciona `@kobana-banking` para usar sus herramientas.

O pega una configuración JSON mientras el formulario **Install Server** está abierto (Raycast completa el formulario):

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

Requiere Node.js 18 o posterior.

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
- Todos los clientes: [índice de instalación](README.es.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
