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
});