function voltar(){
    let origem = window.location.hash;
    if(origem=="#darv"){
        window.location.href = "../doseador-de-antirretrovirais.html";
    }

    else {
        window.location.href = "../calculadora-de-doses-pediatricas.html";
    }
}


function init() {
    document.querySelector(".container-da-seta-de-volta").addEventListener("click", voltar);
}

window.addEventListener("load", init)