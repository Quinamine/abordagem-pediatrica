


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
    
    countImgs: (indice_da_galeria) => {
        let imgs = galeria[indice_da_galeria].querySelectorAll(".contentor-das-imagens img");
        let containerOfImgLen = galeria[indice_da_galeria].querySelector(".numero-de-itens");

        containerOfImgLen.innerHTML = imgs.length + (imgs.length>1 ? " itens" : " item");
    },

    changeImg: (containerIndex, currentImgIndex) => {
        let imgs = album[containerIndex].querySelectorAll("img");
        let imgButtons = album[containerIndex].querySelectorAll("button");
    
        for (let i = 0; i<imgs.length; i++) {
            imgs[i].classList.remove("ordem-zero");
            imgButtons[i].classList.remove("clicado")
        }
    
        imgs[currentImgIndex].classList.add("ordem-zero");
        imgButtons[currentImgIndex].classList.add("clicado");
    }
}

let galeria,
    titulos_da_galeria,
    album;

function init() {
    /* Inicialização das variáveis */
    galeria = document.querySelectorAll(".galeria"); /* CountImgs */

    titulos_da_galeria = document.querySelectorAll(".titulo-da-galeria"); // ChangeHeaderBg 

    /** MUDANÇA DO FUNDO DO CABEÇALHO DO ACORDEON ON MOUSEOVER */
    Acordeon.changeHeaderBg();

    /** MOSTRAR AS IMAGENS  */
    titulos_da_galeria.forEach( titulo => {
        titulo.addEventListener("click", () => {
            Acordeon.showImages(titulo.dataset.indice_da_galeria);
        })
    });
  

    /** COUNTIMAGES */
    titulos_da_galeria.forEach( (e) => {
        Acordeon.countImgs(e.dataset.indice_da_galeria);
    })


    /** CHANGE IMG */
    album = document.querySelectorAll(".contentor-das-imagens");

    let imgButtons = document.querySelectorAll(".contentor-das-imagens button")

    imgButtons.forEach( bt => {
        bt.addEventListener("click", () => {
            Acordeon.changeImg(bt.dataset.parentpos, bt.dataset.selfpos);
        })
    })
}


window.addEventListener("load", init);

