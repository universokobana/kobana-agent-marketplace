# Kobana Agent Marketplace

[English](README.md) · [Português](README.pt-BR.md) · **Español**

El plugin oficial de [Kobana](https://www.kobana.com.br) para agentes de IA. Conecta Claude, ChatGPT, Codex, Cursor, Gemini, Copilot y cualquier otro cliente MCP a tu cuenta Kobana y opera el back-office financiero de tu empresa conversando: consulta cobros, concilia cuentas y realiza pagos, siempre con tus propios permisos.

> Nosotros cuidamos de tus procesos, mientras tú cuidas de tu propósito.

- **Un plugin, todos los clientes.** Las mismas skills y la misma configuración MCP están empaquetadas para Claude Code, OpenAI Codex, Cursor, VS Code / GitHub Copilot (Agent Plugins 1.0), Gemini CLI y el MCP Registry oficial.
- **Nada que instalar de tu lado.** Cada producto Kobana tiene un servidor MCP remoto. Pegas una URL, inicias sesión en Kobana y autorizas.
- **Tus permisos, nada más.** OAuth 2.1, scopes por recurso y los permisos en el panel de quien autorizó, verificados de nuevo en cada llamada.

> **Términos brasileños.** Kobana opera sobre el sistema financiero de Brasil, así que mantenemos algunos términos locales: **boleto** (título de cobro bancario pagable en bancos, lotéricas o apps), **Pix** (pagos instantáneos del Banco Central de Brasil), **bolepix** (boleto con código Pix), **TED** (transferencia bancaria), **NFS-e** (factura electrónica de servicios) y **CPF/CNPJ** (identificación fiscal de personas y empresas).

## Contenido

- [Productos Kobana](#productos-kobana)
- [Servidores MCP](#servidores-mcp)
- [Instalación](#instalación)
- [Qué incluye el plugin](#qué-incluye-el-plugin)
- [Seguridad desde el diseño](#seguridad-desde-el-diseño)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Desarrollo](#desarrollo)
- [Contribución, soporte y licencia](#contribución-soporte-y-licencia)

## Productos Kobana

Kobana es una plataforma financiera con IA nativa. Siete productos en tres capas, desde la infraestructura bancaria hasta la inteligencia artificial, trabajan juntos para automatizar tus operaciones financieras de punta a punta. Cinco de ellos tienen servidor MCP y están incluidos en este plugin.

### Plataforma de infraestructura

#### Gateway Bancario

**Operaciones bancarias unificadas. Una API, 40+ bancos.** Conecta tu empresa al sistema bancario brasileño a través de una única API. Emite boletos, recibe Pix, realiza transferencias TED y gestiona cuentas bancarias y saldos, todo sin cambiar de banco.

- Cobros: Pix, boleto, bolepix y links de pago
- Pagos: boletos, Pix y tributos
- Transferencias: Pix, TED y entre cuentas
- Cuentas bancarias, saldos, extractos, conciliación y DDA

[Conoce más](https://www.kobana.com.br/es/productos/gateway-bancario)

### Sistemas de gestión

#### Facturación Automática

**Facturación recurrente para empresas brasileñas.** Plataforma completa de billing para SaaS y servicios recurrentes: suscripciones, facturas, pagos, portal del cliente white-label, NFS-e y dunning, todo integrado.

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

### Inteligencia artificial

- **[Kia](https://www.kobana.com.br/es/ia/kia)**: el entorno integrado del área financiera. Lee los archivos que ya usas, los analiza y ejecuta operaciones bancarias, siempre con tu aprobación.
- **[Kadu](https://www.kobana.com.br/es/ia/kadu)**: el agente de IA que asume el trabajo operativo del área financiera (cobros, pagos y conciliación), con tu aprobación.

## Servidores MCP

Cada producto tiene su propio servidor MCP remoto: Streamable HTTP, sin estado, OAuth 2.1 con PKCE (sin client secret). La URL es la raíz del host, sin ruta.

| Producto | Nombre del servidor | URL de producción | Herramientas | Docs |
|---|---|---|---|---|
| Gateway Bancario | `kobana-banking` | `https://mcp.banking.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Gateway Bancario (sandbox) | `kobana-banking-sandbox` | `https://mcp.banking.sandbox.kobana.com.br` | 289 | [docs](https://docs.banking.kobana.com.br/pt/mcp/overview/introduction) |
| Facturación Automática | `kobana-billing` | `https://mcp.billing.kobana.com.br` | 293 | [docs](https://docs.billing.kobana.com.br/pt/mcp/overview/introduction) |
| Financiero Inteligente | `kobana-finance` | `https://mcp.finance.kobana.com.br` | 96 | [docs](https://docs.finance.kobana.com.br/pt/mcp/overview/introduction) |
| Regla de Cobranza | `kobana-dunning` | `https://mcp.dunning.kobana.com.br` | — | [docs](https://docs.dunning.kobana.com.br/pt/mcp/overview/introduction) |
| Dashboard Mágico | `kobana-dashboards` | `https://mcp.dashboards.kobana.com.br` | 220 | [docs](https://docs.dashboards.kobana.com.br/pt/mcp/overview/introduction) |

El sandbox tiene cuentas y tokens propios, separados de producción. La cantidad de herramientas que ves depende de los scopes que concedas y de tus permisos.

## Instalación

### Claude Code

```bash
/plugin marketplace add universokobana/kobana-agent-marketplace
/plugin install kobana@kobana-agent-marketplace
```

Luego ejecuta `/mcp` y elige **Authenticate** en cada servidor Kobana que quieras usar.

### Cualquier otro cliente

Elige tu cliente para ver las instrucciones paso a paso:

| Cliente | Guía | Cliente | Guía |
|---|---|---|---|
| Claude (web, escritorio, móvil) | [claude-ai](install/claude-ai.es.md) | Claude Code | [claude-code](install/claude-code.es.md) |
| ChatGPT | [chatgpt](install/chatgpt.es.md) | OpenAI Codex | [codex](install/codex.es.md) |
| Cursor | [cursor](install/cursor.es.md) | VS Code + GitHub Copilot | [vscode-copilot](install/vscode-copilot.es.md) |
| GitHub Copilot CLI | [copilot-cli](install/copilot-cli.es.md) | Gemini CLI | [gemini-cli](install/gemini-cli.es.md) |
| Google Antigravity | [antigravity](install/antigravity.es.md) | Manus | [manus](install/manus.es.md) |
| Perplexity | [perplexity](install/perplexity.es.md) | Mistral Le Chat | [le-chat](install/le-chat.es.md) |
| Microsoft Copilot Studio | [copilot-studio](install/copilot-studio.es.md) | Windsurf | [windsurf](install/windsurf.es.md) |
| Cline | [cline](install/cline.es.md) | Roo Code | [roo-code](install/roo-code.es.md) |
| Continue | [continue](install/continue.es.md) | Zed | [zed](install/zed.es.md) |
| JetBrains AI Assistant / Junie | [jetbrains](install/jetbrains.es.md) | Kiro | [kiro](install/kiro.es.md) |
| Amazon Q Developer | [amazon-q](install/amazon-q.es.md) | Goose | [goose](install/goose.es.md) |
| OpenCode | [opencode](install/opencode.es.md) | Warp | [warp](install/warp.es.md) |
| LM Studio | [lm-studio](install/lm-studio.es.md) | Raycast | [raycast](install/raycast.es.md) |
| n8n | [n8n](install/n8n.es.md) | APIs y SDKs (Anthropic, OpenAI, …) | [apis-and-sdks](install/apis-and-sdks.es.md) |
| Cualquier otro cliente MCP | [other-clients](install/other-clients.es.md) | | |

Consulta el [índice de instalación](install/README.es.md) para ver un resumen de cada cliente.

## Qué incluye el plugin

El plugin está en [`plugins/kobana`](plugins/kobana) y contiene:

- **Configuración MCP** para los seis servidores de arriba.
- **Agent Skills** que le enseñan al agente a usar bien Kobana:

| Skill | Qué hace |
|---|---|
| [`kobana`](plugins/kobana/skills/kobana/SKILL.md) | Dirige cada solicitud al servidor correcto, explica la autenticación y los permisos y define las reglas de seguridad |
| [`kobana-banking`](plugins/kobana/skills/kobana-banking/SKILL.md) | Boletos, Pix, pagos, transferencias, cuentas y extractos |
| [`kobana-billing`](plugins/kobana/skills/kobana-billing/SKILL.md) | Clientes, planes, suscripciones, facturas y NFS-e |
| [`kobana-finance`](plugins/kobana/skills/kobana-finance/SKILL.md) | Workspaces, cuentas por pagar, cuentas por cobrar, conciliación y flujo de caja |
| [`kobana-dunning`](plugins/kobana/skills/kobana-dunning/SKILL.md) | Cobros vencidos, reglas de cobranza, acuerdos y disputas |
| [`kobana-dashboards`](plugins/kobana/skills/kobana-dashboards/SKILL.md) | Usuarios del portal, equipo y organización |

### Prueba preguntar

- "Lista mis boletos vencidos"
- "¿Cuál es el saldo de mis cuentas financieras?"
- "¿Qué cuentas por pagar vencen esta semana?"
- "¿Qué suscripciones están activas?"
- "¿Qué acuerdos están en curso?"
- "¿Qué usuarios del portal todavía no aceptaron la invitación?"

## Seguridad desde el diseño

- **Solo lo que tú puedes hacer.** El agente solo puede hacer lo que tu cuenta puede hacer en el panel. Sin permiso, la herramienta ni siquiera aparece.
- **Tú eliges el acceso.** En la pantalla de autorización, selecciona solo los recursos que necesitas. Para explorar, concede acceso de solo lectura.
- **Las acciones sensibles requieren confirmación.** Las herramientas están anotadas como lectura, escritura o destructivas. Cancelar, pagar y transferir solo se ejecutan después de que confirmas.
- **Revoca cuando quieras.** En **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas), elimina el asistente sin afectar tus integraciones REST.
- **Empieza en el sandbox.** Las herramientas destructivas del Gateway Bancario mueven dinero real. Experimenta primero en el servidor sandbox.
- **Los datos de terceros no son instrucciones.** Nombres, descripciones y notas los escriben otras personas. Los servidores y las skills le indican al agente que no siga órdenes encontradas en esos campos.

Para reportar una vulnerabilidad, consulta [SECURITY.es.md](SECURITY.es.md).

## Estructura del repositorio

```text
.
├── catalog.json                      # Single source of truth (plugin metadata + servers)
├── scripts/generate.mjs              # Builds every manifest below from catalog.json
├── plugins/kobana/                   # The plugin
│   ├── skills/<skill>/SKILL.md       # Agent Skills (open standard, written once)
│   ├── plugin.json + mcp.json        # Agent Plugins 1.0 (VS Code, Copilot, Cursor, ...)
│   ├── .claude-plugin/plugin.json    # Claude Code
│   ├── .codex-plugin/plugin.json     # OpenAI Codex
│   ├── .cursor-plugin/plugin.json    # Cursor
│   └── .mcp.json                     # MCP servers for Claude Code and Codex
├── .claude-plugin/marketplace.json   # Claude Code marketplace catalog
├── .agents/plugins/marketplace.json  # Codex marketplace catalog
├── .cursor-plugin/marketplace.json   # Cursor marketplace catalog
├── gemini-extension.json + GEMINI.md # Gemini CLI / Antigravity CLI extension
├── registry/<server>/server.json     # Official MCP Registry entries
└── install/                          # Install guides per client (en, pt-BR, es)
```

## Desarrollo

Requisitos: Node.js 18 o superior. No hay dependencias.

```bash
# Edit catalog.json or a skill, then rebuild every manifest
npm run generate

# Verify that generated files are up to date and skills are valid (runs in CI)
npm run check
```

Nunca edites a mano los manifiestos generados; cambia `catalog.json` y vuelve a generarlos. Consulta [CONTRIBUTING.es.md](CONTRIBUTING.es.md) y [docs/publishing.md](docs/publishing.md) para ver cómo cada versión llega a cada directorio.

## Contribución, soporte y licencia

- [Guía de contribución](CONTRIBUTING.es.md)
- [Código de conducta](CODE_OF_CONDUCT.es.md)
- [Soporte](SUPPORT.es.md)
- [Política de seguridad](SECURITY.es.md)
- [Changelog](CHANGELOG.md)

Publicado bajo la [Licencia MIT](LICENSE). Kobana y el logotipo de Kobana son marcas de Kobana; la licencia no otorga derechos para usarlas.

¿Quieres ayuda para construir tu agente? [Agenda una conversación](https://www.kobana.com.br/es/agendar) con nosotros.
