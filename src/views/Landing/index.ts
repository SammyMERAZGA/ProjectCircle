import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Landing extends Vue {
  rulesDialog = false;

  playSoundClick() {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
  }

  playSoundClickAndGoTo() {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
    this.$router.push("/context");
  }
}
