let p1Name = prompt("Nome do Personagem:");
let PA = parseFloat(prompt(`Qual o Poder de Ataque (PA) de ${p1Name}?`));

let p2Name = prompt("Nome do Personagem:");
let HP = parseFloat(prompt(`Quantidade de Pontos de Vida (HP) de ${p2Name}?`));
let PD = parseFloat(prompt(`Poder de Defesa (PD) de ${p2Name}?`));
let shield = prompt(`${p2Name} possui escudo?
Sim ou Nao:`);

let damage = 0;

if (PA > PD && shield == "Nao") {
  damage = PA - PD;
} else if (PA > PD && shield == "Sim") {
  damage = (PA - PD) / 2;
}

HP -= damage;

alert(`${p1Name} causou ${damage} pontos de dano em ${p2Name}`);
alert(
  `${p1Name}:
  Poder de ataque: ${PA}

${p2Name}:
  Pontos de vida: ${HP}
  Poder de defesa: ${PD}
  Possui escudo: ${shield}`
);
