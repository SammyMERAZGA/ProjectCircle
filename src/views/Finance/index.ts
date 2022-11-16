import Vue from "vue";
import draggable from "vuedraggable";
import {Component} from "vue-property-decorator";

@Component({
    components: {
        draggable,
    },
})
@Component
export default class Finance extends Vue {
    e6 = 1;
    dialog = false;
    snackbar = false;
    game1 = true;
    display = "Functional third party";
    dialogSuccessScrum = false;
    dialogErrorScrum = false;
    rows = [
        {
            text: "Liste dans le désordre",
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
            index: 7,
            items: []
        },
        {
            text: "Flux de revenus",
            index: 7,
            items: []
        }
    ];

    computed(): void {
        console.log("object");
        if (this.e6 === 6) {
            alert("fini");
        }
    }

    changeCard(numCard: number, valide: boolean) {
        this.e6 = numCard;

        if (valide === false) {
            this.dialog = true;
        } else {
            this.snackbar = true;
        }
        if (numCard === 6) {
            setTimeout(() => {
                this.nextLevel();
            }, 1000);
        }
    }

    nextLevel() {
        this.game1 = false;
    }
}
