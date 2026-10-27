# Kobana en VS Code con GitHub Copilot

[🇺🇸 English](../en-US/vscode-copilot.md) · [🇧🇷 Português](../pt-BR/vscode-copilot.md) · **🇪🇸 Español**

Instala los **agent plugins de Kobana** (Agent Plugins 1.0, uno por producto) en VS Code o agrega los servidores MCP de Kobana a `mcp.json`.

**Autenticación:** OAuth (VS Code se encarga del login en el navegador) o token personal. **Requiere:** GitHub Copilot con modo agente. En organizaciones, puede que un administrador tenga que permitir servidores MCP y agent plugins.

## Instala los plugins

Agrega este repositorio como marketplace de plugins en el `settings.json` de VS Code:

```json
{
  "chat.plugins.marketplaces": [
    "universokobana/kobana-agent-marketplace"
  ]
}
```

Luego abre la vista **Extensions**, busca `@agentPlugins kobana` e instala los productos que usas. Cada plugin trae su servidor MCP (`plugins/<plugin>/mcp.json`) y su skill (`plugins/<plugin>/skills/`).

| Plugin | Producto | Servidores MCP |
|---|---|---|
| `kobana-banking` | Gateway Bancario | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Facturación Automática | `kobana-billing` |
| `kobana-finance` | Financiero Inteligente | `kobana-finance` |
| `kobana-dunning` | Regla de Cobranza | `kobana-dunning` |
| `kobana-dashboards` | Dashboard Mágico | `kobana-dashboards` |

Para recomendarlo a todas las personas que trabajan en un repositorio, agrega a `.vscode/settings.json`:

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

## Agrega los servidores manualmente

Ejecuta **MCP: Add Server** desde la Command Palette, elige **HTTP**, pega la URL y dale un nombre. O crea `.vscode/mcp.json` (workspace) o usa **MCP: Open User Configuration**:

```json
{
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "type": "http",
      "url": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-billing": {
      "type": "http",
      "url": "https://mcp.billing.kobana.com.br"
    },
    "kobana-finance": {
      "type": "http",
      "url": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Desde la línea de comandos:

```bash
code --add-mcp '{"name":"kobana-banking","type":"http","url":"https://mcp.banking.kobana.com.br"}'
```

Cuando inicias el servidor, VS Code te pide iniciar sesión en Kobana. Abre Copilot Chat en modo **Agent** y elige las herramientas de Kobana en el menú de herramientas.

Con un token personal, usa un input para que el token no quede guardado en texto plano:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "kobana-token",
      "description": "Kobana MCP token",
      "password": true
    }
  ],
  "servers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer ${input:kobana-token}"
      }
    }
  }
}
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

Visual Studio, JetBrains, Eclipse y Xcode con GitHub Copilot usan el mismo formato `servers` en su propia configuración MCP.

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
