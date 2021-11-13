let content = "Conheça a História da Vida de Adérito Félix Quinamine (o criador da plataforma \"Abordagem Pediátrica\")";
let control = 0;

function escreva() {

	let banner = document.querySelector(".banner");
	let banner_hdois = document.querySelector(".banner-h2");
	if(control<content.length){
		banner_hdois.innerHTML += content[control];
		control++;

		setTimeout(escreva, 100)
	}
}

window.addEventListener("load", escreva);