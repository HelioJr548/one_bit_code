let imoveis = [];
let opt;
do {
  opt = parseFloat(
    prompt(`
Imoveis cadastrados: ${imoveis.length}

[1] Adicionar Imóvel
[2] Exibir Imóveis cadastrados
[3] Sair`)
  );

  switch (opt) {
    case 1:
      const imovel = {
        proprietario: prompt(`Nome do Proprietario:`),
        qtdQuartos: parseFloat(prompt(`Quantidade de Quartos:`)),
        qtdBanheiros: parseFloat(prompt(`Quantidade de Banheiros:`)),
        garagem: prompt(`Possui Garagem? (Sim/Não)`),
      };

      const confirma = confirm(
        `Salvar Imóvel?
        Proprietario: ${imovel.proprietario}
        Quartos: ${imovel.qtdQuartos}
        Banheiros: ${imovel.qtdBanheiros}
        Possui Garagem?: ${imovel.garagem}`
      );

      if (confirma) {
        imoveis.push(imovel);
      }
      break;

    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          `Imóvel  ${i + 1}:
          Proprietário: ${imoveis[i].proprietario}
          Quartos: ${imoveis[i].quartos}
          Banheiros: ${imoveis[i].banheiros}
          Possui Garagem? ${imoveis[i].garagem}`
        );
      }
      break;
    case 3:
      alert(`Saindo...`);
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opt !== 3);
