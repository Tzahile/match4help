import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import firebaseInit from "./firebaseInit.js";
firebaseInit.auth.onAuthStateChanged((user) => {
  store.dispatch("user/UpdateUser", { user });
});
firebaseInit.sheetsCollection.on("value", (snapshot) => {
  store.dispatch("datatable/UpdateDataTable", { newData: snapshot.val() });
});
Vue.config.performance = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
