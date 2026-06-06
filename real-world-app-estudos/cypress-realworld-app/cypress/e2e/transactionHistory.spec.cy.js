import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import SignUpPage from '../pages/signUpPage';
import userData from '../fixtures/userData.json';

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage();
const homePage = new HomePage();
const signUpPage = new SignUpPage();

describe('Historico de Transacoes', () => {

  context('Visualizar histórico de transações com sucesso', () => {

      it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage();
        loginPage.fillLoginForm(userData.userNative);
        loginPage.clickLoginButton();

        homePage.accessMineTab();
        homePage.checkTransactionListIsVisible();
        cy.get(homePage.selectorsList().transactionList).should('contain', userData.userNative.firstName + ' ' + userData.userNative.lastName); 
      });
  });

  context('Tentar visualizar o histórico de transações sem transações anteriores', () => {

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      const password = chance.string({ length: 4 });

      let randomUser = {
        firstName: chance.first(),
        lastName: chance.last(),
        username: chance.word(),
        password: password,
        confirmPassword: password
      }

      signUpPage.accessSignUpPage();
      signUpPage.fillSignUpForm(randomUser);
      signUpPage.clickSignUpButton();

      loginPage.accessLoginPage();
      loginPage.fillLoginForm(randomUser);
      loginPage.clickLoginButton();

      homePage.clickNextButton();
      homePage.fillBankAccountForm('Bank Name', '123456789', '987654321');
      homePage.clickSubmitBankAccount();
      homePage.clickDoneButton();

      homePage.accessMineTab();
      homePage.checkExpectedMessage('No Transactions');
      homePage.checkCreateTransactionButtonVisible();
      homePage.checkTransactionListNotExists();

    });
  });
});