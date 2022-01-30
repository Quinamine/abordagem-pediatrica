

function showContent(acordeonIndex) {
    let acordeon = document.querySelectorAll(".acordeon");

    acordeon[acordeonIndex].classList.toggle("aberto")
}






window.addEventListener("load", () => {
    let acordeonTitle = document.querySelectorAll(".contentor-do-titulo-do-acordeon");

    acordeonTitle.forEach ( title => {
        title.addEventListener("click", () => {
            showContent(title.dataset.acordeonindex);
        })
    })
})