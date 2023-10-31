
const girafa = document.getElementById("item1");



function container() {
    let elemento = document.createElement('h1')
    elemento.innerHTML = "Gabriel Dias"
    girafa.appendChild(elemento)
}

function inOut() {
  girafa.style.backgroundColor = "green";
}

function saindo(){
    girafa.style.backgroundColor = "grey";
}


function enviarForm(){
    girafa.style.backgroundColor = 'blue'

}
