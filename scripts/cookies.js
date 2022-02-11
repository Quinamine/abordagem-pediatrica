/** Excecoes */
function printOkExpection(){console.log("Esta exceção não interfere no funcinamento normal do programa.");}

/** Tema */
function mudarTema() {
    if(localStorage.tema) {
        if(localStorage.tema == "escuro") {
            document.body.classList.add("escuro");
        }
        else {
            document.body.classList.remove("escuro");
        }
    }
}


/** Familia de Fontes */
function mudarFonte() {
    if(localStorage.fonte){
     
        if(localStorage.fonte == "serifada"){
            document.body.classList.remove("cursivo"); // reset 
            document.body.classList.add("serifado");
        }

        else if(localStorage.fonte == "cursiva"){
            document.body.classList.remove("serifado"); // reset 
            document.body.classList.add("cursivo");
        }

        else {
            document.body.classList.remove("serifado");
            document.body.classList.remove("cursivo");
        }
    }
}

/** Tamanho da Fonte */
function mudarTamanhodafonte(){
    if(localStorage.tamanho){

        let html = document.querySelector("html");

        if(localStorage.tamanho=="small"){
            html.classList.remove("big") // reset 
            html.classList.add("small");
        }

        else if(localStorage.tamanho=="big"){
            html.classList.remove("small"); // reset 
            html.classList.add("big");
        }

        else {
            html.classList.remove("small"); // reset 
            html.classList.remove("big");
        }
    }
}

/** Alinhamento */
function mudarAlinhamento(){
    if(localStorage.alinhamento){
        if(localStorage.alinhamento=="justificado"){document.body.classList.add("justificado");}
        else {document.body.classList.remove("justified");}
    }
}


function starter(){
    let preferences = document.querySelectorAll("#tema, #fontfamily, #fontsize, #alinhamento");
    try {
        
        for (const preference of preferences) {
            preference.addEventListener("change", ()=>{
                mudarTema();
                mudarFonte();
                mudarAlinhamento();
                mudarTamanhodafonte()
            })
        }
    } 
    catch (error) {printOkExpection();}
}


window.addEventListener("load", ()=>{
    starter();
    mudarTema();
    mudarFonte();
    mudarAlinhamento();
    mudarTamanhodafonte();
});





