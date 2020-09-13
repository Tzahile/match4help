export default {
  namespaced: true,
  state: {
    datatable: undefined,
  },
  getters: {
    GetDataTable(state) {
      return state.datatable;
    },
  },
  mutations: {
    SetDataTable(state, { datatable }) {
      state.datatable = datatable;
    },
  },
  actions: {
    UpdateDataTable({ commit }, { newData }) {
      commit("SetDataTable", { datatable: newData });
    },
  },
};
