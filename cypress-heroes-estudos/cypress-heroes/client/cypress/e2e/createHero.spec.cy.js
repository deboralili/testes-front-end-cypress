import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import CreateHeroPage from "../pages/createHeroPage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const createHeroPage = new CreateHeroPage();

describe('Create Hero', () => {

  beforeEach(() => {
    //Acompanha a requisição para o cadastro
    cy.intercept('POST', '**/heroes').as('newHeroRequest');
    
    // Acessar a aplicação
    cy.visit('/');

    // Realizar login com um usuário administrador.    
    loginPage.accessLoginForm();
    loginPage.fillLoginForm('admin@test.com', 'test123');
    loginPage.clickSignInButton();

    // Clica no botão "Create New Hero".
    homePage.clickCreateHeroButton();

    // Verifica se foi redirecionado para a tela de cadastro de heroi
    createHeroPage.checkCreateHeroPage();

    //Verifica se o formulário está sendo exibido
    createHeroPage.checkCreateHeroFormIsVisible();
  });

  context('Cadastro com informações validas', () => {
    it('Deve cadastrar o heroi com sucesso', () => {
      // Preenche formulario
      createHeroPage.fillNameInput('Hero');
      createHeroPage.fillPriceInput(50);
      createHeroPage.fillFansInput(25);
      createHeroPage.fillSavesInput(0);
      createHeroPage.selectPower('Flying');
      createHeroPage.selectAvatarImage('cypress/fixtures/avatar.jpg');

      //Clica no botão Submit para enviar formulario
      createHeroPage.clickSubmitButton();

      //Verifica se o heroi foi cadastrado com sucesso
      cy.wait('@newHeroRequest').its('response.statusCode').should('eq', 201);

      //Verifica se o heroi cadastrado está aparecendo na lista de herois
      homePage.checkHeroInformation('Hero', 50, 25, 0, 'Flying', 'Hero');
    });
  });
})