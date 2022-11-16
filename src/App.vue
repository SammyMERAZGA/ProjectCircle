<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  },
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

body::-webkit-scrollbar {
  width: 1em;
  border-radius: 10px;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
}
body::-webkit-scrollbar-thumb {
  background-color: #0ad0a0;
  border-radius: 10px;
}
</style>
