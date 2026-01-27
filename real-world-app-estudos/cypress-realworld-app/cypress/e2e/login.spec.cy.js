//Suite de testes (cenario de teste)
describe('SC-001: Login com sucesso', () => {

    //caso de teste
    it('TC-001: Deve fazer login com credenciais validas', () => {

        //Acessa a pagina de login
        cy.visit("http://localhost:3000/signin");

        //Preenche o campo username com nome de usuario valido
        cy.get('[data-test="signin-username"]').type('qa_teste');

        //Preenche o campo password com senha correspondente valida
        cy.get('[data-test="signin-password"]').type('1234');

        //Clica no botão para fazer login
        cy.get('[data-test="signin-submit"]').click();

        //Verifica se o nome de usuario esta na pagina
        cy.get('[data-test="sidenav-username"]').contains('qa_teste');

        //Verifica se tem guia de transacao da tela Home
        cy.get('[data-test="nav-transaction-tabs"]');
    });
});

