let opt;

do {
  opt =
    prompt(`O programa consiste em verificar se uma palavra é um palindromo ou não.

  Opções:
    [1] verificar palavra
    [0] Finalizar

Palíndromo: palavra ou frase que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.`);

  switch (opt) {
    case "1":
      let word = prompt(
        `Qual a palavra? (POR FAVOR, RETIRAR CARACTERES ESPECIAIS)`
      );
      let unaccented = word.replace(/[^a-z0-9]+/gi, "").toUpperCase();
      let palindrome = ``;

      for (let i = unaccented.length - 1; i >= 0; i--) {
        palindrome += unaccented[i];
      }
      word = word.toUpperCase();
      if (word !== unaccented) {
        alert(`Palavra com caracter especial, por favor retirá-lo `);
      } else if (word === unaccented && word !== palindrome) {
        alert(`'${word}' não é um palindromo!`);
      } else if (word === unaccented && word === palindrome) {
        alert(`'${word}' é um palindromo!`);
      }
      break;
    case "0":
      if (word === "0") {
        alert(`Finalizando...`);
      }
      break;
    default:
      alert(`Opção Invalida`);
      break;
  }
} while (opt != "0");
