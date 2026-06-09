<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-017
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-008
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
      Tentar cadastrar um herói sem preencher o campo Saves
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
      - O usuário deve estar autenticado com perfil administrador. <br/>
      - O usuário deve estar na página de cadastro de heróis.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      Name: Valor válido. <br/>
      Price: Valor válido. <br/>
      Fans: Valor válido. <br/>
      Saves: Em branco. <br/>
      Powers: Valor válido.			
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Preencher os campos obrigatórios, exceto o campo "Saves". <br/>
      2 - Clicar no botão "Submit".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema não deve cadastrar o herói. <br/>
      - O sistema deve exibir a mensagem "Saves is required".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - O sistema não cadastrou o herói. <br/>
      - A mensagem "Saves is required" foi exibida com sucesso.
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
