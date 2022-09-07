import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import header from './modules/header/header';
import tableData from './modules/table/tableData';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    header,
    tableData,
  },
});
