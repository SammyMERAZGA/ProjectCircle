import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  thematic = [
    {
      title: "Développement",
      image:
        "https://user-images.githubusercontent.com/78353572/201925635-0dcfa428-2dc5-4ec0-a887-1ce501efca35.png",
      description: "MOE",
    },
    {
      title: "Gestion de projet",
      image:
        "https://user-images.githubusercontent.com/78353572/201925646-269d4448-e871-4584-ae38-383e89dbfdf8.png",
      description: "MOA",
    },
    {
      title: "Marketing",
      image:
        "https://user-images.githubusercontent.com/78353572/201925677-7ced2593-9072-4f01-b139-2f8e02695bf7.png",
      description: "Conception & Design",
    },
    {
      title: "Finance",
      image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      description: "BMC",
    },
  ];
}
