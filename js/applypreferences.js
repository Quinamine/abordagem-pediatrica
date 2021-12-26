/** Tema */

function printOkExpection(){console.log("Esta exceção não interfere no funcinamento normal do programa.");}


function mudarTema() {
    if(localStorage.tema) {
        if(localStorage.tema == "escuro") {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    }
}


/** Familia de Fontes */
function mudarFonte() {
    if(localStorage.fontfamily){
     
        if(localStorage.fontfamily == "serif"){
            document.body.classList.remove("cursiva"); // reset 
            document.body.classList.add("serif");
        }

        else if(localStorage.fontfamily == "cursiva"){
            document.body.classList.remove("serif"); // reset 
            document.body.classList.add("cursiva");
        }

        else {
            document.body.classList.remove("serif");
            document.body.classList.remove("cursiva");
        }
    }
}

/** Alinhamento */
function mudarAlinhamento(){
    if(localStorage.fontalign){
        if(localStorage.fontalign=="justified"){document.body.classList.add("justified");}
        else {document.body.classList.remove("justified");}
    }
}


/** Tamanho da Fonte */
function mudarTamanhodafonte(){
    if(localStorage.fontsize){

        let html = document.querySelector("html");

        if(localStorage.fontsize=="small"){
            html.classList.remove("font-big") // reset 
            html.classList.add("font-small");
        }

        else if(localStorage.fontsize=="big"){
            html.classList.remove("font-small"); // reset 
            html.classList.add("font-big");
        }

        else {
            html.classList.remove("font-small"); // reset 
            html.classList.remove("font-big");
        }
    }
}


function starter(){
    let preferences = document.querySelectorAll("#tema, #familia, #align, #fontsize");
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

window.addEventListener("resize", ()=>{
    mudarTema();
    mudarTamanhodafonte();
})

