class Tarv {
    constructor(peso, arv){
        this.peso = peso;
        this.arv = arv;
    }


    /* MÉTODOS DE RECOMENDAÇÃO DE ABC+3TC 
    verAbc3tcPediatrico() {
        output.innerHTML = `<span class="print-alerta">Ver (${arvs[1].textContent}) OU (${arvs[2].textContent}).<span>`;
        return false;
    }
    verAbc3tcDeAdulto() {
        output.innerHTML = `<span class="print-alerta">Ver (${arvs[3].textContent}).</span>`;
        return false;
    }

    MÉTODOS DE RECOMENDAÇÃO DE Lopinavir 

    verLPVde100ou200() {
        output.innerHTML = `<span class="print-alerta">Ver (${arvs[6].textContent}) OU (${arvs[7].textContent}).</span>`;
        return false;
    }

    verLpvXpeouCaps(){
        output.innerHTML = `<span class="print-alerta">Ver (${arvs[4].textContent}) OU (${arvs[5].textContent}).</span>`;
        return false;
    }

    verAbc3tcPediatricoELPVde100ou200(){
        output.innerHTML = `<span class="print-alerta">Ver (${arvs[1].textContent}) OU (${arvs[2].textContent}) <span class="display-block">E</span>
        (${arvs[6].textContent}) OU (${arvs[7].textContent})
        <span>`;
        return false;
    }

*/
    
    get getForma(){
        let forma;
        if((this.arv=="LPV/r-xpe")||(this.arv=="ctx-susp")){
            forma = "ml";
        }
        else if(this.arv=="LPV/r-40-10mg") {
            forma = "saquetas";
        }

        else {
            forma = "cp(s)";
        }

        return forma;
    }
    /* MÉTODOS DE IMPRESSÃO */
    printDose(dosemanha, dosenoite){
        if((dosemanha=="&minus;") && (dosenoite=="&minus;")){
            output.innerHTML = `<table><tr><th>Dose manhã</th><th>Dose noite</th></tr>
            <tr><td>${dosemanha}</td><td>${dosenoite}</td></tr>
            </table>`;
        }
        else {
            let formamanha = this.getForma;
            let formanoite = this.getForma;

            if(dosemanha=="&minus;"){formamanha = "&minus;";}
            if(dosenoite=="&minus;"){formanoite = "&minus;";}

            output.innerHTML = `<table><tr><th>Dose manhã</th><th>Dose noite</th></tr>
            <tr><td>${dosemanha}</td><td>${dosenoite}</td></tr>
            <tr><td>${formamanha}</td><td>${formanoite}</td></tr></table>`;
        }
        
    }

    /* MÉTODO PRINCIPAL */
    calcularDose(){
        let dosemanha;
        let dosenoite;

        let peso = this.peso;

       

        /* ABACAVIR + LAMIVUDINA */
        if((this.arv=="ABC") || (this.arv=="ABC/3TC-60-30mg")){
            if(peso<6){dosemanha = 2;}
            else if(peso<10){dosemanha = 3;}
            else if(peso<14){dosemanha = 4;}
            else if(peso<20){dosemanha = 5;}
            else if(peso<25){dosemanha = 6;}
            else {
                //this.verAbc3tcDeAdulto();
                dosemanha = "&minus;";
            }
        }

        else if(this.arv=="ABC/3TC-120-60mg"){
            if(peso<6){dosemanha = 1;}
            else if(peso<10){dosemanha = 1.5;}
            else if(peso<14){dosemanha = 2;}
            else if(peso<20){dosemanha = 2.5;}
            else if(peso<25){dosemanha = 3;}
            else {
                //this.verAbc3tcDeAdulto();
                dosemanha = "&minus;";
            }
        }

        else if(this.arv=="ABC/3TC-600-300mg"){
            if(peso<25){
                //this.verAbc3tcPediatrico();
                dosemanha = "&minus;";
            }
            else if(peso>=25){
                dosemanha = 1;
            }
        }

        /* LOPINAVIR - RITONAVIR */
        else if(this.arv=="LPV/r-40-10mg"){
            if(peso<6){
                dosemanha = 2;
                dosenoite = 2;
            }
            else if(peso<10){
                dosemanha = 3;
                dosenoite = 3;
            }
            else if(peso<14){
                dosemanha = 4;
                dosenoite = 4;
            }
            else if(peso<20){
                dosemanha = 5;
                dosenoite = 5;
            }
            else {
                //this.verLPVde100ou200();
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        else if(this.arv=="LPV/r-xpe"){
            if(peso<4){
                dosemanha = 1;
                dosenoite = 1;
            }

            else if(peso<10){
                dosemanha = 1.5;
                dosenoite = 1.5;
            }
            else if(peso<14){
                dosemanha = 2;
                dosenoite = 2;
            }
            else if(peso<20){
                dosemanha = 2.5;
                dosenoite = 2.5;
            }
            else {
                //this.verLPVde100ou200();
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        else if(this.arv=="LPV/r-100-25mg"){
        
            if(peso<10){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }

            else if(peso<14){
                dosemanha = 2;
                dosenoite = 1;
            }

            else if(peso<25){
                dosemanha = 2;
                dosenoite = 2;
            }

            else {
                dosemanha = 3;
                dosenoite = 3;
            }
        }

        else if(this.arv=="LPV/r-200-50mg"){
            if(peso<14){
                //this.verLpvXpeouCaps();
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }

            else if(peso<14){
                dosemanha = 2;
                dosenoite = 1;
            }

            else if(peso<25){
                dosemanha = 1;
                dosenoite = 1;
            }

            else if(peso<30){
                dosemanha = 2;
                dosenoite = 1;
            }

            else {
                dosemanha = 2;
                dosenoite = 2;
            }
        }

        else if(this.arv=="ABC/3TC-LPV/r"){
            if(peso<6){
                dosemanha = 2;
                dosenoite = 2;
            }
            else if(peso<10){
                dosemanha = 3;
                dosenoite = 3;
            }
            else if(peso<14){
                dosemanha = 4;
                dosenoite = 4;
            }
            else if(peso<20){
                dosemanha = 5;
                dosenoite = 5;
            }
            else if(peso>=20) {
                //this.verAbc3tcPediatricoELPVde100ou200();
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        /* DOLUTEGRAVIR */
        else if(this.arv=="TDF/3TC/DTG"){
            if(peso<30){
                dosemanha = "&minus;";
            }
            else {
                dosemanha = 1;
            }
        }

        else if(this.arv=="DTG-10mg"){
            if(peso<6){dosemanha = 1;}
            else if(peso<10){dosemanha = 1.5;}
            else if(peso<14){dosemanha = 2;}
            else if(peso<20){dosemanha = 2.5;}
            else {
                //this.verAbc3tcDeAdulto();
                dosemanha = "&minus;";
            }
        }

        else if(this.arv=="DTG-50mg"){
            if(peso<20){
                dosemanha = "&minus;";
            }
            else {
                dosemanha = 1;
            }
        }

        /* DUOVIR - N */
        else if((this.arv=="Duovir-ped") || (this.arv=="DuovirN-ped")){
            if(peso<6){
                dosemanha = 1;
                dosenoite = 1;
            }
            else if(peso<10){
                dosemanha = 1.5;
                dosenoite = 1.5;
            }
            else if(peso<14){
                dosemanha = 2;
                dosenoite = 2;
            }
            else if(peso<20){
                dosemanha = 2.5;
                dosenoite = 2.5;
            }
            else if(peso<25){
                dosemanha = 3;
                dosenoite = 3;
            }

            else {
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        else if((this.arv=="Duovir-adult") ||(this.arv=="DuovirN-adult")){
         if(peso<14){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
            else if(peso<25){
                dosemanha = 1;
                dosenoite = 0.5;
            }
            else {
                dosemanha = 1;
                dosenoite = 1;
            }
        }

        /* Tenofovir + Lamivudina + EFV */ 
        else if((this.arv=="TDG/3TC") || (this.arv=="TDG/3TC/EFV")){
            if(peso<35){
                dosemanha = "&minus;";
            }
            else{
                dosemanha = 1;
            }
        }

        else if(this.arv=="EFV"){
            if(peso<10){ dosenoite = "&minus;";}
            else if(peso<14){dosenoite = 1;}
            else if(peso<25){dosenoite = 1.5;}
            else {dosenoite = 1.5;}

            dosemanha = "&minus;";
        }

        /* ATAZANAVIR */
        else if(this.arv=="ATV/r"){
            if(peso<25){dosemanha = "&minus;";;}
            else {dosemanha = 1;}
        }

        /* RALTEGRAVIR */
        else if(this.arv=="RAL-25"){
            if(peso<6){
                dosemanha = 1;
                dosenoite = 1;
            }
            else if(peso<10){
                dosemanha = 2;
                dosenoite = 2;
            }
            else if(peso<14){
                dosemanha = 3;
                dosenoite = 3;
            }
            else if(peso<20){
                dosemanha = 4;
                dosenoite = 4;
            }
            else if(peso<25){
                dosemanha = 6;
                dosenoite = 6;
            }
            else {
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        else if(this.arv=="RAL-50"){
            if(peso<25){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
            else {
                dosemanha = 1;
                dosenoite = 1;
            }
        }

        /* PROFILAXIAS */
        else if(this.arv=="ctx-cp"){
            if(peso<7){
               dosemanha = "1/4";
            }
            else if(peso<10){
                dosemanha = "1/2";
            }
            else if(peso<20){
                dosemanha = 1;
            }
            else {
                dosemanha = 2;
            }
        }

        else if(this.arv=="ctx-susp"){
            if(peso<7){
               dosemanha = 2.5;
            }
            else if(peso<10){
                dosemanha = 5;
            }
            else if(peso<15){
                dosemanha = 7.5;
            }
            else if(peso<20) {
                dosemanha = 10;
            }
            else {
                output.innerHTML = `<span class="print-alerta">Ver Cotrimoxazol em comprimido (CTX 480mg Comp).</span>`;
                return false
            }
        }

        else if(this.arv=="isoniazidacem"){
            if(peso<5){
               dosemanha = "1/2";
            }
            else if(peso<10){
                dosemanha = 1;
            }
            else if(peso<14){
                dosemanha = "1 + 1/2";
            }
            else if(peso<20){
                dosemanha = 2;
            }
            else if(peso<25){
                dosemanha = "2 + 1/2";
            }
            else {
                dosemanha = 3;
            }
        }

        else if(this.arv=="isoniazida-300"){
            if(peso<25){
                output.innerHTML = `<span class="print-alerta">Ver Isoniazida comprimidos de 100mg (INH 100mg Comp).</span>`;
                return false;
            }
            else {
                dosemanha = 1;
            }
        }

        else if(this.arv=="levofloxacina100"){
            if(peso<4){
               dosemanha = 0.5;
            }
            else if(peso<7){
                dosemanha = 1;
            }
            else if(peso<10){
                dosemanha = 1.5;
            }
            else if(peso<13){
                dosemanha = 2;
            }
            else if(peso<16){
                dosemanha = 3;
            }
            else if(peso<19){
                dosemanha = 3.5;
            }
            else if(peso<21){
                dosemanha = 4;
            }
            else if(peso<24){
                dosemanha = 4.5;
            }
            else if(peso<26){
                dosemanha = 5;
            }
            else {
                output.innerHTML = `<span class="print-error">Ver "Levofloxacina 250mg Comp"</span>`;
                return false;
            }
        }

        else if(this.arv=="levofloxacina250"){
            if(peso<4){
                output.innerHTML = `<span class="print-error">Ver "Levofloxacina 100mg Comp"</span>`;
                return false;
            }
           
            else if(peso<10){
                dosemanha = 0.5;
            }

            else if(peso<16){
                dosemanha = 1;
            }

            else if(peso<21){
                dosemanha = 1.5;
            }
          
            else if(peso<26){
                dosemanha = 2;
            }

            else if(peso<45){
                dosemanha = 3;
            }

            else {
                dosemanha = 4;
            }
        }


        /** CALL FUNCTION to PRINT DOSE */

        if(
        (this.arv=="ATV/r") 
        || (this.arv.startsWith("ABC")) 
        || (this.arv.startsWith("TDG"))
        || (this.arv.startsWith("levo"))
        || (this.arv.includes("DTG"))
        || (this.arv.includes("ctx"))
        || (this.arv.includes("isoniazida"))
        ) {
            dosenoite = "&minus;";
        }


        this.printDose(dosemanha, dosenoite);
    }
}


function classObject(){
    if(peso.value!=""){
        let arvSelected = arvs.options[arvs.selectedIndex].value;

        dosearv = new Tarv(peso.value, arvSelected);
        dosearv.calcularDose();
    }
}


var peso, arvs, output;
function starter(){
    peso = document.getElementById("peso");
    arvs = document.getElementById("arvs");
    output = document.getElementsByClassName("resultado")[0];
    
    // Eventos
    peso.addEventListener("keyup", classObject);
    peso.addEventListener("mouseup", classObject);
    arvs.addEventListener("change", classObject);

}


window.addEventListener("load", starter)