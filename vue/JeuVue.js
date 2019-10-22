var JeuVue = (function() {
  pageJeu = document.getElementById("page-jeu").innerHTML;

  return function(jeu) {
    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageJeu;

      document.getElementById('jeu-nom').innerHTML = jeu.nom;
      document.getElementById('jeu-developpeur').innerHTML = jeu.developpeur;
      document.getElementById('jeu-description').innerHTML = jeu.description;
    }
  }
})();
