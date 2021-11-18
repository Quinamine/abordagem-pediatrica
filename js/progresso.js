
function progresso(){

	let main = document.querySelector("div.main-content");
	let footer = document.getElementsByTagName("footer")[0];
	let barra_de_progresso = document.getElementsByTagName("meter")[0];

	let mainContent_lastViewHeight;
	
	(window.innerWidth>=1099) ? mainContent_lastViewHeight = 4.2 : mainContent_lastViewHeight = 3.2;

	
	barra_de_progresso.max = main.scrollHeight - footer.scrollHeight * mainContent_lastViewHeight; // tamanho maximo da barra é igual a altura do conteudo principal;
	barra_de_progresso.value = window.pageYOffset;

}

window.addEventListener("scroll", progresso);
window.addEventListener("load", progresso);
