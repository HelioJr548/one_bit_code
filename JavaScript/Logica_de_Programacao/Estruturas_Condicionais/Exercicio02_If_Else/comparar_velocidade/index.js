let v1Name = prompt("Digite o nome do primeiro veiculo:");
let v1Velo = parseFloat(prompt(`Digite a velocidade do(a) ${v1Name}`));

let v2Name = prompt("Digite o nome do segundo veiculo:");
let v2Velo = parseFloat(prompt(`Digite a velocidade do(a) ${v2Name}`));

const fastestCar =
  v1Velo > v2Velo ? `${v1Name} é mais rápido` : `${v2Name} é mais rápido`;

const sameSpeed =
  v1Velo == v2Velo
    ? `${v1Name} e ${v2Name} possuem velocidades iguais.`
    : `${fastestCar}`;

alert(sameSpeed);
