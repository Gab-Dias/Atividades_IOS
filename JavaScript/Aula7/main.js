
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
    endereco: {
      rua: "Av Parada Pinto",
      numero: 737,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [10, 9, 10, 10],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },

  {
    nome: "Pietro",
    sobrenome: "Abrahamian",
    idade: "16",
    endereco: {
      rua: "Rua dos palmares",
      numero: 732,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [8, 9, 10, 9],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },

  {
    nome: "Beijamim",
    sobrenome: "Rodrigues",
    idade: "17",
    endereco: {
      rua: "Av Rio Branco",
      numero: 37,
      cidade: "São Paulo",
      estado: "São Paulo",
    },
    notas: [8, 7, 10, 7],
    nacionalidade: "Brasileiro",
    faltas: 2,
    renda: "baixa",
  },
];


// vai percorrer os 3 objetos dentro de alunos
for (let i of alunos ){
  let media = 0;

  // let n vai percorrer dentro do array notas que ta dentro do objetos
  for (let n of i.notas) {
    media += n;
  }

  let mediaSoma = media / 4;

  if (mediaSoma >= 7) {
    console.log(
      `Aluno com o nome ${i.nome}, que mora em ${i.endereco.rua}, tem a média de ${mediaSoma}, portando foi aprovado`
    );
  } else {
    console.log(
      `Aluno com o nome ${i.nome}, que mora em ${i.endereco.rua}, tem a média de ${mediaSoma}, portando foi reprovado`
    );
  }
}