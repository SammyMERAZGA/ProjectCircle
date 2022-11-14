<template>
  <div>
    <h1 class="white--text text-center mt-10 mb-10">Contexte</h1>
    <v-row align="center" justify="center">
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/FpP55xp2HxY"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-row>
    <h3 class="white--text text-center mt-10 mb-5">Lancer le jeu !</h3>
    <v-row class="mb-15" align="center" justify="center">
      <v-btn class="mt-3" color="white" fab x-large light>
        <v-icon>mdi-controller</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
