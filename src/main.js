import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import VueI18n from 'vue-i18n';
import { languages, defaultLocale } from './langs/index.js';
import VueProgressBar from 'vue-progressbar'

const options = {
  color: 'orange',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(VueProgressBar, options);

Vue.use(VueI18n);

Vue.use(plugin);

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
