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
Esse passo cria o arquivo package.json, que vai armazenar as dependências do projeto (como o Cypress).
<br/>
O `-y` apenas aceita todas as opções padrão automaticamente.
```
npm init -y
```
### 📦 Instalando o Cypress
Com o projeto criado, agora vamos instalar o Cypress como uma dependência de desenvolvimento.
```
npm install cypress --save-dev
```
> 🔍 Por que --save-dev?
> <br/>Porque o Cypress será usado apenas no processo de desenvolvimento e teste, e não na execução do código final em produção.


