import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
/* eslint-disable*/
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorScrum: 0,
    goodScrum: 0,
    sanction: 0,
    gameSuccess: 0,
    moeOK: false,
    moaOK: false,
    rhOK: false,
    financeOK: false,
  },
  getters: {
  },
  mutations: {
    checkGameOver(state): void {
      if (state.sanction == 3) {
        state.sanction = 0;
        state.gameSuccess = 0;
        state.moeOK = false;
        state.moaOK = false;
        state.rhOK = false;
        state.financeOK = false;
        router.push("/unsuccessful");
      }
    },
    checkSuccess(state): void {
      if (state.gameSuccess == 4) {
        state.sanction = 0;
        state.gameSuccess = 0;
        router.push("/successful");
        var audio = new Audio(require("@/assets/winGame.mp3"));
        audio.play();
        state.moeOK = false;
        state.moaOK = false;
        state.rhOK = false;
        state.financeOK = false;
      }
    },
    
  },
  actions: {
  },
  modules: {
  }
})
