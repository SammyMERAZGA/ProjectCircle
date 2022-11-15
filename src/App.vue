<template>
  <v-app>
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer: () => import("./components/Footer.vue"),
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

#app {
  background: linear-gradient(#0050D1, #00B6AA);
}

body {
  font-family: "Poppins", sans-serif;
}
</style>
