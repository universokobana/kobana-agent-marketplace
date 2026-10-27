# Kobana en Mistral Le Chat

[🇺🇸 English](../en-US/le-chat.md) · [🇧🇷 Português](../pt-BR/le-chat.md) · **🇪🇸 Español**

Agrega Kobana a Mistral Le Chat como **conector MCP personalizado**.

**Autenticación:** OAuth o token personal.

## Pasos

1. En Le Chat, abre **Intelligence → Connectors** (menú izquierdo).
2. Haz clic en **+ Add connector** → **Custom MCP Connector**.
3. Completa:
   - **Connector name:** `kobana-banking`
   - **Connector server:** `https://mcp.banking.kobana.com.br`
   - **Description:** `Kobana Banking Gateway: boletos, Pix, payments and transfers`
4. Elige la autenticación: **OAuth 2.1** (recomendado) o **API key / HTTP header** con `Authorization: Bearer <token>`.
5. Haz clic en **Connect** y completa el login de Kobana.
6. En un chat, abre **Tools** y habilita el conector.

En Le Chat Enterprise, los administradores pueden agregar el conector para toda la organización.

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
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
