
/*let tarefas_JSON = '[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},';
tarefas_JSON += '{"id":2,"texto":"Encontrar com o chefe", "isCompleted":true},';
tarefas_JSON += '{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';

let garrafa = JSON.parse(tarefas_JSON);
console.log(garrafa); */


let alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Dias",
    idade: "24",
    endereço: {
      rua: "Av Parada Pinto",
      numero: 737,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [8, 7, 10, 9],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },

  {
    nome: "Pietro",
    sobrenome: "Abrahamian",
    idade: "16",
    endereço: {
      rua: "Av Parada Pinto",
      numero: 737,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [8, 7, 10, 9],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },

  {
    nome: "Beijamim",
    sobrenome: "Rodrigues",
    idade: "17",
    endereço: {
      rua: "Av Parada Pinto",
      numero: 737,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [8, 7, 10, 9],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },
];

console.log(alunos[2].notas[1])


for (let i = 0; i <= 4 ; i++ ) {
  
}