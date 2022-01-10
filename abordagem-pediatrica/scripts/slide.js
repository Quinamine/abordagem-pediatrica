

let indiceActual = 1,
    tempoSlide = 4500;



function slide() {
    let pictures = document.querySelectorAll(".banner-rotativo picture");

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
