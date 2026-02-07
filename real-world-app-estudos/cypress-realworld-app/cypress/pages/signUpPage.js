import LoginPage from "./loginPage.js";

class SignUpPage {
    selectorsList() {
        const selectors = {
            firstName: "[data-test='signup-first-name']",
            lastName: "[data-test='signup-last-name']",
            username: "[data-test='signup-username']",
            password: "[data-test='signup-password']",
            confirmPassword: "[data-test='signup-confirmPassword']",
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

    signUpWithAnyUser(randomUser) {
        cy.get(this.selectorsList().firstName).type(randomUser.firstName)
        cy.get(this.selectorsList().lastName).type(randomUser.lastName)
        cy.get(this.selectorsList().username).type(randomUser.username)
        cy.get(this.selectorsList().password).type(randomUser.password)
        cy.get(this.selectorsList().confirmPassword).type(randomUser.password)
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default SignUpPage