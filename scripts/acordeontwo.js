

const Acordeontwo = {

    extenderPeloElemento: (acordeonIndex) => {
        acordeons[acordeonIndex].classList.toggle("aberto");
    },

   extenderPeloMenu: () => {

       if(acordeonStatus==false) {
           for (const acordeon of acordeons) {acordeon.classList.add("aberto");}
           menuBtn.textContent = "Fechar todos os itens";
           acordeonStatus = true;  
       }

       else if(acordeonStatus==true) {
           for (const acordeon of acordeons) {acordeon.classList.remove("aberto");}
           menuBtn.textContent = "Abrir todos os itens";
           acordeonStatus = false;
       }
   }
}

let acordeons, contentordoMenu, menuBtn, checkbox,
    acordeonStatus = false;
function inicializacao() {

    /** Extender Acordeon pelo elemento*/
    acordeons = document.querySelectorAll(".acordeon");
    let acordeonTitle = document.querySelectorAll(".contentor-do-titulo-do-acordeon");

    checkbox = document.querySelector("#ancestral-de-checkbox input#checkbox");
    
    acordeonTitle.forEach ( title => {
        title.addEventListener("click", () => {
            Acordeontwo.extenderPeloElemento(title.dataset.acordeonindex);

            for (const acordeon of acordeons) {
                if(acordeon.classList.contains("aberto")) {
                    menuBtn.textContent = "Fechar todos os itens";
                    acordeonStatus = true;    
                }
                else {
                    menuBtn.textContent = "Abrir todos os itens";
                    acordeonStatus = false;  
                }
            }
        })
    });

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
    menuBtn.addEventListener("click", Acordeontwo.extenderPeloMenu);

    /** Extender Acordeon pelo Checkbox no Desktop*/
    let checkerBox = document.querySelectorAll("#checkbox, #ancestral-de-checkbox label");

    for (const checker of checkerBox) {
        checker.addEventListener("change", Acordeontwo.extenderPeloMenu)
    }  
}

window.addEventListener("load", inicializacao);
