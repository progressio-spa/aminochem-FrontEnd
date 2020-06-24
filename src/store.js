import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAccessToken,
  registerUser,
  forgotPassword,
} from '@/api/requests/authorization';
import contact from '@/api/requests/contact';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: '',
    loadingPage: false,
  },
  mutations: {
    SET_ACCESS_TOKEN: (state, value) => {
      state.accessToken = value;
    },
    SET_LOADING_STATE: state => state.loadingPage = true,
    UNSET_LOADING_STATE: state => state.loadingPage = false,
  },
  actions: {
    changeLoadingState({ commit, getters }, action) {
      if (getters.getLoadingState && action === 'unset') {
        commit('UNSET_LOADING_STATE');
      } else if (!getters.getLoadingState && action === 'set'){
        commit('SET_LOADING_STATE');
      }
    },
    async authentication({ commit }, params) {
      try {
        const response = await getAccessToken(params);
        commit('SET_ACCESS_TOKEN', response.data);
        return true;
      } catch (e) {
        throw e;
      }
    },
    async createUser({ commit }, params) {
      try {
        await registerUser(params);
      } catch (e) {
        throw e;
      }
    },
    async sendForgotPassword({ commit }, params) {
      try {
        await forgotPassword(params);
      } catch (e) {
        throw e;
      }
    },
    async sendContactEmail({ commit }, params) {
      try {
        await contact(params);
      } catch (e) {
        throw e;
      }
    },
  },
  getters: {
    getAccessToken: state => state.accessToken,
    getLoadingState: state => state.loadingPage,
  },
});
