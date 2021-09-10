class Tarv {
    constructor(peso, arvs, arv){
        this.peso = peso;
        this.arvs = arvs;
        this.arv = arv;
    }

    
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

    /* MÉTODO DE RECOMENDAÇÃO */
    printAlerta(){

        /** ABACAVIR + LAMIVUDINA */
        if((this.arv=="ABC") || (this.arv=="ABC/3TC-60-30mg") || (this.arv=="ABC/3TC-120-60mg")){
            if(this.peso>=25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[3].textContent}".</span>`; // Ver ABC/3TC 600mg/300mg;
            }
        }

        else if(this.arv=="ABC/3TC-600-300mg"){
            if(this.peso<25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[2].textContent}" ou "${this.arvs[1].textContent}".</span>`; 
            }
        }

        /** LOPINAVIR + RITONAVIR */
        else if((this.arv=="LPV/r-40-10mg") ||(this.arv=="LPV/r-xpe")){
            if(this.peso>=20){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[7].textContent}" ou "${this.arvs[6].textContent}".</span>`; 
            }
        }

        else if(this.arv=="ABC/3TC-LPV/r"){
            if((this.peso>=20)&&(this.peso<25)){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[2].textContent}" e "${this.arvs[6].textContent}" ou "${this.arvs[7].textContent}".</span>`;
            } 
            else if(this.peso>=25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[3].textContent}" e "${this.arvs[7].textContent}" ou "${this.arvs[6].textContent}".</span>`;
            }
        }

        else if((this.arv=="LPV/r-100-25mg") ||(this.arv=="LPV/r-200-50mg")){
            if(this.peso<10){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[5].textContent}" ou "${this.arvs[4].textContent}".</span>`; 
            }
            else if(this.peso>=10){
                if(this.arv=="LPV/r-100-25mg"){
                    output.innerHTML += `<span class="print-alerta">Os comprimidos não devem ser partidos, esmagados ou mastigados, pois a eficácia reduz muito se assim forem manipulados.</span>`; 
                }
            }
            else if(this.peso<14){
                if(this.arv=="LPV/r-200-50mg"){
                    output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[6].textContent}".</span>.`; 
                }
            }
            
        }

        /** DOLUTEGRAVIR */
        else if(this.arv=="TDF/3TC/DTG"){
            if(this.peso<30){
                output.innerHTML += `<span class="print-alerta">A Dose Fixa Combinada de "${this.arvs[9].textContent}" está indicada apenas para crianças com peso &ge; 30kg.</span>`; 
            }
        }
   
        else if(this.arv=="DTG-10mg"){
            if(this.peso>=20){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[11].textContent}".</span>`; 
            }
        }

        else if(this.arv=="DTG-50mg"){
            if(this.peso<20){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[10].textContent}".</span>`; 
            }
        }

        /** AZIDOTIMIDINA + LAMIVUDINA + NEVIRAPINA */
        else if(this.arv=="Duovir-ped"){
            if(this.peso>=25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[13].textContent}".</span>`; 
            }
        }

        else if(this.arv=="Duovir-adult"){
            if(this.peso<14){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[12].textContent}".</span>`; 
            }
        }

        else if(this.arv=="DuovirN-ped"){
            if(this.peso>=25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[15].textContent}".</span>`; 
            }
        }

        else if(this.arv=="DuovirN-adult"){
            if(this.peso<14){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[14].textContent}".</span>`; 
            }
        }

        /** TENOFOVIR + LAMIVUDINA */
        else if(this.arv=="TDF/3TC"){
            if(this.peso<35){
                output.innerHTML += `<span class="print-alerta">A Dose Fixa Combinada (DFC) de "${this.arvs[16].textContent}" só deve ser administrada em crianças com peso &ge; 35 kg. Constitui o fármaco de eleição para Profilaxia Pré-Exposição (PreP).</span>`; 
            } 
        }

        /** TENOFOVIR + LAMIVUDINA + EFAVIRENZ */ 

        else if(this.arv=="TDF/3TC/EFV"){
            if(this.peso<35){
                output.innerHTML += `<span class="print-alerta">O "${this.arvs[17].textContent}" só deve ser administrado em crianças com peso &ge; 35kg.</span>`; 
            }
        }

        /** ATAZANAVIR */ 
        else if(this.arv=="ATV/r"){
            if(this.peso<25){
                output.innerHTML += `<span class="print-alerta">O "${this.arvs[19].textContent}" só deve ser administrado em crianças com peso &ge; 25 kg.</span>`; 
            }
            else {
                output.innerHTML += `<span class="print-alerta">Nota: Pacientes que estiverem a usar a Rifampicina devem substituir o "ATV/r" por "DTG" e ajustar a dose de "DTG (DTG 12/12 horas)" durante o tempo que recebem RIF e por mais 2 semanas. Depois mantêm o "DTG" e passam a tomar apenas 1 vez/dia.</span>`; 
            }
        }
 

        /** RALTEGRAVIR */ 
        else if(this.arv=="RAL-25"){
            if(this.peso>=25) {
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[21].textContent}".</span>`; 
            }
        }

        else if(this.arv=="RAL-400"){
            if(this.peso<25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[20].textContent}".</span>`; 
            }
        }

        /** RITONAVIR */ 
        else if((this.arv=="RTV-25") || (this.arv=="RTV-100")){
            if(this.peso<10){
                output.innerHTML += `<span class="print-alerta">Recomendado para crianças co-infectadas (TB/HIV) com peso &ge; 10 kg em uso de "LPV/r" para potenciação durante o tratamento da TB.</span>`; 
            }
            else {
                if(this.arv=="RTV-25"){
                    if(this.peso>=25){
                        output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[23].textContent}".</span>`; 
                    }
                    else {
                        output.innerHTML += `<span class="print-alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</span>`;
                    }
                }

                else if(this.arv=="RTV-100"){
                    output.innerHTML += `<span class="print-alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</span>`;
                }
                
            }
        }

        /** COTRIMXAZOL */
        /** COTRIMXAZOL */
        else if(this.arv=="ctx-cp"){
            output.innerHTML += `<span class="print-alerta">Para ver critérios de TPC, <a href='../pages/diversos.html#profilaxia_contra_ios' id='link-de-redirecionamento'>clique aqui</a>.</span>`; 
        }

        else if(this.arv=="ctx-susp"){
            if(this.peso>=20){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[24].textContent}".</span>`; 
            }
            else {
                output.innerHTML += `<span class="print-alerta">Para ver critérios de TPC, <a href='../pages/diversos.html#profilaxia_contra_ios' id='link-de-redirecionamento'>clique aqui</a>.</span>`;
            }
        }

        /** ISONIAZIDA */
        else if(this.arv=="isoniazida-300"){
            if(this.peso<25){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[26].textContent}".</span>`; 
            }
            else {
                output.innerHTML += `<span class="print-alerta">Para ver critérios de TPI, <a href='../pages/diversos.html#profilaxia_contra_tb' id='link-de-redirecionamento'>clique aqui</a>.</span>`;
            }
        }

        else if(this.arv=="isoniazidacem"){
            output.innerHTML += `<span class="print-alerta">Para ver critérios de TPI, <a href='../pages/diversos.html#profilaxia_contra_tb' id='link-de-redirecionamento'>clique aqui</a>.</span>`;
        }

        /** LEVOFLOXACINA */
        else if(this.arv=="levofloxacina100"){
            if(this.peso>=26){
                output.innerHTML += `<span class="print-alerta ">Ver "${this.arvs[29].textContent}".</span>`; 
            }
            else{
                output.innerHTML += `<span class="print-alerta">Nota: Se o caso fonte de TB-MR tiver resistência comprovada a Fluroquinolonas, o TPT com Levofloxacina não deve ser oferecido.</span>`;
            }
        }

        else if(this.arv=="levofloxacina250"){
            if(this.peso<4){
                output.innerHTML += `<span class="print-alerta">Ver "${this.arvs[28].textContent}".</span>`;
            }
            else{
                output.innerHTML += `<span class="print-alerta">Nota: Se o caso fonte de TB-MR tiver resistência comprovada a Fluroquinolonas, o TPT com Levofloxacina não deve ser oferecido.</span>`;
            }
        }

        /** PIRIDOXINA*/
        else if(this.arv=="piridoxina-50"){
            if(this.peso<5){
                output.innerHTML = `<span class="print-alerta">Não aplicável (N/A). Ver "${this.arvs[30].textContent}".</span>`; 
            }
        }

    }

    /* MÉTODO DE IMPRESSÃO */
    printDose(dosemanha, dosenoite){
        if(this.arv.includes("piridoxina")){
            output.innerHTML = `<span class="print-dose">Tomar: ${dosemanha}.</span>`;
        }


        else if((dosemanha=="&minus;") && (dosenoite=="&minus;") || (dosemanha=="N/A")){
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

        this.printAlerta();
        
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
        else if((this.arv=="TDF/3TC") || (this.arv=="TDF/3TC/EFV")){
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
            else {dosenoite = 2;}

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

        else if(this.arv=="RAL-400"){
            if(peso<25){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
            else {
                dosemanha = 1;
                dosenoite = 1;
            }
        }

        /* RALTEGRAVIR */
        else if(this.arv=="RTV-25"){
            if(peso<10){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }

            else if(peso<14){
                dosemanha = 4;
                dosenoite = 4;
            }

            else if(peso<25){
                dosemanha = 6;
                dosenoite = 6;
            }
 
            else{
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }
        }

        else if(this.arv=="RTV-100"){
            if(peso<10){
                dosemanha = "&minus;";
                dosenoite = "&minus;";
            }

            else if(peso<14){
                dosemanha = 1;
                dosenoite = 1;
            }

            else if(peso<25){
                dosemanha = 1;
                dosenoite = 2;
            }
 
            else if(peso<30){
                dosemanha = 2;
                dosenoite = 2;
            }

            else{
                dosemanha = 3;
                dosenoite = 3;
            }  
        }

        /* PROFILAXIAS */

        /* Cotrimoxazol */
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
                dosemanha = "N/A";
            }
        }

        /* Isoniazida */
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
                dosemanha = "&minus;";
            }
            else {
                dosemanha = 1;
            }
        }

        /* Levofloxacina         */
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
                dosemanha = "&minus;";
            }
        }

        else if(this.arv=="levofloxacina250"){
            if(peso<4){
                dosemanha = "&minus;";
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

        /* Piridoxina       */
        else if(this.arv=="piridoxina-25"){
            if(peso<5){
                dosemanha = "1/2 cp 3&times;/semana";
            }
            else if(peso<8){
                dosemanha = "1/2 cp/dia";
            }

            else if(peso<15){
                dosemanha = "1 cp/dia";
            }

            else {
                dosemanha = "2 cps/dia";
            }
        }

        else if(this.arv=="piridoxina-50"){
            if(peso<5){
                this.printAlerta();
                return false;
            }

            else if(peso<15){
                dosemanha = "1/2 cp 3&times;/semana";
            }

            else {
                dosemanha = "1 cp/dia";
            }
        }

        /** CALL FUNCTION to PRINT DOSE */

        if(
        (this.arv=="ATV/r") 
        || (this.arv.startsWith("ABC")) 
        || (this.arv.startsWith("TDF"))
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
        if((peso.value<3) || (peso.value>45)){
            output.innerHTML = `<span class='print-error'>Observação: o peso deve ser &ge; 3 e &le; 45.</span>`;
            return false;
        }
        else {
            let arvSelected = arvs.options[arvs.selectedIndex].value;
            dosearv = new Tarv(peso.value, arvs, arvSelected);
            dosearv.calcularDose();
        }
        
    }
    else {
        output.innerHTML = "";
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