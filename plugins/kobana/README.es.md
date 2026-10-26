# Plugin de Kobana

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

El plugin oficial de Kobana para agentes de IA. Conecta tu agente a los servidores MCP remotos de Kobana y agrega skills que le enseñan a operar las finanzas brasileñas de forma segura.

## Instalación

En Claude Code:

```text
/plugin install kobana --marketplace universokobana/kobana-agent-marketplace
```

Para otros clientes, consulta las [guías de instalación](../../install/README.es.md).

## Servidores MCP

| Servidor | Producto | URL |
|---|---|---|
| `kobana-banking` | Gateway Bancario | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` | Gateway Bancario (sandbox) | `https://mcp.banking.sandbox.kobana.com.br` |
| `kobana-billing` | Facturación Automática | `https://mcp.billing.kobana.com.br` |
| `kobana-finance` | Financiero Inteligente | `https://mcp.finance.kobana.com.br` |
| `kobana-dunning` | Regla de Cobranza | `https://mcp.dunning.kobana.com.br` |
| `kobana-dashboards` | Dashboard Mágico | `https://mcp.dashboards.kobana.com.br` |

La autenticación es OAuth 2.1: en el primer uso, tu cliente abre el login de Kobana. Los servidores que nunca autentiques quedan inactivos.

## Skills

| Skill | Úsala para |
|---|---|
| `kobana` | Elegir el servidor correcto, permisos y reglas de seguridad |
| `kobana-banking` | Boletos, Pix, pagos, transferencias, cuentas y extractos |
| `kobana-billing` | Clientes, planes, suscripciones, facturas y NFS-e |
| `kobana-finance` | Workspaces, cuentas por pagar, cuentas por cobrar, conciliación y flujo de caja |
| `kobana-dunning` | Cobros vencidos, reglas de cobranza, acuerdos y disputas |
| `kobana-dashboards` | Usuarios del portal, equipo y organización |

## Archivos

| Archivo | Lo leen |
|---|---|
| `plugin.json`, `mcp.json` | Clientes Agent Plugins 1.0 (VS Code, Copilot CLI, Cursor) |
| `.claude-plugin/plugin.json`, `.mcp.json` | Claude Code |
| `.codex-plugin/plugin.json`, `.mcp.json` | OpenAI Codex |
| `.cursor-plugin/plugin.json`, `mcp.json` | Cursor |
| `skills/*/SKILL.md` | Todos los clientes compatibles con Agent Skills |

Todos los manifiestos se generan a partir del `catalog.json` del repositorio. Instrucciones de instalación: [guías de instalación](../../install/README.es.md).
