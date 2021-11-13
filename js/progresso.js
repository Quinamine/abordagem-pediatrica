
function progresso(){

	let main = document.querySelector("div.main-content");

	let barra_de_progresso = document.getElementsByTagName("meter")[0];
	barra_de_progresso.max = main.scrollHeight; // tamanho maximo da barra é igual a altura do conteudo principal;
	barra_de_progresso.value = window.pageYOffset;

}

window.addEventListener("scroll", progresso);
window.addEventListener("load", progresso);
