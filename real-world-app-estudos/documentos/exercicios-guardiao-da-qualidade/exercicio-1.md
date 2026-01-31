# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


### Casos de teste

**Exercício: Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"**

As funcionalidades de "Login" e "Registro de Usuário" são fundamentais no aplicativo Real World App, permitindo que os usuários acessem suas contas existentes ou criem novas contas. Vamos criar casos de teste para garantir que essas funcionalidades funcionem corretamente:

**Caso de Teste: Login com sucesso.** <br/>
**Descrição:** Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas. <br/>
[Link para o Cenário de Teste SC-001](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/login.md)
<br/>
[Link para o Caso de Teste TC-001](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/login/TC-001-Login-com-sucesso.md)

**Caso de Teste:** Tentar fazer login com credenciais inválidas.<br/>
**Descrição:** Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos).

**Caso de Teste:** Registro de novo usuário com sucesso.<br/>
**Descrição:** Verifique se é possível registrar um novo usuário com informações válidas.

**Caso de Teste:** Tentar registrar um novo usuário com informações incompletas.<br/>
**Descrição:** Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.

### Automação dos casos de teste

**Exercício:** Automação dos Casos de Teste "Login" e "Registro de Usuário"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

Links úteis da resolução dos exercícios de automação:

[Login Spec](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/e2e/login.spec.cy.js)
<br/>
[User Data](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/fixtures/userData.json)
<br/>
[Login Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/loginPage.js)
<br/>
[Home Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/homePage.js)

**Automação do Caso de Teste: Login com sucesso.**

```javascript
//Suite de testes (cenario de teste)
describe('SC-001: Login com sucesso', () => {
    //caso de teste
    it('TC-001: Deve fazer login com credenciais validas', () => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');
        //Acessa a pagina de login
        cy.visit("http://localhost:3000/signin");
        //Preenche o campo username com nome de usuario valido
        cy.get('[data-test="signin-username"]').type('qa_teste');
        //Preenche o campo password com senha correspondente valida
        cy.get('[data-test="signin-password"]').type('1234');
        //Clica no botão para fazer login
        cy.get('[data-test="signin-submit"]').click();
        //Espera a resposta do servidor
        cy.wait('@loginRequest').then((interception) => {
            //Garante que a requisicao ocorreu com sucesso
            expect(interception.response.statusCode).to.equal(200);
        });
        //Verifica se o nome de usuario esta na pagina
        cy.get('[data-test="sidenav-username"]').should('be.visible').and('contain', 'qa_teste');
        //Verifica se tem a guia de transacao da tela Home
        cy.get('[data-test="nav-transaction-tabs"]').should('be.visible');
    });
});
```
![Evidência: Automação Login com Sucesso](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/login/Automation-EvidenceLoginSuccess.gif)

**Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.**

```javascript
describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Registro de novo usuário com sucesso.**

```javascript
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

**Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

```javascript
describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
  });
});
```

Continue praticando e explorando outras funcionalidades do Cypress.io para criar casos de teste e automações abrangentes para todas as features do Real World App. O objetivo é se tornar um Guardião da Qualidade altamente capacitado, capaz de testar de forma eficaz e garantir a qualidade do aplicativo em todos os aspectos. 
Boa sorte! #GuardiaoDaQualidade #AutomacaoDeTestes #CypressIO #RealWorldApp

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
