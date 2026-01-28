import userData from '../fixtures/userData.json'

//Suite de testes (cenario de teste)
describe('SC-001: Login com sucesso', () => {

    const selectorsList = {
        loginURL: "http://localhost:3000/signin",
        usernameField: "[data-test='signin-username']",
        passwordField: "[data-test='signin-password']",
        signinButton: "[data-test='signin-submit']",
        usernameLogged: "[data-test='sidenav-username']",
        transactionTab: "[data-test='nav-transaction-tabs']"
    }

    //caso de teste
    it('TC-001: Deve fazer login com credenciais validas', () => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');

        //Acessa a pagina de login
        cy.visit(selectorsList.loginURL);

        //Preenche o campo username com nome de usuario valido
        cy.get(selectorsList.usernameField).type(userData.userSuccess.username);

        //Preenche o campo password com senha correspondente valida
        cy.get(selectorsList.passwordField).type(userData.userSuccess.password);

        //Clica no botão para fazer login
        cy.get(selectorsList.signinButton).click();

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

