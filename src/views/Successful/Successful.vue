<template>
  <div>
    <div class="firework"></div>
    <div class="firework"></div>
    <div class="firework"></div>
    <div class="firework"></div>

    <h1 class="black--text mt-10 mb-10">Vous avez réussi à redresser l'entreprise !</h1>
    <v-row align="center" justify="center">
      <v-img
          class="rounded-xl elevation-10"
          src="@/assets/gif/GIF_FINAL.gif"
          max-width="1000"
      />
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
