# Kobana en Cursor

[🇺🇸 English](cursor.md) · [🇧🇷 Português](cursor.pt-BR.md) · **🇪🇸 Español**

Instala el **plugin de Kobana** en Cursor o agrega los servidores MCP de Kobana con un clic.

**Autenticación:** OAuth (Cursor abre el navegador) o token personal.

## Instala el plugin

Este repositorio incluye un marketplace de Cursor en `.cursor-plugin/marketplace.json` y el plugin en `plugins/kobana/` (con `.cursor-plugin/plugin.json`, `mcp.json` y `skills/`). Agrega el repositorio como fuente de plugins en **Cursor Settings → Plugins**, o instala **Kobana** desde el Cursor Marketplace cuando esté publicado.

## Instalación de un servidor con un clic

Abre un enlace en un navegador con Cursor instalado:

- [Gateway Bancario](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5rb2JhbmEuY29tLmJyIn0=)
- [Gateway Bancario (sandbox)](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-banking-sandbox&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmFua2luZy5zYW5kYm94LmtvYmFuYS5jb20uYnIifQ==)
- [Facturación Automática](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-billing&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuYmlsbGluZy5rb2JhbmEuY29tLmJyIn0=)
- [Financiero Inteligente](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-finance&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZmluYW5jZS5rb2JhbmEuY29tLmJyIn0=)
- [Regla de Cobranza](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dunning&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZHVubmluZy5rb2JhbmEuY29tLmJyIn0=)
- [Dashboard Mágico](cursor://anysphere.cursor-deeplink/mcp/install?name=kobana-dashboards&config=eyJ1cmwiOiAiaHR0cHM6Ly9tY3AuZGFzaGJvYXJkcy5rb2JhbmEuY29tLmJyIn0=)

## Agrega los servidores manualmente

Crea `~/.cursor/mcp.json` (todos los proyectos) o `.cursor/mcp.json` (este proyecto):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "url": "https://mcp.finance.kobana.com.br"
    },
    "kobana-dunning": {
      "url": "https://mcp.dunning.kobana.com.br"
    },
    "kobana-dashboards": {
      "url": "https://mcp.dashboards.kobana.com.br"
    }
  }
}
```

Luego abre **Cursor Settings → MCP** y haz clic en **Login** (o **Needs login**) junto a cada servidor Kobana.

Con un token personal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${env:KOBANA_MCP_TOKEN}"
      }
    }
  }
}
```

Las herramientas MCP se usan en el modo **Agent** de Cursor.

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
