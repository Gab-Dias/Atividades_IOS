
// () = Parênteses
// [] = Colchetes
// {} = Chaves

// Fundamentos array
let carros = ["Uno", "GolQuadrado", "Sandero", "Supra", "NissaGTR"];
console.log(typeof(grupo3));

// Array bidimensional
let gruposTcc = [
    ['Gabriel', 'Daniel'],
    ["Pietro", "Dias"],
    ["Lucas", "Davi"]
];
console.log(gruposTcc[0][1]);

let novoCarro = carros.join(" - ")
console.log(novoCarro)

// Pop() - remover um elemento na última posição do array

// Push() - vai inserir um elemento na última posição do array 

let frutas = ["Morango", "Banana", "Kiwi", "Carambola", "Graviola"]
console.log(frutas)
let frutas1 = frutas.pop()
console.log(frutas)

frutas.push("Lichia")
console.log(frutas);