import Vue from "vue";
import draggable from "vuedraggable";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    draggable,
  },
})
export default class Moe extends Vue {
  e6 = 1;
  snackbar = false;
  snackbarTrue = false;
  snackbarFalse = false;
  game1 = true;
  display = "Functional third party";
  order = 17;

  dialogSanction = false;
  dialogSuccess = false
  nbLives = 3;

  rows = [
    {
      text: "Liste dans le désordre",
      index: 1,
      items: [
        {
          title: "Git init",
          id: 1
        },
        {
          title: "git branch",
          id: 2
        },
        {
          title: "git add",
          id: 3
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
    },
    {
      text: "Liste à mettre dans l'ordre",
      index: 2,
      items: [
        {
          title: "git commit -m",
          id: 4
        }
      ]
    }
  ]
  computed(): void {
    console.log("object");
    if (this.e6 === 6) {
      alert("fini");
    }
  }
  removeLife() {
    this.nbLives--;
    this.snackbarFalse = true;
    if (this.nbLives === 0) {
      this.snackbarFalse = false;
      this.dialogSanction = true;
    }
  }
  
  checkResult() {
    let itemsIdx = 1
    let error = false
    for (let i = 0; i < this.rows[1].items.length; i++) {
      if (this.rows[1].items[i].id !== itemsIdx) {
        error = true
      }
      itemsIdx++
    }
    if (error && this.nbLives > 0) {
      this.snackbarFalse = false
      this.removeLife()
    } else {
      this.dialogSuccess = true
    }
  }
  changeCard(numCard: number, valide: boolean) {
    this.e6 = numCard;

    if (valide === false) {
      this.snackbarFalse = true;
      this.removeLife()
    } else {
      this.snackbarTrue = true;
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
