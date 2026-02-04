import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";

const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const homePage = new HomePage();

describe('Cadastro de Usuario', () => {

  beforeEach(() => {
    signUpPage.accessSignUpPage();
  });

  //SC-003: O usuário deve ser capaz de se cadastrar no sistema ao inserir informações válidas.
  context('Quando o usuario insere informacoes validas', () => {
    //TC-003: Efetuar cadastro de um novo usuário com informações válidas.
    it('Deve efetuar o cadastro com sucesso', () => {

      signUpPage.signUpWithAnyUser("First", "Last", "User", "Pass");

      loginPage.checkLoginPage();

      loginPage.loginWithUser("User", "Pass");

      homePage.checkHomePage();

      homePage.checkUsernameLogged("User");
    });
  });

})