# Kobana en Manus

[🇺🇸 English](../en-US/manus.md) · [🇧🇷 Português](../pt-BR/manus.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Manus como **conectores MCP personalizados**.

**Autenticación:** OAuth cuando tu versión de Manus lo soporte; si no, token personal en un header.

## Pasos

1. En Manus, abre **Configuración → Conectores** (Settings → Connectors), o **Integraciones** (Integrations).
2. Haz clic en **Add connectors → Custom MCP → Add custom MCP**.
3. Elige **Direct configuration** (o **Import by JSON**).
4. Completa:
   - **Server name:** `kobana-banking`
   - **Transport:** HTTP (Streamable HTTP)
   - **URL:** `https://mcp.banking.kobana.com.br`
   - **Headers:** `Authorization: Bearer <tu token MCP de Kobana>` (si no se ofrece OAuth)
5. Guarda y habilita el conector en tu tarea.

Importar por JSON:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "streamableHttp",
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

### Usar un token personal en lugar de OAuth

Crea un token en **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token** (Cuenta Kobana → Tokens y Acceso → Mis Tokens Personales → Nuevo Token), eligiendo la app del producto y el uso **MCP**, con la validez más corta que te sirva. Envíalo como `Authorization: Bearer <token>`. Trata cualquier archivo que contenga el token como un secreto y nunca hagas commit de él.

Manus ejecuta tareas de forma autónoma. Prefiere tokens de solo lectura y empieza a trabajar con el Gateway Bancario en el sandbox.

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
