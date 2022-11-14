<template>
  <v-footer id="Footer" dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="color">
        <strong class="subheading">Nightmare Project Game</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {
  icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram"];
}
</script>

<style scoped>
.color {
  background: linear-gradient(to right, #1c0352, #480351);
}

#Footer {
  bottom: 0;
  width: 100%;
  margin-top: 5%;
}
</style>
