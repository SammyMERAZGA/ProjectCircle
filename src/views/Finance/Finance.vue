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
              ><v-toolbar-title
                ><v-icon x-large color="white"
                  >mdi-chat-question-outline</v-icon
                >
                Contexte et règles</v-toolbar-title
              ></v-row
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
    <v-row justify="center" align="center">
      <v-tooltip top color="teal darken-3">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mb-10"
            fab
            dark
            v-on="on"
            v-bind="attrs"
            color="teal darken-1"
            @click="dialogPresentation = true"
          >
            <v-icon dark> mdi-information-variant </v-icon>
          </v-btn>
        </template>
        <span>Afficher les règles et le contexte</span>
      </v-tooltip>
    </v-row>
    <v-card class="mx-auto mb-15" max-width="1000">
      <v-tabs fixed-tabs background-color="teal darken-2" dark>
        <v-tab> Contexte </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">
                Contexte
              </h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Le DAF est en panique, l’entreprise est en plein déficit
                budgétaire et toutes les stratégies sont à revoir… Qui sont nos
                clients ? Quelles sont nos ressources actuelles ? Comment faire
                ?
                <br /><br />
                Votre seule option pour vous sortir de cette situation c’est le
                Business Modèle Canvas. Vous pourrez aller aider le pôle suivant
                une fois qu’il sera établi.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab> Business Model Canvas </v-tab>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <h4 class="overline text-decoration-underline mt-3 mb-3 ml-15">
                Business Model Canvas
              </h4>
              <p class="body-2 mb-10 ml-15 mr-15">
                Le Business Model Canvas permet de construire et résumer le
                modèle économique d’une entreprise . Quel que soit votre secteur
                d’activité ou la taille de votre marché, votre projet peut se
                résumer en un tableau simple, accessible et compréhensible pour
                tous. Le principe du BMC repose sur 9 blocs qui couvrent les 4
                dimensions fondamentales de quelconque (qui – quoi – comment –
                combien). Les 9 blocs permettent de décrire, inventer, tester et
                dessiner le modèle économique parfait.
                <br /><br />
                Au centre se trouve votre proposition de valeur. La partie
                gauche est consacrée à vos méthodes de travail (partenaires,
                ressources, activités) tandis que la partie droite précise pour
                qui vous créez de la valeur (quels clients, quelles relations,
                quelle distribution). Enfin, la partie inférieure du tableau met
                en avant votre structure de coûts et vos flux de revenus.
              </p>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- Enigme -->
        <v-tab> Enigme </v-tab>
        <v-tab-item>
          <v-container>
            <v-row align="center" justify="center">
              <v-img class="" src="@/assets/FLECHE.png" max-width="150"></v-img>
            </v-row>
            <v-row>
              <!-- LEFT CONTENT -->
              <v-col cols="12" sm="6">
                <div
                  class="col mx-2 px-2 py-3 bg-light border rounded"
                  style="height: 100%; display: flex"
                >
                  <div style="margin: auto" v-if="tasks.ideas.length > 0">
                    <h1 class="overline ma-5">Proposition 💡</h1>
                    <draggable
                      class="draggable-list"
                      :list="tasks.ideas"
                      group="tasks"
                    >
                      <div v-for="(idea, i) in tasks.ideas" :key="i">
                        <v-card
                          elevation="5"
                          class="ma-5 pa-2 text-center rounded-xl"
                          style="display: flex"
                        >
                          <p style="margin: auto" class="overline">
                            {{ idea.title }}
                          </p>
                        </v-card>
                      </div>
                    </draggable>
                  </div>
                  <div style="margin: auto" v-else>
                    <v-card
                      elevation="5"
                      class="ma-5 pa-2 text-center rounded-xl"
                      style="display: flex"
                    >
                      <v-row align="center" justify="center">
                        <v-btn
                          class="ma-5 rounded-lg"
                          outlined
                          color="teal darken-3"
                          @click="checkResult()"
                        >
                          Vérifier le résultat
                        </v-btn>
                      </v-row>
                    </v-card>
                  </div>
                </div>
              </v-col>
              <!-- RIGHT CONTENT -->
              <v-col cols="6" md="6">
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Partenaire stratégique ✍</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.partenaires"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.partenaires" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Activités/Ressources clés ✍</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.propositions"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.propositions" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Propositions de valeur ✅</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.canaux"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.canaux" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Canaux de distribution ✅</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.segment"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.segment" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Relation client ✅</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.structure"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.structure" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Segment de clientèle ✅</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.flux"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.flux" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
                <div class="col mx-2 px-2 py-3 bg-light border rounded">
                  <h1 class="overline ma-5">Structure des coûts ✅</h1>
                  <draggable
                    class="draggable-list"
                    :list="tasks.activites"
                    group="tasks"
                  >
                    <div v-for="(task, i) in tasks.activites" :key="i">
                      <v-card
                        elevation="5"
                        class="ma-5 pa-2 text-center rounded-xl"
                        style="display: flex"
                      >
                        <p style="margin: auto" class="overline">{{ task }}</p>
                      </v-card>
                    </div>
                  </draggable>
                </div>
              </v-col>
            </v-row>
          </v-container>
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
