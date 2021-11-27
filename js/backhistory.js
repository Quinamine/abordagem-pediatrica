function voltar(){
    let origem = window.location.hash;
    if(origem=="#tarv"){
        window.location.href = "../tarv.html";
    }

    else {
        window.location.href = "../../index.html";
    }
}


function init() {
    document.querySelector(".container-da-seta-de-volta").addEventListener("click", voltar);
}

window.addEventListener("load", init)