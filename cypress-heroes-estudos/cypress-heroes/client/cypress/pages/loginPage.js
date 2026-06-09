class LoginPage {

    selectorsList() {
        const selectors = {
            loginButton: "button:contains('Login')",
            emailInput: "[data-cy='email']",
            passwordInput: "[data-cy='password']",
            signInButton: "button:contains('Sign in')",
            logoutButton: "button:contains('Logout')",
        }

        return selectors;
    }

    accessLoginForm() {
        //Acessar aplicação
        cy.visit('/');
        cy.get(this.selectorsList().loginButton).click();
    }

    fillLoginForm(email, password) {
        
        if(email === "" || email === undefined) {
            cy.get(this.selectorsList().emailInput).focus().blur();
        } else {
            cy.get(this.selectorsList().emailInput).type(email);
        }

        if(password === "" || password === undefined) {
            cy.get(this.selectorsList().passwordInput).focus().blur();
        } else {
            cy.get(this.selectorsList().passwordInput).type(password);
        }
    }

    clickSignInButton() {
        cy.get(this.selectorsList().signInButton).click();
    }

    checkLogoutButtonVisible() {
        cy.get(this.selectorsList().logoutButton).should('be.visible');
    }

    checkAlertMessage(message) {
        cy.contains(message).should('be.visible');
    }
}

export default LoginPage