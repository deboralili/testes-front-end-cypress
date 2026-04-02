class LoginPage {

    selectorsList() {
        const selectors = {

            //Inputs
            usernameField: "[data-test='signin-username'] input",
            passwordField: "[data-test='signin-password'] input",

            //Buttons & Links
            signinButton: "[data-test='signin-submit']",
            signUpLink: "[data-test='signup']",

            //Form
            signinForm: ".SignInForm-form",

            //Alert Messages
            wrongCredentialAlert: "[data-test='signin-error'] .MuiAlert-message"

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

    loginWithUser(user) {
        //Preenche o campo username com nome de usuario valido
        cy.get(this.selectorsList().usernameField).type(user.username);

        //Preenche o campo password com senha correspondente valida
        cy.get(this.selectorsList().passwordField).type(user.password);

        //Clica no botão para fazer login
        cy.get(this.selectorsList().signinButton).click();
    }

    checkWrongCredentialMessage() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible');
    }
}

export default LoginPage