import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const homePage = new HomePage();

describe('Cadastro de Usuario', () => {

  let randomUser;

  beforeEach(() => {
    const password = chance.string({ length: 4 });

    randomUser = {
      firstName: chance.first(),
      lastName: chance.last(),
      username: chance.word(),
      password: password,
      confirmPassword: password
    }

    signUpPage.accessSignUpPage();
  });

  //SC-003: O usuário deve ser capaz de se cadastrar no sistema ao inserir informações válidas.
  context('Cadastro com Informacoes Validas', () => {
    //TC-003: Efetuar cadastro de um novo usuário com informações válidas.
    it('Cadastro realizado com sucesso', () => {

      signUpPage.fillSignUpForm(randomUser);

      signUpPage.clickSignUpButton();

      loginPage.checkLoginPage();

      loginPage.loginWithUser(randomUser);

      homePage.checkHomePage();

      homePage.checkUsernameLogged(randomUser.username);
    });
  });

  //SC-004: O sistema deve impedir o cadastro e exibir mensagem de erro ao tentar 
  // cadastrar um novo usuário sem preencher todos os campos obrigatórios.
  context('Validacao de Campos Obrigatorios', () => {
    //TC-004: Cadastro de usuário com campo "First Name" vazio.
    it('Cadastro de Usuario com campo "First Name" vazio', () => {

      const userWithEmptyFirstName = {
        ...randomUser, firstName: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyFirstName);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().firstNameErrorMessage,
        "First Name is required"
      );

      signUpPage.checkSignUpButtonIsDisabled();
    });

    //TC-005: Cadastro de usuário com campo "Last Name" vazio.
    it('Cadastro de Usuario com campo "Last Name" vazio', () => {
      const userWithEmptyLastName = {
        ...randomUser, lastName: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyLastName);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().lastNameErrorMessage,
        "Last Name is required"
      );

      signUpPage.checkSignUpButtonIsDisabled();
    });

    //TC-006: Cadastro de usuário com campo "Username" vazio.
    it('Cadastro de Usuario com campo "Username" vazio', () => {

      const userWithEmptyUsername = {
        ...randomUser, username: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyUsername);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().usernameErrorMessage,
        "Username is required"
      );

      signUpPage.checkSignUpButtonIsDisabled();
    });

    //TC-007: Cadastro de usuário com campo "Password" vazio.
    it('Cadastro de Usuario com campo "Password" vazio', () => {

      const userWithEmptyPassword = {
        ...randomUser, password: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyPassword);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().passwordErrorMessage,
        "Enter your password"
      );

      signUpPage.checkSignUpButtonIsDisabled();

    });

    //TC-008: Cadastro de usuário com campo "Confirm Password" vazio.
    it('Cadastro de Usuario com campo "Confirm Password" vazio', () => {

      const userWithEmptyConfirmPassword = {
        ...randomUser, confirmPassword: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyConfirmPassword);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().confirmPasswordErrorMessage,
        "Confirm your password"
      );

      signUpPage.checkSignUpButtonIsDisabled();

    });

    //TC-009: Cadastro de usuário com todos os campos vazios.
    it('Cadastro de Usuario com todos os campos vazios', () => {

      const userWithEmptyFields = {
        ...randomUser, firstName: "", lastName: "", username: "", password: "", confirmPassword: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyFields);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().firstNameErrorMessage,
        "First Name is required"
      );

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().lastNameErrorMessage,
        "Last Name is required"
      );

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().usernameErrorMessage,
        "Username is required"
      );

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().passwordErrorMessage,
        "Enter your password"
      );

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().confirmPasswordErrorMessage,
        "Confirm your password"
      );

      signUpPage.checkSignUpButtonIsDisabled();

    });

    //TC-010: Cadastro de usuário com os campos "Password" e "Confirm Password" vazios.
    it('Cadastro de Usuario com os campos "Password" e "Confirm Password" vazios', () => {

      const userWithEmptyPasswordAndConfirmPassword = {
        ...randomUser, password: "", confirmPassword: ""
      };

      signUpPage.fillSignUpForm(userWithEmptyPasswordAndConfirmPassword);

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().passwordErrorMessage,
        "Enter your password"
      );

      signUpPage.checkFieldErrorMessage(
        signUpPage.selectorsList().confirmPasswordErrorMessage,
        "Confirm your password"
      );

      signUpPage.checkSignUpButtonIsDisabled();

    });
  });

})