# RWA Exercícios

## Descrição

O Real World App (RWA) é um aplicativo criado pela equipe do Cypress para demonstrar o uso real de métodos, padrões e fluxos de teste do Cypress. É uma espécie de clone do aplicativo Venmo, que permite aos usuários criar uma conta, adicionar uma conta bancária e enviar/receber dinheiro entre amigos. Vamos nos utilizar do RWA para fazer exercícios e colocar nosso aprendizado do curso "Guardião da Qualidade" para aprender recursos avançados do Cypress e estratégias de teste. Ele serve como uma plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software. 

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


### Casos de teste

**Exercício: Criação de Casos de Teste para as Features "Login" e "Registro de Usuário"**

As funcionalidades de "Login" e "Registro de Usuário" são fundamentais no aplicativo Real World App, permitindo que os usuários acessem suas contas existentes ou criem novas contas. Vamos criar casos de teste para garantir que essas funcionalidades funcionem corretamente:

**Caso de Teste: Login com sucesso.** <br/>
**Descrição:** Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas. <br/>
[Link para o Cenário de Teste SC-001](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/loginScenarios.md)
<br/>
[Link para o Caso de Teste TC-001](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/login-test-cases/TC-001-Login-com-sucesso.md)

**Caso de Teste:** Tentar fazer login com credenciais inválidas.<br/>
**Descrição:** Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos). <br/>
[Link para o Cenário de Teste SC-002](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/loginScenarios.md)
<br/>
[Link para o Caso de Teste TC-002](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/login-test-cases/TC-002-Login-com-usuario-invalido.md)

**Caso de Teste:** Registro de novo usuário com sucesso.<br/>
**Descrição:** Verifique se é possível registrar um novo usuário com informações válidas.

[Link para o Cenário de Teste SC-003](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/signUpScenarios.md)
<br/>
[Link para o Caso de Teste TC-003](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-003-Cadastro-de-usuario-com-sucesso.md)

**Caso de Teste:** Tentar registrar um novo usuário com informações incompletas.<br/>
**Descrição:** Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.

[Link para o Cenário de Teste SC-004](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/cenarios/signUpScenarios.md)
<br/>
[Link para o Caso de Teste TC-004](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-004-Cadastro-de-usuario-com-campo-first-name-vazio.md)
<br/>
[Link para o Caso de Teste TC-005](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-005-Cadastro-de-usuario-com-campo-last-name-vazio.md)
<br/>
[Link para o Caso de Teste TC-006](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-006-Cadastro-de-usuario-com-campo-username-vazio.md)
<br/>
[Link para o Caso de Teste TC-007](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-007-Cadastro-de-usuario-com-campo-password-vazio.md)
<br/>
[Link para o Caso de Teste TC-008](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-008-Cadastro-de-usuario-com-campo-confirm-password-vazio.md)
<br/>
[Link para o Caso de Teste TC-009](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-009-Cadastro-de-usuario-com-todos-os-campos-vazios.md)
<br/>
[Link para o Caso de Teste TC-010](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/casos-de-teste/sign-up-test-cases/TC-010-Cadastro-de-usuario-com-os-campos-password-e-confirm-password-vazios.md)

### Automação dos casos de teste

**Exercício:** Automação dos Casos de Teste "Login" e "Registro de Usuário"

Agora que você criou os casos de teste, é hora de automatizá-los usando o Cypress.io. Certifique-se de que o projeto "Real World App" esteja configurado corretamente no seu ambiente de desenvolvimento. Crie scripts de teste para os casos de teste definidos nos exercícios anteriores:

Links úteis da resolução dos exercícios de automação:

[Login Spec](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/e2e/login.spec.cy.js)
<br/>
[SignUp Spec](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/e2e/signUp.spec.cy.js)
<br/>
[User Data](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/fixtures/userData.json)
<br/>
[Login Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/loginPage.js)
<br/>
[Home Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/homePage.js)
<br/>
[SignUp Page](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/cypress-realworld-app/cypress/pages/signUpPage.js)

**Automação do Caso de Teste: Login com sucesso.**

```javascript
//Suite de testes
describe('Login', () => {

    //Executa antes de cada it
    beforeEach(() => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');

        //Acessa a pagina de login
        loginPage.accessLoginPage();
    });

    //SC-001: O usuário deve conseguir realizar login ao informar credenciais válidas.
    context('Quando o usuario informa credenciais validas', () => {

        //TC-001: Efetuar login com credenciais válidas
        it('Deve autenticar o usuario com sucesso', () => {

            //Preeche formulario e clica no botao de signin
            loginPage.loginWithUser(userData.userSuccess);
            //Espera a resposta do servidor
            cy.wait('@loginRequest').then((interception) => {
                //Garante que a requisicao ocorreu com sucesso
                expect(interception.response.statusCode).to.equal(200);
            });

            //Verifica se o nome de usuario esta na pagina
            homePage.checkUsernameLogged(userData.userSuccess.username);

            //Verifica se tem a guia de transacao da tela Home
            homePage.checkHomePage();
        });
    });
});
```
![Evidência: Automação Login com Sucesso](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/login/Automation-EvidenceLoginSuccess.gif)

**Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.**

```javascript
//Suite de testes
describe('Login', () => {

    //Executa antes de cada it
    beforeEach(() => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');

        //Acessa a pagina de login
        loginPage.accessLoginPage();
    });

    //SC-002: O sistema deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas.
    context('Quando o usuario informa credenciais invalidas', () => {

        //TC-002: Tentar fazer login com credenciais inválidas.
        it('Deve exibir mensagem de erro', () => {

            loginPage.loginWithUser(userData.userFail);

            //Verifica se o usuário nao foi autenticado
            cy.wait('@loginRequest').then((interception) => {
                expect(interception.response.statusCode).to.equal(401);
            });

            //Verifica se aparece mensagem de erro na tela
            loginPage.checkWrongCredentialMessage();

            //Verifica se o usuario permanece na pagina de login
            loginPage.checkLoginPage();
        });
    });
});
```
![Evidência: Automação Falha de Login com Credenciais Invalidas](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/login/Automation-EvidenceLoginFail.gif)

**Automação do Caso de Teste: Registro de novo usuário com sucesso.**

```javascript
describe('Cadastro de Usuario', () => {

  const randomUser = {
    firstName: chance.first(),
    lastName: chance.last(),
    username: chance.word(),
    password: chance.string({ length: 4 })
  }

  beforeEach(() => {
    signUpPage.accessSignUpPage();
  });

  //SC-003: O usuário deve ser capaz de se cadastrar no sistema ao inserir informações válidas.
  context('Quando o usuario insere informacoes validas', () => {
    //TC-003: Efetuar cadastro de um novo usuário com informações válidas.
    it('Deve efetuar o cadastro com sucesso', () => {

      signUpPage.signUpWithAnyUser(randomUser);

      loginPage.checkLoginPage();

      loginPage.loginWithUser(randomUser);

      homePage.checkHomePage();

      homePage.checkUsernameLogged(randomUser.username);
    });
  });

})
```
![Evidência: Automação Cadastro de Usuário com informações válidas](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/signUp/Automation-EvidenceSignUpSuccess.gif)

**Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.**

```javascript
describe('Cadastro de Usuario', () => {
  let randomUser;
  beforeEach(() => {
    const password = chance.string({ length: 4 });
    randomUser = {
      firstName: chance.first(),
      lastName: chance.last(),
      username: chance.word(),
      password: password,
      confirmPassword: password
    }
    signUpPage.accessSignUpPage();
  });

  //SC-004: O sistema deve impedir o cadastro e exibir mensagem de erro ao tentar 
  // cadastrar um novo usuário sem preencher todos os campos obrigatórios.
  context('Validacao de Campos Obrigatorios', () => {
    //TC-004: Cadastro de usuário com campo "First Name" vazio.
    it.only('Cadastro de Usuario com campo "First Name" vazio', () => {

      const userWithEmptyFirstName = {
        ...randomUser, firstName: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyFirstName);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().firstNameErrorMessage,
        "First Name is required"
      );

      signUpPage.checkSignUpButtonIsDisabled();
    });

  });

})
```
![Evidência: Automação Cadastro de Usuário com campo Fist Name vazio](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/signUp/Automation-UserRegistrationWithoutFirstName.gif)

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
