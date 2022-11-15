import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  thematic = [
    {
      title: "Développement",
      image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      description: "MOE",
    },
    {
      title: "Gestion de projet",
      image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      description: "MOA",
    },
    {
      title: "Conception",
      image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      description: "Conception & Design",
    },
    {
      title: "Finance",
      image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      description: "BMC",
    },
  ];
}
