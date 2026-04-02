import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

//Suite de testes
describe('Login', () => {

    //Executa antes de cada it
    beforeEach(() => {
        //Acompanha a requisicao para fazer o login
        cy.intercept('POST', '**/login').as('loginRequest');

        //Acessa a pagina de login
        loginPage.accessLoginPage();
    });

    //SC-001: O usuário deve conseguir realizar login ao informar credenciais válidas.
    context('Autenticacao com Credenciais Validas', () => {

        //TC-001: Efetuar login com credenciais válidas
        it('TC-001 - Login realizado com sucesso', () => {

            //Preeche formulario e clica no botao de signin
            loginPage.fillLoginForm(userData.userSuccess);

            loginPage.clickLoginButton();

            //Espera a resposta do servidor
            cy.wait('@loginRequest').then((interception) => {
                //Garante que a requisicao ocorreu com sucesso
                expect(interception.response.statusCode).to.equal(200);
            });

            //Verifica se o nome de usuario esta na pagina
            homePage.checkUsernameLogged(userData.userSuccess.username);

            //Verifica se tem a guia de transacao da tela Home
            homePage.checkHomePage();
        });
    });

    //SC-002: O sistema deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas.
    context('Tentativa de Autenticacao com Dados Invalidos', () => {

        //TC-002: Tentar fazer login com credenciais inválidas.
        it('TC-002 - Erro de autenticacao com credenciais incorretas', () => {

            loginPage.fillLoginForm(userData.userFail);

            loginPage.clickLoginButton();

            //Verifica se o usuário nao foi autenticado
            cy.wait('@loginRequest').then((interception) => {
                expect(interception.response.statusCode).to.equal(401);
            });

            //Verifica se aparece mensagem de erro na tela
            loginPage.checkErrorMessage(
                loginPage.selectorsList().wrongCredentialAlert,
                "Username or password is invalid"
            );

            //Verifica se o usuario permanece na pagina de login
            loginPage.checkLoginPage();
        });
    });

});

