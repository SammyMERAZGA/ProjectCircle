import Vue from "vue";
import draggable from "vuedraggable";
import { Component } from "vue-property-decorator";

@Component({
    components: {
        draggable
    },
})
export default class Finance extends Vue {
    e6 = 1;
    dialog = false;
    snackbar = false;
    dialogPresentation = true;
    display = "Functional third party";
    dialogSuccessScrum = false;
    dialogErrorScrum = false;
    nbLives = 3;
    tasks = {
        ideas: [{
            title: "Entreprises - Sites d’aide " +
                " - Journaux - Ecoles / Facultés",
            id: 1
        },
        {
            title: "Internet - Instagram - TikTok - LinkedIn",
            id: 2
        },
        {
            title: "Proposer du contenu interactif - " +
                "Aider à savoir bien postuler à une offre d’emploi",
            id: 3
        },
        {
            title: "Fournir un modèle de curriculum vitae" +
                " - Créer des articles" +
                " - Créer du contenu vidéo",
            id: 4
        },
        {
            title: "Entraide - Bienveillance - Conseil",
            id: 5
        },
        {
            title: "Salaire / Marketing / Coûts hébergements",
            id: 6
        },
        {
            title: "Ordinateurs, écrans " +
                "- Licences - Outils de développement et de gestion de base de données ",
            id: 7
        },
        {
            title: "18/25 ans - Etudiants - Public en recherche d’alternance",
            id: 8
        }],
        partenaires: [],
        propositions: [],
        canaux: [],
        segment: [],
        structure: [],
        flux: [],
        activites: []
    }
    checkResult() {
        console.log("object");
    }


}
