 // 1) Mostrar no console os números de 1 ao 50. (while)
  let num1 = 0
  while (num1 <= 50) {
      console.log(num1);
      num1++;
  }
  console.log('Fim do 1')

 
 // 2) Mostrar no console contagem regressiva de 10 até 0. (do-while)
 console.log("Começo do 2");
  let num2 = 10
  do {
       console.log(num2);
       num2--;
 } while ( num2 >= 0)
 console.log("Fim do 2");


// 3) Mostrar no console os números pares de 1 a 100. (for)
console.log("Começo do 3");
for (let i = 0; i < 101; i++){
    if ( i % 2 == 0) {
        console.log(i)
    } }
