<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-005
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-003
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
      Tentar realizar login com formato de e-mail inválido
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
      - O usuário deve estar desconectado da aplicação.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      Email: Valor sem formato válido de e-mail. <br/>
      Password: Qualquer valor.
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Acessar a aplicação. <br/>
      2 - Clicar no botão de Login. <br/>
      3 - Preencher o campo "Email" com um valor sem @ e/ou domínio válido. <br/>
      4 - Preencher o campo "Password". <br/>
      5 - Clicar no botão "Sign in".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema não deve realizar a autenticação. <br/>
      - O sistema deve exibir a mensagem "Email is not valid".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - O sistema não realizou a autenticação. <br/>
      - A mensagem "Email is not valid" foi exibida com sucesso.
    </td>
  </tr>
  <tr>
    <th>
      Observações
    </th>
    <td colspan = 5>
      -
    </td>
  </tr>
</table>
