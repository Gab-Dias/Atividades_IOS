// let aluno = {
//     RA: 123,
//     Nome:'Dias',
//     idade: 24,
//     curso: 'dev_Web'
// }

class alunoIOS {
    constructor(ra, nome, idade) {
        this.ra = ra,
        this.nome = nome,
        this.idade = idade

    }
}

let aluno1 = new alunoIOS(123, "Dias", 24)
console.log(aluno1);

class carros {
    constructor(marca, modelo, valor, ano, cor){
        this.marca = marca,
        this.modelo = modelo,
        this.valor = valor,
        this.ano = ano,
        this.cor = cor
    }
}

let carro1 = new carros('Nissan', 'GTR-r35', 500000, 2022, 'Preto')
console.log(carro1);