

// // Armazena nome e idade e exibe
let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade")
const maiorIdade = 18
alert(`Seu nome é ${nome} e sua idade é ${idade} anos`);



// // Conversão de Fahrenheit para Celsius
let temperatura = prompt("Qual a temperatura hoje? Escreve em Fahrenheit")
 let convert_celius = (temperatura - 32 ) / 1.8
 alert(`A temperatura hoje é ${convert_celius}º Celsius`)

// // Conversão de Celsius para Fahrenheit 
 let tempCelsius = prompt("Qual a temperatura hoje?")
 let convert_fah = tempCelsius * 1.8 + 32
 alert(`A temperatura hoje é ${convert_fah}º Fahrenheit`)






function calcularMedia(){
let number1 = Number(document.querySelector('#nota1').value)
let number2 = document.querySelector('#nota2').value
let res = document.querySelector('#res')

// number1 = parseFloat(number1)
number2 = parseFloat(number2)

let media = (number1 + number2) / 2
res.innerHTML = `Sua média é ${media}`
}






