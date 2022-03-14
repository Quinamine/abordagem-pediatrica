

class Dosecomp {
    constructor(farmaco, doseporkg, dosagem, posologia, peso) {
        this.farmaco = farmaco;
        this.doseporkg = doseporkg;
        this.dosagem = dosagem;
        this.posologia = posologia;
        this.peso = peso;
    }

    get retornarPosologia() {

		let pos;
		if(this.posologia=="1") {
			pos = "dose única diária";
        }
        else if(this.posologia=="2") {
            pos = "de 12 em 12 horas";
        }
        else {
            pos = "de 8 em 8 horas";
        }
        return pos;
	}
	
	mostrarAlerta() {
		if(this.farmaco=="diclofenac"){
			doseEposologia.innerHTML += `<output class='alerta'>É recomendável tomar com alimentos para diminuir os efeitos irritantes gastrointestinais.</output>`;

			doseEposologia.innerHTML += `<output class='alerta obs'>Não está estabelecida a segurança em crianças menores de 2 anos.</output>`;
		}
	}

    mostrarDose(dose, pos) {
        let dos = this.dosagem;

		if(dos==4){
			if(dose<=1){dose="1/4";}
			else if(dose<=2){dose="1/2";}
			else if(dose<=3){dose="3/4";}
			else {dose="1";}
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
			else {dose = 1;}
		}

		else if(dos==100){
			if(dose<=25){dose = "1/4";}
			else if(dose<=50){dose = "1/2";}
			else if(dose<=75){dose = "3/4";}
			else {dose = 1;}	
		}

		else if(dos==200){
			if(dose<=50){dose = "1/4";}
			else if(dose<=100){dose = "1/2";}
			else if(dose<=150){dose = "1/3";}
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
			else {dose = 2;}
		}

		else if(dos==375){
			if(dose<=94){dose = "1/4";}
			else if(dose<=188){dose = "1/2";}
			else if(dose<=282){dose = "3/4";}
			else {dose = 1;}
		}

		else if(dos==500){
			if(dose<=125){dose = "1/4";}
			else if(dose<=250){dose = "1/2";}
			else if(dose<=375){dose = "3/4";}
			else {dose = 1;}
		}
            
        /*Impressao da dose*/
		if(this.farmaco=="paracetamol-sup"){doseEposologia.innerHTML = `<output>Introduzir no recto: ${dose} sup. ${pos}.</output>`;} 

		else{doseEposologia.innerHTML = `<output>Tomar: ${dose} cp(s) ${pos}.</output>`;}

		this.mostrarAlerta();
    }


    calcularDose() {
        let dose = (this.doseporkg * this.peso) / this.posologia;

        /*Doses maximas*/
		if((this.farmaco=="fluconazol") || (this.farmaco=="ketoconazol")) {if(dose>=200){dose = 200;}}
		if(this.farmaco=="cefuroxima"){if(dose>=250){dose = 250;}}

        this.mostrarDose(dose, this.retornarPosologia); 
    }
}

class Dosesusp extends Dosecomp {
    constructor (diluicao){
        super(farmaco, doseporkg, dosagem, posologia, peso.value);
        this.diluicao = diluicao;
    }

    mostrarDose(dose, pos) {
        if(this.farmaco=="nistatina"){doseEposologia.innerHTML = `<output>Espalhar pela boca: 1 ml de 8 em 8 horas.</output>`;}
		else{doseEposologia.innerHTML = `<output>Tomar: ${dose} ml ${pos}.</output>`;}	
    }

    calcularDose(){
		let dosemg = (this.doseporkg * this.peso) / this.posologia;

		/***** Doses padronizadas de Metoclopramida susp ****/
		if(this.farmaco=="metoclopramida-susp"){
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
		else if(this.farmaco=="cefuroxima-susp"){
			if(dosemg>250){dosemg = 250;}
		}

		/***** Dose máxima de Clorfeniramina ****/
		else if(this.farmaco=="clorfeniramina-susp"){
			if(dosemg>=4){dosemg = 4;}
		}
		else if(this.farmaco=="clavamox-susp"){
			if(dosemg>=625){dosemg = 625;}
		}

		else{
			if(dosemg>=500){dosemg = 500;}
		}

		/***** CONVERSÃO DA DOSE DE MG PARA ML *****/
        let doseml = (dosemg * this.diluicao) / this.dosagem;
        
      

		/***** IMPRESSAO DA DOSE *****/
		this.mostrarDose(doseml.toFixed(1), this.retornarPosologia);
	}
}

class Dosepadrao {
	constructor(farmaco, formafarmaceutica, posologia, idade, tipoidade, peso){
        this.farmaco = farmaco;
        this.formafarmaceutica = formafarmaceutica;
        this.posologia = posologia;
		this.idade = idade;
		this.tipoidade = tipoidade;
		this.peso = peso;
	}

	get retornarPosologia(){
		let pos;
		let farmaco = this.farmaco;
		
		if(farmaco == "al"){pos = 'de 12 em 12 horas durante 3 dias';}
		else if(farmaco.startsWith("albendazol")){pos = "dose única";}  // Inclui Albendazol de 200 e 400;
		else if(farmaco=="salbutamol-neb"){pos="de 4 em 4 horas (SOS)";}
		else if(farmaco=="retinol"){pos = "nos dias 0, 1 e 14";}
		else if((farmaco=="vitamina-c")){pos = "de 12 em 12 horas na 1ª semana e depois 1 cp(s) por dia durante várias semanas para o tratamento de escorbuto";}
		else{
			if(this.posologia==3){pos = 'de 8 em 8 horas';}
			else if(this.posologia==2){pos = 'de 12 em 12 horas';}
			else if(this.posologia==1){pos = 'dose única diária';}
		}
		return pos;
    }
    
	get retornarFormafarmaceutica(){
		let forma;
		let farmaco = this.farmaco;

		if(farmaco=="retinol"){forma = "U.I";}
		else if(farmaco=="paracetamol-sup"){forma = "sup.";}
		else{
			if((this.formafarmaceutica=="susp")||this.formafarmaceutica=="aerossol"){forma = 'ml';}

			else{forma="cp(s)";}
		}
		return forma;
    }
	
	/* Validacao de dados */
	preencherIdade(){doseEposologia.innerHTML= `<output class='observacao'>O campo de idade precisa ser preenchido.</output>`;}

	preencherPeso(){doseEposologia.innerHTML= `<output class='observacao'>O campo de peso precisa ser preenchido.</output>`;}

	/* Sugestoes */
	considerCtzTablets(){doseEposologia.innerHTML= `<output class='observacao'>Considere a forma em comprimido.</output>`;}

	considerMetoclopramidaSusp(){doseEposologia.innerHTML = `<output class='observacao'>Considere metoclopramida em suspensão para dose mais exata e segura.</output>`;}

	verLactulose(){doseEposologia.innerHTML = `<output class='observacao'>Considere outro laxante (exemplo: lactulose).</output>`;}

	especificarMeses(){doseEposologia.innerHTML = `<output class='observacao'>Especifique os meses.</output>`;}

	/* Alerta */
	naoRecomendado(){
	    doseEposologia.innerHTML = `<output class='observacao'>Não recomendado. 
		${this.farmaco=='al'?'Tratar como malária grave.':''}</output>`;
	}
    contraIndicado(){doseEposologia.innerHTML = `<output class='observacao'>Contraindicado.</output>`;}
    

	mostrarAlerta(){
		if(this.farmaco.startsWith("albendazol")){
			doseEposologia.innerHTML += `<output class='alerta'>Dose única geralmente é suficiente para o tratamento da maior parte das parasitoses (ascaridíase,  enterobíase, ancilostomíase, dermatite serpiginosa por larva migrans).</output>`;

			if(this.tipoidade=="m"){
				if(this.idade<6){
					doseEposologia.innerHTML = `<output class='observação obs'>Nas crianças &lt; 1 ano de idade a sua segurança não está estabelecida.</output>`;
				}
				else if(this.idade<12){
					doseEposologia.innerHTML += `<output class='alerta obs'>Observação: nas crianças &lt; 1 ano de idade a sua segurança não está estabelecida.</output>`;
				}
			}
		} // Inclui Albendazol de 200 e 400;

		else if(this.farmaco=="retinol"){
			doseEposologia.innerHTML += `<output class='alerta'>
			Dia 0: na altura do diagnóstico;</br>
			Dia 1: no dia seguinte ao do diagnóstico;</br>
			Dia 14: duas semanas mais tarde.</output>`
			
			doseEposologia.innerHTML += `<output class='alerta obs'> Observação: a dose acima é para o tratamento da hipovitaminose A (todos graus de xeroftalmia, casos de sarampo e pós-sarampo, kwashiorkor grave,  diarreia de repetição, infecções respiratórias de repetição e de evolução prolongada). <br/>
			 <a href='profilaxias/prevencao-da-hipovitaminose-a.html'> Para ver doses profiláticas, clique aqui.</a></output>`;
		}
		
		else if((this.farmaco=="vitamina-c")){
			doseEposologia.innerHTML += `<output class='alerta'>A ingestão de 90 à 120 ml por dia de sumos de fruta pode curar o escorbuto.</output>`;
		}

		else if(this.farmaco=="paracetamol-sup"){
			doseEposologia.innerHTML += `<output class='alerta'>Por via rectal é menos activo e o tratamento mais caro do que por via oral pelo que os supositórios só devem ser usados quando a via oral não é possível.</output>`;
		}

		else if(this.farmaco=="bisacodil"){
			doseEposologia.innerHTML += `<output class='alerta'>Geralmente o efeito é obtido 10 à 12 horas após a administração.</output>`;
		}
	}

	/********** MÉTODOS DE IMPRESSAO DE DOSES **********/
	mostrarDose(dose, pos){
		if(this.farmaco=="salbutamol-neb"){doseEposologia.innerHTML = `<output>Inalar por nebulização: ${dose} diluido(s) em 4 ml de soro fisiológico ${pos}.</output>`;}
		else if(this.farmaco=="paracetamol-sup"){doseEposologia.innerHTML = `<output>Introduzir no recto: ${dose} ${pos}.</output>`;}
		else {doseEposologia.innerHTML = `<output>Tomar: ${dose} ${pos}.</output>`;}
		this.mostrarAlerta();
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
			/***** ARTEMETER + LUMEFANTRINA (Fonte: Normas de Tratamento de Malária em Moçambique)*****/
			if(farmaco=="al"){
				if(peso<5){this.naoRecomendado(); return false;}
				else if(peso<15){dose=1;}
				else if(peso<25){dose=2;}
				else if(peso<35){dose=3;}
				else if(peso>=35){dose=4;}
			} 
			/***** QUININA 300MG (Fonte: Normas de Tratamento de Malária em Moçambique) *****/
			else if(farmaco=="quinina"){
				if(peso<10){dose="1/4";}
				else if(peso<=15){dose="1/2";}
				else if(peso<=25){dose="3/4";}
				else if(peso<=35){dose=1;}
				else if(peso>35){dose=2;}
			}

			/***** METOCLOPRAMIDA *****/
			else if(farmaco=="metoclopramida-cp"){
				if(peso<=19){this.considerMetoclopramidaSusp(); return false;}
				else if(peso<=29){dose='1/4';}
				else if(peso<=34){dose='1/2';}
				else{dose=1;}
			}

			/***** PARACETAMOL COMP *****/
			else if(farmaco=="paracetamol-cp"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){dose='1/4';}
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
			else if(farmaco=="paracetamol-sup"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){dose='1/2';}
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
			else if(farmaco=="codeina"){
				if(idade!=""){
					if(this.tipoidade=="m"){
						let idademeses = this.idade;

						if(idademeses<12){
							this.contraIndicado();
							return false;
						}

						else{
							dose = new Dosecomp(farmaco, doseporkg, dosagem, posologia, this.peso);
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
							dose = new Dosecomp(farmaco, doseporkg, dosagem, posologia, this.peso);
							dose.calcularDose();
							return false;
						}
					}
				}
				else{this.preencherIdade(); return false;}
			}

			/***** CODEINA SUSP*****/
			else if(farmaco=="codeina-susp"){
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
			else if(farmaco=="mebendazol-100"){
				if(peso<20){dose="1/2";}
				else if(peso>=20){dose=1;}
			} // Para o cálculo da dose só a idade é suficiente.

			/***** SALBUTAMOL NEBULIZACAO *****/
			else if(farmaco=="salbutamol-neb"){
				dose = (0.03*peso).toFixed(1);
				if(dose>1){
					dose = '1.0';
				}
			} // Somente o Peso;
			
			else if(farmaco=="vitamina-c") {dose = 1;}
		}

		/***** CÁLCULO DA DOSE DE ACORDO COM A IDADE *****/
		else if(idade!=""){
			if(farmaco=="vitamina-c") {dose = 1;}

			else if(this.tipoidade=="m"){
				let idademeses = this.idade;

				/***** ARTEMETER + LUMEFANTRINA (Fonte: Normas de Tratatamento de Malária em Moçambique)*****/
				if(farmaco=="al"){
					if(idademeses<12){this.naoRecomendado(); return false;}
					else if(idademeses<=60){dose=1;}
					else if(idademeses<=96){dose=2;}
					else if(idademeses<=144){dose=3;}
					else if(idademeses>144){dose=4;}
				}

				/***** QUININA 300MG (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
				else if(farmaco=="quinina"){
					if(idademeses<12){dose="1/4";}
					else if(idademeses<=60){dose="1/2";}
					else if(idademeses<=96){dose="3/4";}
					else if(idademeses<=144){dose=1;}
					else if(idademeses>144){dose=2;}
				}

				/*****  PARACETAMOL COMP *****/
				else if(farmaco=="paracetamol-cp"){
					if(idademeses<3){this.preencherPeso(); return false;}
					else if(idademeses<12){dose='1/4';}
					else if(idademeses<=60){dose='1/2';}
					else if(idademeses>60){dose=1;}
				}

				/*****  PARACETAMOL SUP *****/
				else if(farmaco=="paracetamol-sup"){
					if(idademeses<3){this.preencherPeso(); return false;}
					else if(idademeses<12){dose='1/2';}
					else if(idademeses<=60){dose=1;}
					else if(idademeses>60){dose=2;}
				}

				/***** DICLOFENAC *****
				else if(farmaco=="diclofenac"){
					if(idademeses<24){this.naoRecomendado(); return false;}
					else{this.preencherPeso(); return false;}
				}*/

				/***** CODEINA *****/
				else if(farmaco=="codeina"){
					if(idademeses<12){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA - SUSP *****/
				else if(farmaco=="codeina-susp"){
					if(idademeses<12){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				// FARMACOS QUE NECESSITAM SÓ DA IDADE //
				/*****  BUTILESCOPOLAMINA *****/
				else if(farmaco=="buscopam"){
					if(idademeses<=3){dose='1/4';}
					else if(idademeses<36){dose='1/2';}
					else if((idademeses<=144) || (idademeses>144)){dose=1;}
				}  

				/***** METOCLOPRAMIDA *****/
				else if(farmaco=="metoclopramida-cp"){
					if(idademeses<60){this.considerMetoclopramidaSusp(); return false;}
					else if(idademeses<108){dose='1/4';}
					else if(idademeses<=168){dose='1/2';}
					else{dose=1;}
				}

				/***** ALBENDAZOL *****/
				else if((farmaco=="albendazol-200") || (farmaco=="albendazol-400")){
					if(idademeses<24){
						(farmaco=="albendazol-200" ? dose=1 : dose='1/2');
					}
					else if(idademeses>=24){
						(farmaco=="albendazol-200" ? dose=2 : dose=1);
					}
				}

				/***** ACICLOVIR *****/
				else if(farmaco=="aciclovir"){
					if(idademeses<=1){dose="1/4";}
					else if(idademeses<24){dose="1/2";}
					else if(idademeses>=24){dose=1;}
				}

				/***** COTRIMOXAZOL COMP *****/
				else if(farmaco=="ctz-cp"){
					if(idademeses<=5){dose='1/4';}
					else if(idademeses<=60){dose='1/2';}
					else if(idademeses<=144){dose=1;}
					else if(idademeses>144){dose=2;}
				}

				/***** COTRIMOXAZOL SUSP *****/
				else if(farmaco=="ctz-susp"){
					if(idademeses<=5){dose=2.5;}
					else if(idademeses<=60){dose=5;}
					else if(idademeses<=144){dose=10;}
					else if(idademeses>144){this.considerCtzTablets(); return false;}
				}

				/***** BiSACODIL *****/
				else if(farmaco=="bisacodil"){
					if(idademeses<48){this.verLactulose(); return false;}
						else if(idademeses<=120){dose = 1;}
						else if(idademeses>120){dose="1 ou 2 (SOS)";}
				}

				/***** LACTULOSE *****/
				else if(farmaco=="lactulose"){
					if(idademeses<12){dose = 2.5;}
					else if(idademeses<=60){dose = 5;}
					else if(idademeses<=144){dose=10;}
					else if(idademeses<=216){dose = 15;}
					else{dose = 20;}				
				}

				/***** PARAFINA LIQUIDA *****/
				else if(farmaco=="parafina_liquida"){
					if(idademeses<36){this.contraIndicado(); return false;}
					else if(idademeses<=60){dose = 10;}
					else if(idademeses<=144){dose=15;}
					else{dose = 20;}
				}

				/***** SALBUTAMOL *****/
				else if(farmaco=="salbutamol-susp"){
					if(idademeses<=72){dose=2.5;}
					else if(idademeses<=144){dose = 5;}
					else if(idademeses>144){dose=10;}
				}

				/***** SALBUTAMOL-CP *****/
				else if(farmaco=="salbutamol-cp"){
					if(idademeses<=72){dose="1/2";}
					else if(idademeses<=144){dose = 1;}
					else if(idademeses>144){dose=2;}
				}

				/***** Sulfato ferroso *****/
				else if(farmaco=="sulfato-ferroso"){
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

					dose = dose.toLocaleString();
				}

				/***** Multivitaminas *****/
				else if(farmaco=="multivitaminas-susp"){
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
				if(farmaco=="al"){ 
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<=5){dose=1;}
					else if(idadeanos<=8){dose=2;}
					else if(idadeanos<=12){dose=3;}
					else if(idadeanos>12){dose=4;}	
				}

				/***** QUININA 300MG (Fonte: Normas de Tratatamento de Malária em Moçambique) *****/
				if(farmaco=="quinina"){
					if(idadeanos<1){dose="1/4";}
					else if(idadeanos<=5){dose="1/2";}
					else if(idadeanos<=8){dose="3/4";}
					else if(idadeanos<=12){dose=1;}
					else if(idadeanos>12){dose=2;}
				}

				/*****  PARACETAMOL *****/
				else if(farmaco=="paracetamol-cp"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<=5){dose='1/2';}
					else if(idadeanos>5){dose=1;}
				}

				/*****  PARACETAMOL SUP *****/
				else if(farmaco=="paracetamol-sup"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<=5){dose=1;}
					else if(idadeanos>5){dose=2;}
				}

				/***** Diclofenac *****
				else if(farmaco=="diclofenac"){
					if(idadeanos<2){this.naoRecomendado(); return false;}
					else{this.preencherPeso(); return false;}
				}*/

				/***** CODEINA *****/
				else if(farmaco=="codeina"){
					if(idadeanos<1){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				/***** CODEINA - SUSP *****/
				else if(farmaco=="codeina-susp"){
					if(idadeanos<1){this.contraIndicado(); return false;}
					else{this.preencherPeso(); return false;}
				}

				// FARMACOS QUE NECESSITAM EXCLUSIVAMENTE DA IDADE //
				/*****  BUTILESCOPOLAMINA *****/
				else if(farmaco=="buscopam"){
					if(idadeanos<1){this.especificarMeses(); return false;}
					else if(idadeanos<3){dose='1/2'}
					else if((idadeanos<=12) || (idadeanos>12)){dose=1;}
				}

				/***** METOCLOPRAMIDA *****/
				else if(farmaco=="metoclopramida-cp"){
					if(idadeanos<5){this.considerMetoclopramidaSusp(); return false;} //<5 nao faz nem 1/4cp;
					else if(idadeanos<9){dose='1/4';}
					else if(idadeanos<=14){dose='1/2';}
					else{dose=1;}
				}

				/***** ALBENDAZOL *****/
				else if((farmaco=="albendazol-200") || (farmaco=="albendazol-400")){
					if(idadeanos<2){(farmaco=="albendazol-200" ? dose=1 : dose='1/2');}
					else if(idadeanos>=2){(farmaco=="albendazol-200" ? dose=2 : dose=1);}
				}

				/***** ACICLOVIR *****/
				else if(farmaco=="aciclovir"){
						if(idadeanos<2){dose="1/2";}
						else if(idadeanos>=2){dose=1;}
				}

				/***** COTRIMOXAZOL COMP *****/
				else if(farmaco=="ctz-cp"){
					if(idadeanos<1){this.especificarMeses(); return false;} //<2m: kernicterus; <6: 1/4cp e <12: 1/2;
					else if(idadeanos<=5){dose='1/2';}
					else if(idadeanos<=12){dose=1;}
					else if(idadeanos>12){dose=2;}
				}

				/***** COTRIMOXAZOL SUSP *****/
				else if(farmaco=="ctz-susp"){
					if(idadeanos<1){this.especificarMeses(); return false;} //<2m: kernicterus; <6: 1/4cp e <12: 1/2;
					else if(idadeanos<=5){dose=5;}
					else if(idadeanos<=12){dose=10;}
					else if(idadeanos>12){this.considerCtzTablets(); return false;}
				}
				/***** BiSACODIL *****/
				else if(farmaco=="bisacodil"){
					if(idadeanos<4){this.verLactulose(); return false;} 
					else if(idadeanos<=10){dose = 1;}
					else if(idadeanos>10){dose="1 ou 2 (SOS)";}
				}
				/***** LACTULOSE *****/
				else if(farmaco=="lactulose"){
					if(idadeanos<1){dose = 2.5;}
					else if(idadeanos<=5){dose = 5;}
					else if(idadeanos<=12){dose = 10;}
					else if(idadeanos<=18){dose = 15;}
					else{dose = 20;}
				}
				/***** Parafina Liquida *****/
				else if(farmaco=="parafina_liquida"){
					if(idadeanos<3){this.contraIndicado(); return false;}
					else if(idadeanos<=5){dose = 10;}
					else if(idadeanos<=12){dose = 15;}
					else{dose = 20;}
				}
				/***** SALBUTAMOL *****/
				else if(farmaco=="salbutamol-susp"){
					if(idadeanos<=6){dose=2.5;}
					else if(idadeanos<=12){dose = 5;}
					else if(idadeanos>12){dose=10;}
				}
				/***** SALBUTAMOL-CP *****/
				else if(farmaco=="salbutamol-cp"){
					if(idadeanos<=6){dose="1/2";}
					else if(idadeanos<=12){dose = 1;}
					else if(idadeanos>12){dose=2;}
				}
				/***** SALBUTAMOL NEBULIZAVEL *****/
				else if(farmaco=="salbutamol-neb"){this.preencherPeso(); return false;}
				/***** Sulfato ferroso *****/
				else if(farmaco=="sulfato-ferroso"){
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
					else{
						dose = 200000;
						dose = dose.toLocaleString();
					}	
				}
				/***** Multivitaminas *****/
				else if(farmaco=="multivitaminas-susp"){
					if(idadeanos<=11){
						dose = 5;
						this.posologia = 1;
					}
					else{dose = 5;}
				}
			}
		}
		
		this.mostrarDose(`${dose} ${this.retornarFormafarmaceutica}`, this.retornarPosologia);
	}
}

class Doseparenteral extends Dosepadrao{
	constructor(doseporkg, dosagem, diluicao){
		super(farmaco, formafarmaceutica, posologia, idade.value, tipoidade.value, peso.value);
		this.doseporkg = doseporkg;
		this.dosagem = dosagem;
		this.diluicao = diluicao;
	}

	get retornarPosologia(){
		let pos;
		if(this.farmaco=="benzatina") {
			pos = ` dose única na sífilis recente (primária, secundária e latente precoce) ou uma dose por semana durante 3 semanas na sífilis tardia (latente tardia e terciária).`;
		}

		else if(this.posologia == 1){
			pos = " dose única diária.";
			if(this.farmaco=="vitamina-b12"){pos = " 3 vezes por semana (em dias alternados) durante 2 semanas.";}
			if(this.farmaco=="var"){pos = " nos dias 0, 3, 7, 14, 30 e 90.";}
			if((this.farmaco=="aminofilina-inj") || (this.farmaco=="diazepam-inj")){pos = ".";}
		}
		else if(this.posologia == 2){pos = " de 12 em 12 horas.";}

		else if(this.posologia == 3){
			pos = " de 8 em 8 horas.";
		}

		return pos;
	}

	/******** METODOS COMPLEMENTARES ************/
	get retornarFormafarmaceutica(){
		let forma;

		if(this.farmaco=="var"){forma = "ml";}
		else if((this.farmaco=="benzatina") ||(this.farmaco=="procaina") ||(this.farmaco=="igar")){forma = "U.I";}
		else {forma = "mg";}
		return forma;
	}

	get retornarVia(){
		let via;

		if(this.formafarmaceutica=="inj-im"){
			via = "I.M profunda";
			if(this.farmaco=="var"){
				via = "I.M no músculo deltóide";
			}
		}
		else if(this.formafarmaceutica=="inj-ev"){
			if(this.farmaco=="diazepam-inj"){via="E.V lento";}
			else if(this.farmaco=="aminofilina-inj"){via="E.V lentamente durante 20 à 30 minutos";}
			else {via = "E.V";}
		}
		return via;
	}

	/****************** Metodo de precaucao ****************/
	mostrarAlerta(){
		if((this.farmaco=="benzatina")||(this.farmaco=="procaina")){
			doseEposologia.innerHTML += `<output class='observacao'>Nunca administrar por via endovenosa ou subcutânea.</output>`;
		}
		else if(this.farmaco=="ceftriaxona"){
			// Determinacao da dose em ml
			let dose = this.doseporkg * this.peso;

			if(dose>1000){
				dose=1000;
			}
			let doseml = dose * 10 / 1000;

			doseEposologia.innerHTML += `<output class='alerta'>Para administração endovenosa, diluir 1 g de ceftriaxona em pó em 10 ml de água esterilizada para injecções e neste caso administrar: <span class="destacar">${doseml} ml durante 2 à 4 minutos</span>.</output>`

			doseEposologia.innerHTML += `<output class='observacao'>Para administração endovenosa, nunca usar o diluente que acompanha as ampolas para uso intramuscular.</output>`;
		}
		
		else if(this.farmaco=="vitamina-b12"){
			doseEposologia.innerHTML += `<output class='alerta'>Antes de decidir administrar a vitamina B12, procurar sempre esclarecer a causa da anemia megaloblástica e corrigí-la se possivel. Se a causa não for corrigível, administrar uma dose de manutenção de 1 mg a cada 3 meses.</output>`;
		}
		else if(this.farmaco=="aminofilina-inj"){
			doseEposologia.innerHTML += `<output class='alerta obs'>Observação: a administração rápida pode provocar convulsões, arritmias cardíacas, hipotensão arterial e hemorragia digestiva.</output>`;
		}
		else if(this.farmaco=="var"){
			doseEposologia.innerHTML += `<output class='alerta'>
			Dia 0: no primeiro contacto pós-exposição;</br>
			Dias 3, 7, 14, 30: após a primeira dose;</br>
			Dia 90: noventa dias após o contacto suspeito (a partir do dia em que ocorreu a mordedura ou arranhadura). Esta última é facultativa (pode ou não ser administrada).</output>`;

			doseEposologia.innerHTML+= `<output class="alerta">Num indivíduo anteriormente vacinado adequadamente, dar apenas 2 doses de reforço nos dias 0 e 3.</output>`;
			
			doseEposologia.innerHTML+= `<output class="alerta">Devido à deficiente resposta imunitária, evitar a injecção na região nadegueira. Administrar sempre na região deltóideia ou nas crianças mais pequenas na face antero-lateral da coxa.</output>`;
		}

		else if(this.farmaco=="diazepam-inj"){
			let doserectal = ((0.5 * this.peso)* this.diluicao / this.dosagem).toFixed(1);
			if(doserectal>2){
				doserectal = "2.0";
			}
			doseEposologia.innerHTML += `<output class='alerta'>Se não tiver acesso venoso, administrar 
				${doserectal} ml por via rectal.</span> De referir que esta dose é de diazepam como anti-convulsivante.</output>`;
		}
	}

	/****************** IMPRESSAO DA DOSE ****************/

	mostrarDose(dose, forma, doseml, pos, via){
		if((this.retornarFormafarmaceutica=="U.I") && (this.farmaco != "igar")){
			doseml = "";
		}

		if(this.farmaco=="igar"){
			doseEposologia.innerHTML = `<output>Injectar ${dose} ${forma} ${doseml}
			por via ${via} e infiltrar ${dose} ${forma} ${doseml} à volta da zona da mordedura.</output>`;
		}
		else {
			doseEposologia.innerHTML = `<output>Administrar: ${dose} ${forma} ${doseml} por via ${via}${pos}</output>`; // Aproximar ${via}${pos} aqui e deixar um espaço vazio no get posologia
		}
		
		this.mostrarAlerta();
	}

	/****************** METODO PRINCIPAL ****************/
	calcularDose(){
		
		let peso = this.peso;
		let idade = this.idade;

		let dosemg = (this.doseporkg * peso);

		// Formatacao para nao apresentar nenhum ponto flutuante ou casa decimal
		if((this.farmaco=="ceftriaxona")
			||(this.farmaco=="paracetamol-inj")
			||(this.farmaco=="aminofilina-inj")
			||(this.farmaco=="prednisolona-inj")){dosemg = dosemg.toFixed(0)}
		
		else if((this.farmaco=="benzatina") ||(this.farmaco=="procaina")) {
			dosemg = dosemg.toLocaleString();
		}
		else {
			dosemg = dosemg.toFixed(1);
		}

		let doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);

		/************ DOSES MÁXIMAS  ************/
		if(this.farmaco=="ceftriaxona"){
			if((dosemg>1000) && (doseml>4)){
				dosemg = 1000;
				doseml = '4.0';
			}
		}
	
		else if(this.farmaco=="diazepam-inj"){
			if(dosemg>=10){dosemg = 10;}
			if(doseml>2){doseml='2.0';}
		}
		else if(this.farmaco=="vitamina-b12"){
			dosemg = 1;
			doseml = 1;
		}
		else {
			/************ CALCULO DE ACORDO COM O PESO ************/
			if(peso!=""){
				if(this.farmaco=="metoclopramida-inj"){
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

				else if(this.farmaco=="procaina"){
					if(idade!=""){		
						if(this.tipoidade=="m"){
							let idademeses = idade;

							if(idademeses<144){
								dosemg = (this.doseporkg * peso);
								if(dosemg>=1200000){dosemg = 1200000;}
							}
							else if (idademeses <= 168) {dosemg = 1200000;} // dose em UI
						}
						else if(this.tipoidade=="y"){
							let idadeanos = idade;

							if(idadeanos<12){
								dosemg = (this.doseporkg * peso);
								if(dosemg>=1200000){dosemg = 1200000;}
							}
							else if(idadeanos <= 14){dosemg = 1200000;} // dose em UI
						}
					}
					else{
						this.preencherIdade();
						return false;
					}
					
					dosemg = dosemg.toLocaleString();
				}
				else if(this.farmaco=="igar"){
					dosemg = (this.doseporkg * peso/2).toFixed(0);
					doseml = (dosemg * this.diluicao / this.dosagem).toFixed(1);
				}
			}

			/************ CALCULO DE ACORDO COM A IDADE ************/
			else if(idade!=""){
				if(this.farmaco=="var"){
					dosemg = "1"; // dose em mililitros;
				}
				// Idade em meses
				else if(this.tipoidade=="m"){
					let idademeses = idade;

					if(this.farmaco=="metoclopramida-inj"){
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

					else if(this.farmaco=="procaina"){
						if(idademeses<144){this.preencherPeso(); return false;}
						else{
							dosemg = 1200000;
							dosemg = dosemg.toLocaleString();
						}
					}
				}

				/************ iDADE EM ANOS ************/
				else if(this.tipoidade=="y"){
					let idadeanos = idade;

					if(this.farmaco=="metoclopramida-inj"){
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

					else if(this.farmaco=="procaina"){
						if(idadeanos<12){this.preencherPeso(); return false;}
						else{
							dosemg = 1200000;
							dosemg = dosemg.toLocaleString();
						}
					}
				}
			}	
		}

		doseml = `(${doseml} ml)`; // Para aparecer a dose e a Unidade 'ml';
		if(
			(this.farmaco=="benzatina") || 
			(this.farmaco=="procaina") ||
			(this.farmaco=="var")){doseml="";}
		
		this.mostrarDose(dosemg, this.retornarFormafarmaceutica, doseml, this.retornarPosologia, this.retornarVia);
	}	
}


/* Validacao */
function preencherPeso(){
    doseEposologia.innerHTML = `<output class='observacao'>O campo de peso precisa ser preenchido.</output>`;
}

function errodePeso(){
	doseEposologia.innerHTML = `<output class='observacao'>Observação: o peso deve ser &ge; 3 e &le; 45.</output>`;
}

function errodeIdade(idade){
	doseEposologia.innerHTML = `<output class='observacao'>Observação: a idade deve ser &ge; 1 mês e &le;  ${idade}. <output>`;
}

function resetarDoseEposologia() {doseEposologia.innerHTML = "";}


function omitirCampo() {
	let campo_necessario = farmacos.options[farmacos.selectedIndex].dataset.camporequired;
	let paragrafo_de_idade = document.querySelector(".ancestral-de-idade");
	let paragrafo_de_peso = document.querySelector(".ancestral-de-peso");
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

				if(farmaco=="procaina"){
					if(idademeses>=144){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide"); // Omissao do peso se idade >= 12 anos;
					}
					else if(idademeses<144){
						paragrafo_de_peso.classList.remove("hide"); // Desomissao se idade < 12 anos;
					}
				}

				else if((farmaco=="codeina") || (farmaco=="codeina-susp")){
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

				if(farmaco=="procaina"){
					if(idadeanos>=12){
						peso.value = "";
						paragrafo_de_peso.classList.add("hide"); // Omisssao de Peso se idade >= 12 anos
					}
					else if(idadeanos<12){
						paragrafo_de_peso.classList.remove("hide");
					}
				}

				// Omissao de peso se tipoidade for = anos (independente da idade)
				else if((farmaco=="codeina") || (farmaco=="codeina-susp")){
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


let farmaco, dosagem, diluicao, formafarmaceutica, doseporkg, posologia;
function instanciarClasse() {

	omitirCampo();
    farmaco = farmacos.options[farmacos.selectedIndex].value;
    dosagem = farmacos.options[farmacos.selectedIndex].dataset.dos;
	diluicao = farmacos.options[farmacos.selectedIndex].dataset.dil;
	formafarmaceutica = farmacos.options[farmacos.selectedIndex].dataset.forma;
    doseporkg = farmacos.options[farmacos.selectedIndex].dataset.doseporkg;
    posologia = farmacos.options[farmacos.selectedIndex].dataset.pos;
    let tipodose = farmacos.options[farmacos.selectedIndex].dataset.tipodose;

	
	if(peso.value!="") {
		if((peso.value < 3) || (peso.value > 45)) {
			errodePeso();
			return false;

		}
		
		if(tipodose == "dosecomp") {
			let dose = new Dosecomp(farmaco, doseporkg, dosagem, posologia, peso.value);
			dose.calcularDose();
		}
		else if(tipodose == "dosesusp") {
			let dose = new Dosesusp(diluicao);
			dose.calcularDose();
		}
		else if(tipodose == "padrao") {
			let dose = new Dosepadrao(farmaco, formafarmaceutica, posologia, idade.value, tipoidade.value, peso.value);
			dose.calcularDose();
		}
		else if(tipodose == "parenteral") {
			let dose = new Doseparenteral(doseporkg, dosagem, diluicao);
			dose.calcularDose();
		}
		else {
			resetarDoseEposologia();
		}
	}
	else if(idade.value != "") {
		
		if(tipoidade.value=="m"){
			let idademeses = idade.value;
			if((idademeses<1)||(idademeses>168)){
				errodeIdade("168 meses");
				return false;
			}
			
		}
		else if(tipoidade.value=="y"){
			let idadeanos = idade.value;
			if(idadeanos>14){
				errodeIdade("14 anos");
				return false;
			}
		}

		if(tipodose == "dosecomp") {
			let dose = new Dosecomp(farmaco, doseporkg, dosagem, posologia, peso.value);
			dose.calcularDose();
		}
		else if(tipodose == "dosesusp") {
			let dose = new Dosesusp(diluicao);
			dose.calcularDose();
		}
		else if(tipodose == "padrao") {
			let dose = new Dosepadrao(farmaco, formafarmaceutica, posologia, idade.value, tipoidade.value, peso.value);
			dose.calcularDose();
		}
		else if(tipodose == "parenteral") {
			let dose = new Doseparenteral(doseporkg, dosagem, diluicao);
			dose.calcularDose();
		}
		else {
			resetarDoseEposologia();
		}	
	}
	else {
		resetarDoseEposologia();
	}	
}


let idade, tipoidade, peso, farmacos, doseEposologia;
function init() {
	idade = document.querySelector("#idade");
	tipoidade = document.querySelector("#ext");

    peso = document.querySelector("#peso");
    farmacos = document.querySelector("#farmacos");
    doseEposologia = document.querySelector("#dose-e-posologia");
 
	farmacos.addEventListener("change", instanciarClasse);
	tipoidade.addEventListener("change", instanciarClasse);
	idade.addEventListener("mouseup", instanciarClasse);
	idade.addEventListener("keyup", instanciarClasse);
    peso.addEventListener("mouseup", instanciarClasse);
    peso.addEventListener("keyup", instanciarClasse);
}
window.addEventListener("load", init);