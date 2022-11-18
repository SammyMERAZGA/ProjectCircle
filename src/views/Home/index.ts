import Vue from "vue";
import { Component } from "vue-property-decorator";
/* eslint-disable */

@Component
export default class Home extends Vue {
  thematic = [
    {
      title: "Développement",
      image:
        "https://user-images.githubusercontent.com/78353572/201925635-0dcfa428-2dc5-4ec0-a887-1ce501efca35.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493190-394d7108-e3d2-4a24-a1d5-e7f49f5dbb92.png",
      description: "Le pôle MOE va regrouper tout l'aspect technique autour d'un projet. Lancez-vous dans ce jeu afin de venir en aide aux problèmes Git rencontrés par l'équipe IT.",
      link: "/play/moe",
      disable: this.$store.state.moeOK,
    },
    {
      title: "Gestion de projet",
      image:
        "https://user-images.githubusercontent.com/78353572/201925646-269d4448-e871-4584-ae38-383e89dbfdf8.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493230-a65441df-101c-4f7b-986b-a64eea28452b.png",
      description: "Le pôle MOA va regrouper tout l'aspect gestion de projet autour d'un projet. Jouez à ce jeu afin de venir en aide aux problèmes de gestion de projet.",
      link: "/play/moa",
      disable: this.$store.state.moaOK,
    },
    {
      title: "Marketing",
      image:
        "https://user-images.githubusercontent.com/78353572/201945014-02deb64c-8ac0-492f-9a63-662a0aeeb0b3.png",
      imageValide:
        "https://user-images.githubusercontent.com/65346336/202493200-974c96ba-0f26-430e-b198-4eb358491b8a.png",
      description: "Le pôle RH cherche à recruter des talents pour son équipe. Jouez à ce jeu afin de trouver les bons métiers dans un équipe SCRUM.",
      link: "/play/rh",
      disable: this.$store.state.rhOK,
    },
    {
      title: "Finance",
      image: "https://user-images.githubusercontent.com/78353572/201955296-f8fc8263-93f0-4023-b99c-b3c740072b80.png",
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
