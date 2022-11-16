<template>
  <v-dialog v-model="dialogGameOver" transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-toolbar color="red darken-2" dark>Aïe aïe ! C'est là que tout se termine pour vous..</v-toolbar>
        <v-card-text>
          <v-row align="center" justify="center">
            <div class="text-h2 pa-12">GAME OVER !</div>
            <p>Vous allez être redirigé vers l'écran du choix des thématiques.</p>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DialogGameOver extends Vue {
  props= ["dialogGameOver"]
}
</script>
