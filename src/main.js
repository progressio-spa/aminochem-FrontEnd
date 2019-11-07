import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import VueI18n from 'vue-i18n';
import { languages, defaultLocale } from './langs/index.js';

Vue.use(VueI18n);

const messages = Object.assign(languages);

Vue.config.productionTip = false;

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: 'es',
  messages, // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render(h) {
    return h(App);
  },
}).$mount('#app');
