# Kobana en cualquier otro cliente MCP

[🇺🇸 English](../en-US/other-clients.md) · [🇧🇷 Português](../pt-BR/other-clients.md) · **🇪🇸 Español**

Los servidores de Kobana siguen el estándar MCP, así que cualquier cliente que admita servidores remotos funciona. Usa estos valores.

## Valores de conexión

| Configuración | Valor |
|---|---|
| Transporte | Streamable HTTP (stateless). Algunos clientes lo llaman `http`, `streamable-http` o `streamableHttp` |
| URL | La URL del producto que aparece abajo, raíz del host, sin path |
| Autenticación | OAuth 2.1 con PKCE y registro dinámico de clientes. Deja vacíos el client ID y el secret. Fuera del Gateway Bancario, estos clientes reciben acceso de solo lectura |
| Autenticación alternativa | Header `Authorization: Bearer <token personal>`. Necesaria para escribir fuera del Gateway Bancario |
| Subcuentas (Gateway Bancario) | Header `X-Account-Uid: <uid>` |
| Workspace (Inbox Autónomo) | Header `X-Workspace-Id: <id>`, cuando la cuenta tiene más de un workspace |

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

## Configuración JSON genérica

La mayoría de los clientes que leen un archivo JSON aceptan uno de estos formatos:

```json
{
  "mcpServers": {
    "kobana-banking": {
      "type": "http",
      "url": "https://mcp.banking.kobana.com.br"
    }
  }
}
```

```json
{
  "mcpServers": {
    "kobana-banking": {
      "url": "https://mcp.banking.kobana.com.br",
      "headers": {
        "Authorization": "Bearer <token>"
      }
    }
  }
}
```

### Clientes que solo admiten servidores locales (stdio)

Usa [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) como puente. Se ejecuta localmente, se comunica con Kobana por Streamable HTTP y abre el inicio de sesión OAuth en tu navegador (requiere Node.js 18+):

```json
{
  "mcpServers": {
    "kobana-banking": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.banking.kobana.com.br"
      ]
    }
  }
}
```

### Usar un token personal en lugar de OAuth

Crea un token en **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token** (Cuenta Kobana → Tokens y Acceso → Mis Tokens Personales → Nuevo Token), eligiendo la app del producto y el uso **MCP**, con la validez más corta que te sirva. Envíalo como `Authorization: Bearer <token>`. Trata cualquier archivo que contenga el token como un secreto y nunca lo subas al repositorio.

## Skills

Si tu cliente admite Agent Skills (`SKILL.md`), copia las carpetas de [`skills/`](../../skills) en su directorio de skills (por lo general `.agents/skills/` o `~/.agents/skills/`).

## ¿Falta algún cliente?

Abre un issue o un pull request con una nueva guía. Consulta [CONTRIBUTING.es.md](../../i18n/CONTRIBUTING.es.md).

## Próximos pasos

- Prueba: "Lista mis boletos vencidos", "¿Qué cuentas por pagar vencen esta semana?", "¿Qué suscripciones están activas?"
- ¿Ves menos herramientas de las esperadas? Se debe al alcance del token o a tus permisos en el dashboard, no es un error. Autoriza de nuevo con más recursos o pide el permiso que falta al administrador de tu cuenta.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
