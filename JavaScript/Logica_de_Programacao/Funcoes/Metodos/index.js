let pessoa = {
    nome: "Helio",
    idade: 19,
    dizerOla() {
        console.log(`Olá, mundo! Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

console.log(pessoa)

pessoa.dizerOla()