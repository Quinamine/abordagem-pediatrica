
window.addEventListener("load", () => {
    /* Caixa de Diálogo */
    let dialogWrapper = document.querySelector(".contentor-da-caixa-de-dialogo");
    let openerLink = document.querySelector(".veja-a-magica");
    let closerButton = document.querySelector(".caixa-de-dialogo button");

    
    openerLink.addEventListener("click", () => {
        dialogWrapper.classList.add("abrir");
        document.body.classList.add("com-caixa-de-dialogo-aberta");
    })

    closerButton.addEventListener("click", () => {
        dialogWrapper.classList.remove("abrir");
        document.body.classList.remove("com-caixa-de-dialogo-aberta");
    })

})


