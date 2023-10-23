//Aplicando desconto em produtos

alert('O carro custa 20mil, a seguir selecione o codigo de desconto que deseja')
let desco = prompt("Escreve um dos seguintes descontos, (DESC1, DESC2, DESC3, DESC4 ou DESC5").toUpperCase();

const valor = 20000
let calDesc1 = 5 * 20000 / 100;
let calDesc2 = 10 * 20000 / 100;
let calDesc3 = 15 * 20000 / 100;
let calDesc4 = 20 * 20000 / 100;
let calDesc5 = 25 * 20000 / 100;


switch (desco) {
  case "DESC1":
    alert(
      `Desconto de 5% onde é ${calDesc1} mil, ficando valor final de ${valor - calDesc1} mil`
    );
    break;

  case "DESC2":
    alert(
      `Desconto de 10% onde é ${calDesc2} mil, ficando valor final de ${valor - calDesc2} mil`
    );
    break;

  case "DESC3":
    alert(
      `Desconto de 15% onde é ${calDesc3} mil, ficando valor final de ${valor - calDesc3} mil`
    );
    break;

  case "DESC4":
    alert(
      `Desconto de 20% onde é ${calDesc4} mil, ficando valor final de ${valor - calDesc4} mil`
    );
    break;

  case "DESC5":
    alert(
      `Desconto de 25% onde é ${calDesc5} mil, ficando valor final de ${valor - calDesc5} mil`
    );
    break;
};