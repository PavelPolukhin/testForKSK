import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header/header';
import tableData from './modules/table/tableData';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    viewType: 'table',
  },
  mutations: {
    setViewType(state, val) {
      state.viewType = val;
    },
  },
  getters: {
    getViewType: (state) => state.viewType,
  },
  modules: {
    header,
    tableData,
  },
});
