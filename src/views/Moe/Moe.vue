<template>
  <div>
    <v-btn class="ma-4" color="teal" to="/home" fab dark small>
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <h1 class="black--text text-center mb-7">Maîtrise d'oeuvre</h1>
    <!-- DIALOG PRESENTATION DU JEU -->
    <v-dialog
      v-model="dialogPresentation"
      transition="dialog-bottom-transition"
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
      <v-img class="mb-12" src="@/assets/development.png" max-width="193" height="200"></v-img>
    </v-row>
    <v-row class="mb-15" align="center" justify="center" v-if="game1">
      <Transition>
        <v-stepper v-model="e6" vertical width="1000" elevation="8" shaped outlined>
          <!-- 1/5 -->
          <v-stepper-step :complete="e6 > 1" step="1">
            Contexte
            <small>1/5</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <p class="body-2 mb-5 ml-5 mr-5">
              Depuis toujours l’entreprise ne possède qu’un seul développeur. Néanmoins, AigriCompany a recruté deux
              nouveaux développeurs n’ayant pas d’expérience dans la programmation à plusieurs.
            </p>
            <p class="body-2 mb-5 ml-5 mr-5">
              Un problème se pose, comment travailler ensemble sur le projet afin d’augmenter la productivité ? Essayez
              de lui fournir un moyen de coder à plusieurs
            </p>
            <v-row align="center" justify="center" class="mb-2">
              <v-btn class="rounded-xl mr-2" @click="changeCard(2, false)"> Coder sur un même ordinateur </v-btn>
              <v-btn class="rounded-xl ml-2" @click="changeCard(2, true)"> Utiliser git </v-btn>
            </v-row>
          </v-stepper-content>
          <!-- 2/5 -->
          <v-stepper-step :complete="e6 > 2" step="2">
            Versioning
            <small>2/5</small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <p class="body-2 mb-5 ml-5 mr-5">
              DMhh… Coder à plusieurs via git semble être une bonne solution, Connaissez-vous le versioning ?
            </p>
            <p class="body-2 mb-5 ml-5 mr-5">
              C’est un système de contrôle de version qui va gérer les changements apportés à un code source au fil du
              temps. Quelle est la premère étape selon vous ?
            </p>
            <v-row align="center" justify="center" class="mb-2">
              <v-btn class="rounded-xl mr-2" @click="changeCard(3, true)"> Initialiser un repository git </v-btn>
              <v-btn class="rounded-xl ml-2" @click="changeCard(3, false)"> Faire son premier commit </v-btn>
            </v-row>
          </v-stepper-content>
          <!-- 3/5 -->
          <v-stepper-step :complete="e6 > 3" step="3">
            Repository
            <small>3/5</small>
          </v-stepper-step>
          <v-stepper-content step="3">
            <p class="body-2 mb-5 ml-5 mr-5">
              En voilà une bonne idée ! Utilisez git init, vous verrez que git a créé un dossier caché nommé .git qui
              enregistrera les informations sur votre projet ainsi que vos fichiers. Créé les branches pour chaque
              développeur git branch nomDeMaBranche
            </p>
            <p class="body-2 mb-5 ml-5 mr-5">
              et faire un git checkout nomDeMaBranche afin de se mettre sur la branche en question Maintenant nous
              allons faire le premier commit ! Quelle commande utiliser selon vous ?
            </p>
            <v-row align="center" justify="center" class="mb-2">
              <v-btn class="rounded-xl mr-2" @click="changeCard(4, true)"> Git add</v-btn>
              <v-btn class="rounded-xl ml-2" @click="changeCard(4, false)">Git commit</v-btn>
            </v-row>
          </v-stepper-content>
          <!-- 4/5 -->
          <v-stepper-step :complete="e6 > 4" step="4">
            Commit
            <small>4/5</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <p class="body-2 mb-5 ml-5 mr-5">
              Et oui ! Avant même de comit il faut savoir quel fichiers nous voulons pousser vers le rpository, utiliser
              git add nom_fichier pour prendre en compte la modification du fichier.
            </p>
            <p class="body-2 mb-5 ml-5 mr-5">
              Et maintenant vous pouvez faire votre premier commit : git commit -m "message du commit". Une fois les
              commits réalisés, il faut maintenant pousser les développements :
            </p>
            <v-row align="center" justify="center" class="mb-2">
              <v-btn class="rounded-xl mr-2" @click="changeCard(5, false)"> Utiliser git pushed </v-btn>
              <v-btn class="rounded-xl ml-2" @click="changeCard(5, true)"> Utiliser git push </v-btn>
            </v-row>
          </v-stepper-content>
          <!-- 5/5 -->
          <v-stepper-step :complete="e6 > 5" step="5">
            Fusionner le code
            <small>5/5</small>
          </v-stepper-step>
          <v-stepper-content step="5">
            <p class="body-2 mb-5 ml-5 mr-5">Après avoir pousser son code, l'étape cruciale : le merge</p>
            <p class="body-2 mb-5 ml-5 mr-5">Le merge vas vous permettre de fusionner le code.</p>
            <v-row align="center" justify="center" class="mb-2">
              <v-btn class="rounded-xl mr-2" @click="changeCard(6, true)"> Utiliser git merge </v-btn>
              <v-btn class="rounded-xl ml-2" @click="changeCard(6, false)"> Utiliser git fusion </v-btn>
            </v-row>
          </v-stepper-content>
        </v-stepper>
      </Transition>
    </v-row>

    <v-row class="mb-15" align="center" justify="center" v-else>
      <v-stepper v-model="e6" vertical width="1000" elevation="8" shaped outlined style="padding: 50px">
        <h1 class="overline text-center mb-15">Mettez la liste dans l'odre des cycles git !</h1>
        <draggable v-model="rows" tag="v-layout" class="row wrap fill-height align-center sortable-list">
          <v-flex v-for="row in rows" :key="row.index" class="sortable" xs12 my-2 style="background: #fff">
            <h1 class="overline text-center" v-if="row.items.length >= 1">
              {{ row.text }}
            </h1>
            <v-row align="center" justify="center">
              <draggable
                :list="row.items"
                tag="v-layout"
                :group="{ name: 'row' }"
                style="padding: 10px; display: inline-flex"
              >
                <v-flex v-for="item in row.items" :key="item.title" pa-3 class="row-v">
                  <v-card
                    class="rounded-lg elevation-5 text-center"
                    style="height: 60px; width: 145px; display: flex; padding: 10px"
                  >
                    <p style="margin: auto" class="overline">
                      {{ item.title }}
                    </p>
                  </v-card>
                </v-flex>
              </draggable>
            </v-row>
          </v-flex>
        </draggable>
        <v-row align="center" justify="center">
          <v-btn class="ma-5 rounded-lg" outlined color="teal darken-3" @click="checkResult()">
            Vérifier le résultat
          </v-btn>
        </v-row>
      </v-stepper>
    </v-row>

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
    <!-- DIALOG GAME OVER -->
    <v-dialog
        v-model="dialogSanction"
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
              ⚠️ Attention, c'est ton troisième avertissement, tu as donc une sanction !
            </p>
          </v-row>
          <v-row justify="end">
            <v-card-action class="justify-center mb-2">
              <v-spacer></v-spacer>
              <v-btn
                  class="rounded-xl"
                  text
                  color="red darken-1"
                  @click="dialogSanction = false"
              >Fermer</v-btn
              >
            </v-card-action>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
        v-model="dialogSuccess"
        transition="dialog-top-transition"
        max-width="800"
        persistent
    >
      <template @click.stop="dialogSuccess = false">
        <v-card class="rounded-lg" height="600">
          <v-toolbar color="teal darken-2" dark
          ><v-row align="center" justify="center"
          ><v-toolbar-title
          ><v-icon class="mr-5" x-large color="white">mdi-trophy</v-icon
          >Victoire</v-toolbar-title
          ></v-row
          ></v-toolbar
          >
          <v-img class="rounded-lg ma-3" src="@/assets/gif/victory.gif" />
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
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="css" src="./style.css"></style>
