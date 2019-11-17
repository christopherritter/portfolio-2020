import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueAnalytics from "vue-analytics";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: "UA-139579603-1",
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
