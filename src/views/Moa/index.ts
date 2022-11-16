import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Moa extends Vue {
  snackbarTrue = false;
  snackbarFalse = false;
  
  dialogGameOver = false;

  nbLives = 3;

  removeLife() {
    this.nbLives--;
    this.snackbarFalse = true;
    if (this.nbLives === 0) {
      this.snackbarFalse = false;
      this.dialogGameOver = true;
      setTimeout(() => {
        this.$router.push("/home");
      }, 3000);
    }
  }
}
