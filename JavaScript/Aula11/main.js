
/* function mudarNome() {
let tittle = document.querySelector("h1");
let nome = document.querySelector("#alunos").value;

let nome2 = document.createElement("H2")

// tittle.innerHTML = `${nome}`

nome2.innerText = `${nome}`
document.body.appendChild(nome2);

nome2.style.border = 'solid 2px red'

} */


window.alert("Bem-Vindo")

let section_Um = document.createElement('section');
let article_Um = document.createElement('article');

let tittle_h1 = document.createElement('h1');
let tittle_p = document.createElement('p');
let tittle_h1_2 = document.createElement("h1");
let tittle_p2 = document.createElement("p");

section_Um.style.border = '1px solid black'
section_Um.style.height = '45vh'

article_Um.style.border = "1px solid red";
article_Um.style.height = "40vh";

tittle_h1.innerHTML = 'Gabriel Dias';
tittle_p.innerHTML = "Gabriel Vinicius Dias Barbosa EvangelistaPara";

tittle_h1_2.innerHTML = "Gabriel Dias";
tittle_p2.innerHTML = "Gabriel Vinicius Dias Barbosa EvangelistaPara";


document.body.appendChild(section_Um)
document.body.appendChild(article_Um)

section_Um.appendChild(tittle_h1)
section_Um.appendChild(tittle_p);

article_Um.appendChild(tittle_h1_2);
article_Um.appendChild(tittle_p2);




