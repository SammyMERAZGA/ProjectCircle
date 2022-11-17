<template>
  <div>
    <v-btn class="ma-5" color="teal" to="/home" fab dark small>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <h1 class="text-center black--text">Ressource humaines</h1>
    <v-dialog
        v-model="dialogPresentation"
        transition="dialog-top-transition"
        max-width="800"
        persistent
    >
      <template @click.stop="dialogPresentation = false">
        <v-card class="rounded-lg" height="600">
          <v-toolbar color="teal darken-2" dark
          ><v-row align="center" justify="center"
          ><v-toolbar-title><v-icon x-large color="white">mdi-chat-question-outline</v-icon> Contexte et règles</v-toolbar-title></v-row
          ></v-toolbar
          >
          <v-img class="rounded-lg ma-3" src="@/assets/gif/context.gif" />
          <v-card-actions class="justify-center">
            <v-btn
                class="rounded-md"
                outlined
                color="teal darken-3"
                @click="dialogPresentation = false"
            >Fermer</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-row justify="center">
      <v-img class="mt-5 mb-12" src="@/assets/RH-ingame.png" max-width="200"></v-img>
    </v-row>
    <v-card
        class="mx-auto mb-15"
        max-width="1000"
    >
      <v-tabs
          fixed-tabs
          background-color="teal darken-2"
          dark
      >
        <v-tab>
          Product owner
        </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">Rôle 1 : Product owner</h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Il est chargé de satisfaire les besoins des clients en menant à bien la livraison d’un produit de qualité.
                Il sert d’interface entre l’équipe technique, l’équipe marketing et les clients. Au sein de son groupe de travail,
                il est le premier responsable de la conception du produit..
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab>
          Scrum master
        </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">Rôle 2 : Scrum master</h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Le Scrum Master agit comme un facilitateur au sein de l’équipe Scrum.
                Il est chargé d’établir la méthodologie Scrum et d’aider ses membres à respecter les principes et pratiques Scrum.
                Orienté vers les relations, il prend plaisir à aider ses collègues à évoluer et à s’améliorer.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab>
          Team member
        </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">Rôle 3 : Team member</h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Cette équipe aux compétences variées a pour rôle de développer le meilleur produit possible. Selon les organisations,
                elle peut se composer de profils tels que : développeurs, architectes, business analysts, testeurs,UX designers, etc.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab @click="getData()">
          Enigme
        </v-tab>
        <v-tab-item>
          <v-container fluid>
            <h2 class="mb-10 ml-15 mr-15 mt-10 text-center">
              {{ data }}
            </h2>
            <v-layout justify-center>
              <v-btn
                  class="ma-5 rounded-lg"
                  outlined
                  color="teal darken-3"
                  @click="refreshData(data, role[0])"
              >{{ role[0] }}</v-btn>
              <v-btn
                  class="ma-5 rounded-lg"
                  outlined
                  color="teal darken-3"
                  @click="refreshData(data, role[1])"
              >{{ role[1] }}</v-btn>
              <v-btn
                  class="ma-5 rounded-lg"
                  outlined
                  color="teal darken-3"
                  @click="refreshData(data, role[2])"
              >{{ role[2] }}</v-btn>
            </v-layout>
            <v-row class="ma-5" justify="end">
              <h1>{{ goodScrum }}</h1>
              <v-icon x-large color="orange">mdi-fire</v-icon>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <!-- DIALOG GAME OVER -->
    <v-dialog v-model="dialogSanction" persistent transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-toolbar color="red darken-2" dark></v-toolbar>
        <v-card-text>
          <v-row align="center" justify="center">
            <div class="text-h2 pa-12">Aie !</div>
            <p class="text-center">Vous avez reçu 3 avertissements, vous prennez une sanction, retournez apprendre vos leçons !</p>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text to="/home"> J'y vais ! </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- DIALOG GAME SUCCESS -->
    <v-dialog v-model="dialogSuccess" persistent transition="dialog-top-transition" max-width="600">
      <v-card>
        <v-toolbar color="#00796b" dark></v-toolbar>
        <v-card-text>
          <v-row align="center" justify="center">
            <div class="text-h2 pa-12">Bravo !</div>
            <p class="text-center">Vous avez réussi le mini jeu ! </p>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#00796b" text to="/home"> J'y vais ! </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- SNACKBAR -->
    <v-snackbar color="green darken-3" v-model="snackbarTrue" :timeout="timeout"
    >Félicitations ! Vous avez trouvé la bonne réponse.
      <template v-slot:action="{ attrs }">
        <v-btn
            class="rounded-xl"
            color="white"
            text
            v-bind="attrs"
            @click="snackbarTrue = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar color="red darken-4" v-model="snackbarFalse" :timeout="timeout"
    >Aïe, ce n'est pas la bonne réponse. Vous prenez un avertissement !
      <template v-slot:action="{ attrs }">
        <v-btn
            class="rounded-xl"
            color="white"
            text
            v-bind="attrs"
            @click="snackbarFalse = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
