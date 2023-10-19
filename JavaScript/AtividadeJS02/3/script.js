// 3 Aplicando métodos. 

let fruta_um = 'Banana'
let fruta_dois = 'Maça'
let fruta_tres = 'Melão'
let fruta_quatro = 'Mexerica'
let fruta_cinco = 'Lichia'

let novaFruta = fruta_tres.replace('Melão', 'Uva')
console.log(novaFruta);


// Quantidade de letras
console.log(fruta_um.length)

// substring
console.log(fruta_quatro.substring(0, 3));

// trim
console.log(fruta_dois.trim());

// replace e toLowerCase
console.log(fruta_quatro.toLowerCase());

// Template String
console.log(`Adoro as frutas ${fruta_cinco} e ${fruta_quatro}`)