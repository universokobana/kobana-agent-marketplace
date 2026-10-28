# Kobana en Windsurf

[🇺🇸 English](../en-US/windsurf.md) · [🇧🇷 Português](../pt-BR/windsurf.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Cascade, de Windsurf.

**Autenticación:** OAuth o token personal.

## Pasos

1. Abre **Windsurf Settings → Cascade → MCP Servers** y haz clic en **View raw config** (o **Add custom server**).
2. Edita `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-billing": {
      "serverUrl": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

3. Guarda y haz clic en **Refresh**. Windsurf abre el login de Kobana cuando es necesario.

Con un token personal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

Cascade tiene un límite en la cantidad total de herramientas habilitadas. Habilita solo los servidores Kobana que necesites o desactiva en el panel MCP las herramientas que no uses.

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
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
