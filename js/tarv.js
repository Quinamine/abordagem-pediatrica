class Tarv{constructor(s,t,a){this.peso=s,this.arvs=t,this.arv=a}get getForma(){let s;return s="LPV/r-xpe"==this.arv||"ctx-susp"==this.arv?"ml":"LPV/r-40-10mg"==this.arv?"saquetas":"cp(s)"}get getFormulacao(){let s;return s="LPV/r-xpe"==this.arv?"frascos de 60 mL":"ctx-susp"==this.arv?"frascos de 100 mL":"LPV/r-40-10mg"==this.arv?"saquetas para":"cp(s) para"}printAlerta(){"ABC"==this.arv||"ABC/3TC-60-30mg"==this.arv||"ABC/3TC-120-60mg"==this.arv?this.peso>=25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[3].textContent}".</span>`):"ABC/3TC-600-300mg"==this.arv?this.peso<25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[2].textContent}" ou "${this.arvs[1].textContent}".</span>`):"LPV/r-40-10mg"==this.arv||"LPV/r-xpe"==this.arv?this.peso>=20&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[7].textContent}" ou "${this.arvs[6].textContent}".</span>`):"ABC/3TC-LPV/r"==this.arv?this.peso>=20&&this.peso<25?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[2].textContent}" e "${this.arvs[6].textContent}" ou "${this.arvs[7].textContent}".</span>`:this.peso>=25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[3].textContent}" e "${this.arvs[7].textContent}" ou "${this.arvs[6].textContent}".</span>`):"LPV/r-100-25mg"==this.arv?this.peso<10?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[5].textContent}" ou "${this.arvs[4].textContent}".</span>`:this.peso>=10&&(output.innerHTML+='<span class="print-alerta">Os comprimidos não devem ser partidos, esmagados ou mastigados, pois a eficácia reduz muito se assim forem manipulados.</span>'):"LPV/r-200-50mg"==this.arv?this.peso<10?output.innerHTML+=`<span class="print-alerta">Ver "${this.arvs[5].textContent}" ou "${this.arvs[4].textContent}".</span>`:this.peso<14&&(output.innerHTML+=`<span class="print-alerta">Ver "${this.arvs[6].textContent}" ou "${this.arvs[4].textContent}".</span>`):"TDF/3TC/DTG"==this.arv?this.peso<30&&(output.innerHTML+=`<span class="print-alerta">A Dose Fixa Combinada de "${this.arvs[9].textContent}" está indicada apenas para crianças com peso &ge; 30kg.</span>`):"DTG-10mg"==this.arv?this.peso>=20&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[11].textContent}".</span>`):"DTG-50mg"==this.arv?this.peso<20&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[10].textContent}".</span>`):"Duovir-ped"==this.arv?this.peso>=25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[13].textContent}".</span>`):"Duovir-adult"==this.arv?this.peso<14&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[12].textContent}".</span>`):"DuovirN-ped"==this.arv?this.peso>=25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[15].textContent}".</span>`):"DuovirN-adult"==this.arv?this.peso<14&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[14].textContent}".</span>`):"TDF/3TC"==this.arv?this.peso<35&&(output.innerHTML+=`<span class="print-alerta">A Dose Fixa Combinada (DFC) de "${this.arvs[16].textContent}" só deve ser administrada em crianças com peso &ge; 35 kg. Constitui o fármaco de eleição para Profilaxia Pré-Exposição (PrEP).</span>`):"TDF/3TC/EFV"==this.arv?this.peso<35&&(output.innerHTML+=`<span class="print-alerta">O "${this.arvs[17].textContent}" só deve ser administrado em crianças com peso &ge; 35kg.</span>`):"ATV/r"==this.arv?this.peso<25?output.innerHTML+=`<span class="print-alerta">O "${this.arvs[19].textContent}" só deve ser administrado em crianças com peso &ge; 25 kg.</span>`:output.innerHTML+='<span class="print-alerta">Nota: Pacientes que estiverem a usar a Rifampicina devem substituir o "ATV/r" por "DTG" e ajustar a dose de "DTG (DTG 12/12 horas)" durante o tempo que recebem RIF e por mais 2 semanas. Depois mantêm o "DTG" e passam a tomar apenas 1 vez/dia.</span>':"RAL-25"==this.arv?this.peso>=25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[21].textContent}".</span>`):"RAL-400"==this.arv?this.peso<25&&(output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[20].textContent}".</span>`):"RTV-25"==this.arv||"RTV-100"==this.arv?this.peso<10?output.innerHTML+='<span class="print-alerta">Recomendado para crianças co-infectadas (TB/HIV) com peso &ge; 10 kg em uso de "LPV/r" para potenciação durante o tratamento da TB.</span>':"RTV-25"==this.arv?this.peso>=25?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[23].textContent}".</span>`:output.innerHTML+='<span class="print-alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</span>':"RTV-100"==this.arv&&(output.innerHTML+='<span class="print-alerta">O "RTV isolado" deve ser usado para fazer a potenciação em crianças em uso de "LPV/r" com TB/HIV sensivel. Recomendado para crianças com peso &ge; 10kg, que sejam capazes de deglutir inteiro. Não pode ser quebrado, esmagado nem dissolvido em liquidos ou alimentos.</span>'):"ctx-cp"==this.arv?output.innerHTML+="<span class=\"print-alerta\">Para ver critérios de TPC, <a href='../pages/diversos.html#profilaxia_contra_ios' id='link-de-redirecionamento'>clique aqui</a>.</span>":"ctx-susp"==this.arv?this.peso>=20?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[24].textContent}".</span>`:output.innerHTML+="<span class=\"print-alerta\">Para ver critérios de TPC, <a href='../pages/diversos.html#profilaxia_contra_ios' id='link-de-redirecionamento'>clique aqui</a>.</span>":"isoniazida-300"==this.arv?this.peso<25?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[26].textContent}".</span>`:output.innerHTML+="<span class=\"print-alerta\">Para ver critérios de TPI, <a href='../pages/diversos.html#profilaxia_contra_tb' id='link-de-redirecionamento'>clique aqui</a>.</span>":"isoniazidacem"==this.arv?output.innerHTML+="<span class=\"print-alerta\">Para ver critérios de TPI, <a href='../pages/diversos.html#profilaxia_contra_tb' id='link-de-redirecionamento'>clique aqui</a>.</span>":"levofloxacina100"==this.arv?this.peso>=26?output.innerHTML+=`<span class="print-alerta ">Ver "${this.arvs[29].textContent}".</span>`:output.innerHTML+='<span class="print-alerta">Nota: Se o caso fonte de TB-MR tiver resistência comprovada a Fluroquinolonas, o TPT com Levofloxacina não deve ser oferecido.</span>':"levofloxacina250"==this.arv?this.peso<4?output.innerHTML+=`<span class="print-alerta">Ver "${this.arvs[28].textContent}".</span>`:output.innerHTML+='<span class="print-alerta">Nota: Se o caso fonte de TB-MR tiver resistência comprovada a Fluroquinolonas, o TPT com Levofloxacina não deve ser oferecido.</span>':"piridoxina-50"==this.arv&&this.peso<5&&(output.innerHTML=`<span class="print-alerta">Não aplicável (N/A). Ver "${this.arvs[30].textContent}".</span>`)}printDose(s,t){if(this.arv.includes("piridoxina"))output.innerHTML=`<span class="print-dose">Tomar: ${s}.</span>`;else if("&minus;"==s&&"&minus;"==t||"N/A"==s)output.innerHTML=`<table><tr><th>Dose manhã</th><th>Dose noite</th></tr>\n            <tr><td>${s}</td><td>${t}</td></tr>\n            </table>`;else{let a=this.getForma,e=this.getForma,i=s,r=t;"&minus;"==s?(a="&minus;",i=0):"1/4"==s?i=.25:"1/2"==s?i=.5:"1 + 1/2"==s?i=1.5:"2 + 1/2"==s&&(i=2.5),"&minus;"==t&&(e="&minus;",r=0);let n=30*(i+r),o=90*(i+r);if("LPV/r-xpe"==this.arv){let s=n/60,t=o/60;s<=1?n=1:s<=2?n=2:s<=3&&(n=3),t<=3?o=3:t<=4?o=4:t<=5?o=5:t<=6?o=6:t<=7?o=7:t<=8&&(o=8)}else if("ctx-susp"==this.arv){let s=n/100,t=o/100;s<=1?n=1:s<=2?n=2:s<=3&&(n=3),t<=3?o=3:t<=4?o=4:t<=5?o=5:t<=7?o=7:t<=9&&(o=9)}output.innerHTML=`<table>\n            <tr><th>Dose manhã</th><th>Dose noite</th></tr>\n            <tr><td>${s}</td><td>${t}</td></tr>\n            <tr><td>${a}</td><td>${e}</td></tr>\n            <tr><th colspan="2">Quantidade de ${this.getFormulacao}</th></tr>\n            <tr><th class="gray">1 mês</th><th class="gray">3 meses</th></tr>\n            <tr><td>${n}</td><td>${o}</td></tr>\n\n            </table>`}this.printAlerta()}calcularDose(){let s,t,a=this.peso;if("ABC"==this.arv||"ABC/3TC-60-30mg"==this.arv)s=a<6?2:a<10?3:a<14?4:a<20?5:a<25?6:"&minus;";else if("ABC/3TC-120-60mg"==this.arv)s=a<6?1:a<10?1.5:a<14?2:a<20?2.5:a<25?3:"&minus;";else if("ABC/3TC-600-300mg"==this.arv)a<25?s="&minus;":a>=25&&(s=1);else if("LPV/r-40-10mg"==this.arv)a<6?(s=2,t=2):a<10?(s=3,t=3):a<14?(s=4,t=4):a<20?(s=5,t=5):(s="&minus;",t="&minus;");else if("LPV/r-xpe"==this.arv)a<4?(s=1,t=1):a<10?(s=1.5,t=1.5):a<14?(s=2,t=2):a<20?(s=2.5,t=2.5):(s="&minus;",t="&minus;");else if("LPV/r-100-25mg"==this.arv)a<10?(s="&minus;",t="&minus;"):a<14?(s=2,t=1):a<25?(s=2,t=2):(s=3,t=3);else if("LPV/r-200-50mg"==this.arv)a<14?(s="&minus;",t="&minus;"):a<25?(s=1,t=1):a<30?(s=2,t=1):(s=2,t=2);else if("ABC/3TC-LPV/r"==this.arv)a<6?(s=2,t=2):a<10?(s=3,t=3):a<14?(s=4,t=4):a<20?(s=5,t=5):a>=20&&(s="&minus;",t="&minus;");else if("TDF/3TC/DTG"==this.arv)s=a<30?"&minus;":1;else if("DTG-10mg"==this.arv)s=a<6?1:a<10?1.5:a<14?2:a<20?2.5:"&minus;";else if("DTG-50mg"==this.arv)s=a<20?"&minus;":1;else if("Duovir-ped"==this.arv||"DuovirN-ped"==this.arv)a<6?(s=1,t=1):a<10?(s=1.5,t=1.5):a<14?(s=2,t=2):a<20?(s=2.5,t=2.5):a<25?(s=3,t=3):(s="&minus;",t="&minus;");else if("Duovir-adult"==this.arv||"DuovirN-adult"==this.arv)a<14?(s="&minus;",t="&minus;"):a<25?(s=1,t=.5):(s=1,t=1);else if("TDF/3TC"==this.arv||"TDF/3TC/EFV"==this.arv)s=a<35?"&minus;":1;else if("EFV"==this.arv)t=a<10?"&minus;":a<14?1:a<25?1.5:2,s="&minus;";else if("ATV/r"==this.arv)s=a<25?"&minus;":1;else if("RAL-25"==this.arv)a<6?(s=1,t=1):a<10?(s=2,t=2):a<14?(s=3,t=3):a<20?(s=4,t=4):a<25?(s=6,t=6):(s="&minus;",t="&minus;");else if("RAL-400"==this.arv)a<25?(s="&minus;",t="&minus;"):(s=1,t=1);else if("RTV-25"==this.arv)a<10?(s="&minus;",t="&minus;"):a<14?(s=4,t=4):a<25?(s=6,t=6):(s="&minus;",t="&minus;");else if("RTV-100"==this.arv)a<10?(s="&minus;",t="&minus;"):a<14?(s=1,t=1):a<25?(s=1,t=2):a<30?(s=2,t=2):(s=3,t=3);else if("ctx-cp"==this.arv)s=a<7?"1/4":a<10?"1/2":a<20?1:2;else if("ctx-susp"==this.arv)s=a<7?2.5:a<10?5:a<15?7.5:a<20?10:"N/A";else if("isoniazidacem"==this.arv)s=a<5?"1/2":a<10?1:a<14?"1 + 1/2":a<20?2:a<25?"2 + 1/2":3;else if("isoniazida-300"==this.arv)s=a<25?"&minus;":1;else if("levofloxacina100"==this.arv)s=a<4?.5:a<7?1:a<10?1.5:a<13?2:a<16?3:a<19?3.5:a<21?4:a<24?4.5:a<26?5:"&minus;";else if("levofloxacina250"==this.arv)s=a<4?"&minus;":a<10?.5:a<16?1:a<21?1.5:a<26?2:a<45?3:4;else if("piridoxina-25"==this.arv)s=a<5?"1/2 cp 3&times;/semana":a<8?"1/2 cp/dia":a<15?"1 cp/dia":"2 cps/dia";else if("piridoxina-50"==this.arv){if(a<5)return this.printAlerta(),!1;s=a<15?"1/2 cp 3&times;/semana":"1 cp/dia"}("ATV/r"==this.arv||this.arv.startsWith("ABC")||this.arv.startsWith("TDF")||this.arv.startsWith("levo")||this.arv.includes("DTG")||this.arv.includes("ctx")||this.arv.includes("isoniazida"))&&(t="&minus;"),this.printDose(s,t)}}function classObject(){if(""!=peso.value){if(peso.value<3||peso.value>45)return output.innerHTML="<span class='print-error'>Observação: o peso deve ser &ge; 3 e &le; 45.</span>",!1;{let s=arvs.options[arvs.selectedIndex].value;new Tarv(peso.value,arvs,s).calcularDose()}}else output.innerHTML=""}var peso,arvs,output;function starter(){peso=document.getElementById("peso"),arvs=document.getElementById("arvs"),output=document.getElementsByClassName("resultado")[0],peso.addEventListener("keyup",classObject),peso.addEventListener("mouseup",classObject),arvs.addEventListener("change",classObject)}window.addEventListener("load",starter);