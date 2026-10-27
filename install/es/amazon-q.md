# Kobana en Amazon Q Developer

[🇺🇸 English](../en-US/amazon-q.md) · [🇧🇷 Português](../pt-BR/amazon-q.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Amazon Q Developer (CLI y plugins para IDE).

**Autenticación:** OAuth o token personal.

## Pasos

Edita `~/.aws/amazonq/mcp.json` (global) o `.amazonq/mcp.json` (workspace):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

En el IDE, también puedes usar el ícono **Configure MCP servers** (herramientas) del panel de chat de Q → **+** → transporte **HTTP**.

Con un token personal, agrega `"headers": { "Authorization": "Bearer <token>" }`.

Amazon Q Developer CLI está evolucionando hacia Kiro CLI. Si usas Kiro, consulta [kiro](kiro.md).

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
