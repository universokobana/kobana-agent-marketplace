# Cómo contribuir

[🇺🇸 English](../CONTRIBUTING.md) · [🇧🇷 Português](CONTRIBUTING.pt-BR.md) · **🇪🇸 Español**

Gracias por ayudar a mejorar el Kobana Agent Marketplace. Toda contribución es bienvenida, sin importar su tamaño: corregir un paso de una guía de instalación, agregar un cliente nuevo, mejorar una skill o una traducción.

Al participar, aceptas seguir nuestro [Código de conducta](CODE_OF_CONDUCT.es.md).

## Formas de contribuir

- **Reportar un problema**: abre un [issue](https://github.com/universokobana/kobana-agent-marketplace/issues/new/choose). Para problemas de seguridad, sigue en cambio [SECURITY.es.md](SECURITY.es.md).
- **Corregir o agregar una guía de instalación**: las guías están en [`install/`](../install). Los menús de los clientes cambian con frecuencia; las correcciones con una captura de pantalla o un enlace a la documentación del cliente ayudan mucho.
- **Mejorar una skill**: el código fuente de las skills está en [`src/skills/`](../src/skills), y las reglas de Kobana compartidas por todas las skills están en [`src/shared/core.md`](../src/shared/core.md). Siguen el formato [Agent Skills](https://agentskills.io).
- **Traducir**: cada documento tiene versión en inglés (predeterminada), portugués (`.pt-BR.md`) y español (`.es.md`).

## Desarrollo

Requisitos: Node.js 18 o superior. Sin dependencias.

1. Haz un fork del repositorio y crea una rama.
2. Haz tu cambio.
3. Si cambiaste `catalog.json` o cualquier cosa en `src/`, ejecuta `npm run generate`.
4. Ejecuta `npm run check`. La CI ejecuta la misma verificación.
5. Abre un pull request que describa qué cambió y cómo lo probaste.

## Reglas

- **Nunca edites a mano los archivos generados.** `plugins/`, `skills/`, `registry/`, los catálogos de marketplace (`.claude-plugin/`, `.agents/`, `.cursor-plugin/`), `gemini-extension.json` y `GEMINI.md` se generan a partir de `catalog.json` y `src/` mediante `scripts/generate.mjs`.
- **Escribe en tres idiomas.** Cuando cambies un documento dirigido a usuarios, actualiza también las versiones `.pt-BR.md` y `.es.md`, o indica en el pull request que la traducción está pendiente. Las traducciones de los archivos de comunidad (código de conducta, contribución, seguridad, soporte) están en [`i18n/`](.) para que GitHub muestre la versión en inglés de forma predeterminada.
- **Solo URLs oficiales.** Las URLs de los servidores MCP deben coincidir con https://www.kobana.com.br/es/desarrolladores/mcp.
- **Las skills deben ser seguras.** Las skills deben mantener el paso de confirmación antes de las herramientas destructivas y nunca deben indicarle a un agente que siga instrucciones encontradas en los resultados de las herramientas.
- **Formato de las skills.** El nombre del directorio es igual al `name` del frontmatter y al nombre del plugin, en kebab-case, con una `description` de hasta 1024 caracteres y el marcador `{{core}}` donde van las reglas compartidas.
- **Commits.** Usa mensajes claros en modo imperativo, por ejemplo `Add Zed install guide`.

## Agregar una guía para un cliente nuevo

1. Copia una guía existente en `install/` con una configuración similar (URL con OAuth, archivo JSON o CLI).
2. Crea las tres versiones de idioma: `install/<client>.md`, `install/<client>.pt-BR.md`, `install/<client>.es.md`.
3. Agrega el cliente a las tablas de `install/README*.md` y `README*.md` (`README.md`, `README.pt-BR.md`, `README.es.md`).
4. Enlaza la documentación oficial del cliente.

## Versiones

Los mantenedores incrementan `version` en `catalog.json`, ejecutan `npm run generate`, actualizan [CHANGELOG.md](../CHANGELOG.md) y crean el tag de la versión. Consulta [docs/publishing.md](../docs/publishing.md).
