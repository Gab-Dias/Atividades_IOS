
let nomesFuncionario = [
  { nome: 'Wally', salario: 4800 },

  { nome: 'Pietro', salario: 5802 },

  { nome: 'Gabriel', salario: 9300 },

  { nome: 'Benjamim', salario: 6500 },

  { nome: 'Kaiky', salario: 8800 },
];

nomesFuncionario.forEach((funcionarios) => {
return (console.log(`${funcionarios.nome} com salario de ${funcionarios.salario}`))});


// Criando nova array com salarios ajustados em 5%

let reajusteSalarial = nomesFuncionario.map((funcionarios) => {
    return funcionarios.salario * 1.05 
})
console.log(reajusteSalarial)











