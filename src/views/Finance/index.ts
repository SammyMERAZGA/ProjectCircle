import Vue from "vue";
import draggable from "vuedraggable";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component({
    components: {
        draggable,
    },
})
export default class Finance extends Vue {
    e6 = 1;
    dialog = false;
    dialogPresentation = true;
    nbLives = 3;
    snackbarCodeFalse = false;
    dialogGameOver = false;
    dialogVictory = false;

    tasks = {
        ideas: [
            {
                title:
                    "Entreprises - Sites d’aide " + " - Journaux - Ecoles / Facultés",
                id: 1,
            },
            {
                title: "Internet - Instagram - TikTok - LinkedIn",
                id: 2,
            },
            {
                title:
                    "Proposer du contenu interactif - " +
                    "Aider à savoir bien postuler à une offre d’emploi",
                id: 3,
            },
            {
                title:
                    "Fournir un modèle de curriculum vitae" +
                    " - Créer des articles" +
                    " - Créer du contenu vidéo",
                id: 4,
            },
            {
                title: "Entraide - Bienveillance - Conseil",
                id: 5,
            },
            {
                title: "Salaire / Marketing / Coûts hébergements",
                id: 6,
            },
            {
                title:
                    "Ordinateurs, écrans " +
                    "- Licences - Outils de développement et de gestion de base de données ",
                id: 7,
            },
            {
                title: "18/25 ans - Etudiants - Public en recherche d’alternance",
                id: 8,
            },
        ],
        // Partenaires statégiques
        partenaires: [],
        // Activités/Ressources clés
        activites: [],
        // Propositions de valeur
        propositions: [],
        // Canaux de distribution
        canaux: [],
        // Relation client
        relation: [],
        // Segment de clientèle
        segment: [],
        //  Ressources
        ressource: [],
        //  Structure des coûts
        structure: [],
    };

    musicLose() {
        if (this.$store.state.sanction == 0) {
            var audio = new Audio(require("@/assets/bouh.mp3"));
            audio.play();
        } else if (this.$store.state.sanction == 1) {
            var audio = new Audio(require("@/assets/bouh.mp3"));
            audio.play();
        } else if (this.$store.state.sanction == 2) {
            this.musicGameOver();
        }
    }

    musicGameOver() {
        var audio = new Audio(require("@/assets/gameOver.mp3"));
        audio.play();
    }

    musicWin() {
        var audio = new Audio(require("@/assets/applause.wav"));
        audio.play();
    }

    playSoundClick() {
        var audio = new Audio(require("@/assets/clickButton.wav"));
        audio.play();
    }

    checkResult(tasks: any) {
        if (
            tasks.partenaires[0].id === 1 &&
            tasks.canaux[0].id === 2 &&
            tasks.propositions[0].id === 3 &&
            tasks.activites[0].id === 4 &&
            tasks.relation[0].id === 5 &&
            tasks.structure[0].id === 6 &&
            tasks.ressource[0].id === 7 &&
            tasks.segment[0].id === 8
        ) {
            this.$store.state.financeOK = true;
            this.$store.state.gameSuccess++;
            this.dialogVictory = true;
            this.musicWin();
            this.$store.commit("checkSuccess");
        } else {
            this.removeLife();
        }
    }

    removeLife() {
        this.nbLives--;
        this.snackbarCodeFalse = true;
        if (this.nbLives === 0) {
            this.snackbarCodeFalse = false;
            this.dialogGameOver = true;
            this.musicLose();
            this.nbLives = 3;
            this.$store.state.sanction++;
            this.$store.commit("checkGameOver");
        }
    }
    goToHome() {
        this.$router.push("/home");
    }
}
