alert("Necesssario Cadastro");

// Informações do Usuario
let firstName = prompt("Digite o primeiro nome:");
let lastName = prompt("Digite o Sobrenome:");
let studyArea = prompt("Digite sua area de estudos:");
let birthYear = parseFloat(prompt("Digite ano de nascimento:"));

// Capturando ano atual
let year = new Date();
year = year.getFullYear();

// Calculando idade
const age = year - birthYear;

// Output Cadastro
confirm(
  `Confirmar dados\n
  Nome Completo = ${firstName} ${lastName}\n
  Area de estudo = ${studyArea}\n
  Idade = ${age}`
);


