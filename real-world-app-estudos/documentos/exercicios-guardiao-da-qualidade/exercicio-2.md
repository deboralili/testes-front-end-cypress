# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app

## Casos de teste

Exercício: Criação de Casos de Teste para a Feature "Enviar Dinheiro"

Imagine que a feature "Enviar Dinheiro" é uma funcionalidade crítica no aplicativo Real World App. Seu objetivo é criar casos de teste para garantir que essa funcionalidade funcione corretamente. Considere os seguintes cenários como exemplo:

1. Caso de Teste: Enviar dinheiro com saldo suficiente.
   - Descrição: Verifique se é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente.
 
2. Caso de Teste: Enviar dinheiro com saldo insuficiente.
   - Descrição: Garanta que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro sem saldo suficiente.

## Automação dos casos de teste

Exercício: Automação dos Casos de Teste "Enviar Dinheiro"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:


Automação do Caso de Teste: Enviar dinheiro com saldo suficiente.

```javascript
describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```
Automação do Caso de Teste: Enviar dinheiro com saldo insuficiente.

```javascript
describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

Lembre-se de usar os recursos do Cypress.io, como seletores, comandos de navegação e asserções, para garantir que seus testes sejam eficazes e confiáveis. Continue praticando e explorando outras funcionalidades do Cypress para se tornar um Guardião da Qualidade bem preparado para testar o "Real World App" e outros projetos de forma profissional.

## LinkedIn

Assim que finalizar esses exercicios faça uma postagem no seu LinkedIn.
Isso ajudará na procura da sua entrevista.

Use esse Prompt para te ajudar a criar seu post.

```
Crie um post de Linkedin sobre um projeto de automação Cypress que estou realizando pela LumeStack no curso de "Guardião da Qualidade".
Eu criei casos de teste para a feature de transferencia de dinheiro do projeto Real World App do Cypress IO.
Eu també automatizei os mesmos casos de teste com o Cypress
```
Aproveite e mencione a LumeStack no post 😉
