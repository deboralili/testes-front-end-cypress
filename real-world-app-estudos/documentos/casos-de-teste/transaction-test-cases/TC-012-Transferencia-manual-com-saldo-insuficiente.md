<table>
  <tr>
    <th>
      ID
    </th>
    <td>
      TC-012
    </td>
    <th>
      Rastreabilidade
    </th>
    <td>
      SC-006
    </td>
    <th>
      Status
    </th>
    <td>
      ❌ Falhou
    </td>
  </tr>
  <tr>
    <th>
      Título
    </th>
    <td colspan = 5>
      Enviar dinheiro via fluxo manual com saldo insuficiente
    </td>
  </tr>
  <tr>
    <th>
      Pré-condições
    </th>
    <td colspan = 5>
      - O usuário deve estar autenticado no sistema. <br/>
      - O usuário deve possuir saldo insuficiente para realizar a transação.
    </td>
  </tr>
  <tr>
    <th>
      Entradas
    </th>
    <td colspan = 5>
      Amount: Valor numérico maior do que o saldo. <br/>
      Add a note: texto não vazio sem restrições de formato.
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
      - O sistema deve impedir a realização da transferência. <br/>
      - O sistema deve exibir uma mensagem informando que o saldo é insuficiente. <br/>
      - O saldo do remetente não deve ser alterado. <br/>
      - O saldo do destinatário não deve ser alterado.
    </td>
  </tr>
  <tr>
    <th>
      Resultado Encontrado
    </th>
    <td colspan = 5>
      - O sistema não impediu a transferência. <br/>
      - O sistema não exibiu mensagem informando saldo insuficiente. <br/>
      - O saldo do usuário foi reduzido para 0 após a transação. <br/>
      - O saldo da conta destinatária foi acrescida do valor da transferência.
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
