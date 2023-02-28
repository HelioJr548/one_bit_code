const menu = {
  1: `[1] Adicionar`,
  2: `[2] Consultar`,
  3: `[3] Alterar`,
  4: `[4] Remover`,
  5: `[5] Encerrar`,
};

let opt;

do {
  opt = parseFloat(
    prompt(`Menu:
    [1] Adicionar
    [2] Consultar
    [3] Alterar
    [4] Remover
    [5] Encerrar
    `)
  );
  alert(`Opção escolhida: ${menu[opt]}`);
} while (opt != 5);
