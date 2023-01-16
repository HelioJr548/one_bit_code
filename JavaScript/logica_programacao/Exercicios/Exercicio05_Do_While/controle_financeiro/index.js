let saldoInicial = parseFloat(
  prompt(`Informe o valor inicial disponivel:\nExemplo 25.00`)
);

let saldoFinal = saldoInicial;
let valorAdd = 0;
let valorGasto = 0;
let opt;

do {
  opt = prompt(`Saldo na conta: R$${saldoFinal}
  
  Escolha uma opção:  
    [1] Depositar.
    [2] Sacar.
    [3] Finalizar programa.
    `);

  switch (opt) {
    case `1`:
      valorAdd += parseFloat(
        prompt(`Informe o valor a ser depositado:\nExemplo 25.00`)
      );
      if (isNaN(valorAdd)) {
        alert(`Valor informado invalido, tente novamente.`);
      } else {
        saldoFinal += valorAdd;
      }
      break;
    case `2`:
      valorGasto += parseFloat(
        prompt(`Informe o valor a ser sacado:\nExemplo 25.00`)
      );
      if (isNaN(valorGasto)) {
        alert(`Valor informado invalido, tente novamente.`);
      } else {
        saldoFinal -= valorGasto;
      }
      break;
    default:
      opt != 3 ? alert(`Opção Invalida!`) : alert(`Encerrando Programa!`);
      break;
  }
} while (opt != 3);

alert(`Visão Geral:

Saldo Inicial: R$${saldoInicial}
Saldo Adicionado: R$${valorAdd}
Saldo Gasto: R$${valorGasto}

SALDO FINAL: R$${saldoFinal}`);
