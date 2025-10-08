describe('Real World App - Tests', () => {
  it('SignUp User - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signup']").click()
    cy.get("[data-test='signup-first-name']").type('Jessica')
    cy.get("[data-test='signup-last-name']").type('Canto')
    cy.get("[data-test='signup-username']").type('jess001')
    cy.get("[data-test='signup-password']").type('Senh@001')
    cy.get("[data-test='signup-confirmPassword']").type('Senh@001')
    cy.get("[data-test='signup-submit']").click()
    cy.location('pathname').should('equal', '/signin')
  })
})