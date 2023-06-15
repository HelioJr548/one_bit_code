// Função que cria um elemento <label> com texto e atributo htmlFor
function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

// Função que cria um elemento <input> com id, valor, nome, tipo e espaço reservado (placeholder)
function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

// Obtendo referências para o botão e o formulário do documento HTML
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')

// Array para armazenar os desenvolvedores cadastrados
const developers = []

// Variável para controlar o número de linhas de entrada adicionadas dinamicamente
let inputRows = 0

// Adicionando um ouvinte de evento de clique para o botão "Add Tech"
addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs')

    // Criando uma nova linha de entrada
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = 'inputRow'

    // Criando elementos para o nome da tecnologia
    const techNameLabel = createLabel('Nome: ', `techName-${rowIndex}`)
    const techNameInput = createInput(`techName-${rowIndex}`, null, 'techName')

    // Criando elementos para a experiência
    const expLabel = createLabel('Experiencia: ')
    const id1 = `expRadio-${rowIndex}.1`
    const expRadio1 = createInput(id1, '0-2 anos', `techExp-${rowIndex}`, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = `expRadio-${rowIndex}.2`
    const expRadio2 = createInput(id2, '3-4 anos', `techExp-${rowIndex}`, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = `expRadio-${rowIndex}.3`
    const expRadio3 = createInput(id3, '5+ anos', `techExp-${rowIndex}`, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    // Criando botão de remoção para a linha de entrada
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function () {
        stackInputs.removeChild(newRow)
    })

    // Adicionando os elementos à nova linha de entrada
    newRow.append(
        techNameLabel, techNameInput,
        expLabel, expRadio1, expLabel1,
        expRadio2, expLabel2,
        expRadio3, expLabel3,
        removeRowBtn
    )

    // Adicionando a nova linha de entrada ao formulário
    stackInputs.appendChild(newRow)
})

// Adicionando um ouvinte de evento de envio para o formulário
form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    // Obtendo referência para o campo de entrada de nome completo
    const fullnameInput = document.querySelector("#fullname")

    // Obtendo referências para todas as linhas de entrada
    const inputRows = document.querySelectorAll('.inputRow')

    // Array para armazenar as tecnologias dos desenvolvedores
    let technologies = []

    // Iterando sobre cada linha de entrada para obter os valores dos campos
    inputRows.forEach(function (row) {
        const techName = document.querySelector(`#${row.id}` + ' input[name="techName"]').value
        const techExp = document.querySelector(`#${row.id}` + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    // Criando um novo objeto de desenvolvedor com as informações coletadas
    const newDev = { fullname: fullnameInput.value, technologies: technologies }

    // Adicionando o novo desenvolvedor ao array de desenvolvedores
    developers.push(newDev)

    // Exibindo um alerta de que o desenvolvedor foi cadastrado com sucesso
    alert("Dev cadastrado com sucesso")

    // Redefinindo o campo de entrada de nome completo e removendo as linhas de entrada do formulário
    fullnameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    // Imprimindo o array de desenvolvedores no console
    console.log(developers)
})
