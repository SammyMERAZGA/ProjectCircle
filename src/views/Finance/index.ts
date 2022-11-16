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
    display = "Functional third party";
    dialogSuccessScrum = false;
    dialogErrorScrum = false;
    nbLives = 3;
    rows = [
        {
            text: "Liste",
            index: 1,
            items: [
                {
                    title: "Entreprises" +
                        " - Sites d’aide " +
                        " - Journaux" +
                        " - Ecoles" +
                        " - Facultés",
                    id: 2
                },
                {
                    title: "Internet - Instagram - TikTok - LinkedIn",
                    id: 3
                },
                {
                    title: "Proposer du contenu interactif - " +
                        "Aider à savoir bien postuler à une offre d’emploi",
                    id: 4
                },
                {
                    title: "Fournir un modèle de curriculum vitae" +
                        " - Créer des articles" +
                        " - Créer du contenu vidéo",
                    id: 5
                },
                {
                    title: "Entraide - Bienveillance - Conseil",
                    id: 6
                },
                {
                    title: "Internet - Instagram - TikTok - LinkedIn",
                    id: 7
                },
                {
                    title: "Ordinateurs, écrans - Hébergeur - Serveur " +
                        "- Licence et outils de développement et de gestion de base de données ",
                    id: 8
                },
                {
                    title: "18/25 ans - Etudiants - Public en recherche d’alternance",
                    id: 9
                }



            ]
        },
        {
            text: "Partenaire stratégique",
            index: 2,
            items: [

            ]
        },
        {
            text: "Activités/Ressources clés",
            index: 3,
            items: [
            ]
        },
        {
            text: "Propositions de valeur",
            index: 4,
            items: []
        },
        {
            text: "Relation client/Canaux de distribution",
            index: 5,
            items: []
        },
        {
            text: "Relation client",
            index: 6,
            items: []
        },
        {
            text: "Segment de clientèle",
            index: 7,
            items: []
        },
        {
            text: "Structure des coûts",
            index: 8,
            items: []
        },
        {
            text: "Flux de revenus",
            index: 9,
            items: []
        }
    ];

}
