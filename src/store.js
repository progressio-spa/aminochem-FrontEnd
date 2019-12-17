import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAccessToken,
  registerUser,
} from '@/api/requests/authorization';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: '',
  },
  mutations: {
    SET_ACCESS_TOKEN: (state, value) => {
      state.accessToken = value;
    },
  },
  actions: {
    async authentication({ commit }, params) {
      try {
        const response = await getAccessToken(params);
        commit('SET_ACCESS_TOKEN', response.data);
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
  },
  getters: {
    getAccessToken: state => state.accessToken,
  },
});
