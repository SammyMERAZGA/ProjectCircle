<template>
  <div>
    <v-btn class="ma-4" color="teal" to="/home" fab dark small>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <h1 class="text-center black--text">Maîtrise d'ouvrage</h1>
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
          <v-img class="rounded-lg ma-3" src="@/assets/gif/contexte.gif" />
          <v-card-actions class="justify-center">
            <v-btn
              class="rounded-md"
              outlined
              color="teal darken-3"
              @click="dialogPresentation = false"
            >
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <!-- END DIALOG -->
    <v-row justify="center">
      <v-img
        class="mt-5 mb-12"
        src="@/assets/management.png"
        max-width="200"
      ></v-img>
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
            @click="
              dialogPresentation = true;
              playSoundClick();
            "
          >
            <v-icon dark> mdi-information-variant </v-icon>
          </v-btn>
        </template>
        <span>Afficher les règles et le contexte</span>
      </v-tooltip>
    </v-row>
    <v-row class="mb-15" justify="center" align="center">
      <v-card class="elevation-10">
        <v-tabs
          v-model="step"
          class="rounded-sm"
          fixed-tabs
          background-color="teal darken-2"
          dark
        >
          <v-tabs-slider color="cyan accent-1"></v-tabs-slider>
          <v-tab> Question 1 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 1
            </h1>
            <p class="mr-15 ml-15">
              Quelle est la phase de projet où l'on réalise le produit et où
              l'on recette ce dernier tout en ayant un suivi continu du chef de
              projet ?
            </p>
            <v-row class="mt-5 mb-10" justify="center" align="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Cadrage
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Clôture
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Conception & planification
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="
                  trueAnswerQ1();
                  step = 1;
                "
              >
                Production
              </v-btn>
            </v-row>
          </v-tab-item>
          <v-tab :disabled="disableQ2" title="Step 2"> Question 2 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 2
            </h1>
            <p class="mr-15 ml-15">
              Quelle est la phase de projet qui permet de définir les moyens,
              d'effectuer une planification détaillé, d'affiner le budget et
              spécifier de façon précise le produit ?
            </p>
            <v-row class="mt-5 mb-10" justify="center" align="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Cadrage
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Production
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="
                  trueAnswerQ2();
                  step = 2;
                "
              >
                Conception & Planification
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Clôture
              </v-btn>
            </v-row>
          </v-tab-item>
          <v-tab :disabled="disableQ3" title="Step 3"> Question 3 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 3
            </h1>
            <p class="mr-15 ml-15">
              Quelle est la phase de projet qui permet de définir le besoin et
              les objectifs, d'effectuer une première analyse budgétaire et
              d'introduire les ressources disponibles ?
            </p>
            <v-row class="mt-5 mb-10" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="
                  trueAnswerQ3();
                  step = 3;
                "
              >
                Cadrage
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Clôture
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Conception & Planification
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Production
              </v-btn>
            </v-row>
          </v-tab-item>
          <v-tab :disabled="disableQ4" title="Step 4"> Question 4 </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Question 4
            </h1>
            <p class="mr-15 ml-15">
              Quelle est la phase de projet permettant de faire le bilan ainsi
              que la capitalisation du travail effectué ?
            </p>
            <v-row class="mt-5 mb-10" justify="center">
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="
                  trueAnswerQ4();
                  step = 4;
                "
              >
                Clôture
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Cadrage
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Production
              </v-btn>
              <v-btn
                class="ma-5 rounded-lg"
                outlined
                color="teal darken-3"
                @click="removeLife()"
              >
                Conception & Planification
              </v-btn>
            </v-row>
          </v-tab-item>
          <v-tab :disabled="disableFinalEnigma" title="Step 5"> Énigme </v-tab>
          <v-tab-item>
            <h1 id="m-bottom" class="overline text-center grey--text">
              Énigme finale
            </h1>
            <h3 class="overline mr-15 mb-5 ml-15 text-center">
              Bravo ! Vous avez répondu juste à toutes les questions 🚀
            </h3>
            <p class="mr-15 ml-15">
              Parviendrez-vous maintenant à mettre les chiffres dans l'ordre du
              bon déroulement d'un projet et ainsi aider le pôle MOA ?
            </p>
            <v-row class="mt-10" justify="center" align="center">
              <v-chip class="ma-2" color="teal accent-4" text-color="white">
                1 - Production
              </v-chip>
              <v-chip class="ma-2" color="teal" text-color="white">
                2 - Conception & Planification </v-chip
              ><v-chip class="ma-2" color="teal darken-2" text-color="white">
                3 - Cadrage
              </v-chip>
              <v-chip class="ma-2" color="teal darken-4" text-color="white">
                4 - Clôture
              </v-chip></v-row
            >
            <v-row class="ma-10" justify="center" align="center">
              <v-otp-input
                v-model="code"
                color="teal"
                length="4"
                type="number"
              ></v-otp-input>
            </v-row>
            <v-row class="ma-10" justify="center" align="center">
              <v-btn
                class="rounded-xl"
                color="teal darken-3"
                outlined
                @click="checkCode(code)"
                ><v-icon left> mdi-lock </v-icon>Valider le code</v-btn
              >
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
    <v-dialog
      v-model="dialogVictory"
      transition="dialog-top-transition"
      max-width="800"
      persistent
    >
      <template @click.stop="dialogVictory = false">
        <v-card class="rounded-lg" height="600">
          <v-toolbar color="teal darken-2" dark
            ><v-row align="center" justify="center"
              ><v-toolbar-title
                ><v-icon class="mr-5" x-large color="white">mdi-trophy</v-icon
                >Victoire</v-toolbar-title
              ></v-row
            ></v-toolbar
          >
          <v-img class="rounded-lg ma-3" src="@/assets/gif/victoryMOE.gif" />
          <v-card-actions class="justify-center">
            <v-btn
              class="rounded-md"
              outlined
              color="teal darken-3"
              @click="goToHome()"
              >Fermer</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
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
    <v-snackbar
      color="red darken-4"
      v-model="snackbarCodeFalse"
      :timeout="timeout"
      >Ce n'est pas le bon code ! Veuillez réessayer.
      <template v-slot:action="{ attrs }">
        <v-btn
          class="rounded-xl"
          color="white"
          text
          v-bind="attrs"
          @click="snackbarCodeFalse = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- DIALOG GAME OVER -->
    <v-dialog
      v-model="dialogGameOver"
      transition="dialog-top-transition"
      max-width="600"
    >
      <v-card>
        <v-toolbar color="red darken-2" dark>
          <v-row align="center" justify="center">
            <v-toolbar-title
              ><v-icon class="mr-2" color="white">mdi-alert</v-icon
              >Sanction</v-toolbar-title
            >
          </v-row>
        </v-toolbar>
        <v-card-text>
          <v-row align="center" justify="center">
            <v-img class="ma-5" src="@/assets/warning.png" max-width="300" />
            <p>
              ⚠️ Attention, c'est ton troisième avertissement, tu as donc une
              sanction !
            </p>
          </v-row>
          <v-row justify="end">
            <v-card-action class="justify-center mb-2">
              <v-spacer></v-spacer>
              <v-btn
                class="rounded-xl"
                text
                color="red darken-1"
                @click="dialogGameOver = false"
                >Fermer</v-btn
              >
            </v-card-action>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped src="./style.css"></style>
