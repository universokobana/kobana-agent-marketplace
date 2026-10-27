# Kobana en Claude Code

[🇺🇸 English](../en-US/claude-code.md) · [🇧🇷 Português](../pt-BR/claude-code.md) · **🇪🇸 Español**

Instala los **plugins de Kobana** desde este marketplace, uno por producto. Cada plugin configura el servidor MCP del producto y agrega su skill.

**Autenticación:** OAuth con `/mcp` (recomendado) o token personal.

## Instala los plugins (recomendado)

| Plugin | Producto | Servidores MCP |
|---|---|---|
| `kobana-banking` | Gateway Bancario | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Facturación Automática | `kobana-billing` |
| `kobana-finance` | Financiero Inteligente | `kobana-finance` |
| `kobana-dunning` | Regla de Cobranza | `kobana-dunning` |
| `kobana-dashboards` | Dashboard Mágico | `kobana-dashboards` |

En una sesión de Claude Code, agrega el marketplace una vez e instala los productos que usas:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-banking@kobana-agent-marketplace
/plugin install kobana-billing@kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
/plugin install kobana-dunning@kobana-agent-marketplace
/plugin install kobana-dashboards@kobana-agent-marketplace
```

O desde tu terminal:

```bash
claude plugin marketplace add universokobana/kobana-agent-marketplace
claude plugin install kobana-finance@kobana-agent-marketplace
```

También puedes ejecutar `/plugin`, abrir la pestaña **Discover** y elegir los plugins de Kobana.

Luego autentícate:

1. Ejecuta `/mcp`.
2. Selecciona un servidor Kobana (por ejemplo `kobana-banking`) y elige **Authenticate**.
3. Inicia sesión en Kobana en el navegador y autoriza.

Repite para cada plugin que instalaste.

## Compártelo con tu equipo

Haz commit de esto en el `.claude/settings.json` de tu proyecto para que a tus compañeros se les ofrezcan los plugins automáticamente:

```json
{
  "extraKnownMarketplaces": {
    "kobana-agent-marketplace": {
      "source": {
        "source": "github",
        "repo": "universokobana/kobana-agent-marketplace"
      }
    }
  },
  "enabledPlugins": {
    "kobana-banking@kobana-agent-marketplace": true,
    "kobana-finance@kobana-agent-marketplace": true
  }
}
```

Incluye solo los plugins que usa tu equipo.

## Agrega los servidores manualmente (sin los plugins)

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
claude mcp add --transport http kobana-finance https://mcp.finance.kobana.com.br
```

Usa `--scope project` para escribirlos en `.mcp.json`, o `--scope user` para todos los proyectos.

Con un token personal:

```bash
claude mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br \
  --header "Authorization: Bearer $KOBANA_MCP_TOKEN"
```

## Servidores

| Producto | Nombre sugerido | URL |
|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` |

## Actualizar o eliminar

```text
/plugin marketplace update kobana-agent-marketplace
/plugin uninstall kobana-finance@kobana-agent-marketplace
```

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
