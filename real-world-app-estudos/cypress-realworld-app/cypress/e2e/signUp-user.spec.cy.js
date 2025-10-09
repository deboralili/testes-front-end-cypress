import userData from '../fixtures/userData.json'
import SignUpPage from '../pages/signUpPage.js'
import LoginPage from '../pages/loginPage.js'

const signUpPage = new SignUpPage()
const loginPage = new LoginPage()

describe('Real World App - Tests', () => {

  //TC-001: Cadastrar usuario com informacoes validas
  it('SignUp User - Success', () => {
    signUpPage.accessSignUpPage()

    signUpPage.signUpWithAnyUser(
      userData.userSuccess.firstName,
      userData.userSuccess.lastName,
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    loginPage.checkLoginPage()
  })
})