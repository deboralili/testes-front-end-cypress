<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-004
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-002
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
      Tentar realizar login com e-mail não cadastrado e senha válida
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
      - O usuário deve estar desconectado da aplicação. <br/>
      - O e-mail informado não deve estar cadastrado no sistema.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      Email: E-mail não cadastrado. <br/>
      Password: Senha existente no sistema.
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Acessar a aplicação. <br/>
      2 - Clicar no botão de Login. <br/>
      3 - Preencher o campo "Email" com um e-mail não cadastrado. <br/>
      4 - Preencher o campo "Password" com uma senha válida. <br/>
      5 - Clicar no botão "Sign in".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema não deve autenticar o usuário. <br/>
      - O sistema deve exibir a mensagem "Invalid email or password".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - O sistema não autenticou o usuário. <br/>
      - A mensagem "Invalid email or password" foi exibida com sucesso.
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
