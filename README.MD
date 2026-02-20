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

## ⚙️ Rules e Commands

### 📋 Rules (Regras)
As Rules são diretrizes personalizadas que orientam o comportamento da IA durante as interações. Elas ajudam a manter consistência no código e nas respostas.

#### Como configurar Rules:

##### Método 1: Via Interface do Cursor
1. Acesse `Cursor Settings` > `Rules`
2. Clique em "Add Rule"
3. Defina nome, descrição e conteúdo da rule

##### Método 2: Via Arquivos de Projeto (Recomendado)
Você pode criar arquivos especiais no diretório raiz do seu projeto:

**`.cursorrules`** ou **`.cursorrules.md`**:
```
# Regras de Codificação - Projeto React

## Componentes
- Sempre use functional components com hooks
- Prefira const over let quando possível
- Use arrow functions para event handlers
- Mantenha imports organizados por tipo (React, bibliotecas, componentes locais)

## Estado e Efeitos
- Use useState para estado local
- Use useEffect para efeitos colaterais
- Limpe subscriptions em useEffect return

## Performance
- Use useMemo para cálculos custosos
- Use useCallback para funções passadas como props
- Evite re-renders desnecessários

## Estilo
- Use nomes descritivos em português
- Mantenha funções pequenas (máximo 20 linhas)
- Adicione comentários JSDoc para funções públicas
```

**Estrutura recomendada para .cursorrules:**
```markdown
# [Nome do Projeto] - Regras de Desenvolvimento

## [Categoria 1]
- Regra específica 1
- Regra específica 2

## [Categoria 2]
- Regra específica 3
- Regra específica 4

## Padrões de Commit
- Use conventional commits
- Mantenha mensagens em português
```

**Vantagens dos arquivos .cursorrules:**
- ✅ **Versionamento**: As regras ficam no repositório Git
- ✅ **Compartilhamento**: Todos da equipe seguem as mesmas regras
- ✅ **Contextual**: Regras específicas por projeto
- ✅ **Automático**: Cursor detecta automaticamente estes arquivos

**Exemplo de estrutura de pastas:**
```
meu-projeto/
├── .cursorrules
├── src/
│   ├── components/
│   └── pages/
└── package.json
```

#### Exemplos de Rules:

**Rule para React:**
```
Sempre use functional components com hooks
Prefira const over let quando possível
Use arrow functions para event handlers
Mantenha imports organizados por tipo (React, bibliotecas, componentes locais)
```

**Rule para TypeScript:**
```
Use tipos explícitos ao invés de any
Prefira interfaces sobre types para objetos
Use utility types quando apropriado (Partial, Omit, etc.)
Valide props com PropTypes ou TypeScript
```

**Rule para Estilo de Código:**
```
Use nomes descritivos para variáveis e funções
Mantenha funções pequenas (máximo 20 linhas)
Adicione comentários JSDoc para funções públicas
Use async/await ao invés de Promises quando possível
```

### 🖥️ Commands (Comandos)
Commands são atalhos personalizados que executam ações específicas ou inserem trechos de código comuns.

#### Como criar Commands:
1. Acesse `Cursor Settings` > `Commands`
2. Clique em "Add Command"
3. Defina nome, atalho de teclado e ação

#### Exemplos de Commands úteis:

**Command para Componente React:**
```javascript
import React from 'react'

function ${1:ComponentName}() {
  return (
    <div>
      ${2:/* conteúdo do componente */}
    </div>
  )
}

export default ${1:ComponentName}
```

**Command para Hook Customizado:**
```javascript
import { useState, useEffect } from 'react'

export function use${1:HookName}(${2:params}) {
  const [${3:state}, set${3:State}] = useState(${4:initialValue})

  ${5:// lógica do hook}

  return {
    ${3:state},
    set${3:State}
  }
}
```

**Command para Tratamento de Erro:**
```javascript
try {
  ${1:// código que pode gerar erro}
} catch (error) {
  console.error('Erro:', error)
  ${2:// tratamento adicional do erro}
}
```

### 📄 Arquivo .cursorignore
O arquivo `.cursorignore` é uma funcionalidade específica do Cursor AI que permite excluir arquivos e pastas do contexto de análise da IA. Este arquivo funciona de forma similar ao `.gitignore`, mas especificamente para controlar quais arquivos o Cursor deve considerar durante suas análises e sugestões.

**Para que serve:**
- **Otimização de Performance**: Evita que arquivos grandes, temporários ou irrelevantes sejam processados pela IA
- **Privacidade**: Exclui arquivos sensíveis como chaves de API, dados pessoais ou configurações locais
- **Foco Contextual**: Mantém o foco da IA apenas nos arquivos relevantes do projeto
- **Redução de Ruído**: Evita sugestões baseadas em arquivos de cache, logs ou dependências desnecessárias

**Como funciona:**
- Sintaxe similar ao `.gitignore`
- Suporta padrões glob (ex: `*.log`, `node_modules/**`)
- Arquivo vazio significa que nenhum arquivo está sendo ignorado (padrão)
- É automaticamente detectado pelo Cursor quando presente na raiz do projeto

**Exemplos de uso:**
```gitignore
# Arquivos temporários
*.tmp
*.temp

# Diretórios de dependências
node_modules/
vendor/

# Arquivos de configuração local
.env
.env.local

# Logs e cache
logs/
.cache/
dist/

# Arquivos do sistema
.DS_Store
Thumbs.db
```

---

## 🤖 Criação e Inserção de Agentes

### 📦 O que são Agentes
Agentes são extensões inteligentes que ampliam as capacidades do Cursor, permitindo integração com serviços externos, automação de tarefas e funcionalidades personalizadas.

### 🔧 Como criar um Agente

#### 1. Estrutura Básica
Um agente é composto por:
- **Manifesto** (`package.json`): Define metadados e configurações
- **Código fonte**: Lógica principal do agente
- **Configurações MCP**: Protocolo de comunicação

#### 2. Exemplo de Estrutura de Agente:
```
meu-agente/
├── package.json
├── src/
│   └── index.js
└── mcp-config.json
```

#### 3. Package.json do Agente:
```json
{
  "name": "meu-agente-cursor",
  "version": "1.0.0",
  "description": "Agente personalizado para Cursor",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "keywords": ["cursor", "agent", "mcp"],
  "author": "Seu Nome",
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0"
  }
}
```

#### 4. Código Básico do Agente:
```javascript
const { Server } = require('@modelcontextprotocol/sdk/server/index.js')
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js')

class MeuAgente extends Server {
  constructor() {
    super({
      name: 'meu-agente',
      version: '1.0.0'
    })
  }

  async handleRequest(request) {
    switch (request.method) {
      case 'tools/call':
        return await this.handleToolCall(request.params)
      default:
        return { error: 'Método não suportado' }
    }
  }

  async handleToolCall(params) {
    // Implemente a lógica específica do seu agente
    switch (params.name) {
      case 'minha_ferramenta':
        return {
          content: [{
            type: 'text',
            text: `Resultado da ferramenta: ${params.arguments.input}`
          }]
        }
      default:
        return { error: 'Ferramenta não encontrada' }
    }
  }
}

// Inicialização do agente
const server = new MeuAgente()
server.connect(new StdioServerTransport()).catch(console.error)
```

### 🔌 Inserindo Agentes no Cursor

#### Método 1: Via Interface (Recomendado)
1. Abra o Cursor
2. Vá em `Settings` > `Extensions` > `MCP`
3. Clique em "Add Server"
4. Configure:
   - **Name**: Nome do agente
   - **Command**: `node /caminho/para/seu/agente/src/index.js`
   - **Args**: Argumentos adicionais se necessário

#### Método 2: Via Arquivo de Configuração
1. Localize o arquivo de configuração MCP do Cursor
2. Adicione seu agente na seção `mcpServers`:

```json
{
  "mcpServers": {
    "meu-agente": {
      "command": "node",
      "args": ["/caminho/para/seu/agente/src/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### 🎯 Exemplos de Agentes Úteis

#### Agente de Git
```javascript
// Agente que auxilia com comandos Git
case 'git_status':
  const status = await this.runCommand('git status --porcelain')
  return { content: [{ type: 'text', text: status }] }

case 'git_commit':
  await this.runCommand(`git commit -m "${params.arguments.message}"`)
  return { content: [{ type: 'text', text: 'Commit realizado com sucesso' }] }
```

#### Agente de Banco de Dados
```javascript
// Agente para consultas SQL
case 'query_database':
  const results = await this.executeQuery(params.arguments.sql)
  return {
    content: [{
      type: 'text',
      text: JSON.stringify(results, null, 2)
    }]
  }
```

#### Agente de API
```javascript
// Agente para chamadas de API
case 'call_api':
  const response = await fetch(params.arguments.url, {
    method: params.arguments.method || 'GET',
    headers: params.arguments.headers || {},
    body: params.arguments.body
  })
  const data = await response.json()
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
```

### ⚠️ Boas Práticas para Agentes

- **Segurança**: Sempre valide entradas e saídas
- **Tratamento de Erros**: Implemente tratamento robusto de erros
- **Documentação**: Documente claramente as funcionalidades
- **Testes**: Teste extensivamente antes de publicar
- **Performance**: Otimize para respostas rápidas
- **Compatibilidade**: Mantenha compatibilidade com versões do MCP

---

## 🌐 Cursor Directory

O **[Cursor Directory](https://cursor.directory/)** é o hub oficial da comunidade Cursor AI, uma plataforma centralizada onde desenvolvedores podem explorar, criar e compartilhar recursos para maximizar o potencial do Cursor.

### 🎯 Principais Funcionalidades

#### 📋 Rules (Regras)
A página de **Rules** oferece uma biblioteca completa de regras pré-configuradas criadas pela comunidade e pela equipe do Cursor. Você pode:

- **Buscar regras existentes**: Encontre regras prontas para diferentes tecnologias e frameworks
- **Criar regras personalizadas**: Desenvolva suas próprias regras e compartilhe com a comunidade
- **Organização por categoria**: Regras organizadas por stacks tecnológicos (TypeScript, Next.js, React Native, Chrome Extensions, APIs, etc.)
- **Regras oficiais**: Acesse regras desenvolvidas pela equipe do Cursor com melhores práticas

**Como usar:**
1. Acesse [cursor.directory/rules](https://cursor.directory/rules)
2. Navegue pelas categorias ou use a busca
3. Copie as regras que interessam para seus projetos
4. Adapte conforme necessário para seu workflow

#### 🤖 MCP Servers
Explore e descubra servidores MCP (Model Context Protocol) disponíveis na comunidade:
- Servidores para integração com APIs externas
- Ferramentas para automação de tarefas
- Extensões para diferentes serviços e plataformas

#### 💼 Job Board
Descubra oportunidades de emprego relacionadas ao Cursor e tecnologias associadas.

#### 📰 Community Board
Mantenha-se atualizado com as últimas notícias, discussões e anúncios da comunidade Cursor.

### 💡 Por que usar o Cursor Directory?

- **Acelere seu setup**: Use regras comprovadas ao invés de criar tudo do zero
- **Aprenda com a comunidade**: Veja como outros desenvolvedores configuram seus ambientes
- **Mantenha-se atualizado**: Acesse as melhores práticas mais recentes
- **Contribua**: Compartilhe suas próprias regras e ajude outros desenvolvedores

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