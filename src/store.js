import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentView: 'Products',
  },
  mutations: {
    toggle() {
      if (this.componentView === 'Products') {
        this.componentView = 'ProductView';
      } else {
        this.componentView = 'Products';
      }
      console.log(this.componentView);
    },
  },
  actions: {},
});
