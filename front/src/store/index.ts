import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLogin: false,
    token: null,
    userId: null,
    userName: null,
  },
  mutations: {
    login(state, {token, userName, userId}) {
      state.userId = userId;
      state.userName = userName;
      state.token = token;
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin= false;
      state.token = null;
      state.userId = null;
      state.userName = null;
    }
  },
  getters: {
    isLogin: (state) => state.isLogin,
    userName: (state) => state.userName,
  },
  actions: {
    async login({commit}, userInfo) {
      const {data} = await Vue.axios({
        url: '/user/login',
        method: 'post',
        data: userInfo
      });
      const {userId, userName, token} = data
      if(userId) commit('login', {token, userName, userId})
    },
    async logout({commit}) {
      commit('logout')
    }

  },
  modules: {}
})
