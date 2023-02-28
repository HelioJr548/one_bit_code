let baralho = [];
let opt;
let carta;
do {
  opt = parseFloat(
    prompt(
      `[1] - Adicionar uma carta
[2] - Puxar uma carta
[3] - Sair
        `
    )
  );

  switch (opt) {
    case 1:
      carta = prompt(`Nome da carta:`);
      do {
        carta = prompt(`Campo Obrigatorio*\nNome da carta:`);
      } while (!carta);

      baralho.unshift(carta);
      break;
    case 2:
      if (!baralho) {
        alert(`Baralho vazio`);
      } else {
        alert(`Você puxou um(a) ${baralho.shift()}`);
      }
      break;
    case 3:
      alert(`Saindo...`);
      break;
    default:
      alert(`opção inválida`);
      break;
  }
} while (opt !== 3);
