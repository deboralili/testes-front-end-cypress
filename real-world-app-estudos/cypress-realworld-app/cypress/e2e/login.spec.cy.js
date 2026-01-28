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

