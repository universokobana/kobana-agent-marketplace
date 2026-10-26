<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Plugin Kobana Facturación Automática

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

El plugin oficial de Kobana para Facturación Automática: clientes, suscripciones, facturas, NFS-e y propuestas. Conecta tu agente de IA al servidor MCP remoto de Kobana y agrega una skill con los flujos y las reglas de seguridad del producto.

## Instalación

En Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-billing@kobana-agent-marketplace
```

Para otros clientes, consulta las [guías de instalación](../../install/README.es.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-billing` | `https://mcp.billing.kobana.com.br` |

La autenticación es OAuth 2.1: en el primer uso, tu cliente abre el inicio de sesión de Kobana.

[Conoce más sobre el producto](https://www.kobana.com.br/es/productos/facturacion-automatica) · [MCP docs](https://docs.billing.kobana.com.br/pt/mcp/overview/introduction) · [Privacidad](https://www.kobana.com.br/es/privacidad)

> Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.
