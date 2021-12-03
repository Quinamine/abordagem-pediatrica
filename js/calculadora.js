class Dosecomp {
	constructor(farmaco, peso, doseporkg, dosagem, posologia){
		this.farmaco = farmaco;
		this.peso = peso;
		this.doseporkg = doseporkg;
		this.dosagem = dosagem;
		this.posologia = posologia;
	}

	get getPosologia(){
		let pos;
		if(this.posologia==3){pos = "de 8 em 8 horas";}
		else if(this.posologia==2){pos = "de 12 em 12 horas";}
		else if(this.posologia==1){
			if(this.farmaco=="Praziquantel"){pos = "dose única";}
			else{pos = "dose única diária";}
		}
		return pos;
	}

	/********** MÉTODOS DE RECOMENDACAO E ADVERTENCIA **********/
	considerarOutraFormulacao(){
		result.innerHTML = `<span class='print-error'>Considere a forma em suspensão para dose mais exata e segura.</span>`;
	}

	/********** MÉTODO(S) DE IMPRESSÃO **********/

	printDose(dose, pos){
		let dos = this.dosagem;

		if(dos==4){
			if(dose<=1){dose="1/4";}
			else if(dose<=2){dose="1/2";}
			else if(dose<=3){dose="3/4";}
			else if((dose<=4) || (dose>4)){dose="1";}
		}
		else if(dos==5){
			if(dose<=1.25){dose="1/4";}
			else if(dose<=2.5){dose="1/2";}
			else if(dose<=3.75){dose="3/4";}
			else if(dose<=5){dose="1";}
			else if(dose<=6.5){dose="(1 + 1/4)";}
			else if(dose<=7.75){dose="(1 + 1/2)";}
			else if(dose<=9){dose="(1 + 1/3)";}
			else if(dose<=10.25){dose=2;}
			else if(dose<=11.5){dose="(2 + 1/4)";}
			else if(dose<=12.75){dose="(2 + 1/2)";}
			else if(dose<=14){dose="(2 + 3/4)";}
			else{dose = 3;}
		}
		else if(dos==30){
			if(dose<=7.5){dose="1/4";}
			else if(dose<=15){dose="1/2";}
			else if(dose<=22.5){dose="3/4";}
			else if((dose<=30)|| dose>30){dose=1;}
		}
		else if(dos==50){
			if(dose<13){dose = "1/4";}
			else if(dose<26){dose = "1/2";}
			else if(dose<38){dose = "3/4";}
			else if(dose<=50){dose = 1;}
			else if(dose>50){
				if(this.farmaco=="Diclofenac"){dose = 1;}
				else{
					if(dose<63){dose = "(1 + 1/4)";}
					else if(dose<76){dose = "(1 + 1/2)";}
					else if(dose<88){dose = "(1 + 3/4)";}
					else if((dose<=100) || (dose>100)){dose = 2;}
				}
			}
		}
		else if(dos==100){
			if(dose<=25){dose = "1/4";}
			else if(dose<=50){dose = "1/2";}
			else if(dose<=75){dose = "3/4";}
			else if((dose<=100) || (dose>100)){dose = 1;}	
		}
		else if(dos==200){
			if(dose<=50){dose = "1/4";}
			else if(dose<=100){dose = "1/2";}
			else if(dose<=150){dose = "1/3";}
			else if(dose<=200){dose = 1;}
			else{dose = 1;}
		}  
		else if(dos==250){
			if(dose<=63){dose = "1/4";}
			else if(dose<=125){dose = "1/2";}
			else if(dose<=188){dose = "3/4";}
			else if(dose<=263){dose = 1;}
			else if(dose<=313){dose = "(1 + 1/4)";}
			else if(dose<=376){dose = "(1 + 1/2)";}
			else if(dose<=439){dose = "(1 + 3/4)";}
			else if((dose<=500) || (dose>500)){dose = 2;}
		}
		else if(dos==375){
			if(dose<=94){dose = "1/4";}
			else if(dose<=188){dose = "1/2";}
			else if(dose<=282){dose = "3/4";}
			else if((dose<=375) || (dose>375)){dose = 1;}
		}
		else if(dos==300){
			if(dose<=75){dose = "1/4";}
			else if(dose<=150){dose = "1/2";}
			else if(dose<=225){dose = "3/4";}
			else if(dose<=300){dose = 1;}
			else if(dose<=375){dose = "1 + 1/4";}
			else if(dose<=450){dose = "1 + 1/2";}
			else{dose = 2;}
		}
		else if(dos==400){
			if(dose<=100){dose = "1/4";}
			else if(dose<=200){dose = "1/2";}
			else if(dose<=300){dose = "3/4";}
			else if((dose<=400) || (dose>=400)){dose = 1;}
		}
		else if(dos==500){
			if(dose<=125){dose = "1/4";}
			else if(dose<=250){dose = "1/2";}
			else if(dose<=375){dose = "3/4";}
			else if((dose<=500) || (dose>500)){dose = 1;}
		}
		else if(dos==600){
			if(this.farmaco=="Praziquantel"){
				let doseprovisoria = (dose / 600).toFixed(1);
				if(doseprovisoria%1==0.5){dose = doseprovisoria;} 
				else{
					dose = (dose / 600).toFixed(0);
					if(dose<0.5){dose="1/4";}
				}
			}
		}
		else if(dos==625){
			if(dose<125){ this.considerarOutraFormulacao(); return false;}
			else if(dose<=157){dose = "1/4";}
			else if(dose<=314){dose = "1/2";}
			else if(dose<=471){dose = "3/4";}
			else if((dose<=500) || (dose>500)){dose = 1;}
		}

		/********* IMPRESSAO DA DOSE **********/
		if(this.farmaco=="Paracetamol-sup"){result.innerHTML = `<span class='print-dose'>Introduzir no recto: ${dose} sup ${pos}.</span>`;} 
		else{result.innerHTML = `<span class='print-dose'>Tomar: ${dose} cp<span class='plural-de-cp'>(s)</span> ${pos}.</span>`;}
	}

	/********** MÉTODO PRINCIPAL **********/
	calcularDose(){
		let dose = this.doseporkg * this.peso / this.posologia;

		/***** DOSES MÁXIMAS *****/
		if(this.farmaco=="Fluconazol"){if(dose>=200){dose = 200;}}
		if(this.farmaco=="Cefuroxima"){if(dose>=250){dose = 250;}}
		
		this.printDose(dose, this.getPosologia);
	}
}


class Dosesusp extends Dosecomp {
	constructor(diluicao){
		super(farmaco, peso.value, doseporkg, dosagem, posologia);
		this.diluicao = diluicao;
	}

	/********** MÉTODO DE IMPRESSÃO DE DOSE **********/
	printDose(dose, pos){
		if(this.farmaco=="Nistatina"){result.innerHTML = `<span class='print-dose'>Espalhar pela boca: 1 ml de 8 em 8 horas.</span>`;}
		else{result.innerHTML = `<span class='print-dose'>Tomar: ${dose} ml ${pos}.</span>`;}	
	}

	/********** MÉTODO PRINCIPAL **********/
	calcularDose(){
		let dosemg = (this.doseporkg * this.peso) / this.posologia;

		/***** Doses padronizadas de Metoclopramida susp ****/
		if(this.farmaco=="meto"){
			let peso = this.peso;
			if(peso<10){
				dosemg = 1;
				this.posologia = 2;
			}
			else if(peso<=14){dosemg = 1;}
			else if(peso<=19){dosemg = 2;}
			else if(peso<=29){dosemg = 2.5;}
			else if(peso<=34){dosemg = 5;}
			else {dosemg=10;}
		}

		/***** Dose máxima de Cefuroxima 250mg ****/
		else if(this.farmaco=="Cefuroxima-susp"){
			if(dosemg>250){dosemg = 250;}
		}

		/***** Dose máxima de Clorfeniramina ****/
		else if(this.farmaco=="Clorfeniramina-susp"){
			if(dosemg>=4){dosemg = 4;}
		}
		else{
			if(dosemg>=500){dosemg = 500;}
		}

		/***** CONVERSÃO DA DOSE DE MG PARA ML *****/
		let doseml = (dosemg * this.diluicao) / this.dosagem;

		/***** IMPRESSAO DA DOSE *****/
		this.printDose(doseml.toFixed(1), this.getPosologia);
	}
}

/******************* FRONTEIRA ENTRE AS CLASSES *********************************/

class Dosespadrao {
	constructor(idade, tipoidade, peso, farmaco, forma_farmaceutica, posologia){
		this.idade = idade;
		this.tipoidade = tipoidade;
		this.peso = peso;
		this.farmaco = farmaco;
		this.forma_farmaceutica = forma_farmaceutica;
		this.posologia = posologia;
	}

	get getPosologia(){
		let pos;
		let farmaco = this.farmaco;
		
		if(farmaco == "AL"){pos = 'de 12 em 12 horas durante 3 dias';}
		else if(farmaco.startsWith("Albendazol")){pos = "dose única";}  // Inclui Albendazol de 200 e 400;
		else if(farmaco=="Salbutamol-neb"){pos="de 4 em 4 horas (SOS)";}
		else if((farmaco=="retinol") || (farmaco=="retinol-100")){pos = "nos dias 0, 1 e 14";}
		else if((farmaco=="Vitamina-C")){pos = "de 12 em 12 horas na 1<sup>a</sup> semana e depois 1 cp/dia durante (várias semanas*)";}
		else{
			if(this.posologia==3){pos = 'de 8 em 8 horas';}
			else if(this.posologia==2){pos = 'de 12 em 12 horas';}
			else if(this.posologia==1){pos = 'dose única diária';}
		}
		return pos;
	}
	get getFormafarmaceutica(){
		let forma;
		let farmaco = this.farmaco;

		if(farmaco=="retinol"){forma = "U.I";}
		else if(farmaco=="Paracetamol-sup"){forma = "sup";}
		else{
			if((this.forma_farmaceutica=="susp")||this.forma_farmaceutica=="aerossol"){forma = 'ml';}

			else{forma="cp(s)";}
		}
		return forma;
	}
	/********** MÉTODOS DE VALIDACAO DE DADOS **********/
	preencherIdade(){result.innerHTML= `<span class='print-error'>A idade precisa ser definida.</span>`;}

	preencherPeso(){result.innerHTML= `<span class='print-error'>O peso precisa ser definido.</span>`;}

	/*********** METODOS DE SUGESTAO **************/
	considerCtzTablets(){result.innerHTML= `<span class='print-error'>Considere a forma em comprimido(s).</span>`;}

	considerMetoclopramidaSusp(){result.innerHTML = `<span class='print-error'>Considere a forma em suspensão para dose mais exata e segura.</span>`;}

	verLactulose(){result.innerHTML = `<span class='print-error'>Considere outro laxante (exemplo: Lactulose).</span>`;}

	especificarMeses(){result.innerHTML = `<span class='print-error'>Especifique os meses.</span>`;}

	/********** MÉTODOS DE ALERTA **********/
	naoRecomendado(){
		result.innerHTML = `<span class='print-error'>Não recomendado. 
		${this.farmaco=='AL'?'Tratar como Malária Grave.':''}
		${this.farmaco=='CTZ-susp'?'Risco de Kernicterus.':''}
		${this.farmaco=='CTZ-cp'?'Risco de Kernicterus.':''}
		</span>`;
	}
	contraIndicado(){result.innerHTML = `<span class='print-error'>Contraindicado.</span>`;}

	printAlerta(){
		if(this.farmaco.startsWith("Albendazol")){
			result.innerHTML += `<span class='print-alerta'>
				<span class=''>Dose única</span> geralmente é suficiente para o tratamento da maior parte das parasitoses 
			(Ascaridíase,  Enterobíase, ancilostomíase, astrongiloidíase, dermatite serpiginosa por larva migrans). </br>
			<span class='text-color-orange'> Na Estrongiloidíase: tomar a dose de 12 em 12 horas durante 3 dias consecutivos.</span>
			</span>`;

			if(this.tipoidade=="m"){
				if(this.idade<6){
					result.innerHTML = `<span class='print-error'>NB: Nas crianças &lt; 1 ano de idade a sua segurança
					não está estabelecida.</span>`;
				}
				else if(this.idade<12){
					result.innerHTML += `<span class='print-alerta print-error'>NB: Nas crianças &lt; 1 ano de idade a sua segurança
					não está estabelecida.</span>`;
				}
			}
		} // Inclui Albendazol de 200 e 400;

		else if(this.farmaco=="Salbutamol-neb"){
			result.innerHTML += `<span class='print-alerta'>Diluir a dose em 4 ml de Soro
			fisiológico. Nebulizar com 6 litros de oxigénio (SOS).</span>`;
		}
		else if((this.farmaco=="retinol") || (this.farmaco=="retinol-200")){
			result.innerHTML += `<span class='print-alerta'>
			Dia 0: na altura do diagnóstico;</br>
			Dia 1: no dia seguinte ao do diagnóstico;</br>
			Dia 14: duas semanas mais tarde.
			<br/>
			NB: A dose acima é para o tratamento da Hipovitaminose A (todos graus de Xeroftalmia, casos de Sarampo e pós-Sarampo,
			Kwashiorkor Grave, etc). <a href='pages/saibamais/prevencao-da-deficiencia-da-vitamina-a-nas-criancas.html' id='link-de-redirecionamento'>Para doses profiláticas clique aqui.</a></span>`;
	
		}
		else if((this.farmaco=="Acido-folico")){
			result.innerHTML += `<span class='print-alerta'>Continuar a administrar por mais 4 meses após
			a correção da anemia para repor reservas.</span>`;
		}
		else if((this.farmaco=="Vitamina-C")){
			result.innerHTML += `<span class='print-alerta'>(*) &rarr; pelo menos até a remissão do Quadro Clínico do Escorbuto.
				</br> NB: A ingestão de 90 à 120 ml / dia de sumos de fruta pode curar o Escorbuto.</span>`;
		}
	}

	/********** MÉTODOS DE IMPRESSAO DE DOSES **********/
	printDose(dose, pos){
		if(this.farmaco=="Salbutamol-neb"){result.innerHTML = `<span class='print-dose'>Inalar por nebulização: ${dose} ${pos}.</span>`;}
		else if(this.farmaco=="Paracetamol-sup"){result.innerHTML = `<span class='print-dose'>Introduzir no recto: ${dose} ${pos}.</span>`;}
		else {result.innerHTML = `<span class='print-dose'>Tomar: ${dose} ${pos}.</span>`;}
		this.printAlerta();
	}
	
	/********** MÉTODO PRINCIPAL **********/
	calcularDose(){
		/***** VARIÁVEIS LOCAIS *****/
		let peso = this.peso;
		let idade = this.idade;
		let farmaco = this.farmaco;
		let dose;

		/***** CÁLCULO DA DOSE DE ACORDO COM O PESO *****/
		if(peso!=""){
			/***** ARTEMETER + LUMEFANTRINA (Fonte: Normas de Tratatamento de Malária em Moçambique)*****/
			if(farmaco=="AL"){
				if(peso<5){this.naoRecomendado(); return false;}
				else if(peso<15){dose=1;}
				else if(peso<25){dose=2;}
				else if(peso<35){dose=3;}
				else if(peso>=35){dose=4;}
			} 
			/***** QUININA 300MG (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
			else if(farmaco=="Quinina-300"){
				if(peso<10){dose="1/4";}
				else if(peso<=15){dose="1/2";}
				else if(peso<=25){dose="3/4";}
				else if(peso<=35){dose=1;}
				else if(peso>35){dose=2;}
			}

			/***** METOCLOPRAMIDA *****/
			else if(farmaco=="meto"){
				if(peso<=19){this.considerMetoclopramidaSusp(); return false;}
				else if(peso<=29){dose='1/4';}
				else if(peso<=34){dose='1/2';}
				else{dose=1;}
			}

			/***** PARACETAMOL COMP *****/
			else if(farmaco=="Paracetamol-cp"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<3){
							dose=10*peso;
							let doselocal = new Dosecomp("Paracetamol-cp", peso, 30, 500, 3);
							doselocal.printDose(dose, this.getPosologia);
							return false;
						}
						else if(idademeses<12){dose='1/4';}
						else if(idademeses<=60){dose='1/2';}
						else if(idademeses>60){dose=1;}
					}
					else if(this.tipoidade=="y"){
						let idadeanos = this.idade;

						if(idadeanos<1){this.especificarMeses(); return false;}
						else if(idadeanos<=5){dose='1/2';}
						else if(idadeanos>5){dose=1;}
					}
				}
				else{this.preencherIdade(); return false;}
			}

			/***** PARACETAMOL SUP *****/
			else if(farmaco=="Paracetamol-sup"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<3){
							dose=10*peso;
							let doselocal = new Dosecomp("Paracetamol-sup", peso, 30, 250, 3);
							doselocal.printDose(dose, this.getPosologia);
							return false;
						}
						else if(idademeses<12){dose='1/2';}
						else if(idademeses<=60){dose=1;}
						else if(idademeses>60){dose=2;}
					}
					else if(this.tipoidade=="y"){
						let idadeanos = this.idade;

						if(idadeanos<1){this.especificarMeses(); return false;}
						else if(idadeanos<=5){dose=1;}
						else if(idadeanos>5){dose=2;}
					}
				}
				else{this.preencherIdade(); return false;}
			}

			/***** CODEINA *****/
			else if(farmaco=="Codeina"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){
							this.contraIndicado();
							return false;
						}

						else{
							dose = new Dosecomp(this.farmaco, this.peso, 3, 30, this.posologia);
							dose.calcularDose();
							return false;
						}
					}
					else if(this.tipoidade=="y"){
						let idadeanos = this.idade;
						if(idadeanos<1){
							this.contraIndicado();
							return false;
						}
						else{
							dose = new Dosecomp(this.farmaco, peso, 3, 30, this.posologia);
							dose.calcularDose();
							return false;
						}
					}
				}
				else{this.preencherIdade(); return false;}
			}

			/***** CODEINA SUSP*****/
			else if(farmaco=="Codeina-susp"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){
							this.contraIndicado();
							return false;
						}

						else{
							dose = new Dosesusp(diluicao);
							dose.calcularDose();
							return false;
						}
					}
					else if(this.tipoidade=="y"){
						let idadeanos = this.idade;
						if(idadeanos<1){
							this.contraIndicado();
							return false;
						}
						else{
							dose = new Dosesusp(diluicao);
							dose.calcularDose();
							return false;
						}
					}
				}
				else{this.preencherIdade(); return false;}
			}

			/***** MEBENDAZOL *****/
			else if(farmaco=="Mebendazol-100"){
				if(peso<20){dose="1/2";}
				else if(peso>=20){dose=1;}
			} // Para o cálculo da dose só a idade é suficiente.

			/***** SALBUTAMOL NEBULIZACAO *****/
			else if(farmaco=="Salbutamol-neb"){
				dose = (0.03*peso).toFixed(1);
				if(dose>1){
					dose = '1.0';
				}
			} // Somente o Peso;

			/******** Acido Ascorbico, complexo B e Multivitaminas *********/
			// Tanto Peso quanto a Idade é válido(a)l
			else if((farmaco=="Vitamina-C") || (farmaco=="Complexo-B") || (farmaco=="Multivitaminas-cp")){dose = 1;}

			/***** Acido Folico *****/
			else if(farmaco=="Acido-folico"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){
							/********* Parametros: farmaco, peso, doseporkg, dosagem, posologia ********/
							dose = new Dosecomp("Acido-folico", peso, 5, 5, 2);
							dose.calcularDose();
							this.printAlerta();
							return false;
							
						}
						else if(idademeses>=12){dose = 1;}
						
					}
					else if(this.tipoidade=="y"){
						let idadeanos = this.idade;
						
						if(idadeanos<1){
							/********* Parametros: farmaco, peso, doseporkg, dosagem, posologia ********/
							dose = new Dosecomp("Acido-folico", peso, 5, 5, 2);
							dose.calcularDose();
							this.notaAcidofolico();
						}
						else if(idadeanos>=1){dose = 1;}
					}
					
				}
				else{this.preencherIdade(); return false;}
			}	
		}

		/***** CÁLCULO DA DOSE DE ACORDO COM A IDADE *****/
		else if(idade!=""){
			if((farmaco=="Vitamina-C")|| (farmaco=="Complexo-B") || (farmaco=="Multivitaminas-cp")){dose = 1;}

			else if(this.tipoidade=="m"){
				let idademeses = this.idade;

				/***** ARTEMETER + LUMEFANTRINA (Fonte: Normas de Tratatamento de Malária em Moçambique)*****/
				if(farmaco=="AL"){
					if(idademeses<12){this.naoRecomendado(); return false;}
					else if(idademeses<=60){dose=1;}
					else if(idademeses<=96){dose=2;}
					else if(idademeses<=144){dose=3;}
					else if(idademeses>144){dose=4;}
				}

				/***** QUININA 300MG (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
				else if(farmaco=="Quinina-300"){
					if(idademeses<12){dose="1/4";}
					else if(idademeses<=60){dose="1/2";}
					else if(idademeses<=96){dose="3/4";}
					else if(idademeses<=144){dose=1;}
					else if(idademeses>144){dose=2;}
				}

				/*****  PARACETAMOL COMP *****/
				else if(farmaco=="Paracetamol-cp"){
					if(idademeses<3){this.preencherPeso(); return false;}
					else if(idademeses<12){dose='1/4';}
					else if(idademeses<=60){dose='1/2';}
					else if(idademeses>60){dose=1;}
				}

				/*****  PARACETAMOL SUP *****/
				else if(farmaco=="Paracetamol-sup"){
					if(idademeses<3){this.preencherPeso(); return false;}
					else if(idademeses<12){dose='1/2';}
					else if(idademeses<=60){dose=1;}
					else if(idademeses>60){dose=2;}
				}

				/***** DICLOFENAC *****/
				else if(farmaco=="Diclofenac"){
					if(idademeses<24){this.naoRecomendado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA *****/
				else if(farmaco=="Codeina"){
					if(idademeses<12){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA - SUSP *****/
				else if(farmaco=="Codeina-susp"){
					if(idademeses<12){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** Acido Folico *****/
				else if(farmaco=="Acido-folico"){
					if(idademeses<12){
						this.preencherPeso();
						return false;
					}
					else if(idademeses>=12){dose = 1;}
				}


				// FARMACOS QUE NECESSITAM SÓ DA IDADE //
				/*****  BUTILESCOPOLAMINA *****/
				else if(farmaco=="Buscopam"){
					if(idademeses<=3){dose='1/4';}
					else if(idademeses<36){dose='1/2';}
					else if((idademeses<=144) || (idademeses>144)){dose=1;}
				}  

				/***** METOCLOPRAMIDA *****/
				else if(farmaco=="meto"){
					if(idademeses<60){this.considerMetoclopramidaSusp(); return false;}
					else if(idademeses<108){dose='1/4';}
					else if(idademeses<=168){dose='1/2';}
					else{dose=1;}
				}

				/***** ALBENDAZOL *****/
				else if((farmaco=="Albendazol-200") || (farmaco=="Albendazol-400")){
					if(idademeses<24){
						(farmaco=="Albendazol-200" ? dose=1 : dose='1/2');
					}
					else if(idademeses>=24){
						(farmaco=="Albendazol-200" ? dose=2 : dose=1);
					}
				}

				/***** ACICLOVIR *****/
				else if(farmaco=="Aciclovir"){
					if(idademeses<=1){dose="1/4";}
					else if(idademeses<24){dose="1/2";}
					else if(idademeses>=24){dose=1;}
				}

				/***** COTRIMOXAZOL COMP *****/
				else if(farmaco=="CTZ-cp"){
					if(idademeses<2){this.naoRecomendado(); return false;}
					else if(idademeses<=5){dose='1/4';}
					else if(idademeses<=60){dose='1/2';}
					else if(idademeses<=144){dose=1;}
					else if(idademeses>144){dose=2;}
				}

				/***** COTRIMOXAZOL SUSP *****/
				else if(farmaco=="CTZ-susp"){
					if(idademeses<2){this.naoRecomendado(); return false;}
					else if(idademeses<=5){dose=2.5;}
					else if(idademeses<=60){dose=5;}
					else if(idademeses<=144){dose=10;}
					else if(idademeses>144){this.considerCtzTablets(); return false;}
				}

				/***** BiSACODIL *****/
				else if(farmaco=="Bisacodil"){
					if(idademeses<48){this.verLactulose(); return false;}
						else if(idademeses<=120){dose = 1;}
						else if(idademeses>120){dose="1 ou 2 (SOS)";}
				}

				/***** LACTULOSE *****/
				else if(farmaco=="Lactulose"){
					if(idademeses<12){dose = 2.5;}
					else if(idademeses<=60){dose = 5;}
					else if(idademeses<=144){dose=10;}
					else if(idademeses<=216){dose = 15;}
					else{dose = 20;}
					
				}

				/***** PARAFINA LIQUIDA *****/
				else if(farmaco=="Parafina_liquida"){
					if(idademeses<36){this.contraIndicado(); return false;}
						else if(idademeses<=60){dose = 10;}
						else if(idademeses<=144){dose=15;}
						else{dose = 20;}
				}

				/***** SALBUTAMOL *****/
				else if(farmaco=="Salbutamol-susp"){
						if(idademeses<=72){dose=2.5;}
						else if(idademeses<=144){dose = 5;}
						else if(idademeses>144){dose=10;}
				}

				/***** SALBUTAMOL-CP *****/
				else if(farmaco=="Salbutamol-cp"){
					if(idademeses<=72){dose="1/2";}
					else if(idademeses<=144){dose = 1;}
					else if(idademeses>144){dose=2;}
				}

				/***** Sulfato ferroso *****/
				else if(farmaco=="Sulfato-ferroso"){
					if(idademeses<12){dose = "1/4";}
					else if(idademeses<=60){dose = 1;}
					else{
						dose = 1;  // 2cp/dia
						this.posologia = 2;
					} // 6 a 12 anos;
				}

				/***** VITAMINA A *****/
				else if(farmaco=="retinol"){
					if(idademeses<6){dose = 50000;}
					else if(idademeses<=12){dose = 100000;}
					else{dose = 200000;}
				}

				/***** Multivitaminas *****/
				else if(farmaco=="Multivitaminas-susp"){
					if(idademeses<=12){
						dose = 5;
						this.posologia = 1;
					}
					else{dose = 5;}
				}
			}
		
			/***** Cálculo da dose de acordo com a idade 'anos' *****/
			else if(this.tipoidade=="y"){
					let idadeanos = this.idade;

				/*****  ARTEMÉTER E LUMEFANTRINA (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
				if(farmaco=="AL"){ 
					if(idadeanos<1){this.naoRecomendado(); return false;}
					else if(idadeanos<=5){dose=1;}
					else if(idadeanos<=8){dose=2;}
					else if(idadeanos<=12){dose=3;}
					else if(idadeanos>12){dose=4;}	
				}

				/***** QUININA 300MG (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
				if(farmaco=="Quinina-300"){
					if(idadeanos<1){dose="1/4";}
					else if(idadeanos<=5){dose="1/2";}
					else if(idadeanos<=8){dose="3/4";}
					else if(idadeanos<=12){dose=1;}
					else if(idadeanos>12){dose=2;}
				}

				/*****  PARACETAMOL *****/
				else if(farmaco=="Paracetamol-cp"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<=5){dose='1/2';}
					else if(idadeanos>5){dose=1;}
				}

				/*****  PARACETAMOL SUP *****/
				else if(farmaco=="Paracetamol-sup"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<=5){dose=1;}
					else if(idadeanos>5){dose=2;}
				}

				/***** Diclofenac *****/
				else if(farmaco=="Diclofenac"){
					if(idadeanos<2){this.naoRecomendado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA *****/
				else if(farmaco=="Codeina"){
					if(idadeanos<1){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA - SUSP *****/
				else if(farmaco=="Codeina-susp"){
					if(idadeanos<1){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** Acido Folico *****/
				else if(farmaco=="Acido-folico"){
					if(idadeanos<1){
						this.preencherPeso();
						return false;
					}
					else if(idadeanos>=1){dose = 1;}
				}

				// FARMACOS QUE NECESSITAM EXCLUSIVAMENTE DA IDADE //
				/*****  BUTILESCOPOLAMINA *****/
				else if(farmaco=="Buscopam"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<3){dose='1/2'}
					else if((idadeanos<=12) || (idadeanos>12)){dose=1;}
				}

				/***** METOCLOPRAMIDA *****/
				else if(farmaco=="meto"){
					if(idadeanos<5){this.considerMetoclopramidaSusp(); return false;} //<5 nao faz nem 1/4cp;
					else if(idadeanos<9){dose='1/4';}
					else if(idadeanos<=14){dose='1/2';}
					else{dose=1;}
				}

				/***** ALBENDAZOL *****/
				else if((farmaco=="Albendazol-200") || (farmaco=="Albendazol-400")){
					if(idadeanos<2){(farmaco=="Albendazol-200" ? dose=1 : dose='1/2');}
					else if(idadeanos>=2){(farmaco=="Albendazol-200" ? dose=2 : dose=1);}
				}

				/***** ACICLOVIR *****/
				else if(farmaco=="Aciclovir"){
						if(idadeanos<2){dose="1/2";}
						else if(idadeanos>=2){dose=1;}
				}

				/***** COTRIMOXAZOL COMP *****/
				else if(farmaco=="CTZ-cp"){
					if(idadeanos<1){this.especificarMeses(); return false;} //<2m: kernicterus; <6: 1/4cp e <12: 1/2;
					else if(idadeanos<=5){dose='1/2';}
					else if(idadeanos<=12){dose=1;}
					else if(idadeanos>12){dose=2;}
				}

				/***** COTRIMOXAZOL SUSP *****/
				else if(farmaco=="CTZ-susp"){
						if(idadeanos<1){this.especificarMeses(); return false;} //<2m: kernicterus; <6: 1/4cp e <12: 1/2;
						else if(idadeanos<=5){dose=5;}
						else if(idadeanos<=12){dose=10;}
						else if(idadeanos>12){this.considerCtzTablets(); return false;}
				}
				/***** BiSACODIL *****/
				else if(farmaco=="Bisacodil"){
					if(idadeanos<4){this.verLactulose(); return false;} 
						else if(idadeanos<=10){dose = 1;}
						else if(idadeanos>10){dose="1 ou 2 (SOS)";}
				}
				/***** LACTULOSE *****/
				else if(farmaco=="Lactulose"){
					if(idadeanos<1){dose = 2.5;}
					else if(idadeanos<=5){dose = 5;}
					else if(idadeanos<=12){dose = 10;}
					else if(idadeanos<=18){dose = 15;}
					else{dose = 20;}
				}
				/***** Parafina Liquida *****/
				else if(farmaco=="Parafina_liquida"){
					if(idadeanos<3){this.contraIndicado(); return false;}
					else if(idadeanos<=5){dose = 10;}
					else if(idadeanos<=12){dose = 15;}
					else{dose = 20;}
				}
				/***** SALBUTAMOL *****/
				else if(farmaco=="Salbutamol-susp"){
					if(idadeanos<=6){dose=2.5;}
					else if(idadeanos<=12){dose = 5;}
					else if(idadeanos>12){dose=10;}
				}
				/***** SALBUTAMOL-CP *****/
				else if(farmaco=="Salbutamol-cp"){
					if(idadeanos<=6){dose="1/2";}
					else if(idadeanos<=12){dose = 1;}
					else if(idadeanos>12){dose=2;}
				}
				/***** SALBUTAMOL NEBULIZAVEL *****/
				else if(farmaco=="Salbutamol-neb"){this.preencherPeso(); return false;}
				/***** Sulfato ferroso *****/
				else if(farmaco=="Sulfato-ferroso"){
					if(idadeanos<1){dose = "1/4";}
					else if(idadeanos<=5){dose = 1;}
					else{
						dose = 1;  // 2cp/dia
						this.posologia = 2;
					} // 6 a 12 anos;
				}
				/***** Retinol *****/

				else if(farmaco=="retinol"){
					if(idadeanos<1){this.especificarMeses(); return false;} //Motivo: <6m: 50000UI e >6m: 100000UI;
					else{dose = 200000;}	
				}
				/***** Multivitaminas *****/
				else if(farmaco=="Multivitaminas-susp"){
					if(idadeanos<=11){
						dose = 5;
						this.posologia = 1;
					}
					else{dose = 5;}
				}
			}
		}
		
		this.printDose(`${dose} ${this.getFormafarmaceutica}`, this.getPosologia);
	}
}


class Doseparenteral extends Dosespadrao{
	constructor(doseporkg, dosagem, diluicao){
		super(idade.value, tipoidade.value, peso.value, farmaco, forma_farmaceutica, posologia);
		this.doseporkg = doseporkg;
		this.dosagem = dosagem;
		this.diluicao = diluicao;
	}

	get getPosologia(){
		let pos;
		if(this.farmaco=="Benzatina") {
			pos = ` &rarr;&nbsp;"dose única" na Sífilis recente (primária, secundária e latente precoce)
						 <span class='display-block align-center'> OU </span>
				&rarr;&nbsp;"uma dose por semana durante 3 semanas" na Sífilis tardia (latente tardia e terciária).`;
		}

		else if(this.posologia == 1){
			pos = " dose única diária.";
			if(this.farmaco=="Vitamina-B12"){pos = " 3 vezes por semana (em dias alternados) durante 2 semanas.";}
			if(this.farmaco=="VAR"){pos = " nos dias 0, 3, 7, 14, 30 e 90*.";}
		}
		else if(this.posologia == 2){pos = " de 12 em 12 horas.";}

		else if(this.posologia == 3){
			pos = " de 8 em 8 horas.";
			if((this.farmaco=="Prednisolona-inj") || (this.farmaco=="Aminofilina-inj") || (this.farmaco=="Diazepam-inj")){pos = ".";}
		}

		return pos;
	}

	/******** METODOS COMPLEMENTARES ************/
	get getFormafarmaceutica(){
		let forma;

		if(this.farmaco=="VAR"){forma = "ml";}
		else if((this.farmaco=="Benzatina") ||(this.farmaco=="Procaina") ||(this.farmaco=="IGAR")){forma = "U.I";}
		else {forma = "mg";}
		return forma;
	}

	get getVia(){
		let via;

		if(this.forma_farmaceutica=="inj-IM"){
			via = "I.M profunda";
			if(this.farmaco=="VAR"){
				via = "I.M no músculo deltóide"
			}
		}
		else if(this.forma_farmaceutica=="inj-EV"){
			if((this.farmaco=="Hidrocortisona") || (this.farmaco=="Diazepam-inj")){via="E.V lento";}
			else if(this.farmaco=="Aminofilina-inj"){via="E.V lentamente durante 20 à 30 minutos";}
			else {via = "E.V";}
		}
		return via;
	}

	/****************** Metodo de precaucao ****************/
	printAlerta(){
		if((this.farmaco=="Benzatina")||(this.farmaco=="Procaina")){
			result.innerHTML += `<span class='print-alerta'>NB: Nunca administrar por via E.V (na veia) ou S.C (com a agulha 
			inclinada a 45 <sup>graus</sup> ou a menos que 90 <sup>graus</sup>).</span>`;
		}
		else if(this.farmaco=="Ceftriaxona"){
			// Determinacao da dose em ml
			let dose = this.doseporkg * this.peso;

			if(dose>1000){
				dose=1000;
			}
			let doseml = dose * 10 / 1000;

			result.innerHTML += `<span class='print-alerta'>Para administração E.V, diluir 1g de Ceftriaxona em Pó 
			em 10 ml de Água esterilizada para injecções e neste caso administrar: 
			<span class="text-color-orange">${doseml} ml durante 2 à 4 minutos.</span>
			<span class="text-color-orange-red">Para administração E.V, NUNCA usar o diluente que 
			acompanha as ampolas para uso I.M</span>.</span>`;
		}
		else if(this.farmaco=="Hidrocortisona"){
			result.innerHTML += `<span class='print-alerta nota-bem'>Pode ser administrado excepcionalmente por via I.M.</span>`;
		}
		else if(this.farmaco=="Prednisolona-inj"){
			result.innerHTML += `<span class='print-alerta nota-bem'>Repetir a dose conforme a evolução clínica. Nas situações 
			mais urgentes como Asma ou reacções anafilácticas pode ser necessário repetir a dose de 2/2h.
			<span class="text-color-orange"><em>Dose máxima: 50mg/dia.</em></span> Também pode ser administrado por via I.M.</span>`;
		}
		else if(this.farmaco=="Vitamina-B12"){
			result.innerHTML += `<span class='print-alerta nota-bem'>Antes de decidir administrar a Vit. B12 ou B9, procurar
			sempre esclarecer a causa da Anemia megaloblástica e corrigí-la se possivel. Se a causa não for corrigível, 
			administrar uma <span class="text-color-orange">dose de manutenção de 1 mg a cada 3 meses</span> (ou de 2 em 2 meses
			em casos de Anemia perniciosa ou outra Anemia macrocítica com envolvimento neurológico).</span>`;
		}
		else if(this.farmaco=="Aminofilina-inj"){
			result.innerHTML += `<span class='print-alerta nota-bem'>Observação: A administração rápida pode provocar convulsões, arritmias
			cardíacas, hipotensão arterial e hemorragia digestiva.</span>`;
		}
		else if(this.farmaco=="VAR"){
			result.innerHTML += `<span class='print-alerta'>
			Dia 0: no primeiro contacto pós-exposição;</br>
			Dias 3, 7, 14, 30: após a primeira dose;</br>
			Dia 90*: noventa dias após o contacto suspeito (a partir do dia que ocorreu a mordedura ou arranhadura). Esta última é
			facultativa (pode ou não ser administrada). </br> 
			Num indivíduo anteriormente vacinado adequadamente, dar apenas 2
			doses de reforço nos dias 0 e 3.
			<br/>
			Devido à deficiente resposta imunitária, evitar a injecção na região nadegueira. Administrar
			sempre na região deltóideia ou nas crianças mais pequenas na face antero-lateral da coxa.</span>
			`;
		}

		else if(this.farmaco=="Diazepam-inj"){
			let doserectal = ((0.5 * this.peso)* this.diluicao / this.dosagem).toFixed(1);
			if(doserectal>2){
				doserectal = "2.0";
			}
			result.innerHTML += `<span class='print-alerta'>Se não tiver acesso venoso, <span class='text-color-orange'>administrar 
				${doserectal} ml por via rectal.</span> De referir que esta dose é de Diazepam como anti-convulsivante.</span>`;
		}
	}

	/****************** IMPRESSAO DA DOSE ****************/

	printDose(dose, forma, doseml, pos, via){
		if(this.getFormafarmaceutica=="U."){
			doseml = "";
		}

		if(this.farmaco=="IGAR"){
			result.innerHTML = `<span class='print-dose'> Injectar &rarr; ${dose} ${forma} ${doseml}
			por via ${via}  <span class='display-block align-center'> E </span>  Infiltrar &rarr; ${dose} ${forma} ${doseml} à volta da zona da mor&shydedura.</span>`;
		}
		else {
			result.innerHTML = `<span class='print-dose'> Administrar: ${dose} ${forma} ${doseml} por via ${via}${pos}</span>`; // Aproximar ${via}${pos} aqui e deixar um espaço vazio no get posologia
		}
		
		this.printAlerta();
	}

	/****************** METODO PRINCIPAL ****************/
	calcularDose(){
		
		let peso = this.peso;
		let idade = this.idade;

		let dosemg = (this.doseporkg * peso);

		// Formatacao para nao apresentar nenhum ponto flutuante ou casa decimal
		if((this.farmaco=="Benzatina") 
			||(this.farmaco=="Procaina")
			||(this.farmaco=="Ceftriaxona")
			||(this.farmaco=="Paracetamol-inj")
			||(this.farmaco=="Aminofilina-inj")
			||(this.farmaco=="Prednisolona-inj")){dosemg = dosemg.toFixed(0);}
		else {
			dosemg = dosemg.toFixed(1);
		}


		let doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);


		/************ DOSES MÁXIMAS  ************/
		if(this.farmaco=="Ceftriaxona"){
			if((dosemg>1000) && (doseml>4)){
				dosemg = 1000;
				doseml = '4.0';
			}
		}
		else if(this.farmaco=="Prednisolona-inj"){
			if((dosemg>50) && (doseml>10)){
				dosemg = 50;
				doseml = '10.0';
			}
		}

		else if(this.farmaco=="Diazepam-inj"){
			if(dosemg>=10){dosemg = 10;}
			if(doseml>2){doseml='2.0';}
		}
		else if(this.farmaco=="Vitamina-B12"){
			dosemg = 1;
			doseml = 1;
		}
		else {
			/************ CALCULO DE ACORDO COM O PESO ************/
			if(peso!=""){
				if(this.farmaco=="Metoclopramida-inj"){
					if(peso<10){
						dosemg = 1;
						this.posologia = 2;
					}
					else if(peso<=14){dosemg = 1;}
					else if(peso<=19){dosemg = 2;}
					else if(peso<=29){dosemg = 2.5}
					else{dosemg = 5;} //>=30kg

					doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);
				}

				else if(this.farmaco=="Procaina"){
					if(idade!=""){
						if(this.tipoidade=="m"){
							let idademeses = idade;

							if(idademeses<144){dosemg = this.doseporkg * peso;}
							else{dosemg ='1200.000';} // dose em UI
						}
						else if(this.tipoidade=="y"){
							let idadeanos = idade;

							if(idadeanos<12){dosemg = this.doseporkg * peso;}
							else{dosemg = '1200.000';} // dose em UI
						}
					}
					else{
						this.preencherIdade();
						return false;
					}
				}
				else if(this.farmaco=="IGAR"){
					dosemg = (this.doseporkg * peso/2).toFixed(0);
					doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);
				}
			}

			/************ CALCULO DE ACORDO COM A IDADE ************/
			else if(idade!=""){
				if(this.farmaco=="VAR"){
					dosemg = "1"; // dose em mililitros;
				}
				// Idade em meses
				else if(this.tipoidade=="m"){
					let idademeses = idade;

					if(this.farmaco=="Metoclopramida-inj"){
						if(idademeses<12){
							dosemg = 1;
							this.posologia = 2;
						}
						else if(idademeses<36){dosemg = 1;}
						else if(idademeses<60){dosemg = 2;}
						else if(idademeses<108){dosemg = 2.5;}
						else if(idademeses<=168){dosemg = 5;}
						else{dosemg = 10;}
						doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);
					}

					else if(this.farmaco=="Procaina"){
						if(idademeses<144){this.preencherPeso(); return false;}
						else{dosemg = '1.200.000';}
					}

					else if(this.farmaco=="Hidrocortisona"){
						if(idademeses<12){dosemg = 25;}
						else if(idademeses<=60){dosemg=50;}
						else{dosemg = 100;}
					}
				}

				/************ iDADE EM ANOS ************/
				else if(this.tipoidade=="y"){
					let idadeanos = idade;

					if(this.farmaco=="Metoclopramida-inj"){
						if(idadeanos<1){
							dosemg = 1;                                                                            
							this.posologia = 2;
						}
						else if(idadeanos<3){dosemg = 1;}
						else if(idadeanos<5){dosemg = 2;}
						else if(idadeanos<9){dosemg = 2.5;}
						else if(idadeanos<=15){dosemg = 5;}
						else{dose=10;}
						doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);
					}

					else if(this.farmaco=="Procaina"){
						if(idadeanos<12){this.preencherPeso(); return false;}
						else{dosemg ='1200000';}
					}

					else if(this.farmaco=="Hidrocortisona"){
						if(idadeanos<1){dosemg = 25;}
						else if(idadeanos<=5){dosemg = 50;}
						else{dosemg = 100;}
					}
				}
			}	
		}


		doseml = `(${doseml} ml)`; // Para aparecer a dose e a Unidade 'ml';
		if((this.farmaco=="Hidrocortisona")
			||(this.farmaco=="Benzatina")
			||(this.farmaco=="Procaina")
			||(this.farmaco=="VAR")){doseml="";}
		
		this.printDose(dosemg, this.getFormafarmaceutica, doseml, this.getPosologia, this.getVia);
	}	
}


/********** MÉTODOS DE VALIDACÃO EXTERNOS **********/
function preencherPeso(){result.innerHTML = `<span class='print-error'>O campo de peso precisa ser preenchido.</span>`;}

function errodePeso(){
	result.innerHTML = `<span class='print-error'><a href='pages/saibamais/objectivo-e-publico-alvo-da-calculadora-de-doses.html' id='link-de-redirecionamento'>Observação: o peso deve ser &ge; 2 e &le; 35. Vê mais detalhes&raquo;</a></span>`;
}

function errodeIdade(){
	result.innerHTML = `<span class='print-error'><a href='pages/saibamais/objectivo-e-publico-alvo-da-calculadora-de-doses.html' id='link-de-redirecionamento'>Observação: a idade deve ser &ge; 1 mês e &le; 14 anos ou &le; 168 meses. Vê mais detalhe&raquo;</a></span>`;
}

/********** MÉTODOS DE CONTROLE DOS CAMPOS PESO E IDADE **********/
function showCampo(){
	let campo_necessario = farmacos.options[farmacos.selectedIndex].dataset.camporequired;
	let paragrafo_de_idade = document.querySelector("#paragrafo-parent-de-idade");
	let paragrafo_de_peso = document.querySelector("#paragrafo-parent-de-peso");
	if(campo_necessario=="idade"){
		peso.value = "";
		paragrafo_de_peso.classList.add("hide");
		paragrafo_de_idade.classList.remove("hide");
	}
	else if(campo_necessario=="peso"){
		idade.value = "";
		paragrafo_de_idade.classList.add("hide");
		paragrafo_de_peso.classList.remove("hide");
	}
	else{
		paragrafo_de_idade.classList.remove("hide");
		paragrafo_de_peso.classList.remove("hide");
		
		if(idade.value!=""){
			if(tipoidade.value=="m"){
				let idademeses = idade.value;

				if(farmaco=="Procaina"){
					if(idademeses>=144){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide"); // Omissao do peso se idade >= 12 anos;
					}
					else if(idademeses<144){
						paragrafo_de_peso.classList.remove("hide"); // Desomissao se idade < 12 anos;
					}
				}

				else if((farmaco=="Paracetamol-cp")||(farmaco=="Paracetamol-sup")){
					if(idademeses>=3){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide"); // Omissao do peso se idade <= 12 anos;
					}
					else if(idade<3){
						paragrafo_de_peso.classList.remove("hide"); // Criancas menores de 3 é obrigatorio dosear c/ base no peso;
					}
				}

				else if(farmaco=="Acido-folico"){
					if(idademeses>=12){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide");
					}
					else {
						paragrafo_de_peso.classList.remove("hide");
					}
				}

				else if((farmaco=="Codeina") || (farmaco=="Codeina-susp")){
					if(idademeses<12){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide");
					}
					else {
						paragrafo_de_peso.classList.remove("hide");
					}
				}
			}
			else if(tipoidade.value=="y"){
				let idadeanos = idade.value;

				if(farmaco=="Procaina"){
					if(idadeanos>=12){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide"); // Omisssao de Peso se idade >= 12 anos
					}
					else if(idadeanos<12){
						paragrafo_de_peso.classList.remove("hide");
					}
				}

				// Omissao de peso se tipoidade for = anos (independente da idade)
				if((farmaco=="Paracetamol-cp")
					||(farmaco=="Paracetamol-sup")
					||(farmaco=="Acido-folico")){
					peso.value = "";
					paragrafo_de_peso.classList.add("hide");
				}

				else if((farmaco=="Codeina") || (farmaco=="Codeina-susp")){
					if(idadeanos<1){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide");
					}
					else {
						paragrafo_de_peso.classList.remove("hide");
					}
				}
			}
		}	
	}
}

/******** MÉTODO DE INSTANCIAMENTO DAS CLASSES *********/
var farmaco, dosagem, diluicao, doseporkg, posologia, tipodose, forma_farmaceutica;
function classCaller(){
	// Esta funcao mostra peso ou idade dependendo se o camp é ou nao necessário para o cálculo do respectivo fármaco. 
	showCampo();

	// Inicializacao das variaveis
	farmaco = farmacos.options[farmacos.selectedIndex].value;
	dosagem = Number(farmacos.options[farmacos.selectedIndex].dataset.dos);
	diluicao = Number(farmacos.options[farmacos.selectedIndex].dataset.dil);
	doseporkg = Number(farmacos.options[farmacos.selectedIndex].dataset.doseporkg);
	posologia = Number(farmacos.options[farmacos.selectedIndex].dataset.pos);
	tipodose = farmacos.options[farmacos.selectedIndex].dataset.tipodose;
	forma_farmaceutica = farmacos.options[farmacos.selectedIndex].dataset.forma;
	var dose;



	if(peso.value!=""){
		if((peso.value<2) || (peso.value>35)){
			errodePeso(); 
			return false;
		}
		else{
			if(tipodose=="padrao"){
				/***** PARÁMETROS DA 'DOSESPADRAO' idade, tipoidade, peso, farmaco, pos  *****/
				dose = new Dosespadrao(idade.value, tipoidade.value, peso.value, farmaco, forma_farmaceutica, posologia);
				dose.calcularDose();
			}
			else if(tipodose=="parenteral"){
				dose = new Doseparenteral(doseporkg, dosagem, diluicao);
				dose.calcularDose();
			}
			else if(tipodose=="dosesusp"){
				dose = new Dosesusp(diluicao);
				dose.calcularDose();
			}	
			else if(tipodose=="dosecomp"){
			 	/***** PARÁMETROS DA 'DOSECOMP': peso, doseporkg, dos, pos *****/
				dose = new Dosecomp(farmaco, peso.value, doseporkg, dosagem, posologia);
				dose.calcularDose();
			}
		}
	}
	else if(idade.value!=""){
		if(tipoidade.value=="m"){
			let idademeses = idade.value;
			if((idademeses<1)||(idademeses>168)){errodeIdade(); return false;}
		}
		else if(tipoidade.value=="y"){
			let idadeanos = idade.value;
			if(idadeanos>14){errodeIdade();return false;}
		}

		if(tipodose=="padrao"){
			/***** PARÁMETROS DA 'DOSESPADRAO' idade, tipoidade, peso, farmaco, pos  *****/
			dose = new Dosespadrao(idade.value, tipoidade.value, peso.value, farmaco, forma_farmaceutica, posologia);
			dose.calcularDose();
		}
		else if(tipodose=="parenteral"){
			dose = new Doseparenteral(doseporkg, dosagem, diluicao);
			dose.calcularDose();
		}
		else if(tipodose=="dosesusp"){
			/***** PARÁMETROS DA 'DOSESUSP': dil + os da Dosecomp *****/
			dose = new Dosesusp(diluicao);
			dose.calcularDose();
		}	
		else if(tipodose=="dosecomp"){
		 	/***** PARÁMETROS DA 'DOSECOMP': peso, doseporkg, dos, pos *****/
			dose = new Dosecomp(farmaco, peso.value, doseporkg, dosagem, posologia);
			dose.calcularDose();
		}
	}

	else if(farmaco == "Diazepam-inj"){
		result.innerHTML = `<span class='print-error'><a href='pages/saibamais/doses-de-diazepam-de-acordo-com-a-idade.html' id='link-de-redirecionamento'>Caso não possa pesar o paciente ou não tenha acesso à uma balança, clique aqui para ver as doses de acordo com a idade&raquo;</a></span>`;
	}
	else {
		result.innerHTML = "";
	}
}

/********** STARTING VARIABLES **********/
var idade, tipoidade, peso, farmacos, result;
function load(){
	idade = document.querySelector("#idade");
	tipoidade = document.querySelector("#ext");
	peso = document.querySelector("#peso");
	farmacos = document.querySelector("#farmaco");
	result = document.querySelector(".resultado");

	
	/********** EVENTS **********/
	eventos = [peso, idade];
	eventosDois = [tipoidade, farmacos];

	for(var evento of eventos){
		evento.addEventListener("keyup", classCaller);
		evento.addEventListener("mouseup", classCaller);
	}

	for(var evento of eventosDois){
		evento.addEventListener("change", classCaller);
	}
}

window.addEventListener("load", load);