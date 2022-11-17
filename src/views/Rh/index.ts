import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Context extends Vue {
  data = "";
  dataTest = "";
  snackbarTrue = false;
  snackbarFalse = false;
  timeout = 2000;
  dialogPresentation = true;
  errorScrum = this.$store.state.errorScrum;
  goodScrum = this.$store.state.goodScrum;
  dialogSanction = false;
  dialogSuccess = false;
  role = ["Product Owner", "Scrum master", "Team member"];
  data_table = [
    "Il aide l’équipe à respecter la méthode Agile",
    "Il anime les réunions de l’équipe",
    "Définir et communiquer la vision du produit",
    "Représente les besoins métier",
    "Développe le produit",
    "Doit respecter les besoins métiers",
  ];

  getData(dataTest: string): void {
    this.data = this.data_table[Math.floor(Math.random() * this.data_table.length)];
    if (dataTest == this.data){
      this.getData(this.data);
    }
  }

  goToHome() {
    this.$router.push("/home");
  }

  playSoundClick() {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
  }

  refreshData(data: string, role: string): void {
    if (role == this.role[1]) {
      if (data == this.data_table[0] || data == this.data_table[1]) {
        this.goodScrum++;
        this.snackbarTrue = true;
      } else {
        this.errorScrum++;
        this.snackbarFalse = true;
      }
    }
    if (role == this.role[0]) {
      if (data == this.data_table[2] || data == this.data_table[3]) {
        this.goodScrum++;
        this.snackbarTrue = true;
      } else {
        this.errorScrum++;
        this.snackbarFalse = true;
      }
    }
    if (role == this.role[2]) {
      if (data == this.data_table[4] || data == this.data_table[5]) {
        this.goodScrum++;
        this.snackbarTrue = true;
      } else {
        this.errorScrum++;
        this.snackbarFalse = true;
      }
    }

    if (this.errorScrum == 3) {
      this.goodScrum = 0;
      this.errorScrum = 0;
      this.$store.state.sanction++;
      this.dialogSanction = true;
      this.$store.commit("checkGameOver");
    }

    if (this.goodScrum == 4) {
      this.snackbarTrue = false;
      this.goodScrum = 0;
      this.errorScrum = 0;
      this.dialogSuccess = true;
      this.$store.state.gameSuccess++;
      this.$store.state.rhOK = true;
      this.$store.commit("checkSuccess");
    }

    this.getData(this.data);
  }
}
