describe('Real World App - Tests', () => {
  
  const selectorsList = {
    signUpLink: "[data-test='signup']",
    firstName: "[data-test='signup-first-name']",
    lastName: "[data-test='signup-last-name']",
    username: "[data-test='signup-username']",
    password: "[data-test='signup-password']",
    confirmPassword: "[data-test='signup-confirmPassword']",
    signUpButton: "[data-test='signup-submit']"
  }

  const signUpData = {
    firstName: 'Jessica',
    lastName: 'Canto',
    username: 'jess001',
    password: 'Senh@001',
    confirmPassword: 'Senh@001'
  }

  it('SignUp User - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.signUpLink).click()
    cy.get(selectorsList.firstName).type(signUpData.firstName)
    cy.get(selectorsList.lastName).type(signUpData.lastName)
    cy.get(selectorsList.username).type(signUpData.username)
    cy.get(selectorsList.password).type(signUpData.password)
    cy.get(selectorsList.confirmPassword).type(signUpData.confirmPassword)
    cy.get(selectorsList.signUpButton).click()
    cy.location('pathname').should('equal', '/signin')
  })
})