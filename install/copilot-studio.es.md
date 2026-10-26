# Kobana en Microsoft Copilot Studio

[English](copilot-studio.md) · [Português](copilot-studio.pt-BR.md) · **Español**

Dales a tus agentes de Copilot Studio las herramientas de Kobana agregando los servidores MCP de Kobana.

**Autenticación:** OAuth 2.0 (descubrimiento dinámico) o API key (token personal en un header).

## Pasos

1. Abre tu agente en [Copilot Studio](https://copilotstudio.microsoft.com).
2. Ve a **Tools → Add a tool → New tool → Model Context Protocol**.
3. Completa:
   - **Server name:** `Kobana Banking`
   - **Server description:** `Boletos, Pix, payments, transfers and bank statements on Kobana`
   - **Server URL:** `https://mcp.banking.kobana.com.br`
4. Autenticación:
   - **OAuth 2.0 → Dynamic discovery** (recomendado). Deja vacíos el client ID y el secret si se ofrece el registro dinámico.
   - O **API key → Header**, con el nombre de header `Authorization`, y guarda `Bearer <token>` como la clave.
5. Haz clic en **Create**, luego crea una conexión e inicia sesión en Kobana.
6. Agrega la herramienta al agente y elige qué herramientas quedan habilitadas.

Los agentes de Copilot Studio pueden ejecutarse sin una persona en el circuito. Concede acceso de solo lectura salvo que el agente realmente necesite escribir, y exige confirmación para las herramientas destructivas en las instrucciones del agente.

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
