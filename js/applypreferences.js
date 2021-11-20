/** Tema */

function printOkExpection(){console.log("Esta exceção não interfere no funcinamento normal do programa.");}

function mudarTema() {

    if(localStorage.tema){


        // Variaveis para formatacao comum
        let tagsWithBgBlack = document.querySelectorAll("header, footer, div.body-row, div.main-content, div.row-of-social-sites");

        let links = document.querySelectorAll(".body-row a, div.row-of-social-sites a");

        let titulos = document.querySelectorAll("div.main-content h1, div.main-content h2, div.main-content h3, div.main-content h4, div.main-content h5");

        let mainContentSubtitles = document.querySelectorAll("div.main-content h3, div.main-content h4, div.main-content h5");

        let border_do_mainEfieldset = document.querySelectorAll("div.main-content, fieldset");

        // Variaveis disponiveis somente em algumas paginas
        let destaques = document.querySelectorAll("p.nota, p.nota-de-formulario, p.prescricao-correcta, p.regra-de-tres-simples, .aside-content,  p.exemplo");
        let sectionAderitoPlusWebDev = document.querySelector("div.seccao-sobre-desenvolvimento-web");

        let tituloAside = document.querySelector("div.aside-content h3");
        let linksReturn = document.querySelectorAll("p.return-top a, p.parent-de-link-de-volta a"); 
        
        let parent_de_linksReturn = document.querySelectorAll("p.return-top, p.parent-de-link-de-volta, hr"); 

        let ths = document.querySelectorAll("table th");

        let link_sobre_mim = document.querySelector("div.container-of-all-content-sobre-o-autor a");

        let legends_of_preferences = document.querySelectorAll("form#preferences legend");


        let labels_of_preferences = document.querySelectorAll("form#preferences label");

        
		let trecho_visible_no_cel = document.querySelector("span.trecho-com-display-none-no-pc");

        // span da pagina de Documentacao e elementos com classe "font-weight-bol"
        docSpan_e_elementos_bold = document.querySelectorAll(".main-content span, .font-weight-bold");
        
        // Index and tarv and preferences

        let formChildreen = document.querySelectorAll("form input, form p#paragrafo-parent-de-farmaco select, form#preferences select");
        let selectExtension = document.querySelectorAll(".input-extension");

        /** RESPONSIVIDADE */

        /** Variaveis */
        let headerEfooter = document.querySelectorAll("header, footer, input, select, .p-da-calculadora");

        let bgBlackElements = document.querySelectorAll("div.all-content-container, fieldset");

        let elementosComborder = document.querySelectorAll("div.body-row, div.main-content, fieldset, form legend,  .p-da-calculadora, p.return-top, p.parent-de-link-de-volta, table, th, td");

        let caixa_de_redes_sociais = document.querySelector("div.row-of-social-sites");

        let p_da_calculadora = document.querySelectorAll(".p-da-calculadora");

        let p_de_resultado = document.querySelector("p.resultado");

        


        if(localStorage.tema=="escuro"){
			/* reset */
			
			// No loopings
            document.body.classList.add("fundo_cinzaescuro-para-body");

            /*** Loopings */
            for(var tag of tagsWithBgBlack){tag.classList.add("fundo_escuro_triplodois");}
            
            for(var titulo of titulos){titulo.classList.add("fundo-preto-para-titulo");}

            for(var link of links){link.classList.add("roxo");}

            try {for(var nota of destaques){nota.classList.add("fundo-preto-para-titulo");} } 
            catch (error) {printOkExpection();}

            try {for(var p of parent_de_linksReturn){p.classList.add("border-cinza-discreta");} } 
            catch (error) {printOkExpection();}


            try {for(var link of linksReturn){link.classList.add("fundo-azul-escuro");} } 
            catch (error) {printOkExpection();}

            try {for(var child of formChildreen){child.classList.add("css-para-formChildren");} } 
            catch (error) {printOkExpection();}

            try {for(var select of selectExtension){select.classList.add("fundo_escuro_triplodois");} } 
            catch (error) {printOkExpection();}

            try {for(var border of border_do_mainEfieldset){border.classList.add("border-cinza");} } 
            catch (error) {printOkExpection();}

            try {for(var th of ths){th.classList.add("th-cor-escura");} } 
            catch (error) {printOkExpection();}

            try {for(var docSpan of docSpan_e_elementos_bold){docSpan.classList.add("cor-cinza-claro-do-body");} } 
            catch (error) {printOkExpection();}

            /*** No Loopings */
            try { tituloAside.classList.add("fundo-cinza-para-titulo-do-aside") } catch (error) 
            {printOkExpection();}
            try { link_sobre_mim.classList.add("cor-do-link-sobre-o-autor") } catch (error) 
            {printOkExpection();}
			
            try { trecho_visible_no_cel.classList.add("cor-cinza-claro-do-body") } catch (error) 
            {printOkExpection();}

            /*** RESPONSIVIDADE */
            if(window.innerWidth<=1005){
                /*** Looping */
                

                for(var titulo of titulos){titulo.classList.add("fundo-cinza-para-header-footer");}

                for(var elem of elementosComborder){elem.classList.add("border-cinza-discreta");}

                try {for(var nota of destaques){
                    nota.classList.remove("bg-fquatro");
                    nota.classList.add("fundo-cinza-para-header-footer");
                } } 
                catch (error) {printOkExpection();}

                if(window.innerWidth<=520){
                    for(var subtitle of mainContentSubtitles){
                        subtitle.classList.remove("fundo-preto-para-titulo");
                        subtitle.classList.remove("fundo-cinza-para-header-footer");
                        subtitle.style.border = "none";

                        subtitle.classList.add("fundo_escuro_triplodois");
                    }
                }
            }

            
			
			/* Esse else é de coercao para remover as formatacoes de innerWidth<1005 quando a janela for redimencionada em dispositivos maiores*/
			else {
				
				/*** Looping */
                
                for(var titulo of titulos){titulo.classList.remove("fundo-cinza-para-header-footer");}

                for(var elem of elementosComborder){elem.classList.remove("border-cinza-discreta");}
                
				
                try {for(var nota of destaques){nota.classList.remove("fundo-cinza-para-header-footer");} } 
                catch (error) {printOkExpection();}

                if(window.innerWidth<=520){
                    for(var subtitle of mainContentSubtitles){
                        subtitle.classList.remove("fundo_escuro_triplodois");
                    }
                }
			
			}

            
           
            if(window.innerWidth<522){
            
                /** Applying */
                
                /*** Looping */
                for(var hf of headerEfooter){hf.classList.add("fundo-cinza-para-header-footer");}
                for(var bg of bgBlackElements){bg.classList.add("fundo_escuro_triplodois");}

                try {for(var p of p_da_calculadora){p.classList.add("radius-dois");} } 
                catch (error) {printOkExpection();}

                try {for(var l of legends_of_preferences){l.classList.add("cor-cinza-claro");} } 
                catch (error) {printOkExpection();}

                try {for(var l of labels_of_preferences){l.classList.add("cor-cinza-escuro");} } 
                catch (error) {printOkExpection();}

                /** No looping */
                try {sectionAderitoPlusWebDev.classList.remove("bg-fquatro");} 
                catch (error) {printOkExpection();}
                try {caixa_de_redes_sociais.classList.add("fundo-dracula");} 
                catch (error) {printOkExpection();}

                try {p_de_resultado.classList.add("bg-para-p-resultado");} 
                catch (error) {printOkExpection();}
            } 
			
					/* Esse else é de coercao para remover as formatacoes de innerWidth<522 quando a janela for redimencionada em dispositivos maiores*/
			
			else {
				/** Desapplying */

                /*** Looping */
                for(var hf of headerEfooter){hf.classList.remove("fundo-cinza-para-header-footer");}
                for(var bg of bgBlackElements){bg.classList.remove("fundo_escuro_triplodois");}
                try {for(var l of legends_of_preferences){l.classList.remove("cor-cinza-claro");} } 
                catch (error) {printOkExpection();}

                try {for(var p of p_da_calculadora){p.classList.remove("radius-dois");} } 
                catch (error) {printOkExpection();}

                try {for(var l of labels_of_preferences){l.classList.remove("cor-cinza-escuro");} } 
                catch (error) {printOkExpection();}

                /** No looping */
                try {sectionAderitoPlusWebDev.classList.add("bg-fquatro");} 
                catch (error) {printOkExpection();}
                try {caixa_de_redes_sociais.classList.remove("fundo-dracula");} 
                catch (error) {printOkExpection();}

                try {p_de_resultado.classList.remove("bg-para-p-resultado");} 
                catch (error) {printOkExpection();}
				
				
			}
        }

        else {
            document.body.classList.remove("fundo_cinzaescuro-para-body");

            /*** Loopings */
            for(var tag of tagsWithBgBlack){tag.classList.remove("fundo_escuro_triplodois");}

            for(var titulo of titulos){titulo.classList.remove("fundo-preto-para-titulo");}

            for(var link of links){link.classList.remove("roxo");}

            try {for(var nota of destaques){nota.classList.remove("fundo-preto-para-titulo");} } 
            catch (error) {printOkExpection();}

            try {for(var link of parent_de_linksReturn){p.classList.remove("border-cinza-discreta");} } 
            catch (error) {printOkExpection();}

            try {for(var link of linksReturn){link.classList.remove("fundo-azul-escuro");} } 
            catch (error) {printOkExpection();}

            try {for(var child of formChildreen){child.classList.remove("css-para-formChildren");} } 
            catch (error) {printOkExpection();}


            try {for(var select of selectExtension){select.classList.remove("fundo_escuro_triplodois");} } 
            catch (error) {printOkExpection();}

            try {for(var border of border_do_mainEfieldset){border.classList.remove("border-cinza");} } 
            catch (error) {printOkExpection();}

            try {for(var th of ths){th.classList.remove("th-cor-escura");} } 
            catch (error) {printOkExpection();}

            try {for(var docSpan of docSpan_e_elementos_bold){docSpan.classList.remove("cor-cinza-claro-do-body");} } 
            catch (error) {printOkExpection();}
            /*** No Loopings */
            try { tituloAside.classList.remove("fundo-cinza-para-titulo-do-aside") } 
            catch (error) {printOkExpection();}

            try { link_sobre_mim.classList.remove("cor-do-link-sobre-o-autor") } catch (error) 
            {printOkExpection();}

			try { trecho_visible_no_cel.classList.remove("cor-cinza-claro-do-body") } catch (error) 
            {printOkExpection();}

            /***  RESPONSIVIDADE */
            if(window.innerWidth<=1005){
                /*** Looping */
                
                for(var titulo of titulos){titulo.classList.remove("fundo-cinza-para-header-footer");}

                for(var elem of elementosComborder){elem.classList.remove("border-cinza-discreta");}
                
                try {for(var nota of destaques){
                    nota.classList.add("bg-fquatro");
                    nota.classList.remove("fundo-azul-escuro");} 
                } 
                catch (error) {printOkExpection();}
            }


            if(window.innerWidth<522){

                /** Desapplying */

                /*** Looping */
                for(var hf of headerEfooter){hf.classList.remove("fundo-cinza-para-header-footer");}
                for(var bg of bgBlackElements){bg.classList.remove("fundo_escuro_triplodois");}
                try {for(var l of legends_of_preferences){l.classList.remove("cor-cinza-claro");} } 
                catch (error) {printOkExpection();}

                try {for(var p of p_da_calculadora){p.classList.remove("radius-dois");} } 
                catch (error) {printOkExpection();}

                try {for(var l of labels_of_preferences){l.classList.remove("cor-cinza-escuro");} } 
                catch (error) {printOkExpection();}

                /** No looping */
                try {sectionAderitoPlusWebDev.classList.add("bg-fquatro");} 
                catch (error) {printOkExpection();}
                try {caixa_de_redes_sociais.classList.remove("fundo-dracula");} 
                catch (error) {printOkExpection();}

                try {p_de_resultado.classList.remove("bg-para-p-resultado");} 
                catch (error) {printOkExpection();}
                
            }
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
    let selectOfTema = document.getElementById("tema");

    let selectOfFont = document.getElementById("familia");

    let selectOfAlignment = document.getElementById("align");

    let selectOfFontsize = document.getElementById("fontsize");

    try {
        selectOfTema.addEventListener("change", mudarTema);
        selectOfFont.addEventListener("change", mudarFonte);
        selectOfAlignment.addEventListener("change", mudarAlinhamento);
        selectOfFontsize.addEventListener("change", mudarTamanhodafonte);
    } 
    catch (error) {printOkExpection();}

    window.addEventListener("resize", mudarTema);
    window.addEventListener("resize", mudarTamanhodafonte);
}


window.addEventListener("load", starter);
window.addEventListener("load", mudarTema);
window.addEventListener("load", mudarFonte);
window.addEventListener("load", mudarAlinhamento);
window.addEventListener("load", mudarTamanhodafonte);
