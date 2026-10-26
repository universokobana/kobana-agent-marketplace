# Kobana en Google Antigravity

[English](antigravity.md) · [Português](antigravity.pt-BR.md) · **Español**

Agrega los servidores MCP de Kobana a Google Antigravity (el IDE agéntico) y a Antigravity CLI.

**Autenticación:** OAuth o token personal.

## Antigravity IDE

1. Abre el menú del panel del agente (**…**) → **MCP Servers** → **Manage MCP Servers**.
2. Haz clic en **View raw config** para abrir `mcp_config.json`.
3. Agrega los servidores de Kobana:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "serverUrl": "https://mcp.banking.kobana.com.br"
    },
    "kobana-banking-sandbox": {
      "serverUrl": "https://mcp.banking.sandbox.kobana.com.br"
    },
    "kobana-finance": {
      "serverUrl": "https://mcp.finance.kobana.com.br"
    }
  }
}
```

4. Guarda y actualiza la lista de servidores. Antigravity abre el login de Kobana para cada servidor.

Con un token personal, agrega `"headers": { "Authorization": "Bearer <token>" }` a cada servidor.

## Antigravity CLI

Antigravity CLI es el sucesor de Gemini CLI y mantiene el soporte de extensiones. Instala este repositorio como extensión de la misma forma descrita en [gemini-cli](gemini-cli.es.md), usando el comando `antigravity` en lugar de `gemini` si tu versión lo renombró.

## Skills

Copia las carpetas de `plugins/kobana/skills/` al directorio de skills de tu workspace para darle al agente los flujos de trabajo y las reglas de seguridad de Kobana.

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
