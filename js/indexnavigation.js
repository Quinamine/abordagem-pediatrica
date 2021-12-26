
function navegar(aba, tabTitle) {

    for (const aba of abas) {
        aba.classList.remove("current-tab");
    }
    
    aba.classList.add("current-tab");

    if(tabTitle=="sobre"){
        cardsContainer.classList.add("display-none");
        contentSobreContainer.classList.remove("display-none");
    }

    else {
        cardsContainer.classList.remove("display-none");
        contentSobreContainer.classList.add("display-none");
    }
}



let abas, cardsContainer, contentSobreContainer;

window.addEventListener("load", () => {

    abas = document.querySelectorAll(".main-content nav a");

    cardsContainer = document.querySelector(".container-dos-cards");

    contentSobreContainer = document.querySelector(".conteudo-sobre");

})