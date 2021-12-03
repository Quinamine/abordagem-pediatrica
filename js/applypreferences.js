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
        let tagsWithOwnFonts = document.querySelectorAll("form select, div.banner h2");

        if(localStorage.fontfamily=="serif"){
            /**Reset */
            document.body.classList.remove("fonte-cursiva");
            try {for(var tag of tagsWithOwnFonts){tag.classList.remove("fonte-cursiva");} } 
            catch (error) {printOkExpection();}

            /**Reformatacao*/
            document.body.classList.add("fonte-serifada");

            try {for(var tag of tagsWithOwnFonts){tag.classList.add("fonte-serifada");} } 
            catch (error) {printOkExpection();}
        }

        else if(localStorage.fontfamily=="cursiva"){
            /**Reset */
            document.body.classList.remove("fonte-serifada");
            try {for(var tag of tagsWithOwnFonts){tag.classList.remove("fonte-serifada");} } 
            catch (error) {printOkExpection();}

            /**Reformatacao*/
            document.body.classList.add("fonte-cursiva");
            
            try {for(var tag of tagsWithOwnFonts){tag.classList.add("fonte-cursiva");} } 
            catch (error) {printOkExpection();}
        }

        else {
            /**Reset */
            document.body.classList.remove("fonte-serifada");

            try {for(var tag of tagsWithOwnFonts){tag.classList.remove("fonte-serifada");} } 
            catch (error) {printOkExpection();}

            document.body.classList.remove("fonte-cursiva");

            try {for(var tag of tagsWithOwnFonts){tag.classList.remove("fonte-cursiva");} } 
            catch (error) {printOkExpection();}

        }
    }
}



/** Alinhamento */


function mudarAlinhamento(){
    if(localStorage.fontalign){

        if(localStorage.fontalign=="justified"){document.body.classList.add("text-align-justify");}

        else {document.body.classList.remove("text-align-justify");}
    }
}



function mudarTamanhodafonte(){
    if(localStorage.fontsize){
        let html = document.getElementsByTagName("html")[0];

        /* Restruturacao do Layout no big layout */
        let headerRow = document.querySelector("div.header-row");

        let footerRow = document.querySelector("div.footer-row")
        let footerRowLink = document.querySelector("div.footer-row a");

        let menuBox = document.querySelector("div.menu-box");
        let menuUl = document.querySelector("div.menu-box nav ul");
        let menuLi = document.querySelectorAll("div.menu-box nav ul li");
        let rowHeaderAndFooter = document.querySelectorAll("header div.header-row, footer div.footer-row");


        /* Restruturacao da Calculadora */
        let calculators_p = document.querySelectorAll(".p-da-calculadora");
        let select_de_medicamentos = document.querySelector("#paragrafo-parent-de-farmaco select");

        let inputs_do_form = document.querySelectorAll("form#calculadora input");

        let select_do_form = document.querySelectorAll("form#calculadora select");

        /** Restruturacao do aside */
        let divAside = document.querySelector("div.aside-content");
        
        if(localStorage.fontsize=="small"){
            // Reset do fontsize BIg
            html.classList.remove("font-size-big");
            html.classList.remove("font-size-medium");
            divAside.classList.remove("padding-para-aside-com-bigfont");

            for(var hf of rowHeaderAndFooter){hf.classList.remove("max-width-maior-para-rows-header-footer");}
            footerRow.classList.remove("display-block");
            footerRowLink.classList.remove("display-block");

            // No loopings
                    // Cabeçalho
                    headerRow.classList.remove("header-row-dir-column");
                    headerRow.classList.remove("header-row-dir-column");
                    menuBox.classList.remove("menu-box-width-cem");
                    menuUl.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");
                    for (let li of menuLi) {
                        li.classList.remove("formatacao-para-li-do-menu-com-fontegrande");
                   } 

            // Reformatacao
            html.classList.add("font-size-small");
            
            

            /** RESPONSIVIDADE - Calculadora*/
            if(window.innerWidth<521){
                try {select_de_medicamentos.classList.add("margin-zero"); } 
                catch (error) {printOkExpection();}
            }

            else {
                try {select_de_medicamentos.classList.remove("margin-zero"); } 
                catch (error) {printOkExpection();}
            }



            if(window.innerWidth>751){
                try {for(var p of calculators_p){p.classList.add("padding-left-maior");} } 
                catch (error) {printOkExpection();}
            }

            else {
                try {for(var p of calculators_p){p.classList.remove("padding-left-maior");} } 
                catch (error) {printOkExpection();}
            }
            
            
        }

        else if(localStorage.fontsize=="big"){
            // Reset 
            html.classList.remove("font-size-small");
            html.classList.remove("font-size-medium");

            // Reformatacao
            html.classList.add("font-size-big");
            divAside.classList.add("padding-para-aside-com-bigfont");

            // Calculadora
            try {
                for (let select of select_do_form) {select.classList.add("selectform-max-width-static")}
            } 
            catch (error) {printOkExpection();} 

            try {
                for (let input of inputs_do_form) {input.classList.add("inputform-max-width-static")}
            } 
            catch (error) {printOkExpection();}

            // Responsividade 

            if(window.innerWidth>1154){
                for(var hf of rowHeaderAndFooter){hf.classList.add("max-width-maior-para-rows-header-footer");}
            }
            else {
                for(var hf of rowHeaderAndFooter){hf.classList.remove("max-width-maior-para-rows-header-footer");}
            }


            if((window.innerWidth>1050) && (window.innerWidth<=1165)) {
                // Reset 

                for(var hf of rowHeaderAndFooter){hf.classList.remove("max-width-maior-para-rows-header-footer");}
                // Loopings


                // No loopings

                    // Cabeçalho
                headerRow.classList.add("header-row-dir-column");
                headerRow.classList.add("header-row-dir-column");
                menuBox.classList.add("menu-box-width-cem");
                menuUl.classList.add("formatacao-para-ul-do-menu-com-fontegrande");
                for (let li of menuLi) {
                    li.classList.add("formatacao-para-li-do-menu-com-fontegrande");
               } 

                
                    // Rodape
                    footerRow.classList.add("display-block");
                    footerRowLink.classList.add("display-block");
            }

            else {
                // Loopings


                // No loopings
                    // Cabeçalho
                headerRow.classList.remove("header-row-dir-column");
                headerRow.classList.remove("header-row-dir-column");
                menuBox.classList.remove("menu-box-width-cem");
                menuUl.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");
                for (let li of menuLi) {
                    li.classList.remove("formatacao-para-li-do-menu-com-fontegrande");
               } 

                    // Rodape
                    footerRow.classList.remove("display-block");
                    footerRowLink.classList.remove("display-block");
            }

        }

        else if(localStorage.fontsize=="medium") {
            /** reset */
            html.classList.remove("font-size-small");
            html.classList.remove("font-size-big");

            /* reformatacao */
            html.classList.add("font-size-medium"); // Esta classe so esta formatada no media query (max-width: 520)
        }

        else{
            // Reset do font-size small
            html.classList.remove("font-size-small");
            html.classList.remove("font-size-medium")

            // Reset do font-size big
            html.classList.remove("font-size-big");
            divAside.classList.remove("padding-para-aside-com-bigfont");
            for(var hf of rowHeaderAndFooter){hf.classList.remove("max-width-maior-para-rows-header-footer");}
            footerRow.classList.remove("display-block");
            footerRowLink.classList.remove("display-block");

            // No loopings
                    // Cabeçalho
                    headerRow.classList.remove("header-row-dir-column");
                    headerRow.classList.remove("header-row-dir-column");
                    menuBox.classList.remove("menu-box-width-cem");
                    menuUl.classList.remove("formatacao-para-ul-do-menu-com-fontegrande");
                    for (let li of menuLi) {
                        li.classList.remove("formatacao-para-li-do-menu-com-fontegrande");
                   } 

            for(var hf of rowHeaderAndFooter){hf.classList.remove("max-width-maior-para-rows-header-footer");}
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

