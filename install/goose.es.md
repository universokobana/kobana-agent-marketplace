# Kobana en Goose

[🇺🇸 English](goose.md) · [🇧🇷 Português](goose.pt-BR.md) · **🇪🇸 Español**

Agrega los servidores MCP de Kobana a Goose (escritorio y CLI) como extensiones remotas.

**Autenticación:** OAuth o token personal.

## Escritorio

1. **Extensions → Add custom extension**.
2. Tipo: **Streamable HTTP**. Nombre: `kobana-banking`. Endpoint: `https://mcp.banking.kobana.com.br`.
3. Opcionalmente, agrega el header `Authorization: Bearer <token>`.
4. Guarda y habilítala.

## CLI

```bash
goose configure
# Add Extension → Remote Extension (Streamable HTTP)
# name: kobana-banking
# URI: https://mcp.banking.kobana.com.br
```

O edita `~/.config/goose/config.yaml`:

```yaml
extensions:
  kobana-banking:
    enabled: true
    type: streamable_http
    name: kobana-banking
    uri: https://mcp.banking.kobana.com.br
    timeout: 300
```

Goose también carga Agent Skills: copia `skills/*` en `~/.config/goose/skills/` o `.agents/skills/`.

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
