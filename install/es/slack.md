# Kobana en Slack (Slackbot)

[🇺🇸 English](../en-US/slack.md) · [🇧🇷 Português](../pt-BR/slack.md) · **🇪🇸 Español**

Usa Kobana con **Slackbot**, el asistente de IA de Slack, a través de las apps oficiales de Kobana para Slack, una por producto. No necesitas crear ni configurar nada: instala las apps que usa tu equipo y cada persona conecta su propia cuenta Kobana.

**Autenticación:** OAuth con tu propio inicio de sesión de Kobana · **Planes:** el acceso de Slackbot a las apps depende del plan de Slack. El control de acceso por herramienta está disponible en Enterprise Grid y Enterprise+.

## Apps de Kobana para Slack

| App | En Slackbot | Qué puedes preguntar |
|---|---|---|
| Kobana Banking Gateway (Gateway Bancario) | Kobana - Banking Gateway | "Lista mis boletos vencidos", "¿Cuál es el saldo de mis cuentas financieras?" |
| Kobana Automatic Billing (Facturación Automática) | Kobana - Billing | "¿Qué suscripciones están activas?", "¿Qué facturas están abiertas este mes?" |
| Kobana Smart Finance (Financiero Inteligente) | Kobana - Smart Finance | "¿Qué cuentas por pagar vencen esta semana?", "¿Cómo está el flujo de caja del mes?" |
| Kobana Dunning (Regla de Cobranza) | Kobana - Dunning | "¿Qué cobros están vencidos?", "¿Qué acuerdos están en curso?" |
| Kobana Magic Dashboard (Dashboard Mágico) | Kobana - Magic Dashboard | "¿Qué usuarios del portal aún no aceptaron la invitación?", "¿Quién forma parte de mi equipo?" |

> Los enlaces de **Add to Slack** y las fichas en el Slack Marketplace aparecerán aquí en cuanto se publiquen las apps.

Cada persona puede tener hasta 5 servidores MCP activos en Slackbot al mismo tiempo, así que instala solo los productos que usa tu equipo.

## 1. Instala la app

1. Abre el enlace de **Add to Slack** de la app o encuéntrala en Slack en **Agents & tools → Apps**.
2. Haz clic en **Add to Slack**, revisa el permiso (`mcp:connect`, que permite a Slackbot conectarse a Kobana) y autorízalo.
3. Si tu workspace exige aprobación de apps, Slack envía la solicitud a los administradores. En Enterprise, un Org Owner u Org Admin instala la app a nivel de organización y la agrega a los workspaces.

Instalar una app no conecta ninguna cuenta Kobana ni comparte el acceso de nadie.

## 2. Conecta tu cuenta Kobana

1. En Slack, abre **Slackbot → Apps** y haz clic en **Connect** junto a la app de Kobana.
2. Inicia sesión en Kobana, elige la cuenta, los recursos y el nivel de acceso, y autoriza.
3. Slack muestra **Your account is connected**. Cierra la ventana y vuelve a Slack.

Cada persona conecta su propia cuenta, y cada app solo recibe acceso a su producto. Slackbot solo ve y hace lo que esa persona puede hacer en Kobana.

## 3. Úsalo

1. Abre una conversación con **Slackbot** y verifica que la app de Kobana esté activada en el menú de apps del cuadro de mensaje.
2. Pregunta con tus propias palabras, en español, portugués o inglés. Hay ejemplos en la tabla de arriba.
3. Antes de cualquier acción que mueva dinero o borre datos, como pagar, transferir o cancelar, Slackbot muestra lo que va a pasar y pide tu confirmación. Lee el resumen antes de aprobar.

## Para administradores

En Enterprise Grid y Enterprise+, los administradores eligen quién puede usar cada app de Kobana y el permiso predeterminado de las herramientas de lectura, de escritura y las demás. Recomendamos **Needs approval** para las herramientas de escritura, porque las herramientas de escritura de Kobana pueden pagar cuentas, transferir dinero y cancelar cobros.

## Problemas frecuentes

- **Slackbot no usa Kobana:** verifica que la app esté activada en el menú de apps del cuadro de mensaje y que tu cuenta esté conectada en **Slackbot → Apps**.
- **Menos herramientas de las esperadas:** es el acceso que concediste o tus permisos en Kobana, no un error. Conecta de nuevo eligiendo más recursos o pide al administrador de la cuenta el permiso que falta.
- **La conexión falla:** desconecta la app en **Slackbot → Apps**, conecta de nuevo y verifica que estés entrando en la cuenta Kobana correcta.

## Próximos pasos

- Guía de Slack: [Connect Slackbot to other apps with MCP](https://slack.com/help/articles/52414744085139-Connect-Slackbot-to-other-apps-with-MCP)
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas), o desconecta la app en **Slackbot → Apps**.
- Todos los clientes: [índice de instalación](README.md) · Guía para desarrolladores: https://www.kobana.com.br/es/desarrolladores/mcp
