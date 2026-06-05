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

    checkSuccessTransactionAlert(expectedMessage) {
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

}

export default HomePage