// Calculadora das 4 operações principais
alert(`Calculadora`);

// Input de valores pelo usuario
let firstNumber = parseFloat(prompt("Digite primeiro valor:"));
let secondNumber = parseFloat(prompt("Digite segundo valor:"));

// operacoes
const soma = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

// Output Calculadora
alert(
  `Resultado de operações com os valores: ${firstNumber} e ${secondNumber} \n
    Soma = ${soma}\n
    Subtração = ${sub}\n
    Multiplicação = ${mult}\n
    Divisão = ${div}`
);
