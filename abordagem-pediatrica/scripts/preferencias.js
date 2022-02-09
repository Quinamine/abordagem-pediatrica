
function savePrefonLocal() {
    let temaEscolhido = temas.options[temas.selectedIndex].value,
        fontePreferida = fontes.options[fontes.selectedIndex].value,
        tamanhoEscolhido = tamanhos.options[tamanhos.selectedIndex].value,
        alinhamento = alinhamentos.options[alinhamentos.selectedIndex].value;

    if(typeof Storage != "undefined") {
        localStorage.setItem("tema", temaEscolhido);
        localStorage.setItem("fonte", fontePreferida);
        localStorage.setItem("tamanho", tamanhoEscolhido);
        localStorage.setItem("alinhamento", alinhamento);
    }
}

function showSavedPref(preferencia, storageVar) {

    for (const p of preferencia) {
        p.removeAttribute("selected");

        if(p.value == localStorage.getItem(storageVar)) {
            p.setAttribute("selected", "selected");
        }
    }
}

let temas, fontes, tamanhos, alinhamentos;
function loading() {
    temas = document.querySelector("#tema");
    fontes = document.querySelector("#fontfamily");
    tamanhos = document.querySelector("#fontsize");
    alinhamentos = document.querySelector("#alinhamento");

    let preferencias = [temas, fontes, tamanhos, alinhamentos];

    for (const p of preferencias) {
        p.addEventListener("change", savePrefonLocal);
        p.addEventListener("change", () => {
            showSavedPref(temas, "tema");
            showSavedPref(fontes, "fonte");
            showSavedPref(tamanhos, "tamanho");
            showSavedPref(alinhamentos, "alinhamento");

            mudarTema();
            
        });
    }
}

window.addEventListener("load", () => {
    loading();
    showSavedPref(temas, "tema");
    showSavedPref(fontes, "fonte");
    showSavedPref(tamanhos, "tamanho");
    showSavedPref(alinhamentos, "alinhamento");   
});
