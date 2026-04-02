class LoginPage {

    selectorsList() {
        const selectors = {

            //Inputs
            usernameInput: "[data-test='signin-username'] input",
            passwordInput: "[data-test='signin-password'] input",

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

    fillUsernameField(username) {
        const usernameField = cy.get(this.selectorsList().usernameInput);

        if (username === "" || username === undefined) {
            usernameField.focus().blur();
        } else {
            usernameField.type(username);
        }
    }

    fillPasswordField(password) {
        const passwordField = cy.get(this.selectorsList().passwordInput);

        if (password === "" || password === undefined) {
            passwordField.focus().blur();
        } else {
            passwordField.type(password);
        }
    }

    clickLoginButton() {
        cy.get(this.selectorsList().signinButton).click();
    }

    fillLoginForm(user) {
        this.fillUsernameField(user.username);
        this.fillPasswordField(user.password);
    }

    checkErrorMessage(errorSelector, expectedMessage) {
        cy.get(errorSelector).should('be.visible').and('contain', expectedMessage);
    }

    checkSignInButtonIsDisabled() {
        cy.get(this.selectorsList().signinButton).should('be.disabled');
    }

    checkSignInButtonEnabled() {
        cy.get(this.selectorsList().signinButton).should('be.enabled');
    }
}

export default LoginPage