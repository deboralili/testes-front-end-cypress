# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app

## Casos de teste

Exercício: Criação de Casos de Teste para a Feature "Visualizar Histórico de Transações"

A funcionalidade "Visualizar Histórico de Transações" é crucial no aplicativo Real World App, permitindo aos usuários rastrear todas as transações realizadas. Vamos criar casos de teste para garantir que essa funcionalidade funcione corretamente:

1. Caso de Teste: Visualizar histórico de transações com sucesso.
  - Descrição: Verifique se é possível visualizar o histórico de transações de um usuário com suas transações anteriores exibidas corretamente.

[Link para o Cenário de Teste SC-009](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/transactionHistoryScenarios.md)
<br/>
[Link para o Caso de Teste TC-013](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/transaction-history-test-cases/TC-013-Visualizacao-Historico-de-Transacao-com-sucesso.md)
<br/>

2. Caso de Teste: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.
  - Descrição: Garanta que o sistema exiba uma mensagem indicando que o usuário não possui transações anteriores caso tente visualizar o histórico sem transações registradas.

[Link para o Cenário de Teste SC-010](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/transactionHistoryScenarios.md)
<br/>
[Link para o Caso de Teste TC-014](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/transaction-history-test-cases/TC-014-Visualizacao-Historico-de-Transacao-sem-Registro.md)
<br/>

## Automação dos casos de teste

Exercício: Automação dos Casos de Teste "Visualizar Histórico de Transações"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

Links úteis da resolução dos exercícios de automação:

[SignUp Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/signUpPage.js)
<br/>
[Login Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/loginPage.js)
<br/>
[Home Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/homePage.js)
<br/>
[Transaction History Spec](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/e2e/transactionHistory.spec.cy.js)
<br/>
[User Data](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/fixtures/userData.json)

Automação do Caso de Teste: Visualizar histórico de transações com sucesso.

```javascript
describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage();
        loginPage.fillLoginForm(userData.userNative);
        loginPage.clickLoginButton();

        homePage.accessMineTab();
        homePage.checkTransactionListIsVisible();
        cy.get(homePage.selectorsList().transactionList).should('contain', userData.userNative.firstName + ' ' + userData.userNative.lastName);
  });
});
```

Automação do Caso de Teste: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.

```javascript
describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    const password = chance.string({ length: 4 });

      let randomUser = {
        firstName: chance.first(),
        lastName: chance.last(),
        username: chance.word(),
        password: password,
        confirmPassword: password
      }

      signUpPage.accessSignUpPage();
      signUpPage.fillSignUpForm(randomUser);
      signUpPage.clickSignUpButton();

      loginPage.accessLoginPage();
      loginPage.fillLoginForm(randomUser);
      loginPage.clickLoginButton();

      homePage.clickNextButton();
      homePage.fillBankAccountForm('Bank Name', '123456789', '987654321');
      homePage.clickSubmitBankAccount();
      homePage.clickDoneButton();

      homePage.accessMineTab();
      homePage.checkExpectedMessage('No Transactions');
      homePage.checkCreateTransactionButtonVisible();
      homePage.checkTransactionListNotExists();
  });
});
```

Continue praticando e explorando outras funcionalidades do Cypress.io para criar casos de teste e automações abrangentes para todas as features do Real World App. O objetivo é se tornar um Guardião da Qualidade altamente capacitado, capaz de testar de forma eficaz e garantir a qualidade do aplicativo em todos os aspectos. 

Boa sorte! 
#GuardiaoDaQualidade #AutomacaoDeTestes #Cypress

## LinkedIn

Assim que finalizar esses exercicios faça uma postagem no seu LinkedIn.
Isso ajudará na procura da sua entrevista.

Use esse Prompt para te ajudar a criar seu post.

```
Crie um post de Linkedin sobre um projeto de automação Cypress que estou realizando pela LumeStack no curso de "Guardião da Qualidade".
Eu criei casos de teste para a feature de {Feature testada} do projeto Real World App do Cypress IO.
Eu também automatizei os mesmos casos de teste com o Cypress
```
Aproveite e mencione a LumeStack no post 😉
