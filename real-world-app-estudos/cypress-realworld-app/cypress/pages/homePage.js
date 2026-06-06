class HomePage {
    selectorsList() {
        const selectors = {
            //User Info
            usernameLogged: "[data-test='sidenav-username']",
            userBalance: "[data-test='sidenav-user-balance']",

            //Transaction
            transactionTab: "[data-test='nav-transaction-tabs']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            firstContact: "[data-test='user-list-item-uBmeaz5pX']",
            amountInput: "[data-test='transaction-create-amount-input']",
            descriptionInput: "[data-test='transaction-create-description-input']",
            paymentButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            returnButton: "[data-test='new-transaction-return-to-transactions']",
            anotherTransactionButton: "[data-test='new-transaction-create-another-transaction']",
            // successTransactionAlert: "[data-test='alert-bar-success']"

            //Get Started Banner
            nextButton: "[data-test='user-onboarding-next']",
            bankNameInput: "[data-test='bankaccount-bankName-input']",
            routingNumberInput: "[data-test='bankaccount-routingNumber-input']",
            accountNumberInput: "[data-test='bankaccount-accountNumber-input']",
            bankAccountSubmitButton: "[data-test='bankaccount-submit']",
            doneButton: "[data-test='user-onboarding-next']",

            //Tab
            mineTab: "[data-test='nav-personal-tab']",
            createTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']",
            transactionList: "[data-test='transaction-list']"
        }

        return selectors;
    }

    checkUsernameLogged(username) {
        cy.get(this.selectorsList().usernameLogged).should('be.visible').and('contain', username);
    }

    getUserBalance() {
        return cy.get(this.selectorsList().userBalance).invoke('text').then((balanceText) => {
            const balance = parseFloat(balanceText.replace(/[^0-9.-]+/g, ''));
            return balance;
        });
    }

    checkHomePage() {
        cy.get(this.selectorsList().transactionTab).should('be.visible');
    }

    clickNewTransactionButton() {
        cy.get(this.selectorsList().newTransactionButton).click();
    }

    selectContact() {
        cy.get(this.selectorsList().firstContact).click();
    }

    fillTransactionForm(amount, description) {
        cy.get(this.selectorsList().amountInput).type(amount);
        cy.get(this.selectorsList().descriptionInput).type(description);
    }

    clickPaymentButton() {
        cy.get(this.selectorsList().paymentButton).click();
    }

    checkExpectedMessage(expectedMessage) {
        //cy.get(this.selectorsList().successTransactionAlert).should('be.visible').and('contain', expectedMessage);
        cy.contains(expectedMessage).should('be.visible');
    }

    checkTransactionSummary(expectedSummary) {
        cy.contains(expectedSummary).should('be.visible');
    }

    checkUserBalance(newBalance) {
        cy.get(this.selectorsList().userBalance).should('be.visible').and('have.text', '$' + newBalance);

    }

    checkReturnButtonEnabled() {
        cy.get(this.selectorsList().returnButton).should('be.enabled');
    }

    checkAnotherTransactionButtonEnabled() {
        cy.get(this.selectorsList().anotherTransactionButton).should('be.enabled');
    }

    clickNextButton() {
        cy.get(this.selectorsList().nextButton).click();
    }

    fillBankAccountForm(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().bankNameInput).type(bankName);
        cy.get(this.selectorsList().routingNumberInput).type(routingNumber);
        cy.get(this.selectorsList().accountNumberInput).type(accountNumber);
    }

    clickSubmitBankAccount() {
        cy.get(this.selectorsList().bankAccountSubmitButton).click();
    }

    clickDoneButton() {
        cy.get(this.selectorsList().doneButton).click();
    }

    accessMineTab() {
        cy.get(this.selectorsList().mineTab).click();
    }

    checkCreateTransactionButtonVisible() {
        cy.get(this.selectorsList().createTransactionButton).should('be.visible');
    }

    checkTransactionListIsVisible() {
        cy.get(this.selectorsList().transactionList).should('be.visible');
    }

    checkTransactionListNotExists() {
        cy.get(this.selectorsList().transactionList).should('not.exist');
    }
}
export default HomePage