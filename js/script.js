$(function(){
	
	var divReponses = $('#rep1, #rep2, #rep3, #rep4');

	var question1 = {
		titre: "Combien y a t-il de nains autour de Blanche Neige ?",
		reponses: [5, 6, 7, 8],
		bonneReponse: 7,
		reponsesUtilisateur : [],
		
	};


	var question2 = {
		titre: "Qui est l'inventeur de l'ordinateur ?",
		reponses: ["Brad Pitt", "Steve Jobs", "Ronald McDonald", "Alan Turing"],
		bonneReponse: 'Alan Turing',
		reponsesUtilisateur : [],
		
	};


	var question3 = {
		titre: "Quelle est la couleur du cheval blanc d'henri IV ?",
		reponses: ["Jaune", "Blanc", "Gris", "Noir"],
		bonneReponse: "Blanc",
		reponsesUtilisateur : [],
		
	};

	var question4 = {
		titre: "Qui est l'auteur du livret de la Traviata (La Dame aux camélias) ?",
		reponses: ["Le père d\'Alexandre Dumas", "Alexandre Dumas", "Le fils d\'Alexandre Dumas", "Le neveu d\'Alexandre Dumas"],
		bonneReponse: "Le fils d\'Alexandre Dumas",
		reponsesUtilisateur : [],
		
	};

	var question5 = {
		titre: "Combien y a t il de départements français ?",
		reponses: [98, 99, 100, 101],
		bonneReponse: 101,
		reponsesUtilisateur : [ ],
		
	};

	var question6 = {
		titre: "Quel est le langage de programmation le plus utilisé ?",
		reponses: ["C", "C#", "JavaScript", "ActionScript"],
		bonneReponse: "C",
		reponsesUtilisateur : [ ],
		
	};

	var question7 = {
		titre: "Combien y a t il de pays membres dans UE en 2016 ?",
		reponses: [20, 24, 28, 35],
		bonneReponse: 28,
		reponsesUtilisateur : [ ],
		
	};

	var question8 = {
		titre: "Quel pays ne figure pas parmi les membres de UE (2016) ?",
		reponses: ["Suède", "Norvège", "Danemark", "Finlande"],
		bonneReponse: "Norvège",
		reponsesUtilisateur : [ ],
		
	};

	var question9 = {
		titre: "Quelle couleur n'est pas présente dans un arc en ciel ?",
		reponses: ["jaune", "Vert", "Violet", "Marron"],
		bonneReponse: "Marron",
		reponsesUtilisateur : [ ],
		
	};


	var question10 = {
		titre: "Combien de jours y a t il dans une année bissextile ?",
		reponses: [364, 365, 366, 367],
		bonneReponse: 366,
		reponsesUtilisateur : [ ],
		
	};

	var questions = [
		question1, question2, question3, question4, question5, question6, question7, question8, question9, question10
	];

/* ------------------affichage questions et réponses---------*/

	var activeQuestion = 0;

	var findQuestion = function(activeQuestion){ 

			$("#question").html(questions[activeQuestion].titre);
				for (var i = 0; i < divReponses.length; i++) {
					$(divReponses[i]).html(questions[activeQuestion].reponses[i]);

				};

	};

	findQuestion(activeQuestion);
	
	var point = 0;
	
	$('#rep1').on ("click", function (event) {
		
			var choixUtilisateur = $(event.target);
 			var tabReponses = questions[activeQuestion].reponsesUtilisateur;
			var contenuDiv1 = $('#rep1').text();
			

					if (contenuDiv1 == questions[activeQuestion].bonneReponse) {
						
						if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){

							alert('Votre choix est déjà fait ;o)');
							
						}else{

							questions[activeQuestion].reponsesUtilisateur.push(contenuDiv1,'vert');
							choixUtilisateur.addClass('vert');
							
								if (choixUtilisateur.hasClass('vert')) {
									point++;
								};
						};						
							  
					}else{

						if (choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1) {
							alert('Votre choix est déjà fait ;o)');
							
						}else{

							questions[activeQuestion].reponsesUtilisateur.push(contenuDiv1,'rouge');
							choixUtilisateur.addClass('rouge');
							
						}
					};
					
	});

  
	$('#rep2').on ("click", function (event) {
		var choixUtilisateur = $(event.target);
		var tabReponses = questions[activeQuestion].reponsesUtilisateur;
		var contenuDiv2 = $('#rep2').text();

			if (contenuDiv2 == questions[activeQuestion].bonneReponse) {

				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv2,'vert');
					choixUtilisateur.addClass('vert');
					
						if (choixUtilisateur.hasClass('vert')) {
							point++;
						};
				};	
						
			}else {
				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv2,'rouge');
					choixUtilisateur.addClass('rouge');
				};					
					
			};
	});

	$('#rep3').on ("click", function (event) {
		var choixUtilisateur = $(event.target);
		var tabReponses = questions[activeQuestion].reponsesUtilisateur;
		var contenuDiv3 = $('#rep3').text();

			if (contenuDiv3 == questions[activeQuestion].bonneReponse) {

				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv3,'vert');
					choixUtilisateur.addClass('vert');
						if (choixUtilisateur.hasClass('vert')) {
							point++;
						}
				};
			}else {
				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv3,'rouge');
					choixUtilisateur.addClass('rouge');
				};	
			};
			//console.log(point);
	});

	$('#rep4').on ("click", function (event) {
		var choixUtilisateur = $(event.target);
		var tabReponses = questions[activeQuestion].reponsesUtilisateur;
		var contenuDiv4 = $('#rep4').text();

			if (contenuDiv4 == questions[activeQuestion].bonneReponse) {

				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv4,'vert');
					choixUtilisateur.addClass('vert');
					
						if (choixUtilisateur.hasClass('vert')) {
							point++;
						};
				};	
						
			}else {
				if(choixUtilisateur.hasClass('vert') || choixUtilisateur.hasClass('rouge') || tabReponses.length >1){
					alert('Votre choix est déjà fait ;o)');
				}else{
					questions[activeQuestion].reponsesUtilisateur.push(contenuDiv4,'rouge');
					choixUtilisateur.addClass('rouge');
				};		
			};
	});

	/* ------------------affichage questions et reponses suivantes au clic---------*/


	$("#next").on('click', function(event){

		var divReponsesId = ['#rep1', '#rep2', '#rep3', '#rep4'];
		
			
		if(questions[activeQuestion].reponsesUtilisateur.length == 0){
			
				alert('Merci de choisir une réponse');
				
		}else if(activeQuestion >= 9){
		
					alert('Le jeu est terminé');
					
				
		}else if (activeQuestion < 10) {
			
				activeQuestion++ ;
				$(divReponses).removeClass('rouge vert');
				
				for (var i = 0; i < questions[activeQuestion].reponses.length; i++) {
					
					if (questions[activeQuestion].reponsesUtilisateur[0] == questions[activeQuestion].reponses[i]) {
						
						$(divReponsesId[i]).addClass(questions[activeQuestion].reponsesUtilisateur[1]);
					};
				};
		} ;

		findQuestion(activeQuestion);
		point;
	//	console.log(point);
		$("#points").html('Vous avez ' + point + ' points');

	});
	
	/* ------------------affichage questions et reponses précedentes au clic---------*/

	$("#prev").on('click', function(event){

	  var divReponsesId = ['#rep1', '#rep2', '#rep3', '#rep4'];	
	  
	  if(questions[activeQuestion].reponsesUtilisateur.length == 0){
			
				alert('Merci de choisir une réponse');
				
		}else if (activeQuestion > 0) {
			
			activeQuestion-- ;
			
			
			for (var i = 0; i < questions[activeQuestion].reponses.length; i++) {
				if (questions[activeQuestion].reponsesUtilisateur[0] == questions[activeQuestion].reponses[i]) {

					if (divReponses.hasClass('vert') || divReponses.hasClass('rouge')) {

						$(divReponses).removeClass('vert rouge');

						$(divReponsesId[i]).addClass(questions[activeQuestion].reponsesUtilisateur[1]);
					};
				};
			};
		};

		findQuestion(activeQuestion);

	});
	


});