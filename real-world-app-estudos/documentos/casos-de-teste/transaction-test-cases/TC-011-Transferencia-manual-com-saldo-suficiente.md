<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-011
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-005
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
      Enviar dinheiro via fluxo manual com saldo suficiente
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
      - O usuário deve estar autenticado no sistema. <br/>
      - O usuário deve possuir saldo suficiente para realizar a transação.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      Amount: Valor numérico menor ou igual ao saldo. <br/>
      Add a note: Texto não vazio sem restrições de formato.
    </td>
  </tr>
  <tr>
    <th>
      Ações (passos)
    </th>
    <td colspan = 5>
      1 - Clicar no botão "NEW". <br/>
      2 - Escolher um usuário. <br/>
      3 - Preencher o campo "Amount" com um valor válido. <br/>
      4 - Preencher o campo "Add a note" com uma descrição válida. <br/>
      5 - Clicar no botão "PAY".
    </td>
  </tr>
  <tr>
    <th>
      Resultado Esperado
    </th>
    <td colspan = 5>
      - O sistema deve processar a transação com sucesso. <br/>
      - O sistema deve exibir uma mensagem de confirmação de sucesso da transferência. <br/>
      - O sistema deve exibir o resumo da transação (valor, descrição e destinatário). <br/>
      - O sistema deve atualizar o saldo imediatamente após a transação. <br/>
      - O sistema deve disponibilizar opções para retornar e/ou criar nova transação.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - O sistema processou a transação com sucesso. <br/>
      - A mensagem de confirmação da transferência foi exibida com sucesso. <br/>
      - O resumo da transação foi exibida com sucesso. <br/>
      - O saldo foi atualizado imediatamente após a transação. <br/>
      - O sistema disponibilizou opções para retornar e criar nova transação.
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
