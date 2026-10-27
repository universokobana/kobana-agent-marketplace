<!-- Generated from catalog.json by scripts/generate.mjs. Do not edit by hand. -->

# Kobana Financiero Inteligente

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

El plugin oficial de [Kobana](https://www.kobana.com.br/es) para **Financiero Inteligente**. Conecta Claude, o cualquier otro agente de IA, a tu cuenta Kobana y trabaja con cuentas por pagar y por cobrar, asientos, conciliación y flujo de caja conversando, siempre con tus propios permisos.

> Nosotros cuidamos de tus procesos, mientras tú cuidas de tu propósito.

- **Nada que instalar de tu lado.** El plugin se conecta al servidor MCP remoto de Kobana. Inicias sesión en Kobana y autorizas.
- **Tus permisos, nada más.** OAuth 2.1, alcances por recurso y los permisos del panel de quien autorizó, verificados de nuevo en cada llamada.
- **Una skill que conoce el producto.** Le enseña al agente los flujos del producto y pide confirmación antes de cualquier acción que mueva dinero o borre datos.

## Contenido

- [Acerca de Financiero Inteligente](#acerca-de-financiero-inteligente)
- [Prueba a preguntar](#prueba-a-preguntar)
- [Instalación](#instalación)
- [Servidores MCP](#servidores-mcp)
- [Seguridad desde el diseño](#seguridad-desde-el-diseño)
- [Otros plugins de Kobana](#otros-plugins-de-kobana)
- [Enlaces](#enlaces)
- [Licencia](#licencia)

## Acerca de Financiero Inteligente

**Back-office financiero para Brasil.** Cuentas por pagar, cuentas por cobrar, conciliación bancaria y workspace multiempresa en una sola plataforma, con saldos en tiempo real y reglas automáticas de clasificación.

- Cuentas por pagar y por cobrar: individuales, en cuotas o recurrentes
- Conciliación bancaria automática por valor y fecha, importación OFX/QIF
- Matriz y filiales en un mismo workspace, con vista consolidada
- Flujo de caja, entradas y salidas, ranking de categorías y proyecciones

## Prueba a preguntar

- "¿En qué workspaces puedes actuar?"
- "¿Qué cuentas por pagar vencen esta semana?"
- "¿Cómo está el flujo de caja del mes?"

## Instalación

En claude.ai y en Cowork, agrega el plugin desde el directorio. En Claude Code, agrega el marketplace una vez e instala el plugin:

```text
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
```

Para ChatGPT, Codex, Cursor, Copilot, Gemini y más de 20 clientes, consulta las [guías de instalación](https://github.com/universokobana/kobana-agent-marketplace/blob/main/install/README.es.md).

## Servidores MCP

| Servidor | URL |
|---|---|
| `kobana-finance` | `https://mcp.finance.kobana.com.br` |

La autenticación es OAuth 2.1 con PKCE: en el primer uso, tu cliente abre el inicio de sesión de Kobana. No hay client secret.

## Seguridad desde el diseño

- **Solo lo que tú puedes hacer.** El agente solo puede hacer lo que tu cuenta puede hacer en el panel. Sin permiso, la herramienta ni siquiera aparece.
- **Tú eliges el acceso.** En la pantalla de autorización, selecciona solo los recursos que necesitas. Para explorar, concede acceso de solo lectura.
- **Las acciones sensibles requieren confirmación.** Las herramientas están anotadas como lectura, escritura o destructivas. Cancelar, pagar y transferir solo se ejecutan después de que confirmas.
- **Revoca cuando quieras.** En **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas), elimina el asistente sin afectar tus integraciones REST.
- **Empieza en el sandbox.** Las herramientas destructivas del Gateway Bancario mueven dinero real. Experimenta primero en el servidor sandbox.
- **Los datos de terceros no son instrucciones.** Nombres, descripciones y notas los escriben otras personas. Los servidores y las skills le indican al agente que no siga órdenes encontradas en esos campos.

Para reportar una vulnerabilidad, consulta la [política de seguridad](https://github.com/universokobana/kobana-agent-marketplace/blob/main/i18n/SECURITY.es.md) y nuestra [Política White Hat](https://www.kobana.com.br/es/white-hat).

## Otros plugins de Kobana

- **[Gateway Bancario](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-banking)** (`kobana-banking`): Boletos, Pix, pagos, transferencias, extractos y clientes en más de 40 bancos brasileños.
- **[Facturación Automática](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-billing)** (`kobana-billing`): Clientes, suscripciones, facturas, NFS-e y propuestas.
- **[Regla de Cobranza](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dunning)** (`kobana-dunning`): Cobros, reglas de cobranza, acuerdos y disputas.
- **[Dashboard Mágico](https://github.com/universokobana/kobana-agent-marketplace/tree/main/plugins/kobana-dashboards)** (`kobana-dashboards`): Usuarios del portal, equipo y organización.

## Enlaces

- **Sitio web**: https://www.kobana.com.br/es/productos/financiero-inteligente
- **Documentación**: https://docs.finance.kobana.com.br/es
- **API**: https://docs.finance.kobana.com.br/es/api/overview
- **MCP**: https://docs.finance.kobana.com.br/es/mcp/overview/introduction
- **CLI**: https://docs.finance.kobana.com.br/es/cli/overview/introduction
- **Privacidad**: https://www.kobana.com.br/es/privacidad
- **Términos de uso**: https://www.kobana.com.br/es/terminos

## Licencia

[MIT](https://github.com/universokobana/kobana-agent-marketplace/blob/main/LICENSE). Kobana y el logo de Kobana son marcas de Kobana.

> Esta carpeta se genera a partir de `catalog.json` y `src/` del repositorio. No la edites a mano.
