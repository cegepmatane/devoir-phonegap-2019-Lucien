(function() {

  var listeJeuDonnee = [
    new Jeu("League Of Legend","Riot Games","5vs5 dans la faille de l'invocateur",0),
    new Jeu("Overwatch","Blizzard","Fps en 6vs6 inspiré de l'univers Blizzard",1),
    new Jeu("Rocket League","Psyonix","Jeux de foot avec des voitures",2)
  ];

  var initialiser = function() {
    window.addEventListener("hashchange", naviguer);
    naviguer();
  }

  var naviguer = function() {

    var hash = window.location.hash;

    if (!hash) {

      var listeJeuVue = new ListeJeuVue(listeJeuDonnee);
      listeJeuVue.afficher();
    } else {

      var naviguation = hash.match(/^#jeu\/([0-9]+)/);
      var idJeu = naviguation[1];

      var jeuVue = new JeuVue(listeJeuDonnee[idJeu]);
      jeuVue.afficher();
    }

    //var ajouterJeuVue = new AjouterJeuVue(actionEnregistrerJeu);
    //ajouterJeuVue.afficher();
  }

  var actionEnregistrerJeu = function(jeu) {
    //...
  }

  initialiser();

})();
