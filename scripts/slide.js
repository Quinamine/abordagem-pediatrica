

let indiceActual = 1,
    tempoSlide = 4500;

let pictures;
function slide() {
    pictures = document.querySelectorAll(".banner-rotativo picture");

    for (const pic of pictures) {
        pic.classList.remove("pic-actual");
    }

    pictures[indiceActual].classList.add("pic-actual");
    indiceActual++;

    if(indiceActual>=pictures.length) {
        indiceActual = 0;
    }
}


let bolinha = 1;
function progressaoSlide() {
    
    let bolinhas = document.querySelectorAll(".banner-rotativo section div");

    for (const bolinha of bolinhas) {
        bolinha.classList.remove("cheia");
    }

    bolinhas[bolinha].classList.add("cheia");
    bolinha++;

    if(bolinha>=bolinhas.length) {
        bolinha = 0;
    }
}


setInterval(slide, tempoSlide);

try {setInterval(progressaoSlide, tempoSlide)} 
catch (error) {console.log("")};




function nextImg(currentImgIndex) {
    let pictures = document.querySelectorAll(".banner-rotativo picture");
    

    for (let i= 0; i<pictures.length; i++) {
        pictures[i].classList.remove("pic-actual");
        bolinhas[i].classList.remove("cheia");
    }

    pictures[currentImgIndex].classList.add("pic-actual"); 
    bolinhas[currentImgIndex].classList.add("cheia");
}




let bolinhas;
function init() {
    bolinhas = document.querySelectorAll(".contentor-das-bolinhas-de-progresso div");

    bolinhas.forEach( bola => {
        bola.addEventListener("click", () => {
            nextImg(bola.dataset.picindex);

            if((bola.dataset.picindex>=(bolinhas.length-1)) || (bola.dataset.picindex>=(bolinhas.length-1))){
                indiceActual = 0;
                bolinha = 0;
            }
            else {
                indiceActual = Number(bola.dataset.picindex)+1;
                bolinha = Number(bola.dataset.picindex)+1;
            }

        })
    })
}

window.addEventListener("load", init)

