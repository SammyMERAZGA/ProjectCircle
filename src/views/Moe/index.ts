import Vue from "vue";
import draggable from "vuedraggable";
import { Component, Watch } from "vue-property-decorator";

@Component({
    components: {
        draggable
    },
})
export default class Moe extends Vue {
    e6 = 1;
    dialog = false;
    snackbar = false;
    game1 = true
    display = "Functional third party"
    order = 17
    rows = [
        {
            index: 1,
            items: [
                {
                    title: "Git init",
                    id: 1
                }
            ]
        },
        {
            index: 2,
            items: [
                {
                    title: "git branch",
                    id: 2
                },
                {
                    title: "git add",
                    id: 3
                },
                {
                    title: "git commit -m",
                    id: 4
                },
                {
                    title: "git push origin",
                    id: 5
                },
                {
                    title: "git merge",
                    id: 6
                }
            ]
        }
    ]
    computed(): void {
        console.log("object");
        if (this.e6 === 6) {
            alert('fini')
        }
    }
    changeCard(numCard: number, valide: boolean) {
        this.e6 = numCard

        if (valide === false) {
            this.dialog = true
        } else {
            this.snackbar = true
        }
        if (numCard === 6) {
            setTimeout(() => {
                this.nextLevel()
            }, 1000);
        }
    }
    nextLevel() {
        this.game1 = false
    }
}
