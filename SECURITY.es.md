# Política de seguridad

[🇺🇸 English](SECURITY.md) · [🇧🇷 Português](SECURITY.pt-BR.md) · **🇪🇸 Español**

## Alcance

Este repositorio contiene configuración e instrucciones (manifiestos, URLs de servidores MCP y Agent Skills). Los servidores MCP, las APIs y los paneles de Kobana son operados por Kobana y están cubiertos por la [Política White Hat de Kobana](https://www.kobana.com.br/es/white-hat).

Reporta a través de esta política:

- Un manifiesto o guía de este repositorio que apunte a una URL incorrecta, no oficial o maliciosa.
- Una instrucción de una skill que pueda llevar a un agente a saltarse confirmaciones, filtrar credenciales o seguir instrucciones encontradas en datos de terceros.
- Cualquier vulnerabilidad en los servidores MCP, el flujo OAuth o las APIs de Kobana.

## Cómo reportar una vulnerabilidad

**No abras un issue público.** Escribe a **security@kobana.com.br** (o a **whitehat@kobana.com.br** para el programa de recompensas) con:

- Una descripción del problema y su impacto.
- Pasos para reproducirlo, URLs o archivos afectados y cualquier prueba de concepto.
- Tus datos de contacto.

También puedes usar el [reporte privado de vulnerabilidades](https://github.com/universokobana/kobana-agent-marketplace/security/advisories/new) de GitHub para este repositorio.

Confirmamos la recepción de los reportes en un plazo de 3 días hábiles y te mantenemos informado hasta que el problema se resuelva. Los investigadores que siguen la divulgación responsable están protegidos según lo descrito en la Política White Hat y pueden ser elegibles para una recompensa.

## Divulgación responsable

- Danos un plazo razonable para investigar y corregir antes de cualquier divulgación pública.
- No accedas, modifiques ni elimines datos que no sean tuyos. Usa el sandbox del Gateway Bancario para hacer pruebas.
- No degrades el servicio (nada de denegación de servicio, spam ni ingeniería social).

## Versiones soportadas

Solo se da soporte a la versión más reciente de la rama `main`. Los servidores MCP son remotos y siempre ejecutan la versión actual.

## Uso seguro

- Prefiere OAuth antes que tokens personales. Si usas un token personal, dale solo el uso MCP, el scope más pequeño y la validez más corta.
- Nunca hagas commit de tokens. Los archivos de configuración que contienen tokens son secretos.
- Revoca el acceso cuando quieras en **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas** (Cuenta Kobana → Tokens y Acceso → Aplicaciones Autorizadas).
