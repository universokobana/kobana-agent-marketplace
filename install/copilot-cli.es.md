# Kobana en GitHub Copilot CLI

[English](copilot-cli.md) · [Português](copilot-cli.pt-BR.md) · **Español**

Instala el **plugin de Kobana** en GitHub Copilot CLI o agrega los servidores MCP de Kobana.

**Autenticación:** OAuth o token personal.

## Instala el plugin

En una sesión de Copilot CLI:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

## Agrega los servidores manualmente

Ejecuta `/mcp add`, elige **HTTP** y completa el nombre y la URL. O edita `~/.copilot/mcp-config.json`:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "tools": [
        "*"
      ]
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br",
      "tools": [
        "*"
      ]
    }
  }
}
```

Con un token personal, agrega `"headers": { "Authorization": "Bearer <token>" }` al servidor.

## Copilot coding agent (github.com)

Para el Copilot coding agent, agrega los servidores en **Repository → Settings → Copilot → Coding agent → MCP configuration** usando el mismo formato con `"type": "http"`, y guarda el token como secreto del entorno de Copilot. Ahí, prefiere tokens de solo lectura: el coding agent se ejecuta sin que una persona apruebe cada llamada.

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
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.es.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
