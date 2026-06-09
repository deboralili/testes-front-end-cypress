import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Login', () => {

  //SC-001 - O usuário deve conseguir realizar login ao informar credenciais válidas.
  context('Login com credenciais válidas', () => {

    beforeEach(() => {
      //Acompanha requisição de login
      cy.intercept('POST', '/auth').as('loginRequest');

      // Acessar formulario de login
      loginPage.accessLoginForm();
    });

    //TC-001 - Efetuar login com credenciais válidas
    it('Deve autenticar o usuario com sucesso', () => {

      //Preencher campos de email e senha
      loginPage.fillLoginForm('test@test.com', 'test123');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Aguardar resposta da requisição de login
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);

      //Verificar se o botão de logout está visível
      loginPage.checkLogoutButtonVisible();
    });

    //TC-002 - Realizar login com credenciais válidas de usuário administrador
    it('Deve autenticar usuario administrador com sucesso', () => {

      //Preencher campos de email e senha com credenciais de usuário administrador
      loginPage.fillLoginForm('admin@test.com', 'test123');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Aguardar resposta da requisição de login
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);

      //Verificar se o botão de logout está visível
      loginPage.checkLogoutButtonVisible();

      //Verificar se as funcionalidades administrativas estão visíveis
      homePage.checkAdministrativeFeaturesIsVisible();
    });
  });

  context('Login com credenciais inválidas', () => {

    beforeEach(() => {
      //Acompanha requisição de login
      cy.intercept('POST', '/auth').as('loginRequest');

      //Acessar formulario de login
      loginPage.accessLoginForm();
    });

    //TC-003 - Tentar realizar login com e-mail válido e senha inválida
    it('Deve exibir mensagem de erro ao tentar autenticar com senha inválida', () => {
      //Preencher campos de email e senha com senha inválida
      loginPage.fillLoginForm('test@test.com', 'senhaInvalida');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Aguardar resposta da requisição de login
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);

      //Verificar mensagem de alerta de credenciais inválidas
      loginPage.checkAlertMessage('Invalid email or password');
    });

    //TC-004 - Tentar realizar login com e-mail não cadastrado e senha válida
    it('Deve exibir mensagem de erro ao tentar autenticar com email não cadastrado', () => {
      //Preencher campos de email e senha com e-mail não cadastrado
      loginPage.fillLoginForm('email@naocadastrado.com', 'test123');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Aguardar resposta da requisição de login
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);

      //Verificar mensagem de alerta de credenciais inválidas
      loginPage.checkAlertMessage('Invalid email or password');
    });

    //TC-005 - Tentar realizar login com formato de e-mail inválido
    it('Deve exibir mensagem de erro ao tentar autenticar com formato de email inválido', () => {
      //Preencher campos de email e senha com formato de e-mail inválido
      loginPage.fillLoginForm('emailInvalido', 'test123');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Verificar mensagem de alerta de credenciais inválidas
      loginPage.checkAlertMessage('Email is not valid');
    });

    //TC-006 - Tentar realizar login sem preencher o campo e-mail
    it('Deve exibir mensagem de erro ao tentar autenticar sem preencher o campo e-mail', () => {
      //Preencher formulario de login sem preencher o campo e-mail
      loginPage.fillLoginForm('', 'test123');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Verificar mensagem de alerta de email obrigatório
      loginPage.checkAlertMessage('Email is required');
    });

    //TC-007 - Tentar realizar login sem preencher o campo senha
    it('Deve exibir mensagem de erro ao tentar autenticar sem preencher o campo senha', () => {
      //Preencher formulario de login sem preencher o campo senha
      loginPage.fillLoginForm('test@test.com', '');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Verificar mensagem de alerta de senha obrigatória
      loginPage.checkAlertMessage('Password is required');
    });

    //TC-008 - Tentar realizar login sem preencher os campos e-mail e senha
    it('Deve exibir mensagens de erro ao tentar autenticar sem preencher os campos e-mail e senha', () => {
      //Preencher formulario de login sem preencher os campos e-mail e senha
      loginPage.fillLoginForm('', '');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Verificar mensagem de alerta de email obrigatório
      loginPage.checkAlertMessage('Email is required');

      //Verificar mensagem de alerta de senha obrigatória
      loginPage.checkAlertMessage('Password is required');
    });

    //TC-009 - Tentar realizar login com e-mail e senha não cadastrados
    it('Deve exibir mensagem de erro ao tentar autenticar com e-mail e senha não cadastrados', () => {
      //Preencher formulario de login com e-mail e senha não cadastrados
      loginPage.fillLoginForm('naoexiste@teste.com', 'senhaIncorreta');

      //Clicar no botão de login
      loginPage.clickSignInButton();

      //Aguardar resposta da requisição de login
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);

      //Verificar mensagem de alerta de credenciais inválidas
      loginPage.checkAlertMessage('Invalid email or password');
    });
  });
});