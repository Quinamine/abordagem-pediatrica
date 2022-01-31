class Darv {
    constructor(peso, arvs, arv){
        this.peso = peso;
        this.arvs = arvs;
        this.arv = arv;
    }

    
    get retornarForma(){
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


    get retornarFormulacao(){
        let formulacao;

        if(this.arv=="LPV/r-xpe"){
            formulacao = "frascos de 60 ml para";
        }

        else if(this.arv=="ctx-susp"){
            formulacao = "frascos de 100 ml para"
        }
        else if(this.arv=="LPV/r-40-10mg") {
            formulacao = "saquetas para";
        }

        else {
            formulacao = "cp(s) para";
        }

        return formulacao;

    }

    /* MÉTODO DE RECOMENDAÇÃO */
    mostrarAlerta(){

        /** ABACAVIR + LAMIVUDINA */
        if((this.arv=="ABC") || (this.arv=="ABC/3TC-60-30mg") || (this.arv=="ABC/3TC-120-60mg")){
            if(this.peso>=25){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[4].textContent}</span>".</output>`; // Ver ABC/3TC 600mg/300mg;
            }
        }

        else if(this.arv=="ABC/3TC-600-300mg"){
            if(this.peso<25){
                doseEposologia.innerHTML += `<output class="alerta ">Ver "<span class="destacar">${this.arvs[3].textContent}</span>" ou "<span class="destacar">${this.arvs[2].textContent}<span class="destacar">".</output>`; 
            }
        }

        /** LOPINAVIR + RITONAVIR */
        else if((this.arv=="LPV/r-40-10mg") ||(this.arv=="LPV/r-xpe")){
            if(this.peso>=20){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[7].textContent}</span>" ou "<span class="destacar">${this.arvs[8].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="ABC/3TC-LPV/r"){
            if((this.peso>=20)&&(this.peso<25)){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[3].textContent}</span>" e "<span class="destacar">${this.arvs[7].textContent}</span>" ou "<span class="destacar">${this.arvs[8].textContent}</span>".</output>`;
            } 
            else if(this.peso>=25){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[4].textContent}</span>" e "<span class="destacar">${this.arvs[8].textContent}</span>" ou "<span class="destacar">${this.arvs[7].textContent}</span>".</output>`;
            }
        }

        else if(this.arv=="LPV/r-100-25mg"){
            if(this.peso<10){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[6].textContent}</span>" ou "<span class="destacar">${this.arvs[5].textContent}</span>".</output>`; 
            }
            else if(this.peso>=10){
                doseEposologia.innerHTML += `<output class="alerta">Os comprimidos não devem ser partidos, esmagados ou mastigados, pois a eficácia reduz muito se assim forem manipulados.</output>`; 
            }
            
        }

        else if(this.arv=="LPV/r-200-50mg"){
            if(this.peso<10){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[6].textContent}</span>" ou "<span class="destacar">${this.arvs[5].textContent}</span>".</output>`; 
            }

            else if(this.peso<14){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[7].textContent}</span>" ou "<span class="destacar">${this.arvs[5].textContent}</span>".</output>`; 
            }
        }

        /** DOLUTEGRAVIR */
        else if(this.arv=="TDF/3TC/DTG"){
            if(this.peso<30){
                doseEposologia.innerHTML += `<output class="alerta">A Dose Fixa Combinada de "${this.arvs[9].textContent}" está indicada apenas para crianças com peso &ge; 30 kg.</output>`; 
            }
        }
   
        else if(this.arv=="DTG-10mg"){
            if(this.peso>=20){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[12].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="DTG-50mg"){
            if(this.peso<20){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[11].textContent}</span>".</output>`; 
            }
        }

        /** AZIDOTIMIDINA + LAMIVUDINA + NEVIRAPINA */
        else if(this.arv=="Duovir-ped"){
            if(this.peso>=25){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[14].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="Duovir-adult"){
            if(this.peso<14){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[13].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="DuovirN-ped"){
            if(this.peso>=25){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[16].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="DuovirN-adult"){
            if(this.peso<14){
                doseEposologia.innerHTML += `<output class="print-alerta ">Ver "<span class="destacar">${this.arvs[15].textContent}</span>".</output>`; 
            }
        }

        /** TENOFOVIR + LAMIVUDINA */
        else if(this.arv=="TDF/3TC"){
            if(this.peso<35){
                doseEposologia.innerHTML += `<output class="alerta">A Dose Fixa Combinada (DFC) de "${this.arvs[17].textContent}" só deve ser administrada em crianças com peso &ge; 35 kg. Constitui o fármaco de eleição para Profilaxia Pré-Exposição (PrEP).</output>`; 
            } 
        }

        /** TENOFOVIR + LAMIVUDINA + EFAVIRENZ */ 

        else if(this.arv=="TDF/3TC/EFV"){
            if(this.peso<35){
                doseEposologia.innerHTML += `<output class="alerta">O "${this.arvs[18].textContent}" só deve ser administrado em crianças com peso &ge; 35 kg.</span>`; 
            }
        }

        /** ATAZANAVIR */ 
        else if(this.arv=="ATV/r"){
            if(this.peso<25){
                doseEposologia.innerHTML += `<output class="alerta">O "${this.arvs[20].textContent}" só deve ser administrado em crianças com peso &ge; 25 kg.</output>`; 
            }
            else {
                doseEposologia.innerHTML += `<output class="alerta">Observação: Pacientes que estiverem a usar a Rifampicina devem substituir o "ATV/r" por "DTG" e ajustar a dose de "DTG (DTG 12/12 horas)" durante o tempo que recebem Rifampicina e por mais 2 semanas. Depois mantêm o "DTG" e passam a tomar apenas 1 vez/dia.</output>`; 
            }
        }
 

        /** RALTEGRAVIR */ 
        else if(this.arv=="RAL-25"){
            if(this.peso>=25) {
                doseEposologia.innerHTML += `<output class="alerta ">Ver "<span class="destacar">${this.arvs[22].textContent}</span>".</output>`; 
            }
        }

        else if(this.arv=="RAL-400"){
            if(this.peso<25){
                doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[21].textContent}</span>".</output>`; 
            }
        }

        /** RITONAVIR */ 
        else if((this.arv=="RTV-25") || (this.arv=="RTV-100")){
            if(this.peso<10){
                doseEposologia.innerHTML += `<output class="alerta">Recomendado para crianças co-infectadas (TB/HIV) com peso &ge; 10 kg em uso de "LPV/r" para potenciação durante o tratamento da Tuberculose.<output/>`; 
            }
            else {
                if(this.arv=="RTV-25"){
                    if(this.peso>=25){
                        doseEposologia.innerHTML += `<output class="alerta">Ver "<span class="destacar">${this.arvs[24].textContent}</span>".</output>`; 
                    }
                    else {
                        doseEposologia.innerHTML += `<output class="alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</output>`;
                    }
                }

                else if(this.arv=="RTV-100"){
                    doseEposologia.innerHTML += `<output class="alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</output>`;
                }
                
            }
        }

        /** COTRIMXAZOL */
        /** COTRIMXAZOL */
        else if(this.arv=="ctx-cp"){
            doseEposologia.innerHTML += `<output class="alerta"><a href='profilaxias/tratamento-profilatico-com-cotrimoxazol.html'>Clique aqui para ver critérios do tratamento profilático com cotrimoxazol.</a></output>`; 
        }

        else if(this.arv=="ctx-susp"){
            if(this.peso>=20){
                doseEposologia.innerHTML += `<output class="alerta ">Ver "<span class="destacar">${this.arvs[24].textContent}</span>".</output>`; 
            }
            else {
                doseEposologia.innerHTML += `<output class="alerta"><a href='profilaxias/tratamento-profilatico-com-cotrimoxazol.html'>Clique aqui para ver critérios do tratamento profilático com cotrimoxazol.</a></output>`;
            }
        }

        /** ISONIAZIDA */
        else if(this.arv=="isoniazida-300"){
            if(this.peso<25){
                doseEposologia.innerHTML += `<output class="alerta ">Ver "<span class="destacar">${this.arvs[26].textContent}</span>".</output>`; 
            }
            else {
                doseEposologia.innerHTML += `<output class="alerta"><a href='profilaxias/tratamento-profilatico-com-isoniazida.html'>Clique aqui para ver critérios do tratamento profilático com isoniazida.</a></output>`;
            }
        }

        else if(this.arv=="isoniazidacem"){
            doseEposologia.innerHTML += `<output class="alerta"><a href='profilaxias/tratamento-profilatico-com-isoniazida.html'>Clique aqui para ver critérios do tratamento profilático com isoniazida.</a></output>`;
        }

        /** LEVOFLOXACINA */
        else if(this.arv=="levofloxacina100"){
            if(this.peso>=26){
                doseEposologia.innerHTML += `<output class="alerta ">Ver "<span class="destacar">${this.arvs[30].textContent}</span>".</output>`; 
            }
            else{
                doseEposologia.innerHTML += `<output class="alerta">Observação: se o caso fonte de tuberculose multiresistente tiver resistência comprovada a fluroquinolonas, o tratamento profilático de tuberculose (TPT) com levofloxacina não deve ser oferecido.</output>`;
            }
        }

        else if(this.arv=="levofloxacina250"){
            if(this.peso<4){
                doseEposologia.innerHTML += `<output class="alerta">Ver ""<span class="destacar">${this.arvs[29].textContent}</span>".</output>`;
            }
            else{
                doseEposologia.innerHTML += `<output class="alerta">Observação: se o caso fonte de tuberculose multiresistente tiver resistência comprovada a fluroquinolonas, o tratamento profilático de tuberculose (TPT) com levofloxacina não deve ser oferecido.</output>`;
            }
        }

        /** PIRIDOXINA*/
        else if(this.arv=="piridoxina-50"){
            if(this.peso<5){
                doseEposologia.innerHTML = `<output class="alerta">Não aplicável (N/A). Ver "<span class="destacar>${this.arvs[31].textContent}</span>".</output>`; 
            }
        }

    }

    /* MÉTODO DE IMPRESSÃO */
    mostrarDose(dosemanha, dosenoite){
        if(this.arv.includes("piridoxina")){
            doseEposologia.innerHTML = `<output>Tomar: ${dosemanha}.</output>`;
        }

        else if((dosemanha=="&minus;") && (dosenoite=="&minus;") || (dosemanha=="N/A")){
            doseEposologia.innerHTML = `<output>
            <table><tr><th>Dose manhã</th><th>Dose noite</th></tr>
            <tr><td>${dosemanha}</td><td>${dosenoite}</td></tr>
            </table>
            </output>
            `;
        }
        else {
            let formamanha = this.retornarForma;
            let formanoite = this.retornarForma;

            let qtdManha = dosemanha;
            let qtdNoite = dosenoite;
            

            if(dosemanha=="&minus;"){
                formamanha = "&minus;";
                qtdManha = 0;
            }
            else if(dosemanha=="1/4"){qtdManha = 0.25;}

            else if(dosemanha=="1/2"){qtdManha = 0.5;}

            /*else if(dosemanha=="1 + 1/2"){qtdManha = 1.5;}
            else if(dosemanha=="2 + 1/2"){qtdManha = 2.5;}*/

            if(dosenoite=="&minus;"){
                formanoite = "&minus;";
                qtdNoite = 0;
            }


            let quantidadeMensal = (qtdManha + qtdNoite)*30;
            let quantidadeTrimestral = (qtdManha + qtdNoite)*90;


            if(this.arv=="LPV/r-xpe"){
                let qtdMensal_emFrascos = quantidadeMensal/60;
                let qtdTrimestral_emFrascos = quantidadeTrimestral/60;

                /** Dispensa Mensal */
                if(qtdMensal_emFrascos<=1){quantidadeMensal = 1;}
                else if(qtdMensal_emFrascos<=2){quantidadeMensal = 2;}
                else if(qtdMensal_emFrascos<=3){quantidadeMensal = 3;} // So vai ate 19kg, nao mais que 3 Fr.
                 
                /** Dispensa Trimestral */
                if(qtdTrimestral_emFrascos<=3){quantidadeTrimestral = 3;}
                else if(qtdTrimestral_emFrascos<=4){quantidadeTrimestral = 4;}
                else if(qtdTrimestral_emFrascos<=5){quantidadeTrimestral = 5;}
                else if(qtdTrimestral_emFrascos<=6){quantidadeTrimestral = 6;}
                else if(qtdTrimestral_emFrascos<=7){quantidadeTrimestral = 7;}
                else if(qtdTrimestral_emFrascos<=8){quantidadeTrimestral = 8;}
            }

            else if(this.arv=="ctx-susp"){
                let qtdMensal_emFr = quantidadeMensal/100;
                let qtdTrimestral_emFr = quantidadeTrimestral/100;

                /** Dispensa Mensal */
                if(qtdMensal_emFr<=1){quantidadeMensal = 1;}
                else if(qtdMensal_emFr<=2){quantidadeMensal = 2;}
                else if(qtdMensal_emFr<=3){quantidadeMensal = 3;} 

                /** Dispensa Trimestral */

                if(qtdTrimestral_emFr<=3){quantidadeTrimestral = 3;}
                else if(qtdTrimestral_emFr<=4){quantidadeTrimestral = 4;}
                else if(qtdTrimestral_emFr<=5){quantidadeTrimestral = 5;}
                else if(qtdTrimestral_emFr<=7){quantidadeTrimestral = 7;}
                else if(qtdTrimestral_emFr<=9){quantidadeTrimestral = 9;}
            }
            


            doseEposologia.innerHTML = `<output>
            <table>
            <tr><th>Dose manhã</th><th>Dose noite</th></tr>
            <tr><td>${dosemanha}</td><td>${dosenoite}</td></tr>
            <tr><td>${formamanha}</td><td>${formanoite}</td></tr>
            <tr><th colspan="2">Quantidade de ${this.retornarFormulacao}</th></tr>
            <tr><th class="gray">1 mês</th><th class="gray">3 meses</th></tr>
            <tr><td>${quantidadeMensal}</td><td>${quantidadeTrimestral}</td></tr>
            </table>
            </output>
            `;
        }

        this.mostrarAlerta();
        
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
            if(peso<25){dosemanha = "&minus;";}
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
                //dosemanha = "1 + 1/2";
                dosemanha = 1.5;
            }
            else if(peso<20){
                dosemanha = 2;
            }
            else if(peso<25){
                //dosemanha = "2 + 1/2";
                dosemanha = 2.5
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
               /*dosemanha = 0.5;*/
               dosemanha = "1/2";
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
                /*dosemanha = 0.5;*/
                dosemanha = "1/2";
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

        if((this.arv=="ATV/r") || (this.arv.startsWith("ABC")) || (this.arv.startsWith("TDF")) || (this.arv.startsWith("levo")) || (this.arv.includes("DTG")) || (this.arv.includes("ctx")) || (this.arv.includes("isoniazida"))) {
            dosenoite = "&minus;";
        }

        this.mostrarDose(dosemanha, dosenoite);
    }
}

/** Validacao */

function errodePeso(){
	doseEposologia.innerHTML = `<output class='observacao'>Observação: o peso deve ser &ge; 3 e &le; 45.</output>`;
}

function resetarDoseEposologia() {doseEposologia.innerHTML = "";}



function instanciarClasse() {

    let arvSelecionado = arvs.options[arvs.selectedIndex].value;

    if(peso.value != "") {
        if((peso.value < 3) || (peso.value > 45)) {
            errodePeso();
            return false;
        }
        else if(arvSelecionado == "select"){
            resetarDoseEposologia();
        }
        else {
            let dose = new Darv(peso.value, arvs, arvSelecionado);
            dose.calcularDose();
        }
    }
    else {
        resetarDoseEposologia();
    }
}

var peso, arvs, doseEposologia;
function starter(){
    peso = document.getElementById("peso");
    arvs = document.getElementById("arvs");
    doseEposologia = document.getElementById("dose-e-posologia");
    
    // Eventos
    peso.addEventListener("keyup", instanciarClasse);
    peso.addEventListener("mouseup", instanciarClasse);
    arvs.addEventListener("change", instanciarClasse);

}


window.addEventListener("load", starter);