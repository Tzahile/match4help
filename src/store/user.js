export default {
  namespaced: true,
  state: {
    user: undefined,
  },
  getters: {
    GetUser(state) {
      return state.user;
    },
  },
  mutations: {
    SetUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    UpdateUser({ commit }, { user }) {
      commit("SetUser", { user });
    },
  },
};
