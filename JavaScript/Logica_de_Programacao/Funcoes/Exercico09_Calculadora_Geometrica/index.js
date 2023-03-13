function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

function areaTriangular(base, altura) {
  return areaRetangular(base, altura) / 2;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCircular(raio) {
  return 3.14 * areaQuadrada(raio);
}

function exibirMenu() {
  return parseInt(
    prompt(
      `Escolha qual deseja calcular:
            
[1] Área do Triângulo: base * altura / 2
[2] Área do Retângulo: base * altura
[3] Área do Quadrado: lado²
[4] Área do Trapézio: (base maior + base menor) * altura / 2
[5] Área do Círculo: pi * raio² (considere pi = 3.14)
            
[0] SAIR`
    )
  );
}

function executar() {
  let opcao;

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case 1:
        alert(
          `Área do Triângulo: ${areaTriangular(
            parseFloat(prompt("Qual o tamanho da base do triangulo?")),
            parseFloat(prompt("Qual a altura do triangulo?"))
          )}`
        );
        break;
      case 2:
        alert(
          `Área do Retângulo: ${areaRetangular(
            parseFloat(prompt("Qual o tamanho da base do retângulo?")),
            parseFloat(prompt("Qual a altura do retângulo?"))
          )}`
        );
        break;
      case 3:
        alert(
          `Área do Quadrado: ${areaQuadrada(
            parseFloat(prompt("Qual o tamanho do lado do quadrado?"))
          )}`
        );
        break;
      case 4:
        alert(
          `Área do Trapézio: ${areaTrapezio(
            parseFloat(prompt("Qual o tamanho da base maior do trapézio?")),
            parseFloat(prompt("Qual o tamanho da base maior do trapézio?")),
            parseFloat(prompt("Qual a altura do trapézio?"))
          )}`
        );
        break;
      case 5:
        alert(
          `Área do Circulo: ${areaCircular(
            parseFloat(prompt("Qual o raio do circulo?"))
          )}`
        );
        break;
      case 0:
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida!");
    }
  } while (opcao !== 0);
}

executar();
