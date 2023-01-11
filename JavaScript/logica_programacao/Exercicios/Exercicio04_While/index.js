const nome = prompt("Digite seu nome:");
let cidades = "";
let contador = 0;

let pergunta = prompt("Você já visitou alguma cidade? (sim/nao)");

while (pergunta === "sim") {
  let cidade = prompt("Qual é o nome da cidade que você visitou?");
  cidades += `- ${cidade} \n`;
  contador++;
  pergunta = prompt("Você visitou alguma outra cidade? (sim/nao)");
}

alert(`
  Turista: ${nome} 
  Quantiadade de cidades visitadas: ${contador}
  Cidades visitadas: \n${cidades}
`);
