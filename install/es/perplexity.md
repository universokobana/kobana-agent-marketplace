# Kobana en Perplexity

[🇺🇸 English](../en-US/perplexity.md) · [🇧🇷 Português](../pt-BR/perplexity.md) · **🇪🇸 Español**

Conecta Kobana a Perplexity mediante **conectores personalizados** (MCP remoto) o, en la app para Mac, un puente MCP local.

**Autenticación:** OAuth o token personal. **Planes:** los conectores personalizados dependen de tu plan de Perplexity (Pro, Max o Enterprise) y pueden habilitarse de forma gradual.

## Conector remoto personalizado

1. Abre **Configuración → Conectores** (Settings → Connectors).
2. Haz clic en **+ Custom connector** (o **Add connector → Custom MCP**).
3. Ponle el nombre `Kobana Banking` y pega `https://mcp.banking.kobana.com.br`.
4. Elige **OAuth** como método de autenticación y completa el login de Kobana. Si no se ofrece OAuth, usa **API key / header** con un token personal.
5. Habilita el conector en **Sources** cuando inicies un hilo.

## Perplexity para Mac (MCP local)

La app para Mac soporta servidores MCP locales. Instala **PerplexityXPC** cuando se te pida, luego ve a **Settings → Connectors → Add Connector → Advanced** y pega:

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

`mcp-remote` abre el login de Kobana en tu navegador en el primer uso.

### Usar un token personal en lugar de OAuth

Crea un token en **Conta Kobana → Tokens e Acesso → Meus Tokens Pessoais → Novo Token** (Cuenta Kobana → Tokens y Acceso → Mis Tokens Personales → Nuevo Token), eligiendo la app del producto y el uso **MCP**, con la validez más corta que te sirva. Envíalo como `Authorization: Bearer <token>`. Trata cualquier archivo que contenga el token como un secreto y nunca hagas commit de él.

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
