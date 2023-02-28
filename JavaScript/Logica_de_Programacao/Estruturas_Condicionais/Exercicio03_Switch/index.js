const m = parseFloat(prompt("Metros para converter:"));

const converter = prompt(
  `Para qual unidade de medida deseja converter?
    [1] - milímetros (mm)
    [2] - centímetros (cm)
    [3] - decímetros (dm)
    [4] - decâmetros (dam)
    [5] - hectômetro (hm)
    [6] - quilômetro (km)
    `
);

const mm = m * 10 ** 3;
const cm = m * 10 ** 2;
const dm = m * 10;
const dam = m / 10;
const hm = m / 10 ** 2;
const km = m / 10 ** 3;

switch (converter) {
  case "1":
    alert(`${m}m = ${mm}mm`);
    break;
  case "2":
    alert(`${m}m = ${cm}cm`);
    break;
  case "3":
    alert(`${m}m = ${dm}dm`);
    break;
  case "4":
    alert(`${m}m = ${dam}dam`);
    break;
  case "5":
    alert(`${m}m = ${hm}hm`);
    break;
  case "6":
    alert(`${m}m = ${km}km`);
    break;
  default:
    alert("Opção Inválida!");
}
