

let  orderIndex = 0; /* Variável de controle da função prevOrnextImg */
const Acordeon = {

    changeHeaderBg: () => {
        /** MOUSEHOVER DO CABELHO OU TITULO DO ACORDEON */
        titulos_da_galeria.forEach( titulo => {
            titulo.addEventListener("mouseover", () => {
                titulo.classList.add("hover");
            })
    
            titulo.addEventListener("mouseleave", () => {
                titulo.classList.remove("hover");
            })  
        })
    },
    
    showImages: (i) => {
        let galeria = document.querySelectorAll(".galeria");
    
        let g = galeria[i].classList;
        g.contains("aberta") ? g.remove("aberta") : g.add("aberta");
    },
    
    changeBgButtons: (btDir, btIndex, action) => {
       if(action=="applyBg") {
           btDir[btIndex].classList.add("hover");
       }
       else {
        btDir[btIndex].classList.remove("hover");
       }
    },

    prevOrnextImg: (dir, albumIndex) => {
        let imgs = album[albumIndex].querySelectorAll("img");
    
        for (const img of imgs) {
            img.classList.remove("ordem-zero");
        }
    
        if(dir==1){
            imgs[orderIndex+dir].classList.add("ordem-zero");
            orderIndex++;
        }
    
        else {
            imgs[orderIndex-1].classList.add("ordem-zero");
            --orderIndex;
        }
    
    
        if(orderIndex==0) {
            prevButtons[albumIndex].classList.add("hide");
        }
       
        else {
            prevButtons[albumIndex].classList.remove("hide");
        }

        if(orderIndex>=(imgs.length-1)) {
            nextButtons[albumIndex].classList.add("hide");
        }
       
        else {
            nextButtons[albumIndex].classList.remove("hide");
        }  
    },
      
    countImgs: (indice_da_galeria) => {
        let imgs = galeria[indice_da_galeria].querySelectorAll(".contentor-das-imagens img");
        let containerOfImgLen = galeria[indice_da_galeria].querySelector(".numero-de-itens");

        containerOfImgLen.innerHTML = imgs.length + (imgs.length>1 ? " itens" : " item");
    }
}

let galeria,
    titulos_da_galeria,
    album,
    nextButtons,
    prevButtons; 

function init() {
    /* Inicialização das variáveis */
    galeria = document.querySelectorAll(".galeria"); /* CountImgs */

    titulos_da_galeria = document.querySelectorAll(".titulo-da-galeria"); // ChangeHeaderBg 

    album = document.querySelectorAll(".contentor-das-imagens"); // prevOrnextImg

    nextButtons = document.querySelectorAll(".avancar"); // prevOrnextImg
    prevButtons = document.querySelectorAll(".voltar"); // prevOrnextImg

    /** MUDANÇA DO FUNDO DO CABEÇALHO DO ACORDEON ON MOUSEOVER */
    Acordeon.changeHeaderBg();

    /** MOSTRAR AS IMAGENS  */
    titulos_da_galeria.forEach( titulo => {
        titulo.addEventListener("click", () => {
            Acordeon.showImages(titulo.dataset.indice_da_galeria);
        })
    });



    /** AVANÇAR OU VOLTAR IMAGENS */
    nextButtons.forEach( nextBt => {
        nextBt.addEventListener("click", () => {
            Acordeon.prevOrnextImg(1, nextBt.dataset.index);
        })

        nextBt.addEventListener("mouseover", () => {
            Acordeon.changeBgButtons(nextButtons, nextBt.dataset.index, "applyBg");
        })

        nextBt.addEventListener("mouseleave", () => {
            Acordeon.changeBgButtons(nextButtons, nextBt.dataset.index, "removeBg");
        })

    })

    prevButtons.forEach ( prevBt => {
        prevBt.addEventListener("click", () => {
            Acordeon.prevOrnextImg(0, prevBt.dataset.index)
        })

        prevBt.addEventListener("mouseover", () => {
            Acordeon.changeBgButtons(prevButtons, prevBt.dataset.index, "applyBg");
        })

        prevBt.addEventListener("mouseleave", () => {
            Acordeon.changeBgButtons(prevButtons, prevBt.dataset.index, "removeBg");
        })
    })


    /** COUNTIMAGES */
    titulos_da_galeria.forEach( (e) => {
        Acordeon.countImgs(e.dataset.indice_da_galeria);
    })



    /** Manter Acordeon Fechado */
    if(window.innerWidth>=768) {
        document.querySelector(".galeria.tmg").classList.add("aberta");
    }
    
}


window.addEventListener("load", init);

