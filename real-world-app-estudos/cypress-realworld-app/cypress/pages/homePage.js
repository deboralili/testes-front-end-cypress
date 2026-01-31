class HomePage {
    selectorsList() {
        const selectors = {
            usernameLogged: "[data-test='sidenav-username']",
            transactionTab: "[data-test='nav-transaction-tabs']"
        }

        return selectors;
    }

    checkUsernameLogged(username) {
        cy.get(this.selectorsList().usernameLogged).should('be.visible').and('contain', username);
    }

    checkHomePage() {
        cy.get(this.selectorsList().transactionTab).should('be.visible');
    }
}

export default HomePage