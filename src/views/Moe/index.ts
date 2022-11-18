import Vue from "vue";
import draggable from "vuedraggable";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component({
  components: {
    draggable,
  },
})
export default class Moe extends Vue {
  dialogPresentation = true;
  e6 = 1;
  snackbar = false;
  snackbarTrue = false;
  snackbarFalse = false;
  timeout = 2000;
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
          title: "git commit -m",
          id: 4,
        },
        {
          title: "Git init",
          id: 1,
        },
        {
          title: "git add",
          id: 3,
        },
        {
          title: "git branch",
          id: 2,
        },
        {
          title: "git merge",
          id: 6
        },
      ],
    },
    {
      text: "Liste à mettre dans l'ordre",
      index: 2,
      items: [
        {
          title: "git push origin",
          id: 5,
        },
      ]
    },
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
      this.musicLose();
      this.$store.state.sanction++;
      this.$store.commit("checkGameOver");
      this.nbLives = 3;
    }
  }

  goToHome() {
    this.$router.push("/home");
  }

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

  checkResult() {
    let tempCard: any[] = []
    let error: Boolean = false
    let valideResponse = [1, 2, 3, 4, 5, 6]
    this.rows[1].items.forEach(card => {
      tempCard.push(card.id)
    });
    let i: number = 0
    tempCard.forEach(tempCard => {
      if (tempCard !== valideResponse[i]) {
        console.log(valideResponse[i])
        console.log(tempCard)
        error = true
      }
      i++
    });
    console.log(error)
    if (error) {
      this.removeLife()
    } else {
      this.dialogSuccess = true
      this.musicWin();
      this.$store.state.moeOK = true;
      this.$store.state.gameSuccess++;
      this.$store.commit("checkSuccess");
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
