import LoginPage from "./loginPage.js";

class SignUpPage {
    selectorsList() {
        const selectors = {
            signUpLink: "[data-test='signup']",
            firstName: "[data-test='signup-first-name']",
            lastName: "[data-test='signup-last-name']",
            username: "[data-test='signup-username']",
            password: "[data-test='signup-password']",
            confirmPassword: "[data-test='signup-confirmPassword']",
            signUpButton: "[data-test='signup-submit']"
        }
        return selectors
    }

    accessSignUpPage() {
        const loginPage = new LoginPage()

        loginPage.accessLoginPage()
        cy.get(this.selectorsList().signUpLink).click()
        this.checkSignUpPage()
    }

    checkSignUpPage() {
        cy.location('pathname').should('equal', '/signup')
    }

    signUpWithAnyUser(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).type(lastName)
        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(password)
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default SignUpPage