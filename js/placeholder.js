/** Controle de Placeholder */
function changePlaceholder(){
	let placeholderIdade = document.getElementById("idade");
	let placeholderPeso = document.getElementById("peso");

	if(window.innerWidth >= 521){
		if(placeholderPeso.dataset.tipopeso == "tarv"){
			placeholderPeso.placeholder = "mínimo e máximo: 3 kg e 45 kg respectivamente";
		}

		else if(placeholderPeso.dataset.tipopeso == "CDP") {
			placeholderIdade.placeholder = "mínima e máxima: 1 mês e 14 anos respectivamente";
			placeholderPeso.placeholder = "mínimo e máximo: 2 kg e 35 kg respectivamente";
		}
	}

	else {
		if(placeholderPeso.dataset.tipopeso == "CDP") {
			placeholderIdade.placeholder = "Idade";
		}
		placeholderPeso.placeholder = "Peso";
	}	
}

function starter(){
	changePlaceholder();
	window.addEventListener("resize", changePlaceholder);
}


window.addEventListener("load", starter);