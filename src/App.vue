<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

#app {
  background: linear-gradient(white, #00b6aa);
}
</style>
