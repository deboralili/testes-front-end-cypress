# 🚀 Guia para Iniciantes: Começando com Cypress do Zero

Este guia tem como objetivo auxiliar pessoas iniciantes a configurarem e utilizarem o Cypress para testes automatizados no front-end.
Tudo será explicado de forma simples, com o passo a passo necessário para entender não só **como** fazer, mas também **por que** cada ação é importante.

## ✅ Pré-requisitos

Antes de instalar o Cypress, é necessário que sua máquina tenha o seguinte:

### 1. [Node.js](https://nodejs.org/)

O Cypress é construído em JavaScript e precisa do Node.js para funcionar.
<br/>
Para verificar se você já tem o Node.js instalado, execute no terminal:
```
node -v
```
Se não estiver instalado, acesse [nodejs.org](https://www.nodejs.tech/pt-br/download) e faça o download da versão recomendada (LTS).

### 2. Gerenciador de pacotes (npm ou yarn)

Este guia usa o npm, que já vem junto com a instalação do Node.js, mas você também pode usar o yarn como alternativa.
<br/>
Caso queira verificar a versão do npm na sua máquina, execute no terminal:
```
npm -v
```

## 🛠️ Começando com Cypress

Existem duas formas comuns de começar a usar o Cypress. Escolha a que se aplica à sua situação:

1. [Novo projeto do zero](#1-novo-projeto-do-zero)
2. [Projeto existente da empresa ou equipe](#2-usar-cypress-em-um-projeto-existente)

### 1. Novo projeto do zero

Se você está apenas estudando ou começando um projeto separado só para testes, siga estes passos e digite os comandos no terminal.

#### 🧱 Crie uma pasta para o projeto

Primeiro, vá até o local onde deseja criar a pasta do projeto.
```
cd caminho/para/o/diretorio/desejado
```
No exemplo a seguir o local é a Área de Trabalho.
<br/>
O `~` representa o diretório pessoal do usuário, como C:/Users/seu-nome no Windows.
<br/>
A `\` é usada devido aos espaços. Isso faz com que o terminal interprete tudo como um único nome de diretório.
```
cd ~/Área\ de\ Trabalho
```
Em seguida, crie a pasta no diretório atual. No lugar de "nome-do-projeto" escreva o nome que quer dar à pasta. 
```
mkdir nome-do-projeto
```
Por último, entre na pasta recém-criada para continuar seu projeto por lá.
```
cd nome-do-projeto
```

#### 📦 Inicie o projeto com Node.js

Esse passo cria o arquivo `package.json`, que vai armazenar as dependências do projeto (como o Cypress).
<br/>
O `-y` apenas aceita todas as opções padrão automaticamente.
```
npm init -y
```

Com o projeto criado, agora vamos [instalar o Cypress](#instalando-o-cypress) como uma dependência de desenvolvimento.

### 2. Usar Cypress em um projeto existente

Se você já está em um projeto da empresa (ou de um time de desenvolvimento), o Cypress deve ser adicionado **dentro do mesmo repositório da aplicação**.

> 👀 Por que usar no mesmo projeto?
> - Os testes interagem com a interface real da aplicação.
> - Você garante que está testando o que o usuário realmente verá.
> - Os testes e o código ficam versionados juntos (boas práticas de CI/CD).
> - QA e devs compartilham o mesmo ambiente.

#### 🔎 Verifique se o projeto já tem Node.js

Acesse a pasta do projeto e veja se existe um `package.json`. Se sim, você pode instalar o Cypress direto.
<br/>
Se o projeto for bem grande, pergunte para a equipe se existe uma pasta específica para testes (tests/, qa/, ou cypress/) ou siga o padrão mais comum, criando a estrutura que o próprio Cypress propõe.

> ❗ Atenção: você não deve usar `npm init` nesse caso, pois o projeto já tem sua estrutura configurada.

### Instalando o Cypress

Digite o seguinte comando no terminal para realizar a instalação.

```
npm install cypress --save-dev
```

> 🔍 Por que --save-dev?
> <br/>Porque o Cypress será usado apenas no processo de desenvolvimento e teste, e não na execução do código final em produção.

#### Abrindo o Cypress pela primeira vez

Depois de instalado, você pode abrir o Cypress com o comando:

```
npx cypress open
```
> 📌 O `npx` executa o Cypress diretamente da pasta `node_modules`, sem precisar instalar globalmente.

Este comando abrirá a interface visual do Cypress. Na primeira vez, ele também criará automaticamente algumas pastas e arquivos para organizar seus testes.

### 🗂️ Estrutura criada automaticamente pelo Cypress

O Cypress cria a seguinte estrutura de pastas no seu projeto:

cypress/<br/>
├── e2e/           ← Onde ficam os arquivos de testes end-to-end<br/>
├── fixtures/      ← Arquivos de dados falsos (mocks) usados nos testes<br/>
├── support/       ← Código de apoio (como comandos reutilizáveis)<br/>
cypress.config.js  ← Arquivo de configuração do Cypress
