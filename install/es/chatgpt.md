# Kobana en ChatGPT

[🇺🇸 English](../en-US/chatgpt.md) · [🇧🇷 Português](../pt-BR/chatgpt.md) · **🇪🇸 Español**

Agrega cada producto Kobana como **app personalizada (conector)** en ChatGPT usando la URL de su servidor MCP.

**Autenticación:** OAuth · **Planes:** los conectores MCP personalizados requieren un plan que los permita (por ejemplo Plus, Pro, Business, Enterprise y Edu). En los planes de workspace, puede que un administrador tenga que habilitar el modo desarrollador o publicar el conector para el workspace.

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

## Pasos

1. En ChatGPT, abre **Configuración → Apps y Conectores** (Settings → Apps & Connectors), llamado solo **Conectores** (Connectors) en algunas versiones.
2. En **Configuración avanzada** (Advanced settings), activa el **Modo desarrollador** (Developer mode).
3. Haz clic en **Crear** (Create) o **Agregar conector personalizado** (Add custom connector).
4. Completa:
   - **Nombre:** `Kobana Banking`
   - **Descripción:** `Boletos, Pix, pagos y transferencias en Kobana`
   - **URL del servidor MCP:** `https://mcp.banking.kobana.com.br`
   - **Autenticación:** `OAuth`
5. Confirma que confías en la aplicación y haz clic en **Crear** (Create).
6. ChatGPT abre el login de Kobana. Elige la cuenta, los recursos y el nivel de acceso y autoriza.
7. En un chat nuevo, haz clic en **+** → **Más** (More) o **Modo desarrollador** (Developer mode) y selecciona el conector de Kobana.

Repite para cada producto.

**Solo lectura fuera del Gateway Bancario.** Fuera del Gateway Bancario, los clientes OAuth registrados dinámicamente, como ChatGPT, reciben acceso de solo lectura. Para crear o cambiar registros en los demás productos, usa un token personal en un cliente que lo acepte, como [Codex](codex.md).

## Administradores de workspace (Business y Enterprise)

Los administradores pueden crear el conector una sola vez en **Configuración del workspace → Apps y Conectores** (Workspace settings → Apps & Connectors) y publicarlo para los miembros. Cada miembro sigue iniciando sesión en Kobana con su propio usuario, así que los permisos son por persona.

## Acciones de escritura

En ChatGPT, las herramientas de escritura solo están disponibles para el Gateway Bancario. ChatGPT pide confirmación antes de ejecutar herramientas que cambian datos, y las herramientas destructivas de Kobana (pagar, transferir, cancelar) también requieren confirmación. Lee el resumen antes de aprobar.

## Codex

Para la CLI y la extensión de IDE de OpenAI Codex, consulta [codex](codex.md).

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
