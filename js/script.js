$(function(){
	
	var divReponses = $('#rep1, #rep2, #rep3, #rep4');

	var question1 = {
		titre: "Combien y a t-il de nains autour de Blanche Neige ?",
		reponses: [5, 6, 7, 8],
		bonneReponse: 7,
		ReponsesUtilisateur : [],
		
	};


	var question2 = {
		titre: "Qui est l'inventeur de l'ordinateur ?",
		reponses: ["Brad Pitt", "Steve Jobs", "Ronald McDonald", "Alan Turing"],
		bonneReponse: 3,
		ReponsesUtilisateur : [],
		
	};


	var question3 = {
		titre: "Quelle est la couleur du cheval blanc d'henri IV ?",
		reponses: ["Jaune", "Blanc", "Gris", "Noir"],
		bonneReponse: 1,
		ReponsesUtilisateur : [],
		
	};

	var question4 = {
		titre: "Qui est l'auteur du livret de la Traviata (La Dame aux camélias) ?",
		reponses: ["Le père d\'Alexandre Dumas", "Alexandre Dumas", "Le fils d\'Alexandre Dumas", "Le neveu d\'Alexandre Dumas"],
		bonneReponse: 2,
		ReponsesUtilisateur : [],
		
	};

	var question5 = {
		titre: "Combien y a t il de départements français ?",
		reponses: [98, 99, 100, 101],
		bonneReponse: 3,
		ReponsesUtilisateur : [ ],
		
	};

	var question6 = {
		titre: "Quel est le langage de programmation le plus utilisé ?",
		reponses: ["C", "C#", "JavaScript", "ActionScript"],
		bonneReponse: 0,
		ReponsesUtilisateur : [ ],
		
	};

	var question7 = {
		titre: "Combien y a t il de pays membres dans UE en 2016 ?",
		reponses: [20, 24, 28, 35],
		bonneReponse: 2,
		ReponsesUtilisateur : [ ],
		
	};

	var question8 = {
		titre: "Quel pays ne figure pas parmi les membres de UE (2016) ?",
		reponses: ["Suède", "Norvège", "Danemark", "Finlande"],
		bonneReponse: 1,
		ReponsesUtilisateur : [ ],
		
	};

	var question9 = {
		titre: "Quelle couleur n'est pas présente dans un arc en ciel ?",
		reponses: ["jaune", "Vert", "Violet", "Marron"],
		bonneReponse: 3,
		ReponsesUtilisateur : [ ],
		
	};


	var question10 = {
		titre: "Combien de jours y a t il dans une année bissextile ?",
		reponses: [364, 365, 366, 367],
		bonneReponse: 2,
		ReponsesUtilisateur : [ ],
		
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

				//return questions[activeQuestion];	
	}

	findQuestion(activeQuestion);

	
	/*var findReponse = function(choixReponse){

		$(divReponses).on("click", function(){
			var clic = $(event.target);
			var choix = this.id;

			if ((questions[0].bonneReponse === 7) && (choix === "rep3")) {
				clic.addClass('vert');
				console.log(question1.bonneReponse);
			}
			else if(choix === 'rep1' || choix === 'rep2' || choix === 'rep4'){
            	clic.addClass('rouge');
    		};
		});
	};

	findReponse();*/

		



	/* ------------------affichage questions et reponses suivantes au clic---------*/


	$("#next").on('click', function(event){

		if (activeQuestion < 9) {
				activeQuestion++ ;
				//console.log(activeQuestion);
		} ;
		findQuestion(activeQuestion);
		findReponse();
		$(divReponses).removeClass('rouge vert');

	});
	/* ------------------affichage questions et reponses précedentes au clic---------*/

	$("#prev").on('click', function(event){
	    			
		if (activeQuestion > 0) {
				activeQuestion-- ;
		} ;

		findQuestion(activeQuestion);
		$(divReponses).removeClass('rouge vert');

	});

});
		
