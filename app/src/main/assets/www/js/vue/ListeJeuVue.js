var ListeJeuVue = (function() {
  pageListeJeu = document.getElementById("page-liste-jeu").innerHTML;

  return function(listeJeuDonnee) {
    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageListeJeu;

      var listeJeu = document.getElementById('liste-jeu');

      var textLi = "";

      for (var numeroJeu in listeJeuDonnee) {
        textLi += '<li class="collection-item"><a href="#jeu/' + listeJeuDonnee[numeroJeu].id + '"><div>' +
          listeJeuDonnee[numeroJeu].nom + "</a>" + '&nbsp;&nbsp;<a class="secondary-content" href="#modifier-jeu/' + listeJeuDonnee[numeroJeu].id + '"><i class="material-icons">edit</i>' +
            "</a></li>";
      }
      listeJeu.innerHTML = textLi;
    }
  }
})();
