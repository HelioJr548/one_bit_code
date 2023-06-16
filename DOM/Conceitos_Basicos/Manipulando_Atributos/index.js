const input = document.querySelector('#input')

document.querySelector('#value').addEventListener('click', function () {
    input.value = 'ola mundo'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.querySelector('#type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.setAttribute('type','radio')
})

document.querySelector('#placeholder').addEventListener('click', function () {
    input.placeholder = 'digite algo'
})

document.querySelector('#disable').addEventListener('click', function () {
    input.setAttribute('disable', !input.disabled)
})

document.querySelector('#data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log(`O valor do atributo data-something-else é: ${data}`)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else é: ${input.dataset.somethingElse}`)
})