<template>
  <div>
    <h1>Vous avez reçu 3 avertissements</h1>
    <v-row align="center" justify="center">
      <img id="manager" src="@/assets/game-over.png" />
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
