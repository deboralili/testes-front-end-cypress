import HomePage from "../pages/homePage";

const homePage = new HomePage();

describe('Hero List', () => {
  
  //SC-005 - O sistema deve exibir a lista de herois cadastrados com todos os seus dados
  context('Exibição da lista de heróis', () => {

    beforeEach(() => {
      // Acessar a aplicação
      cy.visit('/');
    });

    //TC-010 - Visualizar a lista de heróis cadastrados
    it('Deve exibir a lista de heróis cadastrados', () => {

      // Verificar se a lista de heróis está visível
      homePage.checkHeroListIsVisible();

      // Verificar se as informações de cada herói estão visíveis
      homePage.checkHeroInformationIsVisible();

      //Verificar se o botão de curtir está visível em cada card
      homePage.checkLikeButtonVisibleForEachHero();

      //Verificar se o botão de contratar está visível em cada card
      homePage.checkHireButtonVisibleForEachHero();
    });
  });
})