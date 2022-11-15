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
    </ul>
    <h1 class="text-center mt-10 black--text mb-15">
      Choisis ta thématique 👇
    </h1>
    <v-row class="mt-5" align="center" justify="center">
      <v-card
        class="mr-15 ml-15 mb-15 rounded-xl elevation-15 cardsTheme"
        max-width="400"
        v-for="t in thematic"
        :key="t.title"
      >
        <v-img class="white--text align-end" height="200px" :src="t.image">
        </v-img>
        <v-card-text class="text--primary">
          <div class="text-center">
            {{ t.description }}
          </div>
        </v-card-text>
        <v-row justify="center" align="center">
          <v-card-actions>
            <v-btn class="rounded-xl mb-5" color="pink" :to="t.link" text>
              Choisir ce thème
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>

<!--
#0050D1
#006EC6
#0092B8
#00A1B2
#00B6AA
-->
