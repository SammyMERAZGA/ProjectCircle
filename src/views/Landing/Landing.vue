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
    <v-row align="center" justify="center">
      <img id="logo" src="@/assets/logo.png" />
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        class="rounded-lg mt-10 mb-15 elevation-5"
        color="white"
        to="/context"
        light
        depressed
        >Accéder au jeu</v-btn
      >
    </v-row>
    <v-card
      class="mx-auto mb-15"
      max-width="1000"
      elevation="8"
      shaped
      outlined
    >
      <h1 class="text-center mt-5">Règles du jeu</h1>
      <h4 class="overline text-decoration-underline mt-10 mb-3 ml-15">
        Règle 1 : Lorem Ipsum
      </h4>
      <p class="body-2 mb-5 ml-15 mr-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis
        alias natus totam tempore, sit praesentium facilis ea temporibus ipsa!
        Distinctio eos tempora incidunt omnis.
      </p>
      <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">
        Règle 2 : Lorem Ipsum
      </h4>
      <p class="body-2 mb-5 ml-15 mr-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero
        accusantium non optio. Laudantium nulla explicabo hic neque accusantium
        veniam!
      </p>
      <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">
        Règle 3 : Lorem Ipsum
      </h4>
      <p class="body-2 mb-10 ml-15 mr-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        temporibus est consequatur? Obcaecati aperiam eveniet id similique
        corporis, neque assumenda perspiciatis impedit incidunt facere ut
        praesentium repellat eligendi quia beatae.
      </p>
    </v-card>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>
