import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Permissions', () => {

  beforeEach(() => {
    // Acessar a aplicação.
    cy.visit('/');
  });

  //TC-020 - Tentar curtir um herói sem estar autenticado
  context('Tentar curtir heroi sem autenticacao', () => {
    it('Deve apresentar mensagem informando para fazer o login', () => {

      // Primeiro heroi
      cy.get(homePage.selectorsList().heroCard).first()
        .within(() => {

          //Verifica quantas curtidas o primeiro heroi tem
          cy.get(homePage.selectorsList().heroFans).invoke('text').as('likes');

          //Clica em curtir
          cy.get(homePage.selectorsList().likeButton).click();
        });

      //Verifica mensagem exigindo autenticação
      homePage.checkAlertMessage('You must log in to like.');

      //Verifica se o numero de curtidas não mudou
      cy.get('@likes').then((likes) => {
        cy.get(homePage.selectorsList().heroCard).first().within(() => {
          cy.get(homePage.selectorsList().heroFans).should('have.text', likes)
        });
      })
    })
  });

  //TC-021 - Tentar contratar um herói sem estar autenticado
  context('Tentar contratar heroi sem autenticacao', () => {
    it('Deve apresentar mensagem informando para fazer o login', () => {
      // Primeiro heroi
      cy.get(homePage.selectorsList().heroCard).first()
        .within(() => {

          //Verifica quantos contratos o primeiro heroi tem
          cy.get(homePage.selectorsList().heroSaves).invoke('text').as('saves');

          //Clica em contratar
          cy.get(homePage.selectorsList().hireButton).click();
        });

      //Verifica mensagem exigindo autenticação
      homePage.checkAlertMessage('You must log in to hire this hero.');

      //Verifica se o numero de contratos não mudou
      cy.get('@saves').then((saves) => {
        cy.get(homePage.selectorsList().heroCard).first().within(() => {
          cy.get(homePage.selectorsList().heroSaves).should('have.text', saves)
        });
      })
    })
  });

  //TC-022 - Verificar que usuários não autenticados não possuem acesso às funcionalidades administrativas
  context('Usuarios não autenticados nao possuem acesso administrativo', () => {
    it('Não deve exibir funcionalidades administrativas', () => {
      //Não deve haver botão de criar heroi
      cy.get(homePage.selectorsList().createHeroButton).should('not.exist');

      //Não deve haver botão de editar heroi
      cy.get(homePage.selectorsList().editHeroButton).should('not.exist');

      //Não deve haver botão de deletar heroi
      cy.get(homePage.selectorsList().deleteHeroButton).should('not.exist');
    })
  });

  //TC-023 - Verificar que usuários comuns não possuem acesso às funcionalidades administrativas
  context('Usuarios comuns nao possuem acesso administrativo', () => {
    it('Não deve exibir funcionalidades administrativas', () => {
      //Faz login com usuario comum
      loginPage.accessLoginForm();
      loginPage.fillLoginForm('test@test.com', 'test123');
      loginPage.clickSignInButton();
      
      //Não deve haver botão de criar heroi
      cy.get(homePage.selectorsList().createHeroButton).should('not.exist');

      //Não deve haver botão de editar heroi
      cy.get(homePage.selectorsList().editHeroButton).should('not.exist');

      //Não deve haver botão de deletar heroi
      cy.get(homePage.selectorsList().deleteHeroButton).should('not.exist');
    })
  });

  //TC-024 - Verificar que usuários administradores possuem acesso às funcionalidades administrativas
  context('Usuarios administrativos possuem acesso administrativo', () => {
    it('Deve exibir funcionalidades administrativas', () => {
      // Fazer login com usuario administrador
      loginPage.accessLoginForm();
      loginPage.fillLoginForm('admin@test.com', 'test123');
      loginPage.clickSignInButton();

      //Deve exibir botão de criar heroi
      cy.get(homePage.selectorsList().createHeroButton).should('be.visible');

      //Deve exibir botão de editar heroi
      cy.get(homePage.selectorsList().editHeroButton).should('be.visible');

      //Deve exibir botão de deletar heroi
      cy.get(homePage.selectorsList().deleteHeroButton).should('be.visible');
    })
  });
})