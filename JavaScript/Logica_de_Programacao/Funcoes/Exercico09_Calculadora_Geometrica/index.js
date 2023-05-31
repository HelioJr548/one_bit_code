const pi = Math.PI;

// Função auxiliar para obter um número válido do usuário
function obterNumeroValido(mensagem) {
  let valor;
  do {
    valor = parseFloat(prompt(mensagem));
  } while (isNaN(valor));
  return valor;
}

// Funções de cálculo da área das figuras

function calcularAreaRetangulo() {
  // Solicita a base e a altura do retângulo
  const base = obterNumeroValido("Informe a base do retângulo:");
  const altura = obterNumeroValido("Informe a altura do retângulo:");

  // Calcula e retorna a área do retângulo
  return (base * altura).toFixed(2);
}

function calcularAreaQuadrado() {
  // Solicita o lado do quadrado
  const lado = obterNumeroValido("Informe o lado do quadrado:");

  // Calcula e retorna a área do quadrado
  return (lado * lado).toFixed(2);
}

function calcularAreaTriangulo() {
  // Solicita a base e a altura do triângulo
  const base = obterNumeroValido("Informe a base do triângulo:");
  const altura = obterNumeroValido("Informe a altura do triângulo:");

  // Calcula e retorna a área do triângulo
  return (base * altura / 2).toFixed(2);
}

function calcularAreaTrapezio() {
  // Solicita a base menor, a base maior e a altura do trapézio
  const baseMenor = obterNumeroValido("Informe a base menor do trapézio:");
  const baseMaior = obterNumeroValido("Informe a base maior do trapézio:");
  const altura = obterNumeroValido("Informe a altura do trapézio:");

  // Calcula e retorna a área do trapézio
  return ((baseMaior + baseMenor) * altura / 2).toFixed(2);
}

function calcularAreaCirculo() {
  // Solicita o raio do círculo
  const raio = obterNumeroValido("Informe o raio do círculo:");

  // Calcula e retorna a área do círculo
  return (pi * raio * raio).toFixed(2);
}

function exibirOpcoesMenu() {
  const menu =
    "Calculadora Geométrica\n" +
    "[1] Calcular área de triângulo\n" +  // base * altura / 2
    "[2] Calcular área de retângulo\n" +  // base * altura
    "[3] Calcular área de quadrado\n" +   // lado²
    "[4] Calcular área de trapézio\n" +   // (base maior + base menor) * altura / 2
    "[5] Calcular área de círculo\n" +    // pi * raio² (considere pi = 3.14159)
    "[0] Sair\n";

  // Retorna a exibição das opções do menu e aguarda a entrada do usuário usando o prompt
  return prompt(menu);
}

function executar() {
  let opcao;

  do {
    opcao = exibirOpcoesMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        alert(`Área do Triângulo: ${resultado}`);
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        alert(`Área do Retângulo: ${resultado}`);
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        alert(`Área do Quadrado: ${resultado}`);
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        alert(`Área do Trapézio: ${resultado}`);
        break;
      case "5":
        resultado = calcularAreaCirculo();
        alert(`Área do Círculo: ${resultado}`);
        break;
      case "0":
        alert(`Saindo`);
        break;
      default:
        alert(`Opção inválida!`);
        break;
    }

  } while (opcao !== "0");
}

executar();
