<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-008
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-004
    </td>
    <th>
      Status
    </th>
    <td>
      ✅ Passou
    </td>
  </tr>
  <tr>
    <th>
      Título
    </th>
    <td colspan = 5>
      Cadastro de usuário com campo "Confirm Password" vazio.
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
       Usuário deve estar na tela de cadastro de usuário.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      First Name: válido <br/>			
      Last Name: válido <br/>
      Username: válido <br/>
      Password: válido <br/>
      Confirm Password: (vazio)
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Clicar no campo "Confirm Password" e sair do campo sem preenchê-lo.<br/>
      2 - Preencher os campos "First Name", "Last Name", "Username" e "Password" conforme os dados informados.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema deve exibir uma mensagem de erro informando que o campo "Confirm Password" é obrigatório.<br/>
      - O botão "Sign Up" deve permanecer desabilitado, impedindo o envio do formulário.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - A mensagem de erro apareceu corretamente para o campo "Confirm Password".<br/>
      - O botão "Sign Up" permaneceu desabilitado.
    </td>
  </tr>
  <tr>
    <th>
      Observações
    </th>
    <td colspan = 5>
      - As mensagens de erro de campos obrigatórios são exibidas no evento de perda de foco do campo (on-blur). <br/>
      - O impedimento do cadastro ocorre por meio da desabilitação do botão "Sign Up" enquanto houver campos obrigatórios inválidos.
    </td>
  </tr>
</table>
