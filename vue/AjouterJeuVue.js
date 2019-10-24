var AjouterJeuVue = (function() {
  pageAjouterJeu = document.getElementById("page-ajouter-jeu").innerHTML;

  return function(actionEnregistrerJeu) {

    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0] ;
      elementBody.innerHTML = pageAjouterJeu;

      var formulaireAjouter = document.getElementById("formulaire-ajouter");
      formulaireAjouter.addEventListener("submit", enregistrer);
    }

    var enregistrer = function(evenement) {

      evenement.preventDefault();

      var nom = document.getElementById("jeu-nom").value;
      var developpeur = document.getElementById("jeu-developpeur").value;
      var description = document.getElementById("jeu-description").value;

      var jeu = new Jeu(nom, developpeur, description, null);

      actionEnregistrerJeu(jeu);
    }
  }
})();
