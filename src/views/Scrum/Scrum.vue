<template>
  <div>
    <h1 class="black--text text-center mt-10 mb-10">Pôle RH</h1>
    <v-card
        class="mx-auto mb-15"
        max-width="1000"
    >
      <v-tabs
          fixed-tabs
          background-color="#0AD0A0"
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
              <h2 class="mb-10 ml-15 mr-15 text-center">
                {{ data }}
              </h2>
              <p class="text-center">
                Faites correspondre l'action avec le rôle
              </p>
            <v-layout justify-center>
                <v-btn
                    class="rounded-lg elevation-5 ma-4"
                    color="white"
                    @click="refreshData(data, role[0])"
                    light
                    depressed
                >{{ role[0] }}</v-btn>
                <v-btn
                    class="rounded-lg elevation-5 ma-4"
                    color="white"
                    @click="refreshData(data, role[1])"
                    light
                    depressed
                >{{ role[1] }}</v-btn>
                <v-btn
                    class="rounded-lg  elevation-5 ma-4"
                    color="white"
                    @click="refreshData(data, role[2])"
                    light
                    depressed
                >{{ role[2] }}</v-btn>
              </v-layout>
            <p class="ml-15 mr-15">
              Bonnes réponses d'affilés : {{ goodScrum }}
            </p>
            <p class="ml-15 mr-15">
              Erreur : {{ errorScrum }}
            </p>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-dialog v-model="dialogSuccessScrum" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Good</v-card-title>
        <v-card-text class="mt-5">
          Apprenez vos leçons ! Vous avez un nouvel avertissement <v-icon>mdi-alert-circle-outline</v-icon>
          Attention, au bout de 3 avertissements vous serez viré.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text to="/home">
            C'est compris
            <v-btn class="ma-2" text icon color="blue lighten-2">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogErrorScrum" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Echec</v-card-title>
        <v-card-text class="mt-5">
          Apprenez vos leçons ! Vous avez un nouvel avertissement <v-icon>mdi-alert-circle-outline</v-icon>
          Attention, au bout de 3 avertissements vous serez viré.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogErrorScrum = false">
            C'est compris
            <v-btn class="ma-2" text icon color="blue lighten-2">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
