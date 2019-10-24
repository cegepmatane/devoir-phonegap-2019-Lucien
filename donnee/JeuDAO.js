var JeuDAO = function () {

    var listeJeu = [
        new Jeu("League Of Legend","Riot Games","5vs5 dans la faille de l'invocateur",0),
        new Jeu("Overwatch","Blizzard","Fps en 6vs6 inspiré de l'univers Blizzard",1),
        new Jeu("Rocket League","Psyonix","Jeux de foot avec des voitures",2)
    ];

    this.lister = function () {
        return listeJeu;
    }

    this.ajouter = function (jeu) {
        jeu.id = listeJeu.length;
        listeJeu.push(jeu);
    }
};