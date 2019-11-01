var ModifierJeuVue = (function() {
    pageModifierJeu = document.getElementById("page-modifier-jeu").innerHTML;

    return function(actionModifierJeu, idJeu) {

        this.afficher = function(jeu) {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageModifierJeu;

            document.getElementById("jeu-nom").value = jeu.nom;
            document.getElementById("jeu-developpeur").value = jeu.developpeur;
            document.getElementById("jeu-description").value = jeu.description;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", modifier);
        };

        var modifier = function(evenement) {

            evenement.preventDefault();

            var nom = document.getElementById("jeu-nom").value;
            var marque = document.getElementById("jeu-developpeur").value;
            var description = document.getElementById("jeu-description").value;

            var jeu = new Jeu(nom, marque, description, idJeu);

            actionModifierJeu(jeu);
        }
    }
})();
