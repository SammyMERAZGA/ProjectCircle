<template>
  <div>
    <v-btn class="ma-5" color="teal" to="/home" fab dark small>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <h1 class="text-center black--text">Maîtrise d'ouvrage</h1>
    <v-row justify="center">
      <v-img src="@/assets/management.png" max-width="250"></v-img>
    </v-row>
    <v-row justify="center" align="center">
      <v-card class="elevation-10">
        <v-tabs class="rounded-sm" fixed-tabs background-color="teal darken-2" dark>
          <v-tabs-slider color="cyan accent-1"></v-tabs-slider>
          <v-tab> Question 1 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 1
            </h1>
            <h1 class="overline mr-15 ml-15">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati sapiente non quis eligendi illo asperiores ?
            </h1>
            <v-row class="mt-5" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="snackbarTrue = true"
              >
                Clôture
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="mt-2" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="ma-5" justify="end">
              <h1 class="mr-2">{{ nbLives }}</h1>
              <v-icon x-large color="red">mdi-heart</v-icon>
            </v-row>
          </v-tab-item>
          <v-tab> Question 2 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 2
            </h1>
            <h1 class="overline mr-15 ml-15">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati sapiente non quis eligendi illo asperiores ?
            </h1>
            <v-row class="mt-5" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="mt-2" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="snackbarTrue = true"
              >
                Planification
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="ma-5" justify="end">
              <h1 class="mr-2">{{ nbLives }}</h1>
              <v-icon x-large color="red">mdi-heart</v-icon>
            </v-row>
          </v-tab-item>
          <v-tab> Question 3 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 3
            </h1>
            <h1 class="overline mr-15 ml-15">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati sapiente non quis eligendi illo asperiores ?
            </h1>
            <v-row class="mt-5" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="mt-2" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="snackbarTrue = true"
              >
                Production
              </v-btn>
            </v-row>
            <v-row class="ma-5" justify="end">
              <h1 class="mr-2">{{ nbLives }}</h1>
              <v-icon x-large color="red">mdi-heart</v-icon>
            </v-row>
          </v-tab-item>
          <v-tab> Question 4 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 4
            </h1>
            <h1 class="overline mr-15 ml-15">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati sapiente non quis eligendi illo asperiores ?
            </h1>
            <v-row class="mt-5" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="snackbarTrue = true"
              >
                Cadrage
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="mt-2" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Lorem Ipsum
              </v-btn>
            </v-row>
            <v-row class="ma-5" justify="end">
              <h1 class="mr-2">{{ nbLives }}</h1>
              <v-icon x-large color="red">mdi-heart</v-icon>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
    <!-- SNACKBAR -->
    <v-snackbar color="green darken-3" v-model="snackbarTrue"
      >Félicitations ! Vous avez trouvé la bonne réponse.
      <template v-slot:action="{ attrs }">
        <v-btn
          class="rounded-xl"
          color="white"
          text
          v-bind="attrs"
          @click="snackbarTrue = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar color="red darken-4" v-model="snackbarFalse"
      >Aïe, ce n'est pas la bonne réponse. Vous prenez un avertissement !
      <template v-slot:action="{ attrs }">
        <v-btn
          class="rounded-xl"
          color="white"
          text
          v-bind="attrs"
          @click="snackbarFalse = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- DIALOG GAME OVER -->
    <v-dialog
      v-model="dialogGameOver"
      transition="dialog-top-transition"
      max-width="600"
    >
      <v-card>
        <v-toolbar color="red darken-2" dark
          >Aïe aïe ! C'est là que tout se termine pour vous..</v-toolbar
        >
        <v-card-text>
          <v-row align="center" justify="center">
            <div class="text-h2 pa-12">GAME OVER !</div>
            <p>
              Vous allez être redirigé vers l'écran du choix des thématiques.
            </p>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
