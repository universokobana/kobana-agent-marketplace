# Política de Segurança

[English](SECURITY.md) · **Português** · [Español](SECURITY.es.md)

## Escopo

Este repositório contém configurações e instruções (manifestos, URLs de servidores MCP e Agent Skills). Os servidores MCP, as APIs e os dashboards da Kobana são operados por nós e estão cobertos pela [Política White Hat da Kobana](https://www.kobana.com.br/white-hat).

Reporte por meio desta política:

- Um manifesto ou guia deste repositório que aponte para uma URL errada, não oficial ou maliciosa.
- Uma instrução de skill que possa levar um agente a pular confirmações, vazar credenciais ou seguir instruções encontradas em dados de terceiros.
- Qualquer vulnerabilidade nos servidores MCP, no fluxo OAuth ou nas APIs da Kobana.

## Como reportar uma vulnerabilidade

**Não abra uma issue pública.** Envie um email para **security@kobana.com.br** (ou **whitehat@kobana.com.br** para o programa de recompensas) com:

- Uma descrição do problema e do seu impacto.
- Passos para reproduzir, URLs ou arquivos afetados e qualquer prova de conceito.
- Suas informações de contato.

Você também pode usar o [reporte privado de vulnerabilidades](https://github.com/universokobana/kobana-agent-marketplace/security/advisories/new) do GitHub para este repositório.

Confirmamos o recebimento em até 3 dias úteis e mantemos você informado até a resolução. Pesquisadores que seguem a divulgação responsável estão protegidos conforme descrito na Política White Hat e podem ser elegíveis para recompensa.

## Divulgação responsável

- Dê um prazo razoável para investigarmos e corrigirmos antes de qualquer divulgação pública.
- Não acesse, altere ou apague dados que não sejam seus. Use o sandbox do Gateway Bancário para testes.
- Não degrade o serviço (nada de negação de serviço, spam ou engenharia social).

## Versões suportadas

Apenas a versão mais recente na branch `main` é suportada. Os servidores MCP são remotos e sempre rodam a versão atual.

## Uso seguro

- Prefira OAuth a tokens pessoais. Se usar um token pessoal, dê a ele apenas o uso MCP, o menor escopo e a menor validade.
- Nunca faça commit de tokens. Arquivos de configuração que contêm tokens são segredos.
- Revogue o acesso quando quiser em **Conta Kobana → Tokens e Acesso → Aplicações Autorizadas**.
