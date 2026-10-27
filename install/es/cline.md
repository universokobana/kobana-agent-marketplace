# Kobana en Cline

[🇺🇸 English](../en-US/cline.md) · [🇧🇷 Português](../pt-BR/cline.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Cline (VS Code y JetBrains).

**Autenticación:** OAuth o token personal.

## Pasos

1. Haz clic en el ícono **MCP Servers** del panel de Cline → **Remote Servers**.
2. Nombre del servidor: `kobana-banking`. URL del servidor: `https://mcp.banking.kobana.com.br`. Transporte: **Streamable HTTP**.
3. Haz clic en **Add Server** y completa el inicio de sesión en Kobana si se te solicita.

O haz clic en **Configure MCP Servers** y edita `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "disabled": false
    },
    "kobana-finance": {
      "type": "streamableHttp",
      "url": "https://mcp.finance.kobana.com.br",
      "disabled": false
    }
  }
}
```

Con un token personal, agrega `"headers": { "Authorization": "Bearer <token>" }`.

Mantén **auto-approve** desactivado para las herramientas de escritura de Kobana.

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
