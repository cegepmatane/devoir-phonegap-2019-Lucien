var JeuDAO = function () {

    /*
    var listeJeu = [
        new Jeu("League Of Legend","Riot Games","5vs5 dans la faille de l'invocateur",0),
        new Jeu("Overwatch","Blizzard","Fps en 6vs6 inspiré de l'univers Blizzard",1),
        new Jeu("Rocket League","Psyonix","Jeux de foot avec des voitures",2)
    ];

    this.lister = function () {
        return listeJeu;
    };

    this.ajouter = function (jeu) {
        jeu.id = listeJeu.length;
        listeJeu.push(jeu);
    };

     */

    var listeJeu = null;
    var initialiser = function () {
        if (!listeJeu) {
            listeJeu = [];
        }
    };

    this.lister = function() {
      if (localStorage['jeu']) {
          listeJeu = JSON.parse(localStorage['jeu']);
      }

      for (position in listeJeu) {
          var jeu = new Jeu(listeJeu[position].nom,
                            listeJeu[position].developpeur,
                            listeJeu[position].description,
                            listeJeu[position].id);
          listeJeu[position] = jeu;
      }
      return listeJeu;
    };

    this.ajouter = function(jeu) {

        if (listeJeu.length > 0) {
            console.log("epepepep")
            jeu.id = listeJeu[listeJeu.length - 1].id + 1;
            console.log(jeu.id);
        }
        else {
            jeu.id = 0;
        }

        listeJeu[jeu.id] = jeu;
        localStorage['jeu'] = JSON.stringify(listeJeu);
    };

    this.modifier = function(jeu) {

        listeJeu[jeu.id] = jeu;
        localStorage['jeu'] = JSON.stringify(listeJeu);
    };

    initialiser();
};