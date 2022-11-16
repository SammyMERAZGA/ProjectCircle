<template>
  <div>
    <h1 class="black--text text-center mt-10 mb-10">Contexte</h1>
    <v-row align="center" justify="center">
      <v-img class="rounded-xl elevation-10" src="@/assets/gif/context.gif" max-width="950"/>
    </v-row>
    <h3 class="black--text text-center mt-10 mb-5">Lancer le jeu !</h3>
    <v-row class="mb-15" align="center" justify="center">
      <v-btn
        class="mt-3 elevation-10"
        color="white"
        to="/home"
        fab
        x-large
        light
      >
        <v-icon color="teal">mdi-controller</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
