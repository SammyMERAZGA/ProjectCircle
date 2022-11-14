<template>
  <div>
    <h1 class="white--text text-center mt-10 mb-10">Partie : MOE</h1>
    <!-- <v-card class="mx-auto mb-15" max-width="1000" elevation="8" shaped outlined>
      <h4 class="overline text-decoration-underline mt-10 mb-3 ml-15">Contexte</h4>
      <p class="body-2 mb-5 ml-15 mr-15">
        Depuis toujours l’entreprise ne possède qu’un seul développeur. Néanmoins, company a recruté deux nouveaux
        développeurs n’ayant pas d’expérience dans la programmation à plusieurs.
      </p>
      <p class="body-2 mb-5 ml-15 mr-15">
        Un problème se pose, comment travailler ensemble sur le projet afin d’augmenter la productivité ? Essayez de lui
        fournir un moyen de coder à plusieurs
      </p>
    </v-card> -->
    <v-row align="center" justify="center">
      <v-stepper v-model="e6" vertical width="1000" elevation="8" shaped outlined>
        <!-- Context 1/5 -->
        <v-stepper-step :complete="e6 > 1" step="1">
          Contexte
          <small>1/5</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <h4 class="overline text-decoration-underline mt-10 mb-3 ml-5">Contexte</h4>
          <p class="body-2 mb-5 ml-5 mr-5">
            Depuis toujours l’entreprise ne possède qu’un seul développeur. Néanmoins, company a recruté deux nouveaux
            développeurs n’ayant pas d’expérience dans la programmation à plusieurs.
          </p>
          <p class="body-2 mb-5 ml-5 mr-5">
            Un problème se pose, comment travailler ensemble sur le projet afin d’augmenter la productivité ? Essayez de
            lui fournir un moyen de coder à plusieurs
          </p>
          <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
        <!-- Context 2/5 -->
        <v-stepper-step :complete="e6 > 2" step="2"> Versioning </v-stepper-step>

        <v-stepper-content step="2">
          <p class="body-2 mb-5 ml-5 mr-5">
            DMhh… Coder à plusieurs via git semble être une bonne solution, Connaissez-vous le versioning ?
          </p>
          <p class="body-2 mb-5 ml-5 mr-5">
            C’est un système de contrôle de version qui va gérer les changements apportés à un code source au fil du
            temps. Quelle estr la premère étape ?
          </p>
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3"> Repository </v-stepper-step>

        <v-stepper-content step="3">
          <p class="body-2 mb-5 ml-5 mr-5">
            En voilà une bonne idée ! Utilisez git init, vous verrez que git a créé un dossier caché nommé .git qui
            enregistrera les informations sur votre projet ainsi que vos fichiers. Créé les branches pour chaque
            développeur git branch nomDeMaBranche
          </p>
          <p class="body-2 mb-5 ml-5 mr-5">
            et faire un git checkout nomDeMaBranche afin de se mettre sur la branche en question Maintenant nous allons
            faire le premier commit ! Quelle commande utiliser selon vous ?
          </p>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4"> Commit </v-stepper-step>
        <v-stepper-content step="4">
          <h4 class="overline text-decoration-underline mt-10 mb-3 ml-5">Commit</h4>
          <p class="body-2 mb-5 ml-5 mr-5">
            Et oui ! Avant même de comit il faut savoir quel fichiers nous voulons pousser vers le répository, utiliser
            git add nom_fichier pour prendre en compte la modification du fichier.
          </p>
          <p class="body-2 mb-5 ml-5 mr-5">
            Un problème se pose, comment travailler ensemble sur le projet afin d’augmenter la productivité ? Essayez de
            lui fournir un moyen de coder à plusieurs
          </p>
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
