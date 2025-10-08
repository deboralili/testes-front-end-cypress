import userData from '../fixtures/userData.json'

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

  it('SignUp User - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.signUpLink).click()
    cy.get(selectorsList.firstName).type(userData.firstName)
    cy.get(selectorsList.lastName).type(userData.lastName)
    cy.get(selectorsList.username).type(userData.username)
    cy.get(selectorsList.password).type(userData.password)
    cy.get(selectorsList.confirmPassword).type(userData.password)
    cy.get(selectorsList.signUpButton).click()
    cy.location('pathname').should('equal', '/signin')
  })
})