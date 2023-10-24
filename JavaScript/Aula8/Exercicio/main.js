
// Caluclo IMC
function calculoIMC(altura, peso){
    return ( peso / (altura * altura))
}

let imc = calculoIMC(1.73, 53)

if (imc < 16.9) {
      console.log(`Seu IMC é ${imc.toFixed(2)}, está muito abaixo do peso `);
    } 
    else if (imc >= 17 && imc <= 18.4) {
        console.log(`Seu IMC é ${imc.toFixed(2)}, está abaixo do peso `);
      
    } else if (imc >=18.5 && imc <= 24.9) {
        console.log(`Seu IMC é ${imc.toFixed(2)}, está abaixo do peso `);
      
    } else if (imc >= 25 && imc < 29.9) {
        console.log(`Seu IMC é ${imc.toFixed(2)}, está abaixo do peso `);
      
    } else if (imc >= 30 && imc < 34.9) {
        console.log(`Seu IMC é ${imc.toFixed(2)}, está abaixo do peso `);
      
    } else {
        console.log(`Seu IMC é ${imc.toFixed(2)}, está abaixo do peso `);
    } 



//   Conversão de REal para Euro

function realEuro(real){
    return real * 0.19
}

console.log (`Você tem ${realEuro(10.60)}`)

// Crie dois eventos 

function clique(){
    console.log("Você clicou");
}

function passou() {
  console.log("Você clicou");
}


