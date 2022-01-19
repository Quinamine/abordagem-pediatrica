
function navegar(abaActual, indicedaAba) {

    let conteudo_da_abaZero = document.querySelector(".conteudo-da-aba-zero");
    let conteudo_da_abaUm = document.querySelector(".conteudo-da-aba-um");

    let footer = document.getElementsByTagName("footer")[0];

    for (const aba of abas) {aba.classList.remove("aba-actual");}

    abaActual.classList.add("aba-actual");

    if(indicedaAba==0) {
        conteudo_da_abaZero.classList.remove("hide");
        conteudo_da_abaUm.classList.add("hide");
        footer.classList.remove("fixo");
    }

    else {
        conteudo_da_abaUm.classList.remove("hide");
        conteudo_da_abaZero.classList.add("hide");
        footer.classList.add("fixo");
    }
}


let abas;
window.addEventListener("load", () => {
    abas = document.querySelectorAll(".corpo > nav a");

    abas.forEach( elemento => {
        elemento.addEventListener("click", () => {
            let indicedaAba;

            elemento.classList.contains("aba-zero") ? indicedaAba = 0 : indicedaAba = 1;

            navegar(elemento, indicedaAba)
        })
    });
})