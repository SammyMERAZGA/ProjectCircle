import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Moa extends Vue {
  snackbarTrue = false;
  snackbarFalse = false;
  snackbarCodeFalse = false;
  dialogPresentation = true;

  step = 0;

  dialogGameOver = false;
  dialogVictory = false;

  disableQ2 = true;
  disableQ3 = true;
  disableQ4 = true;
  disableFinalEnigma = true;

  nbLives = 3;
  code = "";

  removeLife() {
    this.nbLives--;
    this.snackbarFalse = true;
    if (this.nbLives === 0) {
      this.snackbarFalse = false;
      this.dialogGameOver = true;
      this.nbLives = 3;
    }
  }

  goToHome() {
    this.$router.push("/home");
  }

  trueAnswerQ1() {
    this.snackbarTrue = true;
    this.disableQ2 = false;
  }

  trueAnswerQ2() {
    this.snackbarTrue = true;
    this.disableQ3 = false;
  }

  trueAnswerQ3() {
    this.snackbarTrue = true;
    this.disableQ4 = false;
  }

  trueAnswerQ4() {
    this.snackbarTrue = true;
    this.disableFinalEnigma = false;
  }

  checkCode(code: string) {
    if (code === "3214") {
      console.log("Vous avez gagnez !");
      this.dialogVictory = true;
    } else {
      console.log("Vous avez perdu !");
      this.snackbarCodeFalse = true;
    }
  }
}
