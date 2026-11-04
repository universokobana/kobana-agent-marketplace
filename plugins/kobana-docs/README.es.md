<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

![Kobana](assets/kobana-logo-light.png#gh-light-mode-only)
![Kobana](assets/kobana-logo-dark.png#gh-dark-mode-only)

# Kobana Documentación

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

El plugin oficial de **Documentación** de [Kobana](https://www.kobana.com.br/es). Tu agente de IA busca y lee la documentación de cada producto Kobana y de Kobana CLI, así que las respuestas salen de la documentación actual.

> Nosotros cuidamos de tus procesos, mientras tú cuidas de tu propósito.

- **Nada que instalar y nada para autenticar.** Los servidores son públicos y no piden cuenta ni token.
- **Solo lectura.** Solo devuelven páginas de documentación que cualquiera lee en el sitio. No se accede a datos de ninguna cuenta.
- **Una skill que sabe dónde buscar.** Le dice al agente qué servidor tiene qué documentación y señala el plugin del producto cuando quieres operar una cuenta.

## Contenido

- [Acerca de Documentación](#acerca-de-documentación)
- [Prueba a preguntar](#prueba-a-preguntar)
- [Instalación](#instalación)
- [Servidores MCP](#servidores-mcp)
- [Seguridad desde el diseño](#seguridad-desde-el-diseño)
- [Otros plugins de Kobana](#otros-plugins-de-kobana)
- [Enlaces](#enlaces)
- [Licencia](#licencia)

## Acerca de Documentación

**La documentación de Kobana dentro de tu agente de IA.** Cada producto y Kobana CLI tienen un servidor MCP público de documentación. El agente busca en las páginas publicadas y lee el contenido completo, en portugués, inglés o español, así que las respuestas salen de la documentación actual.

- Tres herramientas en cada servidor: `list_pages`, `search_docs` y `get_page`
- Público y de solo lectura: sin inicio de sesión, sin token y sin acceso a ninguna cuenta
- Siempre al día: lee la documentación publicada
- Para operar un producto (crear boletos, listar facturas), instala el plugin de ese producto

## Prueba a preguntar

- "¿Cómo creo un boleto con la API de Kobana?"
- "¿Cómo instalo Kobana CLI?"
- "¿Cómo funcionan las suscripciones en Facturación Automática?"

## Instalación

En claude.ai y en Cowork, agrega el plugin desde el directorio. En Claude Code, agrega el marketplace una vez e instala el plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-docs@kobana-agent-marketplace
```

Para ChatGPT, Codex, Cursor, Copilot, Gemini y más de 20 clientes, consulta las [guías de instalación](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/es/README.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-docs-banking` | `https://docs.banking.kobana.com.br/mcp` |
| `kobana-docs-billing` | `https://docs.billing.kobana.com.br/mcp` |
| `kobana-docs-finance` | `https://docs.finance.kobana.com.br/mcp` |
| `kobana-docs-dunning` | `https://docs.dunning.kobana.com.br/mcp` |
| `kobana-docs-dashboards` | `https://docs.dashboards.kobana.com.br/mcp` |
| `kobana-docs-inbox` | `https://docs.inbox.kobana.com.br/mcp` |
| `kobana-docs-hub` | `https://docs.hub.kobana.com.br/mcp` |
| `kobana-docs-kadu` | `https://docs.kadu.ia.br/mcp` |
| `kobana-docs-cli` | `https://cli.kobana.com.br/mcp` |

Estos servidores son públicos: sin autenticación, sin OAuth y sin token. No les envíes credenciales.

## Seguridad desde el diseño

- **Solo contenido público.** Los servidores devuelven las mismas páginas que cualquiera ve en los sitios de documentación. No acceden a tu cuenta Kobana.
- **Sin inicio de sesión, sin token.** No hay nada que autorizar ni revocar.
- **La documentación es dato, no instrucción.** Las páginas pueden citar textos de terceros. La skill indica al agente que no siga órdenes encontradas en ellas.

Para reportar una vulnerabilidad, consulta la [política de seguridad](https://github.com/universokobana/kobana-agent-marketplace/blob/main/i18n/SECURITY.es.md) y nuestra [Política White Hat](https://www.kobana.com.br/es/white-hat).

## Otros plugins de Kobana

- **[Gateway Bancario](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-banking/README.es.md)** (`kobana-banking`): Boletos, Pix, pagos, transferencias, extractos y clientes en más de 40 bancos brasileños.
- **[Facturación Automática](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-billing/README.es.md)** (`kobana-billing`): Clientes, suscripciones, facturas, NFS-e y propuestas.
- **[Financiero Inteligente](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-finance/README.es.md)** (`kobana-finance`): Cuentas por pagar y por cobrar, asientos, conciliación y flujo de caja.
- **[Regla de Cobranza](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-dunning/README.es.md)** (`kobana-dunning`): Cobros, reglas de cobranza, acuerdos y disputas.
- **[Dashboard Mágico](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-dashboards/README.es.md)** (`kobana-dashboards`): Usuarios del portal, equipo y organización.
- **[Inbox Autónomo](https://github.com/universokobana/kobana-agent-marketplace/blob/main/plugins/kobana-inbox/README.es.md)** (`kobana-inbox`): Bandejas de entrada, correos, agentes, ejecuciones de agentes y webhooks.

## Enlaces

- **Sitio web**: https://www.kobana.com.br/es/desarrolladores/mcp
- **Privacidad**: https://www.kobana.com.br/es/privacidad
- **Términos de uso**: https://www.kobana.com.br/es/terminos

## Licencia

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana y el logo de Kobana son marcas de Kobana.

> Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.
