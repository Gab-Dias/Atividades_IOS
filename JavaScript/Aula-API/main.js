

///focus




let buscarCep = async () => {
  let cep = document.querySelector("#cep").value;
  let url = `http://viacep.com.br/ws/${cep}/json/`;
  // https://viacep.com.br/ws/01001000/json/

  let valorEndereco = await fetch(url)
  let valores = await valorEndereco.json()

//   atualizarPag(valores)
  
}

let atualizarPag = (valores) => {
    document.querySelector('#endereco').value = valores.logradouro;
    document.querySelector('#bairro').value = valores.bairro
}


document.querySelector('#cep').addEventListener('focusout', buscarCep)