var ModifierJeuVue = (function() {
    pageModifierJeu = document.getElementById("page-modifier-jeu").innerHTML;

    return function(actionModifierJeu) {

        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageModifierJeu;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", modifier);
        };

        var modifier = function(evenement) {

            evenement.preventDefault();

            var nom = document.getElementById("jeu-nom").value;
            var marque = document.getElementById("jeu-developpeur").value;
            var description = document.getElementById("jeu-description").value;

            var jeu = new Jeu(nom, marque, description, null);

            actionModifierJeu(jeu);
        }
    }
})();
