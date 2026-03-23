<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-009
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
      Cadastro de usuário com todos os campos vazios.
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
      First Name: (vazio) <br/>			
      Last Name: (vazio) <br/>
      Username: (vazio) <br/>
      Password: (vazio) <br/>
      Confirm Password: (vazio)
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Clicar nos campos "First Name", "Last Name", "Username", "Password" e "Confirm Password" e sair sem preenchê-los.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema deve exibir uma mensagem de erro em todos os campos do formulário informando que são obrigatórios.<br/>
      - O botão "Sign Up" deve permanecer desabilitado, impedindo o envio do formulário.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - As mensagens de erro apareceram corretamente para todos os campos do formulário.<br/>
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
