// Jogo Adivinhação


(function escolheNumero() {
    const num = 8
    let numUsuario = prompt("Escolha um número de 0 a 10");

    if ( numUsuario == num){
        alert('Parabens, você acertou o número sorteado')
    } else {
        alert('Tente novamente')
        escolheNumero()
    }

})();




