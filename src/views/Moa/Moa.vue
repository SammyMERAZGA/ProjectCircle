<template>
  <div>
    <h1 class="text-center black--text mt-10">Maîtrise d'ouvrage</h1>
    <v-row justify="center">
      <v-img src="@/assets/management.png" max-width="250"></v-img>
    </v-row>
    <v-row justify="center" align="center">
      <v-card class="elevation-10" shaped>
        <v-btn class="ma-4" color="teal" to="/home" fab dark small>
          <v-icon>mdi-keyboard-return</v-icon>
        </v-btn>
        <h1 id="m-bottom" class="overline text-center grey--text">Question 1</h1>
        <h1 class="overline mr-15 ml-15">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          sapiente non quis eligendi illo asperiores ?
        </h1>
        <v-row class="mt-5" justify="center">
          <v-btn
            class="ma-5 rounded-lg"
            outlined
            color="teal darken-3"
            @click="snackbarTrue = true"
          >
            Lorem Ipsum
          </v-btn>
          <v-btn
            class="ma-5 rounded-lg"
            outlined
            color="teal darken-3"
            @click="snackbarFalse = true"
          >
            Lorem Ipsum
          </v-btn>
        </v-row>
        <v-row class="mt-2" justify="center">
          <v-btn class="ma-5 rounded-lg" outlined color="teal darken-3">
            Lorem Ipsum
          </v-btn>
          <v-btn class="ma-5 rounded-lg" outlined color="teal darken-3">
            Lorem Ipsum
          </v-btn>
        </v-row>
        <v-row class="ma-5" justify="end">
          <h1 class="mr-2">5</h1>
          <v-icon x-large color="red">mdi-heart</v-icon>
        </v-row>
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
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
