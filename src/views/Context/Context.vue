<template>
  <div>
    <v-row class="mt-15" align="center" justify="center">
      <v-img
        class="rounded-xl elevation-10"
        src="@/assets/gif/contexte.gif"
        max-width="1000"
      />
    </v-row>
    <h3 class="black--text text-center mt-12 mb-5">Lancer le jeu !</h3>
    <v-row class="mb-15" align="center" justify="center">
      <v-btn
        class="mt-3 elevation-10"
        color="white"
        fab
        x-large
        light
        @click="playSoundClickAndGoTo()"
      >
        <v-icon color="teal">mdi-controller</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
