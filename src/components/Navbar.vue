<template>
  <v-app-bar
    v-if="$route.path !== '/' && $route.path !== '/context' && $route.path !== '/successful' && $route.path !== '/unsuccessful'"
    app
    color="#00796B"
    flat
    height="40px"
  >
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="mr-5" icon v-on="on">
          <v-icon color="white">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.url"
            active-class="borderMobile"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-row align="center" justify="center">
      <h1 class="overline white--text">Project Nightmare</h1>
    </v-row>
    <h3 class="white--text mr-2">{{ this.$store.state.gameSuccess }}/4</h3>
    <v-tooltip color="teal darken-3" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
            dark
            v-bind="attrs"
            v-on="on"
            color="white"
            class="mr-4"
        >
          mdi-controller
        </v-icon>
      </template>
      <span>Jeux réussis</span>
    </v-tooltip>
    <h3 class="white--text mr-2">{{ this.$store.state.sanction }}/3</h3>
    <v-tooltip color="teal darken-3" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
            dark
            v-bind="attrs"
            v-on="on"
            color="white"
        >
          mdi-emoticon-angry
        </v-icon>
      </template>
      <span>Sanction</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navbar extends Vue {
  items = [
    {
      text: "Contexte",
      url: "/context",
    },
    {
      text: "Thématiques",
      url: "/home",
    },
    {
      text: "Quitter le jeu",
      url: "/",
    },
  ];
}
</script>

<style scoped>
.borderMobile {
  border-left: 4px solid #32e4cc;
}
</style>
