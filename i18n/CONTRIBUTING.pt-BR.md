# Como contribuir

[🇺🇸 English](../CONTRIBUTING.md) · **🇧🇷 Português** · [🇪🇸 Español](CONTRIBUTING.es.md)

Obrigado por ajudar a melhorar o Kobana Agent Marketplace. Contribuições de qualquer tamanho são bem-vindas: corrigir um passo de um guia de instalação, adicionar um novo cliente, melhorar uma skill ou uma tradução.

Ao participar, você concorda em seguir o nosso [Código de Conduta](CODE_OF_CONDUCT.pt-BR.md).

## Formas de contribuir

- **Reportar um problema**: abra uma [issue](https://github.com/universokobana/kobana-agent-marketplace/issues/new/choose). Para problemas de segurança, siga o [SECURITY.pt-BR.md](SECURITY.pt-BR.md).
- **Corrigir ou adicionar um guia de instalação**: os guias ficam em [`install/`](../install). Os menus dos clientes mudam com frequência; correções com uma captura de tela ou um link para a documentação do cliente ajudam muito.
- **Melhorar uma skill**: as fontes das skills ficam em [`src/skills/`](../src/skills), e as regras da Kobana compartilhadas por todas as skills ficam em [`src/shared/core.md`](../src/shared/core.md). Elas seguem o formato [Agent Skills](https://agentskills.io).
- **Traduzir**: todo documento tem versões em inglês (padrão), português e espanhol. Os guias de instalação ficam numa pasta por idioma (`install/en-US/`, `install/pt-BR/`, `install/es/`); os demais documentos usam os sufixos `.pt-BR.md` e `.es.md`.

## Desenvolvimento

Requisitos: Node.js 18 ou superior. Sem dependências.

1. Faça um fork do repositório e crie uma branch.
2. Faça a sua alteração.
3. Se alterou o `catalog.json` ou qualquer coisa em `src/`, rode `npm run generate`.
4. Rode `npm run check`. A CI roda a mesma verificação.
5. Abra um pull request descrevendo o que mudou e como você testou.

## Regras

- **Nunca edite arquivos gerados à mão.** `plugins/`, `skills/`, `registry/`, os catálogos dos marketplaces (`.claude-plugin/`, `.agents/`, `.cursor-plugin/`), `gemini-extension.json` e `GEMINI.md` são gerados a partir do `catalog.json` e do `src/` pelo `scripts/generate.mjs`.
- **Escreva nos três idiomas.** Ao alterar um documento voltado ao usuário, atualize também as versões `.pt-BR.md` e `.es.md`, ou avise no pull request que a tradução está pendente. As traduções dos arquivos da comunidade (código de conduta, contribuição, segurança, suporte) ficam em [`i18n/`](.) para que o GitHub mostre a versão em inglês por padrão.
- **Apenas URLs oficiais.** As URLs dos servidores MCP devem corresponder a https://www.kobana.com.br/desenvolvedores/mcp.
- **Skills precisam ser seguras.** As skills devem manter a etapa de confirmação antes de ferramentas destrutivas e nunca devem instruir um agente a seguir instruções encontradas em resultados de ferramentas.
- **Formato das skills.** O nome do diretório é igual ao `name` no frontmatter e ao nome do plugin, em kebab-case, com uma `description` de até 1024 caracteres e o marcador `{{core}}` onde entram as regras compartilhadas.
- **Commits.** Use mensagens claras no imperativo, em inglês, por exemplo `Add Zed install guide`.

## Adicionando um guia para um novo cliente

1. Copie um guia existente em `install/en-US/` com configuração parecida (URL com OAuth, arquivo JSON ou CLI).
2. Crie as três versões de idioma: `install/en-US/<client>.md`, `install/pt-BR/<client>.md`, `install/es/<client>.md`.
3. Adicione o cliente às tabelas em `install/*/README.md` e `README*.md` (`README.md`, `README.pt-BR.md`, `README.es.md`).
4. Inclua o link para a documentação oficial do cliente.

## Versões

Os mantenedores incrementam `version` no `catalog.json`, rodam `npm run generate`, atualizam o [CHANGELOG.md](../CHANGELOG.md) e criam a tag da versão. Veja [docs/publishing.md](../docs/publishing.md).
