import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Enviar Dinheiro', () => {

    let userBalance;

    beforeEach(() => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');
        cy.intercept('POST', '**/transactions').as('transactionRequest');

        loginPage.accessLoginPage();

        loginPage.fillLoginForm(userData.userNative);

        loginPage.checkSignInButtonEnabled();

        loginPage.clickLoginButton();

        cy.wait('@loginRequest').then((interception) => {
            //Garante que a requisicao ocorreu com sucesso
            expect(interception.response.statusCode).to.equal(200);
        });

        homePage.getUserBalance().then((balance) => {
            userBalance = balance;
        });
    });

    context('Enviar dinheiro com saldo suficiente', () => {

        it('Deve enviar dinheiro com sucesso', () => {
            homePage.clickNewTransactionButton();
            homePage.selectContact();

            cy.log(userBalance);

            let description = 'Saldo suficiente';

            homePage.fillTransactionForm((userBalance-1), description);
            homePage.clickPaymentButton();

            //cy.pause();

            cy.wait('@transactionRequest').then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
            });

            homePage.checkExpectedMessage('Transaction Submitted');
            //homePage.checkTransactionSummary('Paid $' + (userBalance-1) + ' for ' + description);
            //homePage.checkUpdatedUserBalance(1);
            //homePage.checkReturnButtonEnabled();
            //homePage.checkAnotherTransactionButtonEnabled();
        });
    });

    context('Enviar dinheiro com saldo insuficiente', () => {

        it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
            homePage.clickNewTransactionButton();
            homePage.selectContact();

            let description = 'Saldo insuficiente';

            homePage.fillTransactionForm((userBalance+1), description);
            homePage.clickPaymentButton();

            cy.wait('@transactionRequest').then((interception) => {
                expect(interception.response.statusCode).to.equal(400);
            });

            //homePage.checkExpectedMessage('Insufficient funds');
            //homePage.checkUserBalance(userBalance);
        });
    });
}); 