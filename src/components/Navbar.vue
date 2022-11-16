<template>
  <v-app-bar
    v-if="$route.path !== '/' && $route.path !== '/context'"
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
    <h3 class="white--text mr-2">3/3</h3>
    <v-icon color="white">mdi-alert-circle-outline</v-icon>
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
