import LoginPage from "./loginPage.js";

class SignUpPage {
    selectorsList() {
        const selectors = {
            firstNameInput: "[data-test='signup-first-name'] input",
            lastNameInput: "[data-test='signup-last-name'] input",
            usernameInput: "[data-test='signup-username'] input",
            passwordInput: "[data-test='signup-password'] input",
            confirmPasswordInput: "[data-test='signup-confirmPassword'] input",
            signUpButton: "[data-test='signup-submit']",
            signUpForm: ".SignUpForm-form"
        }
        return selectors
    }

    accessSignUpPage() {
        const loginPage = new LoginPage()

        loginPage.accessLoginPage()
        cy.get(loginPage.selectorsList().signUpLink).click()

        this.checkSignUpPage()
    }

    checkSignUpPage() {
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().signUpForm).should('be.visible');
    }

    fillFirstNameField(firstName) {
        const firstNameField = cy.get(this.selectorsList().firstNameInput);

        if (firstName === "" || firstName === undefined) {
            firstNameField.focus().blur();
        } else {
            firstNameField.type(firstName);
        }
    }

    fillLastNameField(lastName) {
        const lastNameField = cy.get(this.selectorsList().lastNameInput);

        if (lastName === "" || lastName === undefined) {
            lastNameField.focus().blur();
        } else {
            lastNameField.type(lastName);
        }
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

    fillConfirmPasswordField(confirmPassword) {
        const confirmPasswordField = cy.get(this.selectorsList().confirmPasswordInput);

        if (confirmPassword === "" || confirmPassword === undefined) {
            confirmPasswordField.focus().blur();
        } else {
            confirmPasswordField.type(confirmPassword);
        }
    }

    fillSignUpForm(randomUser) {
        this.fillFirstNameField(randomUser.firstName)
        this.fillLastNameField(randomUser.lastName)
        this.fillUsernameField(randomUser.username)
        this.fillPasswordField(randomUser.password)
        this.fillConfirmPasswordField(randomUser.confirmPassword)
    }

    clickSignUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default SignUpPage