import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(Buefy);

Vue.use(
  new VueSocketIO({
    connection: SocketIO("http://localhost:8081", {
      transports: ["websocket", "polling", "flashsocket"],
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

new Vue({
  router,
  store,
  beforeCreate() {
    store.commit("socketio/setSocket", this.$socket);
  },
  render: (h) => h(App),
}).$mount("#app");
