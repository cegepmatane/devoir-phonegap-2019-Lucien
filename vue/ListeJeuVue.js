var ListeJeuVue = (function() {
  pageListeJeu = document.getElementById("page-liste-jeu").innerHTML;

  return function(listeJeuDonnee) {
    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageListeJeu;

      var listeJeu = document.getElementById('liste-jeu');

      var textLi = "";

      for (var numeroJeu in listeJeuDonnee) {
        textLi += '<li><a href="#jeu/' + listeJeuDonnee[numeroJeu].id + '">' +
          listeJeuDonnee[numeroJeu].nom + "</a>" + '&nbsp;&nbsp;<a href="#modifier-jeu/' + listeJeuDonnee[numeroJeu].id + '">' +
            "Modifier </a></li>";
      }
      listeJeu.innerHTML = textLi;
    }
  }
})();
