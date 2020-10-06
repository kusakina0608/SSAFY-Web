import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salt: "",
    message: "치킨먹자"
  },
  mutations: {
    SET_SALT(state, value){
      state.salt = value;
    },
    SET_MSG(state, value){
      state.message = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
