# Kobana en Claude (web, escritorio y móvil)

[🇺🇸 English](../en-US/claude-ai.md) · [🇧🇷 Português](../pt-BR/claude-ai.md) · **🇪🇸 Español**

Agrega Kobana como **conector personalizado** en Claude. No necesitas instalar nada: pegas una URL e inicias sesión en Kobana.

**Autenticación:** OAuth (recomendado) · **Planes:** los conectores personalizados están disponibles en los planes pagos de Claude y, con límites, en el plan Free. En Team y Enterprise, puede que un propietario tenga que agregar primero el conector para la organización.

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

Agrega un conector por cada producto que quieras usar.

## Pasos

1. Abre [claude.ai](https://claude.ai) (o la app de escritorio) → **Configuración → Conectores** (Settings → Connectors).
2. Haz clic en **Agregar conector personalizado** (Add custom connector).
3. Nombre: `Kobana Banking` (por ejemplo). URL: `https://mcp.banking.kobana.com.br`.
4. Deja vacíos **OAuth Client ID** y **OAuth Client Secret** en la configuración avanzada.
5. Haz clic en **Agregar** (Add) y luego en **Conectar** (Connect). Claude abre la página de login de Kobana.
6. Elige la cuenta y los recursos, y autoriza.
7. En un chat, abre el menú **Búsqueda y herramientas** (Search and tools) y asegúrate de que el conector de Kobana esté habilitado.

**Solo lectura fuera del Gateway Bancario.** Fuera del Gateway Bancario, los clientes OAuth registrados dinámicamente, como Claude, reciben acceso de solo lectura. Para crear o cambiar registros en los demás productos, usa un token personal en un cliente que lo acepte, como [Claude Code](claude-code.md).

Los conectores agregados en la web también están disponibles en las apps móviles de Claude.

### Team y Enterprise

Los propietarios agregan el conector en **Configuración de administrador → Conectores** (Admin settings → Connectors) o **Configuración de la organización → Conectores** (Organization settings → Connectors). Luego cada miembro se conecta con su propio login de Kobana, así cada persona mantiene sus propios permisos.

### Claude Desktop con servidores locales

Claude Desktop también lee `claude_desktop_config.json` para servidores locales. Los conectores personalizados (arriba) son el camino recomendado para Kobana porque los servidores son remotos. Si necesitas usar el archivo de configuración, usa el puente `mcp-remote`:

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
    },
    "kobana-finance": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.finance.kobana.com.br"
      ]
    }
  }
}
```

### ¿También quieres las skills?

Las skills de Kobana ([`skills/`](../../skills), una por producto) se pueden subir en **Configuración → Capacidades → Skills** (Settings → Capabilities → Skills): comprime en zip la carpeta de una skill (por ejemplo `kobana-banking/`) y súbela.

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
