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
      link: "/play/moe",
    },
    {
      title: "Gestion de projet",
      image:
        "https://user-images.githubusercontent.com/78353572/201925646-269d4448-e871-4584-ae38-383e89dbfdf8.png",
      description: "MOA",
      link: "/play/moa",
    },
    {
      title: "Marketing",
      image:
        "https://user-images.githubusercontent.com/78353572/201945014-02deb64c-8ac0-492f-9a63-662a0aeeb0b3.png",
      description: "Pôle RH",
      link: "/play/rh",
    },
    {
      title: "Finance",
      image: "https://user-images.githubusercontent.com/78353572/201955296-f8fc8263-93f0-4023-b99c-b3c740072b80.png",
      description: "Pôle Finance",
      link: "/play/finance",
    },
  ];
}
