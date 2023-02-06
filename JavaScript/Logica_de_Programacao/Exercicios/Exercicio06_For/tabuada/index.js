const tab = prompt(`Qual tabuada quer calcular?`);
let i = 0;
let tabuada = ``;
for (`Tabuada do ${tab}`; i <= 20; i++) {
  tabuada += `${tab} x ${i} = ${tab * i}\n`;
}

alert(tabuada);
