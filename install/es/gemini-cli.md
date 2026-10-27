# Kobana en Gemini CLI

[🇺🇸 English](../en-US/gemini-cli.md) · [🇧🇷 Português](../pt-BR/gemini-cli.md) · **🇪🇸 Español**

Instala Kobana como **extensión de Gemini CLI**. Gemini CLI instala una extensión por repositorio, así que esta incluye todos los productos Kobana: todos los servidores MCP, las skills (`skills/`) y el contexto compartido (`GEMINI.md`).

**Autenticación:** OAuth (`/mcp auth`) o token personal.

> Google anunció Antigravity CLI como sucesor de Gemini CLI. Si usas Antigravity, consulta [antigravity](antigravity.md).

## Instala la extensión

```bash
gemini extensions install https://github.com/universokobana/kobana-agent-marketplace
```

Inicia `gemini` y luego autentica cada servidor que quieras usar:

```text
/mcp auth kobana-banking
```

Solo necesitas autenticar los productos que usas; los demás quedan inactivos. Consulta el estado con `/mcp`. Actualiza con `gemini extensions update kobana` y elimina con `gemini extensions uninstall kobana`.

## Agrega los servidores manualmente

```bash
gemini mcp add --transport http kobana-banking https://mcp.banking.kobana.com.br
```

O edita `~/.gemini/settings.json` (usuario) o `.gemini/settings.json` (proyecto):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-finance": {
      "httpUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

Con un token personal:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "httpUrl": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer $KOBANA_MCP_TOKEN"
      }
    }
  }
}
```

## App de Gemini y Gemini Enterprise

La app de Gemini para consumidores no permite agregar servidores MCP personalizados. En **Gemini Enterprise**, los administradores pueden registrar conectores MCP personalizados en la consola de administración usando las URLs de abajo.

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
