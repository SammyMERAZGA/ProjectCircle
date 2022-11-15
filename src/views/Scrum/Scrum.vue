<template>
  <div>
    <h1 class="white--text text-center mt-10 mb-10">Partie : Scrum</h1>
    <v-card
        class="mx-auto mb-15"
        max-width="1000"
        elevation="8"
        shaped
        outlined
    >
      <v-tabs
          fixed-tabs
          background-color="indigo"
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
        <v-tab>
          Enigme
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
