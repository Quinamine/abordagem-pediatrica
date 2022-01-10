
const menu = {

    hamburger: () => {
        let linha_do_cabecalho = document.getElementsByClassName("linha-do-cabecalho")[0];
        if(linha_do_cabecalho.classList.contains("com-menu-aberto")){
            linha_do_cabecalho.classList.remove("com-menu-aberto");
            document.body.style.overflow = "initial";
        }

        else{
            linha_do_cabecalho.classList.add("com-menu-aberto");
            document.body.style.overflow = "hidden";
        }  
    },

    reticencias: () => {
        let menuSection = document.querySelector(".menu-reticencias");
        let menuContainer = document.querySelector(".container-dos-tres-pontos");
    
        menuContainer.addEventListener("click", () => {
            if(menuSection.classList.contains("activo")){
                menuSection.classList.remove("activo");
            }
            else {
                menuSection.classList.add("activo");
            }
        })
    
        menuClosers = document.querySelectorAll("header, .body-row");
        
        for (const closer of menuClosers) {
            closer.addEventListener("click", ()=> {
                if(menuSection.classList.contains("active")){
                    menuSection.classList.remove("active");
                }
            })
        }
    },


    dropDown: () => {
        let dropdownContainers = document.querySelectorAll(".dropdown-container");

        let cdpEventTargets = document.querySelectorAll("li.cdp, li.cdp a.target");
        let darvEventTargets = document.querySelectorAll("li.darv, li.darv a.target");
        
    
        for (let i = 0; i < cdpEventTargets.length; i ++) {
            cdpEventTargets[i].addEventListener("mouseover", () => {
                dropdownContainers[0].classList.add("on");
            })
    
    
            darvEventTargets[i].addEventListener("mouseover", () => {
                dropdownContainers[1].classList.add("on");
            })
        }
    
        for (let i = 0; i < cdpEventTargets.length; i ++) {
            cdpEventTargets[i].addEventListener("mouseleave", () => {
                dropdownContainers[0].classList.remove("on");
            })
    
            darvEventTargets[i].addEventListener("mouseleave", () => {
                dropdownContainers[1].classList.remove("on");
            })
        }
    },


    printOkException: () => {
        console.log("Esta exceção não interfere no funcionamento normal do programa.")
    }
}


function load() {

    try {
        document.querySelector(".contentor-do-menu-hamburguer").addEventListener("click",() =>{
            menu.hamburger();
        });
    } 
    catch (error) {menu.printOkException();}


    try { menu.reticencias();} 
    catch (error) {menu.printOkException();}


    try {menu.dropDown();}
    catch (error) {menu.printOkException();}
}


window.addEventListener("load", load);