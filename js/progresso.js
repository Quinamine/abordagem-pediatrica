
function progresso(){
	let header = document.getElementsByTagName("header")[0];
	let main = document.querySelector("div.main-content");
	let footer = document.getElementsByTagName("footer")[0];
	let barra_de_progresso = document.getElementsByTagName("meter")[0];

	let mainContent_lastViewHeight;
	
	(window.innerWidth>=1099) ? mainContent_lastViewHeight = 4.2 : mainContent_lastViewHeight = 3.5;

	
	barra_de_progresso.max = main.scrollHeight - footer.scrollHeight * mainContent_lastViewHeight; // tamanho maximo da barra é igual a altura do conteudo principal;
	barra_de_progresso.value = window.pageYOffset;

	if(window.pageYOffset > header.scrollHeight){
		barra_de_progresso.classList.remove("z-index");
	}
	else {
		barra_de_progresso.classList.add("z-index");
	}

}

window.addEventListener("scroll", progresso);
window.addEventListener("load", progresso);
