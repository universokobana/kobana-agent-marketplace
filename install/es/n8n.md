# Kobana en n8n

[🇺🇸 English](../en-US/n8n.md) · [🇧🇷 Português](../pt-BR/n8n.md) · **🇪🇸 Español**

Dale herramientas de Kobana a los AI Agents de n8n con el nodo **MCP Client Tool**.

**Autenticación:** Bearer (token personal), recomendado para automatizaciones; OAuth2 también está disponible.

## Pasos

1. En un workflow, agrega un nodo **AI Agent**.
2. En **Tool**, agrega **MCP Client Tool**.
3. Configura:
   - **Endpoint:** `https://mcp.banking.kobana.com.br`
   - **Server Transport:** HTTP Streamable
   - **Authentication:** Bearer Auth → crea una credencial con tu token MCP de Kobana
   - **Tools to Include:** **Selected**, y elige solo las herramientas que el workflow necesita
4. Agrega un nodo MCP Client Tool por cada producto de Kobana.

Las automatizaciones se ejecutan sin que una persona apruebe cada llamada. Usa un token dedicado por workflow, con alcances de solo lectura salvo que el workflow deba escribir, y prueba primero contra el sandbox del Gateway Bancario.

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
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
