class Dosecomp{constructor(a,e,o,s,i){this.farmaco=a,this.doseporkg=e,this.dosagem=o,this.posologia=s,this.peso=i}get retornarPosologia(){let a;return a="1"==this.posologia?"dose única diária":"2"==this.posologia?"de 12 em 12 horas":"de 8 em 8 horas"}mostrarAlerta(){"diclofenac"==this.farmaco&&(doseEposologia.innerHTML+="<output class='alerta'>É recomendável tomar com alimentos para diminuir os efeitos irritantes gastrointestinais.</output>",doseEposologia.innerHTML+="<output class='alerta destacar'>Não está estabelecida a segurança em crianças menores de 2 anos.</output>")}mostrarDose(a,e){let o=this.dosagem;4==o?a=a<=1?"1/4":a<=2?"1/2":a<=3?"3/4":"1":30==o?a<=7.5?a="1/4":a<=15?a="1/2":a<=22.5?a="3/4":(a<=30||a>30)&&(a=1):50==o?a=a<13?"1/4":a<26?"1/2":a<38?"3/4":1:100==o?a=a<=25?"1/4":a<=50?"1/2":a<=75?"3/4":1:200==o?a=a<=50?"1/4":a<=100?"1/2":a<=150?"1/3":1:250==o?a=a<=63?"1/4":a<=125?"1/2":a<=188?"3/4":a<=263?1:a<=313?"(1 + 1/4)":a<=376?"(1 + 1/2)":a<=439?"(1 + 3/4)":2:375==o?a=a<=94?"1/4":a<=188?"1/2":a<=282?"3/4":1:500==o&&(a=a<=125?"1/4":a<=250?"1/2":a<=375?"3/4":1),"paracetamol-sup"==this.farmaco?doseEposologia.innerHTML=`<output>Introduzir no recto: ${a} sup. ${e}.</output>`:doseEposologia.innerHTML=`<output>Tomar: ${a} cp(s) ${e}.</output>`,this.mostrarAlerta()}calcularDose(){let a=this.doseporkg*this.peso/this.posologia;"fluconazol"!=this.farmaco&&"ketoconazol"!=this.farmaco||a>=200&&(a=200),"cefuroxima"==this.farmaco&&a>=250&&(a=250),this.mostrarDose(a,this.retornarPosologia)}}class Dosesusp extends Dosecomp{constructor(a){super(farmaco,doseporkg,dosagem,posologia,peso.value),this.diluicao=a}mostrarDose(a,e){"nistatina"==this.farmaco?doseEposologia.innerHTML="<output>Espalhar pela boca: 1 ml de 8 em 8 horas.</output>":doseEposologia.innerHTML=`<output>Tomar: ${a} ml ${e}.</output>`}calcularDose(){let a=this.doseporkg*this.peso/this.posologia;if("metoclopramida-susp"==this.farmaco){let e=this.peso;e<10?(a=1,this.posologia=2):a=e<=14?1:e<=19?2:e<=29?2.5:e<=34?5:10}else"cefuroxima-susp"==this.farmaco?a>250&&(a=250):"clorfeniramina-susp"==this.farmaco?a>=4&&(a=4):"clavamox-susp"==this.farmaco?a>=625&&(a=625):a>=500&&(a=500);let e=a*this.diluicao/this.dosagem;this.mostrarDose(e.toFixed(1),this.retornarPosologia)}}class Dosepadrao{constructor(a,e,o,s,i,t){this.farmaco=a,this.formafarmaceutica=e,this.posologia=o,this.idade=s,this.tipoidade=i,this.peso=t}get retornarPosologia(){let a,e=this.farmaco;return"al"==e?a="de 12 em 12 horas durante 3 dias":e.startsWith("albendazol")?a="dose única":"salbutamol-neb"==e?a="de 4 em 4 horas (SOS)":"retinol"==e?a="nos dias 0, 1 e 14":"vitamina-c"==e?a="de 12 em 12 horas na 1ª semana e depois 1 cp(s) por dia durante várias semanas para o tratamento de escorbuto":3==this.posologia?a="de 8 em 8 horas":2==this.posologia?a="de 12 em 12 horas":1==this.posologia&&(a="dose única diária"),a}get retornarFormafarmaceutica(){let a,e=this.farmaco;return a="retinol"==e?"U.I":"paracetamol-sup"==e?"sup.":"susp"==this.formafarmaceutica||"aerossol"==this.formafarmaceutica?"ml":"cp(s)"}preencherIdade(){doseEposologia.innerHTML="<output class='observacao'>O campo de idade precisa ser preenchido.</output>"}preencherPeso(){doseEposologia.innerHTML="<output class='observacao'>O campo de peso precisa ser preenchido.</output>"}considerCtzTablets(){doseEposologia.innerHTML="<output class='observacao'>Considere a forma em comprimido.</output>"}considerMetoclopramidaSusp(){doseEposologia.innerHTML="<output class='observacao'>Considere metoclopramida em suspensão para dose mais exata e segura.</output>"}verLactulose(){doseEposologia.innerHTML="<output class='observacao'>Considere outro laxante (exemplo: lactulose).</output>"}especificarMeses(){doseEposologia.innerHTML="<output class='observacao'>Especifique os meses.</output>"}naoRecomendado(){doseEposologia.innerHTML=`<output class='observacao'>Não recomendado. \n\t\t${"al"==this.farmaco?"Tratar como malária grave.":""}</output>`}contraIndicado(){doseEposologia.innerHTML="<output class='observacao'>Contraindicado.</output>"}mostrarAlerta(){this.farmaco.startsWith("albendazol")?"m"==this.tipoidade&&(this.idade<6?doseEposologia.innerHTML="<output class='observacao'>Nas crianças &lt; 1 ano de idade a sua segurança não está estabelecida.</output>":this.idade<12&&(doseEposologia.innerHTML+="<output class='alerta destacar'>Observação: nas crianças &lt; 1 ano de idade a sua segurança não está estabelecida.</output>")):"retinol"==this.farmaco?(doseEposologia.innerHTML+="<output class='alerta'>\n\t\t\tDia 0: na altura do diagnóstico;</br>\n\t\t\tDia 1: no dia seguinte ao do diagnóstico;</br>\n\t\t\tDia 14: duas semanas mais tarde.</output>",doseEposologia.innerHTML+="<output class='alerta'> A dose acima é para o tratamento da hipovitaminose A (todos graus de xeroftalmia, casos de sarampo e pós-sarampo, kwashiorkor grave,  diarreia de repetição, infecções respiratórias de repetição e de evolução prolongada).\n\t\t\t <a href='profilaxias/prevencao-da-hipovitaminose-a.html'> <span class='destacar'>Para ver doses profiláticas, clique aqui.</a></span></output>"):"vitamina-c"==this.farmaco?doseEposologia.innerHTML+="<output class='alerta'>A ingestão de 90 à 120 ml por dia de sumos de fruta pode curar o escorbuto.</output>":"paracetamol-sup"==this.farmaco?doseEposologia.innerHTML+="<output class='alerta'>Por via rectal é menos activo e o tratamento mais caro do que por via oral pelo que os supositórios só devem ser usados quando a via oral não é possível.</output>":"bisacodil"==this.farmaco&&(doseEposologia.innerHTML+="<output class='alerta'>Geralmente o efeito é obtido 10 à 12 horas após a administração.</output>")}mostrarDose(a,e){"salbutamol-neb"==this.farmaco?doseEposologia.innerHTML=`<output>Inalar por nebulização: ${a} diluido(s) em 4 ml de soro fisiológico ${e}.</output>`:"paracetamol-sup"==this.farmaco?doseEposologia.innerHTML=`<output>Introduzir no recto: ${a} ${e}.</output>`:doseEposologia.innerHTML=`<output>Tomar: ${a} ${e}.</output>`,this.mostrarAlerta()}calcularDose(){let a,e=this.peso,o=this.idade,s=this.farmaco;if(""!=e)if("al"==s){if(e<5)return this.naoRecomendado(),!1;e<15?a=1:e<25?a=2:e<35?a=3:e>=35&&(a=4)}else if("quinina"==s)e<10?a="1/4":e<=15?a="1/2":e<=25?a="3/4":e<=35?a=1:e>35&&(a=2);else if("metoclopramida-cp"==s){if(e<=19)return this.considerMetoclopramidaSusp(),!1;a=e<=29?"1/4":e<=34?"1/2":1}else if("paracetamol-cp"==s){if(""==o)return this.preencherIdade(),!1;if("m"==this.tipoidade){let e=this.idade;e<12?a="1/4":e<=60?a="1/2":e>60&&(a=1)}else if("y"==this.tipoidade){let e=this.idade;if(e<1)return this.especificarMeses(),!1;e<=5?a="1/2":e>5&&(a=1)}}else if("paracetamol-sup"==s){if(""==o)return this.preencherIdade(),!1;if("m"==this.tipoidade){let e=this.idade;e<12?a="1/2":e<=60?a=1:e>60&&(a=2)}else if("y"==this.tipoidade){let e=this.idade;if(e<1)return this.especificarMeses(),!1;e<=5?a=1:e>5&&(a=2)}}else if("codeina"==s){if(""==o)return this.preencherIdade(),!1;if("m"==this.tipoidade){return this.idade<12?(this.contraIndicado(),!1):((a=new Dosecomp(s,doseporkg,dosagem,posologia,this.peso)).calcularDose(),!1)}if("y"==this.tipoidade){return this.idade<1?(this.contraIndicado(),!1):((a=new Dosecomp(s,doseporkg,dosagem,posologia,this.peso)).calcularDose(),!1)}}else if("codeina-susp"==s){if(""==o)return this.preencherIdade(),!1;if("m"==this.tipoidade){return this.idade<12?(this.contraIndicado(),!1):((a=new Dosesusp(diluicao)).calcularDose(),!1)}if("y"==this.tipoidade){return this.idade<1?(this.contraIndicado(),!1):((a=new Dosesusp(diluicao)).calcularDose(),!1)}}else"mebendazol-100"==s?e<20?a="1/2":e>=20&&(a=1):"salbutamol-neb"==s?(a=(.03*e).toFixed(1))>1&&(a="1.0"):"vitamina-c"==s&&(a=1);else if(""!=o)if("vitamina-c"==s)a=1;else if("m"==this.tipoidade){let e=this.idade;if("al"==s){if(e<12)return this.naoRecomendado(),!1;e<=60?a=1:e<=96?a=2:e<=144?a=3:e>144&&(a=4)}else if("quinina"==s)e<12?a="1/4":e<=60?a="1/2":e<=96?a="3/4":e<=144?a=1:e>144&&(a=2);else if("paracetamol-cp"==s){if(e<3)return this.preencherPeso(),!1;e<12?a="1/4":e<=60?a="1/2":e>60&&(a=1)}else if("paracetamol-sup"==s){if(e<3)return this.preencherPeso(),!1;e<12?a="1/2":e<=60?a=1:e>60&&(a=2)}else{if("codeina"==s)return e<12?(this.contraIndicado(),!1):(this.preencherPeso(),!1);if("codeina-susp"==s)return e<12?(this.contraIndicado(),!1):(this.preencherPeso(),!1);if("buscopam"==s)e<=3?a="1/4":e<36?a="1/2":(e<=144||e>144)&&(a=1);else if("metoclopramida-cp"==s){if(e<60)return this.considerMetoclopramidaSusp(),!1;a=e<108?"1/4":e<=168?"1/2":1}else if("albendazol-200"==s||"albendazol-400"==s)e<24?a="albendazol-200"==s?1:"1/2":e>=24&&(a="albendazol-200"==s?2:1);else if("aciclovir"==s)e<=1?a="1/4":e<24?a="1/2":e>=24&&(a=1);else if("ctz-cp"==s)e<=5?a="1/4":e<=60?a="1/2":e<=144?a=1:e>144&&(a=2);else if("ctz-susp"==s){if(e<=5)a=2.5;else if(e<=60)a=5;else if(e<=144)a=10;else if(e>144)return this.considerCtzTablets(),!1}else if("bisacodil"==s){if(e<48)return this.verLactulose(),!1;e<=120?a=1:e>120&&(a="1 ou 2 (SOS)")}else if("lactulose"==s)a=e<12?2.5:e<=60?5:e<=144?10:e<=216?15:20;else if("parafina_liquida"==s){if(e<36)return this.contraIndicado(),!1;a=e<=60?10:e<=144?15:20}else"salbutamol-susp"==s?e<=72?a=2.5:e<=144?a=5:e>144&&(a=10):"salbutamol-cp"==s?e<=72?a="1/2":e<=144?a=1:e>144&&(a=2):"sulfato-ferroso"==s?e<12?a="1/4":e<=60?a=1:(a=1,this.posologia=2):"retinol"==s?a=(a=e<6?5e4:e<=12?1e5:2e5).toLocaleString():"multivitaminas-susp"==s&&(e<=12?(a=5,this.posologia=1):a=5)}}else if("y"==this.tipoidade){let e=this.idade;if("al"==s){if(e<1)return this.especificarMeses(),!1;e<=5?a=1:e<=8?a=2:e<=12?a=3:e>12&&(a=4)}if("quinina"==s)e<1?a="1/4":e<=5?a="1/2":e<=8?a="3/4":e<=12?a=1:e>12&&(a=2);else if("paracetamol-cp"==s){if(e<1)return this.especificarMeses(),!1;e<=5?a="1/2":e>5&&(a=1)}else if("paracetamol-sup"==s){if(e<1)return this.especificarMeses(),!1;e<=5?a=1:e>5&&(a=2)}else{if("codeina"==s)return e<1?(this.contraIndicado(),!1):(this.preencherPeso(),!1);if("codeina-susp"==s)return e<1?(this.contraIndicado(),!1):(this.preencherPeso(),!1);if("buscopam"==s){if(e<1)return this.especificarMeses(),!1;e<3?a="1/2":(e<=12||e>12)&&(a=1)}else if("metoclopramida-cp"==s){if(e<5)return this.considerMetoclopramidaSusp(),!1;a=e<9?"1/4":e<=14?"1/2":1}else if("albendazol-200"==s||"albendazol-400"==s)e<2?a="albendazol-200"==s?1:"1/2":e>=2&&(a="albendazol-200"==s?2:1);else if("aciclovir"==s)e<2?a="1/2":e>=2&&(a=1);else if("ctz-cp"==s){if(e<1)return this.especificarMeses(),!1;e<=5?a="1/2":e<=12?a=1:e>12&&(a=2)}else if("ctz-susp"==s){if(e<1)return this.especificarMeses(),!1;if(e<=5)a=5;else if(e<=12)a=10;else if(e>12)return this.considerCtzTablets(),!1}else if("bisacodil"==s){if(e<4)return this.verLactulose(),!1;e<=10?a=1:e>10&&(a="1 ou 2 (SOS)")}else if("lactulose"==s)a=e<1?2.5:e<=5?5:e<=12?10:e<=18?15:20;else if("parafina_liquida"==s){if(e<3)return this.contraIndicado(),!1;a=e<=5?10:e<=12?15:20}else if("salbutamol-susp"==s)e<=6?a=2.5:e<=12?a=5:e>12&&(a=10);else if("salbutamol-cp"==s)e<=6?a="1/2":e<=12?a=1:e>12&&(a=2);else{if("salbutamol-neb"==s)return this.preencherPeso(),!1;if("sulfato-ferroso"==s)e<1?a="1/4":e<=5?a=1:(a=1,this.posologia=2);else if("retinol"==s){if(e<1)return this.especificarMeses(),!1;a=(a=2e5).toLocaleString()}else"multivitaminas-susp"==s&&(e<=11?(a=5,this.posologia=1):a=5)}}}this.mostrarDose(`${a} ${this.retornarFormafarmaceutica}`,this.retornarPosologia)}}class Doseparenteral extends Dosepadrao{constructor(a,e,o){super(farmaco,formafarmaceutica,posologia,idade.value,tipoidade.value,peso.value),this.doseporkg=a,this.dosagem=e,this.diluicao=o}get retornarPosologia(){let a;return"benzatina"==this.farmaco?a=" dose única na sífilis recente (primária, secundária e latente precoce) ou uma dose por semana durante 3 semanas na sífilis tardia (latente tardia e terciária).":1==this.posologia?(a=" dose única diária.","vitamina-b12"==this.farmaco&&(a=" 3 vezes por semana (em dias alternados) durante 2 semanas."),"var"==this.farmaco&&(a=" nos dias 0, 3, 7, 14, 30 e 90."),"aminofilina-inj"!=this.farmaco&&"diazepam-inj"!=this.farmaco||(a=".")):2==this.posologia?a=" de 12 em 12 horas.":3==this.posologia&&(a=" de 8 em 8 horas."),a}get retornarFormafarmaceutica(){let a;return a="var"==this.farmaco?"ml":"benzatina"==this.farmaco||"procaina"==this.farmaco||"igar"==this.farmaco?"U.I":"mg"}get retornarVia(){let a;return"inj-im"==this.formafarmaceutica?(a="I.M profunda","var"==this.farmaco&&(a="I.M no músculo deltóide")):"inj-ev"==this.formafarmaceutica&&(a="diazepam-inj"==this.farmaco?"E.V lento":"aminofilina-inj"==this.farmaco?"E.V lentamente durante 20 à 30 minutos":"E.V"),a}mostrarAlerta(){if("benzatina"==this.farmaco||"procaina"==this.farmaco)doseEposologia.innerHTML+="<output class='observacao'>Nunca administrar por via endovenosa ou subcutânea.</output>";else if("ceftriaxona"==this.farmaco){let a=this.doseporkg*this.peso;a>1e3&&(a=1e3);let e=10*a/1e3;doseEposologia.innerHTML+=`<output class='alerta'>Para administração endovenosa, diluir 1 g de ceftriaxona em pó em 10 ml de água esterilizada para injecções e neste caso administrar: <span class="destacar">${e} ml durante 2 à 4 minutos</span>.</output>`,doseEposologia.innerHTML+="<output class='observacao'>Para administração endovenosa, nunca usar o diluente que acompanha as ampolas para uso intramuscular.</output>"}else if("vitamina-b12"==this.farmaco)doseEposologia.innerHTML+="<output class='alerta'>Antes de decidir administrar a vitamina B12, procurar sempre esclarecer a causa da anemia megaloblástica e corrigí-la se possivel. Se a causa não for corrigível, administrar uma dose de manutenção de 1 mg a cada 3 meses.</output>";else if("aminofilina-inj"==this.farmaco)doseEposologia.innerHTML+="<output class='observacao'>A administração rápida pode provocar convulsões, arritmias cardíacas, hipotensão arterial e hemorragia digestiva.</output>";else if("var"==this.farmaco)doseEposologia.innerHTML+="<output class='alerta'>\n\t\t\tDia 0: no primeiro contacto pós-exposição;</br>\n\t\t\tDias 3, 7, 14, 30: após a primeira dose;</br>\n\t\t\tDia 90: noventa dias após o contacto suspeito (a partir do dia em que ocorreu a mordedura ou arranhadura). Esta última é facultativa (pode ou não ser administrada).</output>",doseEposologia.innerHTML+='<output class="alerta">Num indivíduo anteriormente vacinado adequadamente, dar apenas 2 doses de reforço nos dias 0 e 3.</output>',doseEposologia.innerHTML+='<output class="alerta">Devido à deficiente resposta imunitária, evitar a injecção na região nadegueira. Administrar sempre na região deltóideia ou nas crianças mais pequenas na face antero-lateral da coxa.</output>';else if("diazepam-inj"==this.farmaco){let a=(.5*this.peso*this.diluicao/this.dosagem).toFixed(1);a>2&&(a="2.0"),doseEposologia.innerHTML+=`<output class='alerta'>Se não tiver acesso venoso, <span class='destacar'>administrar \n\t\t\t\t${a} ml por via rectal.</span> De referir que esta dose é de diazepam como anti-convulsivante.</output>`}}mostrarDose(a,e,o,s,i){"U.I"==this.retornarFormafarmaceutica&&"igar"!=this.farmaco&&(o=""),"igar"==this.farmaco?doseEposologia.innerHTML=`<output>Injectar ${a} ${e} ${o}\n\t\t\tpor via ${i} e infiltrar ${a} ${e} ${o} à volta da zona da mordedura.</output>`:doseEposologia.innerHTML=`<output>Administrar: ${a} ${e} ${o} por via ${i}${s}</output>`,this.mostrarAlerta()}calcularDose(){let a=this.peso,e=this.idade,o=this.doseporkg*a,s=((o="ceftriaxona"==this.farmaco||"paracetamol-inj"==this.farmaco||"aminofilina-inj"==this.farmaco||"prednisolona-inj"==this.farmaco?o.toFixed(0):"benzatina"==this.farmaco||"procaina"==this.farmaco?o.toLocaleString():o.toFixed(1))*this.diluicao/this.dosagem).toFixed(1);if("ceftriaxona"==this.farmaco)o>1e3&&s>4&&(o=1e3,s="4.0");else if("diazepam-inj"==this.farmaco)o>=10&&(o=10),s>2&&(s="2.0");else if("vitamina-b12"==this.farmaco)o=1,s=1;else if(""!=a)if("metoclopramida-inj"==this.farmaco)a<10?(o=1,this.posologia=2):o=a<=14?1:a<=19?2:a<=29?2.5:5,s=(o*this.diluicao/this.dosagem).toFixed(1);else if("procaina"==this.farmaco){if(""==e)return this.preencherIdade(),!1;if("m"==this.tipoidade){let s=e;s<144?(o=this.doseporkg*a)>=12e5&&(o=12e5):s<=168&&(o=12e5)}else if("y"==this.tipoidade){let s=e;s<12?(o=this.doseporkg*a)>=12e5&&(o=12e5):s<=14&&(o=12e5)}o=o.toLocaleString()}else"igar"==this.farmaco&&(s=((o=(this.doseporkg*a/2).toFixed(0))*this.diluicao/this.dosagem).toFixed(1));else if(""!=e)if("var"==this.farmaco)o="1";else if("m"==this.tipoidade){let a=e;if("metoclopramida-inj"==this.farmaco)a<12?(o=1,this.posologia=2):o=a<36?1:a<60?2:a<108?2.5:a<=168?5:10,s=(o*this.diluicao/this.dosagem).toFixed(1);else if("procaina"==this.farmaco){if(a<144)return this.preencherPeso(),!1;o=(o=12e5).toLocaleString()}}else if("y"==this.tipoidade){let a=e;if("metoclopramida-inj"==this.farmaco)a<1?(o=1,this.posologia=2):a<3?o=1:a<5?o=2:a<9?o=2.5:a<=15?o=5:dose=10,s=(o*this.diluicao/this.dosagem).toFixed(1);else if("procaina"==this.farmaco){if(a<12)return this.preencherPeso(),!1;o=(o=12e5).toLocaleString()}}s=`(${s} ml)`,"benzatina"!=this.farmaco&&"procaina"!=this.farmaco&&"var"!=this.farmaco||(s=""),this.mostrarDose(o,this.retornarFormafarmaceutica,s,this.retornarPosologia,this.retornarVia)}}function preencherPeso(){doseEposologia.innerHTML="<output class='observacao'>O campo de peso precisa ser preenchido.</output>"}function errodePeso(){doseEposologia.innerHTML="<output class='observacao'>Observação: o peso deve ser &ge; 3 e &le; 45.</output>"}function errodeIdade(a){doseEposologia.innerHTML=`<output class='observacao'>Observação: a idade deve ser &ge; 1 mês e &le;  ${a}. <output>`}function resetarDoseEposologia(){doseEposologia.innerHTML=""}function omitirCampo(){let a=farmacos.options[farmacos.selectedIndex].dataset.camporequired,e=document.querySelector(".ancestral-de-idade"),o=document.querySelector(".ancestral-de-peso");if("idade"==a)peso.value="",o.classList.add("hide"),e.classList.remove("hide");else if("peso"==a)idade.value="",e.classList.add("hide"),o.classList.remove("hide");else if(e.classList.remove("hide"),o.classList.remove("hide"),""!=idade.value)if("m"==tipoidade.value){let a=idade.value;"procaina"==farmaco?a>=144?(peso.value="",o.classList.add("hide")):a<144&&o.classList.remove("hide"):"codeina"!=farmaco&&"codeina-susp"!=farmaco||(a<12?(peso.value="",o.classList.add("hide")):o.classList.remove("hide"))}else if("y"==tipoidade.value){let a=idade.value;"procaina"==farmaco?a>=12?(peso.value="",o.classList.add("hide")):a<12&&o.classList.remove("hide"):"codeina"!=farmaco&&"codeina-susp"!=farmaco||(a<1?(peso.value="",o.classList.add("hide")):o.classList.remove("hide"))}}let farmaco,dosagem,diluicao,formafarmaceutica,doseporkg,posologia,idade,tipoidade,peso,farmacos,doseEposologia;function instanciarClasse(){omitirCampo(),farmaco=farmacos.options[farmacos.selectedIndex].value,dosagem=farmacos.options[farmacos.selectedIndex].dataset.dos,diluicao=farmacos.options[farmacos.selectedIndex].dataset.dil,formafarmaceutica=farmacos.options[farmacos.selectedIndex].dataset.forma,doseporkg=farmacos.options[farmacos.selectedIndex].dataset.doseporkg,posologia=farmacos.options[farmacos.selectedIndex].dataset.pos;let a=farmacos.options[farmacos.selectedIndex].dataset.tipodose;if(""!=peso.value){if(peso.value<3||peso.value>45)return errodePeso(),!1;if("dosecomp"==a){new Dosecomp(farmaco,doseporkg,dosagem,posologia,peso.value).calcularDose()}else if("dosesusp"==a){new Dosesusp(diluicao).calcularDose()}else if("padrao"==a){new Dosepadrao(farmaco,formafarmaceutica,posologia,idade.value,tipoidade.value,peso.value).calcularDose()}else if("parenteral"==a){new Doseparenteral(doseporkg,dosagem,diluicao).calcularDose()}else resetarDoseEposologia()}else if(""!=idade.value){if("m"==tipoidade.value){let a=idade.value;if(a<1||a>168)return errodeIdade("168 meses"),!1}else if("y"==tipoidade.value){if(idade.value>14)return errodeIdade("14 anos"),!1}if("dosecomp"==a){new Dosecomp(farmaco,doseporkg,dosagem,posologia,peso.value).calcularDose()}else if("dosesusp"==a){new Dosesusp(diluicao).calcularDose()}else if("padrao"==a){new Dosepadrao(farmaco,formafarmaceutica,posologia,idade.value,tipoidade.value,peso.value).calcularDose()}else if("parenteral"==a){new Doseparenteral(doseporkg,dosagem,diluicao).calcularDose()}else resetarDoseEposologia()}else resetarDoseEposologia()}function init(){idade=document.querySelector("#idade"),tipoidade=document.querySelector("#ext"),peso=document.querySelector("#peso"),farmacos=document.querySelector("#farmacos"),doseEposologia=document.querySelector("#dose-e-posologia"),farmacos.addEventListener("change",instanciarClasse),tipoidade.addEventListener("change",instanciarClasse),idade.addEventListener("mouseup",instanciarClasse),idade.addEventListener("keyup",instanciarClasse),peso.addEventListener("mouseup",instanciarClasse),peso.addEventListener("keyup",instanciarClasse)}window.addEventListener("load",init);