
function backHistory() {
    if((window.history.length)<2) {
        window.location.href = "../calculadora-de-doses.html";
    }

    else {
        window.history.back()
    }
    
}

let seta;
window.addEventListener("load", () => {
    seta = document.querySelector(".contentor-da-seta-de-volta");

    seta.addEventListener("click", () => {
        backHistory();
        
    })
})
