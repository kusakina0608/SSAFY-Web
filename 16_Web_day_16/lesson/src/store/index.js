import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "이대진"
  },
  mutations: {
    CHANGE_NAME(state, data){
      state.name = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
