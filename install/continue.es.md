# Kobana en Continue

[🇺🇸 English](continue.md) · [🇧🇷 Português](continue.pt-BR.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Continue (VS Code y JetBrains).

**Autenticación:** token personal u OAuth mediante `mcp-remote`. Las herramientas MCP están disponibles en el modo **Agent** de Continue.

## Pasos

Crea un archivo en `.continue/mcpServers/` (por ejemplo, `.continue/mcpServers/kobana.yaml`):

```yaml
name: Kobana MCP servers
version: 0.0.1
schema: v1
mcpServers:
  - name: kobana-banking
    type: streamable-http
    url: https://mcp.banking.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN }}
  - name: kobana-finance
    type: streamable-http
    url: https://mcp.finance.kobana.com.br
    requestOptions:
      headers:
        Authorization: Bearer ${{ secrets.KOBANA_MCP_TOKEN_FINANCE }}
```

Guarda los tokens como secretos de Continue (Hub) o en un `.env` local en `~/.continue/`.

### Usar un token personal en lugar de OAuth

Crea un token en **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token** (Cuenta Kobana → Tokens y Acceso → Mis Tokens Personales → Nuevo Token), eligiendo la app del producto y el uso **MCP**, con la validez más corta que te sirva. Envíalo como `Authorization: Bearer <token>`. Trata cualquier archivo que contenga el token como un secreto y nunca lo subas al repositorio.

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
