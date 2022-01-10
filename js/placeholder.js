/** Controle de Placeholder */
function changePlaceholder(){
	let inputIdade = document.querySelector("#calculadora #idade");
	let inputPeso = document.querySelector("#calculadora #peso")

	
	if(window.innerWidth >= 521){
		try {inputIdade.placeholder = "";} 
		catch (error) {console.log("Esta exceção não interfere no funcionamento normal do programa.")}
		
		inputPeso.placeholder = "";
	}

	else {
		try {inputIdade.placeholder = "Idade";} 
		catch (error) {console.log("Esta exceção não interfere no funcionamento normal do programa.")}
		inputPeso.placeholder = "Peso";
	}
}




window.addEventListener("load", () => {
	changePlaceholder();
	window.addEventListener("resize", changePlaceholder);
});

