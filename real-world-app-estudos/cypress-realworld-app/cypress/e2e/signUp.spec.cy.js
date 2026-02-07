import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const homePage = new HomePage();

describe('Cadastro de Usuario', () => {

  const randomUser = {
    firstName: chance.first(),
    lastName: chance.last(),
    username: chance.animal(),
    password: chance.timestamp()
  }

  beforeEach(() => {
    signUpPage.accessSignUpPage();
  });

  //SC-003: O usuário deve ser capaz de se cadastrar no sistema ao inserir informações válidas.
  context('Quando o usuario insere informacoes validas', () => {
    //TC-003: Efetuar cadastro de um novo usuário com informações válidas.
    it('Deve efetuar o cadastro com sucesso', () => {

      signUpPage.signUpWithAnyUser(
        randomUser.firstName,
        randomUser.lastName,
        randomUser.username,
        randomUser.password
      );

      loginPage.checkLoginPage();

      loginPage.loginWithUser(randomUser.username, randomUser.password);

      homePage.checkHomePage();

      homePage.checkUsernameLogged(randomUser.username);
    });
  });

})