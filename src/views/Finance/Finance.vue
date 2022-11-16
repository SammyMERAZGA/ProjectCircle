<template>
  <div>
    <v-btn class="ma-5" color="teal" to="/home" fab dark small>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <h1 class="text-center black--text">Finance</h1>
    <!-- DIALOG PRESENTATION DU JEU -->
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
    <!-- END DIALOG -->
    <v-row justify="center">
      <v-img class="image" src="@/assets/finance.png" max-width="250"></v-img>
    </v-row>
    <v-card class="mx-auto mb-15" max-width="1000">
      <v-tabs fixed-tabs background-color="teal darken-2" dark>
        <v-tab> Contexte </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">Contexte</h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Le DAF est en panique, l’entreprise est en plein déficit budgétaire et toutes les stratégies sont à
                revoir… Qui sont nos clients ? Quelles sont nos ressources actuelles ? Comment faire ?
                <br /><br />
                Votre seule option pour vous sortir de cette situation c’est le Business Modèle Canvas. Vous pourrez
                aller aider le pôle suivant une fois qu’il sera établi.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab> Business Model Canvas </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">Business Model Canvas</h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Le Business Model Canvas permet de construire et résumer le modèle économique d’une entreprise . Quel
                que soit votre secteur d’activité ou la taille de votre marché, votre projet peut se résumer en un
                tableau simple, accessible et compréhensible pour tous. Le principe du BMC repose sur 9 blocs qui
                couvrent les 4 dimensions fondamentales de quelconque (qui – quoi – comment – combien). Les 9 blocs
                permettent de décrire, inventer, tester et dessiner le modèle économique parfait.
                <br /><br />
                Au centre se trouve votre proposition de valeur. La partie gauche est consacrée à vos méthodes de
                travail (partenaires, ressources, activités) tandis que la partie droite précise pour qui vous créez de
                la valeur (quels clients, quelles relations, quelle distribution). Enfin, la partie inférieure du
                tableau met en avant votre structure de coûts et vos flux de revenus.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab> Enigme </v-tab>
        <v-tab-item>
          <v-row align="center" justify="center">
            <v-stepper v-model="e6" vertical width="1000" elevation="8" shaped outlined style="padding: 50px">
              <draggable v-model="rows" tag="v-layout" class="row wrap fill-height align-center sortable-list">
                <v-flex v-for="row in rows" :key="row.index" class="sortable" xs12 my-2 style="background: #fff">
                  <h1 class="overline text-center">{{ row.text }}</h1>
                  <v-card v-if="row.items.length === 0" color="dark" class="ma-10"> </v-card>
                  <v-row align="center" justify="center">
                    <draggable
                      :list="row.items"
                      tag="v-layout"
                      :group="{ name: 'row' }"
                      style="padding: 10px; display: inline-flex"
                    >
                      <v-card class="text-center" color="#00796b2e" width="1001" style="display: flex; padding: 10px">
                        <v-flex v-for="item in row.items" :key="item.title" pa-3 class="row-v">
                          <v-card
                            class="rounded-lg elevation-5 text-center"
                            style="display: flex; padding: 10px; max-width: 400px; margin: auto"
                          >
                            <p style="margin: auto" class="overline">{{ item.title }}</p>
                          </v-card>
                        </v-flex>
                      </v-card>
                    </draggable>
                  </v-row>
                </v-flex>
              </draggable>
            </v-stepper>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-dialog v-model="dialogSuccessScrum" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Good</v-card-title>
        <v-card-text class="mt-5">
          Apprenez vos leçons ! Vous avez un nouvel avertissement
          <v-icon>mdi-alert-circle-outline</v-icon>
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
          Apprenez vos leçons ! Vous avez un nouvel avertissement
          <v-icon>mdi-alert-circle-outline</v-icon>
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
