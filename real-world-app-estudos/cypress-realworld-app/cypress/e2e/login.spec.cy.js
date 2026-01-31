import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

//Suite de testes (cenario de teste)
describe('SC-001: Login com sucesso', () => {

    const selectorsList = {
        usernameLogged: "[data-test='sidenav-username']",
        transactionTab: "[data-test='nav-transaction-tabs']"
    }

    //caso de teste
    it('TC-001: Deve fazer login com credenciais validas', () => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');

        //Acessa a pagina de login
        loginPage.accessLoginPage();

        //Preeche formulario e clica no botao de signin
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

        //Espera a resposta do servidor
        cy.wait('@loginRequest').then((interception) => {
            //Garante que a requisicao ocorreu com sucesso
            expect(interception.response.statusCode).to.equal(200);
        });

        //Verifica se o nome de usuario esta na pagina
        cy.get(selectorsList.usernameLogged).should('be.visible').and('contain', 'qa_teste');

        //Verifica se tem a guia de transacao da tela Home
        cy.get(selectorsList.transactionTab).should('be.visible');
    });
});

