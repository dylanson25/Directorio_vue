import Vuex from "vuex";
import Vue from "vue";

import * as actions from "./directorio/actions";
import * as getters from "./directorio/gatters";
import * as mutations from "./directorio/mutations";

// import directorioStore from "./directorio";
import socketio from "./socketio";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state: {
    isLoading: true,
    directorio: [],
  },
  modules: {
    socketio,
  },
});
