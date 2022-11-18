<template>
  <div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <img id="logo" src="@/assets/blackLogo.png" />
    <v-container>
      <div class="parent">
        <v-row align="center" justify="center">
          <v-img
            id="image"
            src="@/assets/gaming.png"
            max-width="500"
            height="500"
          ></v-img>
        </v-row>
      </div>
      <v-row class="middle mb-15" align="center" justify="center">
        <v-btn
          class="mt-10 mr-10 rounded-xl"
          color="white"
          light
          @click="playSoundClickAndGoTo()"
        >
          <h3 class="overline black--text txt_right">Lancer le jeu</h3>
          <v-icon>mdi-controller</v-icon>
        </v-btn>
        <v-dialog
          class="mb-15 non-scrollable"
          v-model="rulesDialog"
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mt-10 rounded-xl"
              color="white"
              light
              v-bind="attrs"
              v-on="on"
              @click="playSoundClick()"
            >
              <h3 class="overline black--text txt_right">Règles du jeu</h3>
              <v-icon>mdi-file-document-outline</v-icon>
            </v-btn>
          </template>
          <v-card class="hide-scrollbar">
            <v-toolbar id="toolbar" class="mb-5" dark color="teal darken-2">
              <v-row align="center" justify="center">
                <v-toolbar-title>
                  <span class="white--text">
                    <v-icon>mdi-file-document-outline</v-icon> Règles du jeu
                  </span>
                </v-toolbar-title>
              </v-row>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-row align="center" justify="center">
                  <v-img
                    class="mb-5"
                    src="@/assets/rules.png"
                    height="300px"
                    max-width="300"
                  ></v-img>
                </v-row>
                <v-divider></v-divider>
                <h4 class="overline text-decoration-underline mt-10 mb-3">
                  Règle 1
                </h4>
                <p class="body-2 mb-5">
                  Pour arriver à bout d’une partie de Project nightmare, tu vas devoir jouer à 4 mini jeux différents.
                  Chacun des mini jeux représentent une situation de crise que l’on peut rencontrer en entreprise.
                  Ta mission sera de solutionner chacun des problèmes.
                </p>
                <h4 class="overline text-decoration-underline mt-3 mb-3">
                  Règle 2
                </h4>
                <p class="body-2 mb-5">
                  Au lancement du jeu, tu pourras choisir par lequel des 4 pôles de l’entreprise tu souhaites commencer.
                  Tu auras le choix entre le pôle RH, le pôle MOE, le pôle MOA ou bien le pôle Finance.
                </p>
                <h4 class="overline text-decoration-underline mt-3 mb-3">
                  Règle 3
                </h4>
                <p class="body-2 mb-10">
                  Chaque mini jeu sera introduit par un cours explicatif te permettant de découvrir de nouvelles notions
                  sur divers domaines : gestion de projet, développement…
                  Une fois le cours terminé tu devras mettre en pratique ce que tu as découvert au travers d’une énigme.
                </p>
                <h4 class="overline text-decoration-underline mt-3 mb-3">
                  Règle 4
                </h4>
                <p class="body-2 mb-10">
                  Tu ne pourras pas changer de salles tant que tu n'auras pas trouvé la solution présentée dans la salle où tu joues.
                </p>
                <h4 class="overline text-decoration-underline mt-3 mb-3">
                  Règle 5
                </h4>
                <p class="body-2 mb-10">
                  Pour chaque mini jeu tu auras 3 tentatives. Si au bout de ces 3 tentatives tu n'as pas résolu l'énigme alors tu
                  recevras un avertissement. Au bout de 3 avertissements tu seras licencié et tu devras recommencer le jeu depuis le début.
                </p>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="rounded-xl"
                color="red darken-1"
                text
                @click="rulesDialog = false"
              >
                Fermer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
