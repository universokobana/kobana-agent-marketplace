# Kobana en OpenAI Codex (CLI, extensión de IDE y app)

[🇺🇸 English](../en-US/codex.md) · [🇧🇷 Português](../pt-BR/codex.md) · **🇪🇸 Español**

Instala los **plugins de Kobana** desde este marketplace (uno por producto) o agrega los servidores MCP de Kobana directamente en Codex.

**Autenticación:** OAuth (`codex mcp login`) o token personal.

## Instala los plugins

Este repositorio incluye un marketplace de Codex en `.agents/plugins/marketplace.json` con un plugin por producto (`plugins/<plugin>/.codex-plugin/plugin.json`):

| Plugin | Producto | Servidores MCP |
|---|---|---|
| `kobana-banking` | Gateway Bancario | `kobana-banking`, `kobana-banking-sandbox` |
| `kobana-billing` | Facturación Automática | `kobana-billing` |
| `kobana-finance` | Financiero Inteligente | `kobana-finance` |
| `kobana-dunning` | Regla de Cobranza | `kobana-dunning` |
| `kobana-dashboards` | Dashboard Mágico | `kobana-dashboards` |
| `kobana-inbox` | Inbox Autónomo | `kobana-inbox` |

```bash
codex plugin marketplace add universokobana/kobana-agent-marketplace
```

Luego abre `/plugins` en una sesión de Codex, e instala los plugins de Kobana que necesites. Inicia sesión en cada servidor Kobana cuando Codex lo pida, o ejecuta `codex mcp login <server>`.

## Agrega los servidores manualmente

```bash
codex mcp add kobana-banking --url https://mcp.banking.kobana.com.br
codex mcp login kobana-banking
```

O edita `~/.codex/config.toml`:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"

[mcp_servers.kobana-finance]
url = "https://mcp.finance.kobana.com.br"
```

Con un token personal, guarda el token en una variable de entorno:

```toml
[mcp_servers.kobana-banking]
url = "https://mcp.banking.kobana.com.br"
bearer_token_env_var = "KOBANA_MCP_TOKEN"
```

## Solo las skills

Codex lee Agent Skills desde `~/.agents/skills/` (personales) y `.agents/skills/` (del repositorio). Copia ahí las carpetas de [`skills/`](../../skills) si solo quieres las skills.

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

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de lo esperado? Se debe al scope del token o a tus permisos en el panel, no a un error. Vuelve a autorizar con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
