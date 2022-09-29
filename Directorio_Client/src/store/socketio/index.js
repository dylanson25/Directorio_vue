import state from "./state";
import * as actions from "./actions";
import * as gatters from "./gatters";
import * as mutations from "./mutations";

const socketio = {
  namespaced: true,
  state,
  mutations,
  gatters,
  actions,
};

export default socketio;
