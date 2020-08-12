import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import firebaseInit from "./firebaseInit.js";
firebaseInit.auth.onAuthStateChanged((user) => {
  store.dispatch("UpdateUser", { user });
});

Vue.config.performance = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
