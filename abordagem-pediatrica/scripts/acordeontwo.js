

const Acordeontwo = {

    extenderAcordeon: (acordeonIndex) => {
        acordeon[acordeonIndex].classList.toggle("aberto");
    },

   extenderAcordeonPeloMenu: () => {
       if(acordeonStatus==false) {
           for (const ac of acordeon) {ac.classList.add("aberto");}
           menuBtn.textContent = "Fechar todos os itens";
           acordeonStatus = true;
       }

       else if(acordeonStatus==true) {
           for (const ac of acordeon) {ac.classList.remove("aberto");}
           menuBtn.textContent = "Abrir todos os itens";
           acordeonStatus = false;
       }
   }
}




let acordeon, contentordoMenu, menuBtn,
    acordeonStatus = false;
function inicializacao() {
    /** Extender Acordeon */
    acordeon = document.querySelectorAll(".acordeon");
    let acordeonTitle = document.querySelectorAll(".contentor-do-titulo-do-acordeon");
    
    acordeonTitle.forEach ( title => {
        title.addEventListener("click", () => {
            Acordeontwo.extenderAcordeon(title.dataset.acordeonindex);

            for (const ac of acordeon) {
                if(ac.classList.contains("aberto")) {
                    acordeonStatus = true;
                    menuBtn.textContent = "Fechar todos os itens";
                }
                else {
                    acordeonStatus = false;
                    menuBtn.textContent = "Abrir todos os itens";
                }
            }
        })
    })

    /** Mostrar Menu Reticencias  */
    contentordoMenu =  document.querySelector(".contentor-do-menu-reticencias");
    let menuReticencias = document.querySelector(".menu-reticencias");
    menuReticencias.addEventListener("click", () => {
        contentordoMenu.classList.add("aberto"); 
    });

    /** Fechar Menu Recicencias */
    let menuClosers = document.querySelectorAll(".contentor-do-titulo h2, main, .contentor-do-botao-de-abertura button"); 

    for (const closer of menuClosers) {
        closer.addEventListener("click", () => {
            contentordoMenu.classList.remove("aberto"); 
        });
    }

    /** Extender Acordeon pelo Menu Reticencias */
    menuBtn = document.querySelector(".contentor-do-botao-de-abertura button");
    menuBtn.addEventListener("click", Acordeontwo.extenderAcordeonPeloMenu)
}


window.addEventListener("load", inicializacao);



/*
function showContent(acordeonIndex) {
    let acordeon = document.querySelectorAll(".acordeon");

    acordeon[acordeonIndex].classList.toggle("aberto")
}


* function abrirItens() {
    for (const acordeon of acordeons) {
        acordeon.classList.add("aberto");
        menuBtn.textContent = "Fechar todos os itens";
    }
}

function fecharItens() {
    for (const acordeon of acordeons) {
        acordeon.classList.remove("aberto");
        menuBtn.textContent = "Abrir todos os itens";
    }
}



let acordeons, menuBtn;
window.addEventListener("load", () => {
    let acordeonTitle = document.querySelectorAll(".contentor-do-titulo-do-acordeon");
    acordeons = document.querySelectorAll(".acordeon");
    menuBtn = document.querySelector(".contentor-do-botao-de-abertura button")

    acordeonTitle.forEach ( title => {
        title.addEventListener("click", () => {
            showContent(title.dataset.acordeonindex);

            for (const acordeon of acordeons) {
                if(acordeon.classList.contains("aberto")) {
                    menuBtn.textContent = "Fechar todos os itens";
                }
                else {
                    menuBtn.textContent = "Abrir todos os itens";
                }
            }
        })

        
    })

    /** MENU RETICENCIAS 
    let menuReticencias = document.querySelector(".menu-reticencias");
    let contentordoMenu =  document.querySelector(".contentor-do-menu-reticencias");
    let menuClosers = document.querySelectorAll(".contentor-do-titulo h2, main, .contentor-do-botao-de-abertura button"); 

    menuReticencias.addEventListener("click", () => {
        contentordoMenu.classList.add("aberto");
    });

    
    for (const closer of menuClosers) {
        closer.addEventListener("click", ()=> {
            contentordoMenu.classList.remove("aberto");  
        })
    }

    ** ABERTURA DOS ITENS 
    
    
    menuBtn.addEventListener("click", () => {
        if(menuBtn.textContent == "Abrir todos os itens") {
            abrirItens();
        }
        else {
            fecharItens();
        }
    })
})*/