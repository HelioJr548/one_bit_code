const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
    // Impede o comportamento padrão de envio do formulário (recarregar a página)
    ev.preventDefault()

    const name = document.querySelector("input[name='name']").value
    const address = document.querySelector("input[name='address']").value
    const breadType = document.querySelector("select[name='breadType']").value
    const main = document.querySelector("input[name='main']").value
    const observations = document.querySelector("textarea[name='observations']").value

    let salad = ""
    // Percorre todos os checkboxes de salada marcados e concatena seus valores
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
        salad += " - " + item.value + "\n"
    })

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    })

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
    )
})