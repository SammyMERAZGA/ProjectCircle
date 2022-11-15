import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Moa extends Vue {
  snackbarTrue = false;
  snackbarFalse = false;
}