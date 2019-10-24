(function() {

  var initialiser = function() {
    window.addEventListener("hashchange", naviguer);
    jeuDAO = new JeuDAO();
    naviguer();
  };

  var naviguer = function() {

    var hash = window.location.hash;

    if (!hash) {

      var listeJeuDonnee = jeuDAO.lister();
      var listeJeuVue = new ListeJeuVue(listeJeuDonnee);
      listeJeuVue.afficher();
    } else if (hash.match(/^#ajouter-jeu/)) {

      var ajouterJeuVue = new AjouterJeuVue(actionAjouterJeu);
      ajouterJeuVue.afficher();
    } else {

      var listeJeuDonnee = jeuDAO.lister();
      var naviguation = hash.match(/^#jeu\/([0-9]+)/);
      var idJeu = naviguation[1];

      var jeuVue = new JeuVue(listeJeuDonnee[idJeu]);
      jeuVue.afficher();
    }

    //var ajouterJeuVue = new AjouterJeuVue(actionEnregistrerJeu);
    //ajouterJeuVue.afficher();
  }

  var actionAjouterJeu = function(jeu) {
    jeuDAO.ajouter(jeu);
    window.location.hash = "#";
  };

  initialiser();

})();
