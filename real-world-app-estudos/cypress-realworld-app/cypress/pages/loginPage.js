class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[data-test='signin-username']",
            passwordField: "[data-test='signin-password']",
            signinButton: "[data-test='signin-submit']",
            signinForm: ".SignInForm-form"
        }
        return selectors;
    }

    accessLoginPage() {
        cy.visit('/signin')
        this.checkLoginPage()
    }

    checkLoginPage() {
        cy.location('pathname').should('equal', '/signin')
        cy.get(this.selectorsList().signinForm).should('be.visible');
    }

    loginWithUser(username, password) {
        //Preenche o campo username com nome de usuario valido
        cy.get(this.selectorsList().usernameField).type(username);

        //Preenche o campo password com senha correspondente valida
        cy.get(this.selectorsList().passwordField).type(password);

        //Clica no botão para fazer login
        cy.get(this.selectorsList().signinButton).click();
    }
}

export default LoginPage