import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorScrum: 0,
    goodScrum: 0,
    sanction: 0,
    moeOK: false,
    moaOK: false,
    rhOK: false,
    financeOK: false,
  },
  getters: {
  },
  mutations: {
    checkGameOver(state): void {
      if (state.sanction == 3){
        state.sanction = 0;
        router.push("/unsuccessful");
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
