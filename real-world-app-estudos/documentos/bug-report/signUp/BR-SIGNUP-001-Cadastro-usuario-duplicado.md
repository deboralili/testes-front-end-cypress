<table>
  <tr>
    <th>
      ID:
    </th>
    <td>
      BR-SIGNUP-001
    </td>
     <th>
      Status:
    </th>
    <td>
      Novo
    </td>
    <th>
      Gravidade:
    </th>
    <td>
      Alta
    </td>
    <th>
      Prioridade:
    </th>
    <td>
      Alta
    </td>
  </tr>
  <tr>
    <th>
      Título:
    </th>
    <td colspan = 7>
      Sistema permite cadastro de usuário com username já existente
    </td>
  </tr>
  <tr>
    <th>
      Ambiente:
    </th>
    <td colspan = 7>
      Teste
    </td>
  </tr>
  <tr>
    <th>
      Descrição:
    </th>
    <td colspan = 7>
      Ao tentar cadastrar um usuário utilizando um username já cadastrado no sistema, o cadastro é realizado com sucesso, 
      quando o esperado seria impedir a duplicidade de usernames.
    </td>
  </tr>
  <tr>
    <th>
      Pré-condição:
    </th>
    <td colspan = 7>
      Deve existir um usuário previamente cadastrado com determinado username.
    </td>
  </tr>
  <tr>
    <th>
      Passos para reprodução:
    </th>
    <td colspan = 7>
      1. Acessar a tela de cadastro de usuário </br>
      2. Preencher os campos First Name, Last Name e Password com dados válidos.</br>
      3. Preencher o campo Username com um username já cadastrado.</br>
      4. Preencher o campo Confirm Password com o mesmo dado que Password.</br>
      5. Clicar no botão Sign Up.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado:
    </th>
    <td colspan = 7>
      O sistema deve impedir o cadastro e exibir uma mensagem informando que o username já está em uso.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado:
    </th>
    <td colspan = 7>
      O sistema permite o cadastro do usuário mesmo com username já existente.
    </td>
  </tr>
</table>

![Evidencia: Cadastro de Usuario duplicado](https://github.com/deboralili/testes-front-end-cypress/blob/main/real-world-app-estudos/documentos/evidencias/signUp/BR-SIGNUP-001-Cadastro-usuario-duplicado.gif)
