
function backHistory() {
    window.history.back()
}

let contentordaSeta;
window.addEventListener("load", () => {
    contentordaSeta = document.querySelector(".contentor-da-seta-de-volta");

    contentordaSeta.addEventListener("click", () => {
        backHistory();
        
    })


    if((window.history.length)<2) {
        contentordaSeta.classList.add("sem-historico");
    }
})
