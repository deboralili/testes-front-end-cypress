class LoginPage {

    accessLoginPage() {
        cy.visit('/signin')
        this.checkLoginPage()
    }

    checkLoginPage() {
        cy.location('pathname').should('equal', '/signin')
    }
}

export default LoginPage