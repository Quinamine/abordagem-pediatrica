

let intervalodeTempo = 3500,
    indiceActual = 1;


function changeImage() {
    let imgs = document.querySelectorAll(".banner-rotativo img");

    for (const img of imgs) { img.classList.remove("current-img"); }

    imgs[indiceActual].classList.add("current-img");
    indiceActual ++;

    if(indiceActual>=imgs.length) {indiceActual = 0;}
}




let currentIndex = 1;
function bannerProgress() {
    let bolinhas = document.querySelectorAll("section.progress div");

    for (const bolinha of bolinhas) { bolinha.classList.remove("full");}

    bolinhas[currentIndex].classList.add("full");
    currentIndex++;

    if(currentIndex>=bolinhas.length) {currentIndex=0};
}


setInterval(changeImage, intervalodeTempo);
setInterval(bannerProgress, intervalodeTempo);