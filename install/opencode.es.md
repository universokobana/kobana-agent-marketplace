# Kobana en OpenCode

[🇺🇸 English](opencode.md) · [🇧🇷 Português](opencode.pt-BR.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a OpenCode.

**Autenticación:** OAuth (automático) o token personal.

## Pasos

Edita `opencode.json` en tu proyecto (o `~/.config/opencode/opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "kobana-banking": {
      "type": "remote",
      "url": "https://mcp.banking.kobana.com.br",
      "enabled": true
    },
    "kobana-finance": {
      "type": "remote",
      "url": "https://mcp.finance.kobana.com.br",
      "enabled": true
    }
  }
}
```

Luego autentícate:

```bash
opencode mcp auth kobana-banking
```

Con un token personal, usa `"headers": { "Authorization": "Bearer {env:KOBANA_MCP_TOKEN}" }` y `"oauth": false`.

OpenCode también carga Agent Skills: copia `plugins/kobana/skills/*` en `.opencode/skills/` o `.agents/skills/`.

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
- ¿Ves menos herramientas de las esperadas? Se debe al alcance del token o a tus permisos en el dashboard, no es un error. Autoriza de nuevo con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.es.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
