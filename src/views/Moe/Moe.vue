<template>
  <div>
    <h1 class="white--text text-center mt-10 mb-10">Partie : MOE</h1>
    <v-row align="center" justify="center" v-if="!game1">
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

    <v-row align="center" justify="center" v-else>
      <v-stepper v-model="e6" vertical width="1000" elevation="8" shaped outlined style="padding: 50px">
        <draggable
          v-model="rows"
          tag="v-layout"
          class="row wrap fill-height align-center sortable-list"
          style="background: grey"
        >
          <v-flex v-for="row in rows" :key="row.index" class="sortable" xs12 my-2 style="background: #fff">
            <draggable :list="row.items" tag="v-layout" :group="{ name: 'row' }" class="row wrap justify-space-around">
              <v-flex v-for="item in row.items" :key="item.title" pa-3 class="row-v">
                <v-card class="rounded-lg elevation-5 ml-2 mr-2" style="height: 50px; width: 100px;">{{ item.title }}</v-card>
              </v-flex>
            </draggable>
          </v-flex>
        </draggable>
      </v-stepper>
    </v-row>

    <v-snackbar v-model="snackbar" right color="success" align="center" min-width>
      Bonne réponse <v-icon> mdi-thumb-up </v-icon>
    </v-snackbar>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Echec</v-card-title>
        <v-card-text class="mt-5">
          Apprenez vos leçons ! Vous avez un nouvel avertissement <v-icon>mdi-alert-circle-outline</v-icon>
          Attention, au bout de 3 avertissements vous serez viré.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
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
<style scoped lang="css" src="./style.css"></style>
