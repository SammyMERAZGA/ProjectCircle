import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Context extends Vue {
  playSoundClickAndGoTo() {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
    this.$router.push("/home");
  }
}
