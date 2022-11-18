import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Moa extends Vue {
  snackbarTrue = false;
  snackbarFalse = false;
  snackbarCodeFalse = false;
  dialogPresentation = true;
  step = 0;
  timeout = 2000;
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
      this.musicLose();
      this.$store.state.sanction++;
      this.$store.commit("checkGameOver");
      this.nbLives = 3;
    }
  }

  playSoundClick() {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
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

  checkCode(code: string) {
    if (code === "3214") {
      this.dialogVictory = true;
      this.$store.state.gameSuccess++;
      this.musicWin();
      this.$store.state.moaOK = true;
      this.$store.commit("checkSuccess");
    } else {
      this.nbLives--;
      if (this.nbLives === 0) {
        this.snackbarFalse = false;
        this.dialogGameOver = true;
        this.musicLose();
        this.$store.state.sanction++;
        this.$store.commit("checkGameOver");
        this.nbLives = 3;
      } else {
        this.snackbarCodeFalse = true;
      }
    }
  }
}
