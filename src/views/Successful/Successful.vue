<template>
  <div>
    <div class="firework"></div>
    <div class="firework"></div>
    <div class="firework"></div>
    <div class="firework"></div>

    <h1 class="black--text mt-10">Vous avez réussi à redresser l'entreprise !</h1>
    <v-row align="center" justify="center">
      <img class="rounded-xl elevation-10" id="manager" src="@/assets/development.png" />
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
          class="rounded-lg mt-10 mb-15 elevation-1"
          color="white"
          to="/"
          light
          outlined
          depressed
          x-large
      >Recommencer</v-btn
      >
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
