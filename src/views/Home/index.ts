import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Home extends Vue {
  thematic = [
    {
      title: "Développement",
      image:
        "https://user-images.githubusercontent.com/61691000/202680434-c219969b-16ea-4f7a-ab88-f4e891c03fec.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493190-394d7108-e3d2-4a24-a1d5-e7f49f5dbb92.png",
      description: "Le pôle MOE va regrouper tout l'aspect technique autour d'un projet. Lancez-vous dans ce jeu afin de venir en aide aux problèmes Git rencontrés par l'équipe IT.",
      link: "/play/moe",
      disable: this.$store.state.moeOK,
    },
    {
      title: "Gestion de projet",
      image:
        "https://user-images.githubusercontent.com/61691000/202680192-c71bd90d-dc3f-4bc3-bb40-f140b32f6d21.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493230-a65441df-101c-4f7b-986b-a64eea28452b.png",
      description: "Le pôle MOA va regrouper tout l'aspect gestion de projet autour d'un projet. Jouez à ce jeu afin de venir en aide aux problèmes de gestion de projet.",
      link: "/play/moa",
      disable: this.$store.state.moaOK,
    },
    {
      title: "Marketing",
      image:
        "https://user-images.githubusercontent.com/61691000/202679458-520c5345-e351-4530-9a7c-a08b443e5504.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493200-974c96ba-0f26-430e-b198-4eb358491b8a.png",
      description: "Le pôle RH cherche à recruter des talents pour son équipe. Jouez à ce jeu afin de trouver les bons métiers dans un équipe SCRUM.",
      link: "/play/rh",
      disable: this.$store.state.rhOK,
    },
    {
      title: "Finance",
      image: "https://user-images.githubusercontent.com/61691000/202679844-a34480d4-c747-42bb-994c-b80052dca321.png",
      imageValide:
          "https://user-images.githubusercontent.com/65346336/202493215-8ea407a6-5e44-4102-99f7-90da3299a634.png",
      description: "Le pôle Finance rencontre un problème autour du BMC (Buisness Model Canvas), ",
      link: "/play/finance",
      disable: this.$store.state.financeOK,
    },
  ];

  playSoundAndGoToAGame(link: string) {
    var audio = new Audio(require("@/assets/clickButton.wav"));
    audio.play();
    this.$router.push(link);
  }
}
