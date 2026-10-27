# Kobana en Kiro

[🇺🇸 English](../en-US/kiro.md) · [🇧🇷 Português](../pt-BR/kiro.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Kiro (IDE y CLI).

**Autenticación:** OAuth o token personal.

## Pasos

Abre el panel de **Kiro** → **MCP Servers** → **Edit config**, o edita `~/.kiro/settings/mcp.json` (usuario) o `.kiro/settings/mcp.json` (workspace):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Guarda. Kiro se conecta y abre el inicio de sesión de Kobana cuando el servidor lo requiere.

Con un token personal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

No agregues las herramientas de escritura de Kobana a `autoApprove`.

Kiro también carga Agent Skills: copia `skills/*` en `.kiro/skills/` para usarlas.

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
