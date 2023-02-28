let fila = [];
let pacienteConsultados = [];
let novoPaciente;
let filaInteira = ``;
let registroPacientesAtendidos = ``;
do {
  var opt = parseFloat(
    prompt(
      `Fila Atual: ${fila.length} Pacientes

[1] - Novo Paciente
[2] - Consultar Fila
[3] - Consultar Paciente
[4] - Lista de Pacientes atendidos
[5] - Sair
`
    )
  );

  switch (opt) {
    case 1:
      novoPaciente = prompt(`Nome do Paciente:`);
      do {
        novoPaciente = prompt(`Campo obrigatorio*\nNome do Paciente:`);
      } while (!novoPaciente);

      fila.push(novoPaciente);
      break;

    case 2:
      if (fila.length == 0) {
        confirm(`A fila esta vazia!`);
      } else {
        for (let i = 0; i < fila.length; i++) {
          filaInteira += `${i + 1}° ${fila[i]}\n`;
        }
        alert(filaInteira);
        filaInteira = ``;
      }
      break;

    case 3:
      if (fila.length == 0) {
        alert(`Fila esta vazia!`);
      } else {
        alert(`O Paciente: ${fila[0]}, foi consultado`);
        pacienteConsultados.push(fila.shift());
      }
      break;

    case 4:
      if (pacienteConsultados.length == 0) {
        alert(`Nenhum Paciente foi atendido ainda!`);
      } else {
        for (i = 0; i < pacienteConsultados.length; i++) {
          registroPacientesAtendidos += `- ${pacienteConsultados[i]}\n`;
        }
        alert(registroPacientesAtendidos);
        registroPacientesAtendidos = ``;
      }
      break;

    case 5:
      alert(`Saindo do programa...`);
      break;
    default:
      alert(`Opção invalida!`);
      break;
  }
} while (opt !== 5);
