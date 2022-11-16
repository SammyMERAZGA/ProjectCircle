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
    rows = [
        {
            text: "Liste",
            index: 1,
            items: [
                {
                    title: "Fournir un modèle de curriculum vitae" +
                        " - Fournir un modèle de lettre de motivation" +
                        " - Récolter divers témoignages étudiants" +
                        " - Créer des articles" +
                        " - Créer du contenu vidéo",
                    id: 1
                }
            ]
        },
        {
            text: "Partenaire stratégique",
            index: 2,
            items: [
                {
                    title: "Entreprises" +
                        " - Sites d’aide " +
                        " - Journaux" +
                        " - Ecoles" +
                        " - Facultés",
                    id: 2
                }
            ]
        },
        {
            text: "Activités/Ressources clés",
            index: 3,
            items: [
                {
                    title: "Internet - Instagram - TikTok - LinkedIn",
                    id: 3
                }
            ]
        },
        {
            text: "Propositions de valeur",
            index: 4,
            items: [{
                title: "Aider les étudiants à mieux appréhender le milieu professionnel " +
                    "- Proposer du contenu interactif - " +
                    "Aider à savoir bien postuler à une offre d’emploi",
                id: 4
            }]
        },
        {
            text: "Relation client/Canaux de distribution",
            index: 5,
            items: [{
                title: "Fournir un modèle de curriculum vitae - Fournir un modèle de lettre de motivation " +
                    "- Récolter divers témoignages étudiants - Créer des articles - Créer du contenu vidéo",
                id: 5
            }]
        },
        {
            text: "Relation client",
            index: 6,
            items: [{
                title: "Entraide - Bienveillance - Conseil",
                id: 6
            }]
        },
        {
            text: "Segment de clientèle",
            index: 7,
            items: [{
                title: "Internet - Instagram - TikTok - LinkedIn",
                id: 7
            }]
        },
        {
            text: "Structure des coûts",
            index: 8,
            items: [{
                title: "18/25 ans - Etudiants - Public en recherche d’alternance",
                id: 8
            }]
        },
        {
            text: "Flux de revenus",
            index: 9,
            items: [{
                title: "Ordinateurs, écrans - Hébergeur - Serveur " +
                    "- Licence et outils de développement et de gestion de base de données " +
                    "- Licence et outils de montage photo/vidéo - Studio photo",
                id: 9
            }]
        }
    ];

}
