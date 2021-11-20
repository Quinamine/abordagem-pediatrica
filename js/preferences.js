function savePrefOnLocal(){
    let selectedTheme = temas.options[temas.selectedIndex].value;
    let selectedFont = fontFamilies.options[fontFamilies.selectedIndex].value;
    let selectedSize = fontSizes.options[fontSizes.selectedIndex].value;
    let selectedAlign = alignment.options[alignment.selectedIndex].value;
    
    if(typeof(Storage) != "undefined"){
        localStorage.tema = selectedTheme;
        localStorage.fontfamily = selectedFont;
        localStorage.fontsize = selectedSize;
        localStorage.fontalign = selectedAlign;
    }

    else {
        alert("O seu navegador está sem superte ao 'Local Storage'(recurso indispensável para aplicar as suas preferências.")
    }
}


function showSavedPref(preference, storageVar){

    for(var pref of preference){
        pref.removeAttribute("selected");
        pref.removeAttribute("style");

        if(pref.value==localStorage.getItem(storageVar)){
            pref.setAttribute("selected", "");
            pref.setAttribute("style", "color: rgb(250, 160, 50);");
        }
    }

}


var temas, fontFamilies, fontSizes, alignment;
function starter(){
    temas = document.querySelector("#tema");
    fontFamilies = document.querySelector("#familia");
    fontSizes = document.querySelector("#fontsize");
    alignment = document.querySelector("#align");

    /** EVENTOS */
    let preferencias = [temas, fontFamilies, fontSizes, alignment];

    for(var pref of preferencias){
        pref.addEventListener("change", savePrefOnLocal);
        pref.addEventListener("change", function(){
            showSavedPref(temas, "tema");
            showSavedPref(fontFamilies, "fontfamily");
            showSavedPref(fontSizes, "fontsize");
            showSavedPref(alignment, "fontalign");
        });
    }    
}


window.addEventListener("load", starter);
window.addEventListener("load", function(){
    showSavedPref(temas, "tema");
    showSavedPref(fontFamilies, "fontfamily");
    showSavedPref(fontSizes, "fontsize");
    showSavedPref(alignment, "fontalign");
});