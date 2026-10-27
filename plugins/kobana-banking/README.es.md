<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Plugin Kobana Gateway Bancario

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

El plugin oficial de Kobana para Gateway Bancario: boletos, Pix, pagos, transferencias, extractos y clientes en más de 40 bancos brasileños. Conecta tu agente de IA al servidor MCP remoto de Kobana y agrega una skill con los flujos y las reglas de seguridad del producto.

## Instalación

En Claude Code:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-banking@kobana-agent-marketplace
```

Para otros clientes, consulta las [guías de instalación](../../install/README.es.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-banking` | `https://mcp.banking.kobana.com.br` |
| `kobana-banking-sandbox` (sandbox, datos aislados de producción) | `https://mcp.banking.sandbox.kobana.com.br` |

La autenticación es OAuth 2.1: en el primer uso, tu cliente abre el inicio de sesión de Kobana.

## Enlaces

- **Sitio web**: https://www.kobana.com.br/es/productos/gateway-bancario
- **Documentación**: https://docs.banking.kobana.com.br/es
- **API**: https://docs.banking.kobana.com.br/es/api/overview
- **MCP**: https://docs.banking.kobana.com.br/es/mcp/overview/introduction
- **CLI**: https://docs.banking.kobana.com.br/es/cli/overview/introduction
- **Privacidad**: https://www.kobana.com.br/es/privacidad
- **Términos de uso**: https://www.kobana.com.br/es/terminos

> Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.
