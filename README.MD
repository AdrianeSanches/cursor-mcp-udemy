# 🚀 Curso Cursor AI com MCP - Udemy

Repositório com anotações e projetos desenvolvidos durante o curso sobre Cursor AI e Model Context Protocol (MCP).

---

## 📋 Sobre o Cursor AI

**Cursor AI** é um editor de código moderno, semelhante ao VS Code, que integra inteligência artificial para auxiliar na produção e otimização de código.

### Características Principais

- **Editor Inteligente**: Trabalha com o projeto como contexto completo, entendendo as mudanças necessárias em todo o projeto conforme a solicitação no prompt
- **Múltiplos Modelos LLM**: Utiliza diversos modelos de linguagem (Claude, GPT, Deepseek, etc.) para fazer sugestões e alterações com IA
- **Integração MCP**: Suporte ao Model Context Protocol, permitindo integração com serviços como GitHub, bancos de dados, Figma, entre outros
- **Contexto Inteligente**: Além de conhecer toda a base de código, permite especificar arquivos, linhas de código e documentação externa para melhorar o desempenho

> **💡 Dica**: É recomendado abrir no Cursor apenas o projeto em que está trabalhando, a menos que seja necessário uma análise que abranja múltiplos projetos.

---

## 🎯 Principais Funcionalidades

### 🤖 Agent (Agente)
Envie prompts para a IA e ela altera o código automaticamente, realizando tarefas complexas de forma autônoma. O modo Agent é ideal para:
- Implementar funcionalidades completas
- Refatorar código em múltiplos arquivos
- Realizar alterações complexas que requerem múltiplas etapas
- Criar novos componentes e estruturas

O Agent analisa todo o contexto do projeto e executa as mudanças necessárias de forma autônoma, permitindo que você revise e aceite as alterações propostas.

### 💬 Ask (Perguntar)
Modo de consulta interativa onde você pode fazer perguntas sobre o código, documentação ou conceitos. O Ask é perfeito para:
- Entender como uma parte específica do código funciona
- Obter explicações sobre padrões e práticas
- Consultar documentação e melhores práticas
- Resolver dúvidas técnicas sem alterar o código

Diferente do Agent, o modo Ask não faz alterações no código, apenas fornece respostas e explicações baseadas no contexto do seu projeto.

### 📋 Plan (Planejar)
Modo de planejamento que cria um plano detalhado antes de executar qualquer alteração. O Plan é útil para:
- Visualizar todas as mudanças que serão feitas antes de executá-las
- Entender o impacto de uma alteração em todo o projeto
- Revisar e aprovar um plano de ação antes da implementação
- Trabalhar em tarefas complexas que requerem múltiplas etapas

O Plan gera um passo a passo detalhado das alterações propostas, permitindo que você revise, ajuste e aprove antes que qualquer código seja modificado.

### 🔍 Debug (Depurar)
Modo de depuração que ajuda a identificar e resolver problemas no código. O Debug é essencial para:
- Analisar erros e exceções no código
- Entender o fluxo de execução e valores de variáveis
- Identificar bugs e problemas de lógica
- Otimizar o desempenho da aplicação
- Resolver problemas complexos de forma estruturada

O Debug utiliza o contexto completo do projeto para fornecer diagnósticos precisos, sugestões de correção e explicações detalhadas sobre problemas encontrados no código.

### ⌨️ Tab (Autocompletar)
Utilize a tecla **Tab** para uma infinidade de recursos:
- Completar código automaticamente
- Criar comentários e documentação
- Gerar código baseado em contexto
- Criar dados de mock
- E muito mais!

O próprio Cursor sugere opções de ações de acordo com o cenário, e o Tab é usado para aceitar essas sugestões.

### 📚 Contexto
Além de conhecer toda a sua base de código, você pode:
- Especificar arquivos específicos
- Referenciar linhas de código
- Incluir documentação externa
- Melhorar significativamente o desempenho do Cursor

---

## 📁 Projetos

### 🎨 Primeiro Projeto
Projeto React desenvolvido com Vite, incluindo:
- **React Router** para navegação
- **3 Páginas**: Home, Sobre e Contato
- **Componentes reutilizáveis**
- **Formulário de contato** com validação

**Tecnologias utilizadas:**
- React 19.2.0
- Vite 7.2.4
- React Router DOM
- ESLint

**Como executar:**
```bash
cd primeiro-projeto
npm install
npm run dev
```

---

## 🛠️ Tecnologias e Ferramentas

Este repositório utiliza as seguintes tecnologias:

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server moderno
- **React Router** - Roteamento para aplicações React
- **ESLint** - Ferramenta de linting para JavaScript/React

---

## 📝 Estrutura do Repositório

```
cursor-udemy/
├── primeiro-projeto/          # Projeto React com Vite
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas da aplicação
│   │   └── ...
│   └── ...
└── README.MD                  # Este arquivo
```

---

## 📚 Recursos de Aprendizado

- [Documentação do Cursor AI](https://cursor.sh/docs)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)