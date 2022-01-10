
window.addEventListener("load", () => {
    let dialogBoxContainer;

    let linkCtheMagic = document.querySelector("a.veja-a-magica");
    let btnCloseDialog = document.querySelector(".dialog-box-container button");

    linkCtheMagic.addEventListener("click", () => {
        dialogBoxContainer = document.querySelector(".dialog-box-container");
        dialogBoxContainer.classList.add("on");
    })


    btnCloseDialog.addEventListener("click", () => {
        dialogBoxContainer = document.querySelector(".dialog-box-container");
        dialogBoxContainer.classList.remove("on");
    })
})