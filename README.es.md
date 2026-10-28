<p align="center">
  <a href="https://www.kobana.com.br/es">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="assets/brand/kobana-logo-dark.png">
      <img src="assets/brand/kobana-logo-light.png" alt="Kobana" width="320">
    </picture>
  </a>
</p>

# Kobana Agent Marketplace

[🇺🇸 English](README.md) · [🇧🇷 Português](README.pt-BR.md) · **🇪🇸 Español**

Los plugins oficiales de [Kobana](https://www.kobana.com.br/es) para agentes de IA. Conecta Claude, ChatGPT, Codex, Cursor, Gemini, Copilot y cualquier otro cliente MCP a tu cuenta Kobana y opera el back-office financiero de tu empresa conversando: consulta cobros, concilia cuentas y realiza pagos, siempre con tus propios permisos.

> Nosotros cuidamos de tus procesos, mientras tú cuidas de tu propósito.

- **Un plugin por producto, todos los clientes.** Instala solo los productos que usas. Las mismas skills y la misma configuración MCP están empaquetadas para Claude Code, OpenAI Codex, Cursor, VS Code / GitHub Copilot (Agent Plugins 1.0), Gemini CLI y el MCP Registry oficial.
- **Nada que instalar de tu lado.** Cada producto Kobana tiene un servidor MCP remoto. Pegas una URL, inicias sesión en Kobana y autorizas.
- **Tus permisos, nada más.** OAuth 2.1, scopes por recurso y los permisos en el panel de quien autorizó, verificados de nuevo en cada llamada.

> **Términos brasileños.** Kobana opera sobre el sistema financiero de Brasil, así que mantenemos algunos términos locales: **boleto** (título de cobro bancario pagable en bancos, lotéricas o apps), **Pix** (pagos instantáneos del Banco Central de Brasil), **bolepix** (boleto con código Pix), **TED** (transferencia bancaria), **NFS-e** (factura electrónica de servicios) y **CPF/CNPJ** (identificación fiscal de personas y empresas).

## Contenido

- [Productos Kobana](#productos-kobana)
- [Servidores MCP](#servidores-mcp)
- [Instalación](#instalación)
- [Plugins](#plugins)
- [Enlaces](#enlaces)
- [Seguridad desde el diseño](#seguridad-desde-el-diseño)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Desarrollo](#desarrollo)
- [Contribución, soporte y licencia](#contribución-soporte-y-licencia)

## Productos Kobana

Kobana es una plataforma financiera con IA nativa. Ocho productos en tres capas, desde la infraestructura bancaria hasta la inteligencia artificial, trabajan juntos para automatizar tus operaciones financieras de punta a punta. Seis de ellos tienen servidor MCP, y cada uno tiene su propio plugin en este marketplace.

### Plataforma de infraestructura

#### Gateway Bancario

**Operaciones bancarias unificadas. Una API, 40+ bancos.** Conecta tu empresa al sistema bancario brasileño a través de una única API. Emite boletos, recibe Pix, realiza transferencias TED y gestiona cuentas bancarias y saldos, todo sin cambiar de banco.

- Cobros: Pix, boleto, bolepix y links de pago
- Pagos: boletos, Pix y tributos, en lote o programados
- Transferencias: Pix, TED y entre cuentas
- Cuentas bancarias, saldos, extractos, conciliación y DDA

[Conoce más](https://www.kobana.com.br/es/productos/gateway-bancario)

### Sistemas de gestión

#### Facturación Automática

**Facturación recurrente y flexible, hecha para empresas brasileñas.** Plataforma de cobro recurrente para SaaS y servicios: suscripciones, facturas, gestión de clientes, portal propio con tu marca, NFS-e y regla de cobranza, todo integrado. Automatiza el ciclo completo de facturación.

- Suscripciones con trial, prorrateo, upgrade y downgrade
- Facturas automáticas con PDF, email y NFS-e
- Pagos con tarjeta, boleto, Pix y transferencia bancaria
- Informes de MRR, ARR, churn y cohorts

[Conoce más](https://www.kobana.com.br/es/productos/facturacion-automatica)

#### Financiero Inteligente

**Back-office financiero para Brasil.** Cuentas por pagar, cuentas por cobrar, conciliación bancaria y workspace multiempresa en una sola plataforma, con saldos en tiempo real y reglas automáticas de clasificación.

- Cuentas por pagar y por cobrar: individuales, en cuotas o recurrentes
- Conciliación bancaria automática por valor y fecha, importación OFX/QIF
- Matriz y filiales en un mismo workspace, con vista consolidada
- Flujo de caja, entradas y salidas, ranking de categorías y proyecciones

[Conoce más](https://www.kobana.com.br/es/productos/financiero-inteligente)

#### Regla de Cobranza

**Cobranza automática del vencimiento al pago.** Acompaña cada cobro desde el vencimiento hasta el pago. Contacto en el momento justo, por el canal correcto, con la forma de pago en el mensaje. ¿Pagó? La regla se detiene al instante. ¿Reclamó? Se pausa y queda registrado.

- Regla multicanal por email, SMS y WhatsApp
- Acuerdos y portal del deudor
- Compliance y trazabilidad de auditoría

[Conoce más](https://www.kobana.com.br/es/productos/cobranza)

#### Dashboard Mágico

**El portal de tus clientes, con los datos que ya están en tus sistemas.** Conecta tu ERP, API o base de datos, arma las páginas arrastrando bloques o pidiéndole a la IA y publica con tu marca y tu dominio. Cada cliente entra y ve solo lo que es suyo.

- Más de 40 conectores listos
- Constructor visual con IA
- Dominio propio y SSO

[Conoce más](https://www.kobana.com.br/es/productos/dashboard-magico)

#### Inbox Autónomo

**Bandejas de entrada con agentes de IA que leen y procesan correos.** Cada bandeja recibe correos, y los agentes los leen, extraen lo importante y actúan, con cada ejecución registrada.

- Bandejas de entrada y correos
- Agentes de IA, sus ejecuciones y uso
- Webhooks y registro de eventos

[Conoce más](https://docs.inbox.kobana.com.br/es)

### Inteligencia artificial

- **[Kia](https://www.kobana.com.br/es/ia/kia)**: el entorno integrado del área financiera. Lee los archivos que ya usas, los analiza y ejecuta operaciones bancarias, siempre con tu aprobación.
- **[Kadu](https://www.kobana.com.br/es/ia/kadu)**: el agente de IA que asume el trabajo operativo del área financiera (cobros, pagos y conciliación), con tu aprobación.

## Servidores MCP

Cada producto tiene su propio servidor MCP remoto: Streamable HTTP, sin estado, OAuth 2.1 con PKCE (sin client secret). La URL es la raíz del host, sin ruta.

| Producto | Nombre del servidor | URL de producción | Herramientas | Docs |
|---|---|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/es/mcp/overview/introduction) |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/es/mcp/overview/introduction) |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` | 293 | [docs](https://docs.billing.kobana.com.br/es/mcp/overview/introduction) |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` | 96 | [docs](https://docs.finance.kobana.com.br/es/mcp/overview/introduction) |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` | 119 | [docs](https://docs.dunning.kobana.com.br/es/mcp/overview/introduction) |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` | 220 | [docs](https://docs.dashboards.kobana.com.br/es/mcp/overview/introduction) |
| Inbox Autónomo | `kobana-inbox` | `https://mcp.inbox.kobana.com.br` | 53 | [docs](https://docs.inbox.kobana.com.br/es/mcp/overview/introduction) |

Solo el Gateway Bancario tiene sandbox, con cuentas y tokens propios, separados de producción. En Inbox Autónomo, si tu cuenta tiene más de un workspace, elígelo en la conexión con el header `X-Workspace-Id`. La cantidad de herramientas que ves depende de los scopes que concedas y de tus permisos.

## Instalación

### Claude Code

Agrega el marketplace una vez y luego instala el plugin de cada producto que usas:

```bash
/plugin marketplace add universokobana/kobana-agent-marketplace

/plugin install kobana-banking@kobana-agent-marketplace
/plugin install kobana-billing@kobana-agent-marketplace
/plugin install kobana-finance@kobana-agent-marketplace
/plugin install kobana-dunning@kobana-agent-marketplace
/plugin install kobana-dashboards@kobana-agent-marketplace
/plugin install kobana-inbox@kobana-agent-marketplace
```

Luego ejecuta `/mcp` y elige **Authenticate** en cada servidor Kobana.

### Cualquier otro cliente

Elige tu cliente para ver las instrucciones paso a paso:

| Cliente | Guía | Cliente | Guía |
|---|---|---|---|
| Claude (web, escritorio, móvil) | [claude-ai](install/es/claude-ai.md) | Claude Code | [claude-code](install/es/claude-code.md) |
| ChatGPT | [chatgpt](install/es/chatgpt.md) | OpenAI Codex | [codex](install/es/codex.md) |
| Cursor | [cursor](install/es/cursor.md) | VS Code + GitHub Copilot | [vscode-copilot](install/es/vscode-copilot.md) |
| GitHub Copilot CLI | [copilot-cli](install/es/copilot-cli.md) | Gemini CLI | [gemini-cli](install/es/gemini-cli.md) |
| Google Antigravity | [antigravity](install/es/antigravity.md) | Manus | [manus](install/es/manus.md) |
| Perplexity | [perplexity](install/es/perplexity.md) | Mistral Le Chat | [le-chat](install/es/le-chat.md) |
| Microsoft Copilot Studio | [copilot-studio](install/es/copilot-studio.md) | Windsurf | [windsurf](install/es/windsurf.md) |
| Cline | [cline](install/es/cline.md) | Roo Code | [roo-code](install/es/roo-code.md) |
| Continue | [continue](install/es/continue.md) | Zed | [zed](install/es/zed.md) |
| JetBrains AI Assistant / Junie | [jetbrains](install/es/jetbrains.md) | Kiro | [kiro](install/es/kiro.md) |
| Amazon Q Developer | [amazon-q](install/es/amazon-q.md) | Goose | [goose](install/es/goose.md) |
| OpenCode | [opencode](install/es/opencode.md) | Warp | [warp](install/es/warp.md) |
| LM Studio | [lm-studio](install/es/lm-studio.md) | Raycast | [raycast](install/es/raycast.md) |
| n8n | [n8n](install/es/n8n.md) | APIs y SDKs (Anthropic, OpenAI, …) | [apis-and-sdks](install/es/apis-and-sdks.md) |
| Slack (Slackbot), próximamente | [slack](install/es/slack.md) | Cualquier otro cliente MCP | [other-clients](install/es/other-clients.md) |

Consulta el [índice de instalación](install/es/README.md) para ver un resumen de cada cliente.

## Plugins

Cada producto es un plugin independiente, con su servidor MCP y una skill que le enseña al agente los flujos de trabajo y las reglas de seguridad del producto. Cada skill también incluye las reglas compartidas de Kobana: confirmación antes de acciones destructivas, sandbox primero en el Gateway Bancario y datos de terceros tratados como datos, nunca como instrucciones.

| Plugin | Producto | Servidores MCP | Skill |
|---|---|---|---|
| [`kobana-banking`](plugins/kobana-banking/README.es.md) | Gateway Bancario | `kobana-banking`, `kobana-banking-sandbox` | Boletos, Pix, pagos, transferencias, cuentas y extractos |
| [`kobana-billing`](plugins/kobana-billing/README.es.md) | Facturación Automática | `kobana-billing` | Clientes, planes, suscripciones, facturas y NFS-e |
| [`kobana-finance`](plugins/kobana-finance/README.es.md) | Financiero Inteligente | `kobana-finance` | Workspaces, cuentas por pagar, cuentas por cobrar, conciliación y flujo de caja |
| [`kobana-dunning`](plugins/kobana-dunning/README.es.md) | Regla de Cobranza | `kobana-dunning` | Cobros vencidos, reglas de cobranza, acuerdos y disputas |
| [`kobana-dashboards`](plugins/kobana-dashboards/README.es.md) | Dashboard Mágico | `kobana-dashboards` | Usuarios del portal, equipo y organización |
| [`kobana-inbox`](plugins/kobana-inbox/README.es.md) | Inbox Autónomo | `kobana-inbox` | Bandejas de entrada, correos, agentes, ejecuciones de agentes y webhooks |

¿Solo quieres las skills? También están en [`skills/`](skills), listas para cualquier cliente compatible con [Agent Skills](https://agentskills.io).

### Prueba preguntar

- "Lista mis boletos vencidos"
- "¿Cuál es el saldo de mis cuentas financieras?"
- "¿Qué cuentas por pagar vencen esta semana?"
- "¿Qué suscripciones están activas?"
- "¿Qué acuerdos están en curso?"
- "¿Qué usuarios del portal todavía no aceptaron la invitación?"
- "¿Qué correos llegaron hoy?"

## Enlaces

Todo sobre cada producto, en español:

| Producto | Sitio web | Documentación | API | MCP | CLI |
|---|---|---|---|---|---|
| **Gateway Bancario** | [Sitio](https://www.kobana.com.br/es/productos/gateway-bancario) | [Docs](https://docs.banking.kobana.com.br/es) | [API](https://docs.banking.kobana.com.br/es/api/overview) | [MCP](https://docs.banking.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://docs.banking.kobana.com.br/es/cli/overview/introduction) |
| **Facturación Automática** | [Sitio](https://www.kobana.com.br/es/productos/facturacion-automatica) | [Docs](https://docs.billing.kobana.com.br/es) | [API](https://docs.billing.kobana.com.br/es/api/overview) | [MCP](https://docs.billing.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://docs.billing.kobana.com.br/es/cli/overview/introduction) |
| **Financiero Inteligente** | [Sitio](https://www.kobana.com.br/es/productos/financiero-inteligente) | [Docs](https://docs.finance.kobana.com.br/es) | [API](https://docs.finance.kobana.com.br/es/api/overview) | [MCP](https://docs.finance.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://docs.finance.kobana.com.br/es/cli/overview/introduction) |
| **Regla de Cobranza** | [Sitio](https://www.kobana.com.br/es/productos/cobranza) | [Docs](https://docs.dunning.kobana.com.br/es) | [API](https://docs.dunning.kobana.com.br/es/api/overview) | [MCP](https://docs.dunning.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://www.kobana.com.br/es/desarrolladores/cli) |
| **Dashboard Mágico** | [Sitio](https://www.kobana.com.br/es/productos/dashboard-magico) | [Docs](https://docs.dashboards.kobana.com.br/es) | [API](https://docs.dashboards.kobana.com.br/es/api/overview) | [MCP](https://docs.dashboards.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://docs.dashboards.kobana.com.br/es/cli/overview/introduction) |
| **Inbox Autónomo** | [Sitio](https://docs.inbox.kobana.com.br/es) | [Docs](https://docs.inbox.kobana.com.br/es) | [API](https://docs.inbox.kobana.com.br/es/api/overview/introduction) | [MCP](https://docs.inbox.kobana.com.br/es/mcp/overview/introduction) | [CLI](https://docs.inbox.kobana.com.br/es/cli/overview/introduction) |

- [Sitio web de Kobana](https://www.kobana.com.br/es)
- [Desarrolladores](https://www.kobana.com.br/es/desarrolladores)
- [MCP para desarrolladores](https://www.kobana.com.br/es/desarrolladores/mcp)
- [Conecta tu asistente de IA](https://www.kobana.com.br/es/ia/mcp-servers)
- [Kobana CLI](https://www.kobana.com.br/es/desarrolladores/cli)
- [Centro de ayuda (en portugués)](https://ajuda.kobana.com.br)
- [Privacidad](https://www.kobana.com.br/es/privacidad)
- [Términos de uso](https://www.kobana.com.br/es/terminos)
- [Política White Hat](https://www.kobana.com.br/es/white-hat)
- [Agenda una demostración](https://www.kobana.com.br/es/agendar)

## Seguridad desde el diseño

- **Solo lo que tú puedes hacer.** El agente solo puede hacer lo que tu cuenta puede hacer en el panel. Sin permiso, la herramienta ni siquiera aparece.
- **Tú eliges el acceso.** En la pantalla de autorización, selecciona solo los recursos que necesitas. Para explorar, concede acceso de solo lectura.
- **Las acciones sensibles requieren confirmación.** Las herramientas están anotadas como lectura, escritura o destructivas. Cancelar, pagar y transferir solo se ejecutan después de que confirmas.
- **Revoca cuando quieras.** En **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas), elimina el asistente sin afectar tus integraciones REST.
- **Empieza en el sandbox.** Las herramientas destructivas del Gateway Bancario mueven dinero real. Experimenta primero en el servidor sandbox.
- **Solo lectura vía OAuth.** Fuera del Gateway Bancario, los clientes OAuth registrados dinámicamente (Claude, ChatGPT) reciben acceso de solo lectura. Para crear o cambiar registros en los demás productos, conéctate con un token personal.
- **Los datos de terceros no son instrucciones.** Nombres, descripciones y notas los escriben otras personas. Los servidores y las skills le indican al agente que no siga órdenes encontradas en esos campos.

Para reportar una vulnerabilidad, consulta [SECURITY.es.md](i18n/SECURITY.es.md) y nuestra [Política White Hat](https://www.kobana.com.br/es/white-hat).

## Estructura del repositorio

```text
.
├── catalog.json                      # Single source of truth (plugins, servers, metadata)
├── src/
│   ├── skills/<plugin>/SKILL.md      # Skill source of each product
│   └── shared/core.md                # Kobana rules injected into every skill
├── scripts/generate.mjs              # Builds everything below from catalog.json and src/
├── plugins/<plugin>/                 # One plugin per product (generated)
│   ├── skills/<plugin>/SKILL.md      # Agent Skill (open standard)
│   ├── plugin.json + mcp.json        # Agent Plugins 1.0 (VS Code, Copilot, Cursor, ...)
│   ├── .claude-plugin/plugin.json    # Claude Code
│   ├── .codex-plugin/plugin.json     # OpenAI Codex
│   ├── .cursor-plugin/plugin.json    # Cursor
│   └── .mcp.json                     # MCP servers for Claude Code and Codex
├── skills/<plugin>/SKILL.md          # The same skills, without a plugin (generated)
├── .claude-plugin/marketplace.json   # Claude Code marketplace catalog
├── .agents/plugins/marketplace.json  # Codex marketplace catalog
├── .cursor-plugin/marketplace.json   # Cursor marketplace catalog
├── gemini-extension.json + GEMINI.md # Gemini CLI / Antigravity CLI extension (all products)
├── registry/<server>/server.json     # Official MCP Registry entries
├── install/                          # Install guides per client (en, pt-BR, es)
└── i18n/                             # Portuguese and Spanish versions of the community files
```

## Desarrollo

Requisitos: Node.js 18 o superior. No hay dependencias.

```bash
# Edit catalog.json or src/, then rebuild every plugin and manifest
npm run generate

# Verify that generated files are up to date and skills are valid (runs in CI)
npm run check
```

Nunca edites a mano los archivos generados; cambia `catalog.json` o `src/` y vuelve a generarlos. Consulta [CONTRIBUTING.es.md](i18n/CONTRIBUTING.es.md).

## Contribución, soporte y licencia

- [Guía de contribución](i18n/CONTRIBUTING.es.md)
- [Código de conducta](i18n/CODE_OF_CONDUCT.es.md)
- [Soporte](i18n/SUPPORT.es.md)
- [Política de seguridad](i18n/SECURITY.es.md)
- [Changelog](CHANGELOG.md)

Publicado bajo la [Licencia MIT](LICENSE). Kobana y el logotipo de Kobana son marcas de Kobana; la licencia no otorga derechos para usarlas.

¿Quieres ayuda para construir tu agente? [Agenda una conversación](https://www.kobana.com.br/es/agendar) con nosotros.
