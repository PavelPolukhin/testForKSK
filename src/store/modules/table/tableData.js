import tableItems from '@/mock/tableData.json';
import renameDeliveryType from '@/helpers/renameDeliveryType';
import filterTableDataToDeliveryType from '@/helpers/tableFilters/filterTableDataToDeliveryType';
import filterTableDataToInvoiceNumber from '@/helpers/tableFilters/filterTableDataToInvoiceNumber';
import fixTimes from '@/helpers/fixTimes';
import sortTableFromNumber from '@/helpers/tableSort/sortTableFromNumber';

export default {
  namespaced: true,
  state: {
    tableHeaders: [
      {
        text: 'ID',
        value: 'id',
        sortable: false,
      }, {
        text: 'Номер накладной',
        value: 'number',
        sortable: false,
      }, {
        text: 'Тип заказа',
        value: 'deliveryType',
        sortable: false,
      }, {
        text: 'Дата создания',
        value: 'creationDate',
        sortable: false,
      },
    ],
    tableData: [],
    filteredTableData: [],
    orderFilteredTableData: [],
    invoiceVal: null,
  },
  mutations: {
    setTableData(state, data = []) {
      state.tableData = data;
      state.filteredTableData = data;
    },
    setFilterTableData(state, { type, filter }) {
      let data = [];
      let typeFilter = type;
      let filterValue = filter;
      if (typeFilter === 'order') {
        const { tableData } = state;
        data = filterTableDataToDeliveryType(tableData, filterValue);
        state.filteredTableData = data;
        state.orderFilteredTableData = data;
        if (state.invoiceVal?.length) {
          const invoiceFilter = state.invoiceVal;
          typeFilter = 'invoice';
          filterValue = invoiceFilter;
        }
      }
      if (typeFilter === 'invoice') {
        const { tableData } = state;
        const orderData = state.orderFilteredTableData;
        // eslint-disable-next-line max-len
        data = filterTableDataToInvoiceNumber(orderData.length ? orderData : tableData, filterValue);
        state.filteredTableData = data;
        state.invoiceVal = filterValue;
      }
    },
    setSortedTableData(state, val) {
      const sortedTableData = state.filteredTableData.sort(sortTableFromNumber);
      state.filteredTableData = val === 'up' ? sortedTableData : sortedTableData.reverse();
    },
  },
  getters: {
    getTableHeaders: (state) => state.tableHeaders,
    getTableFilteredItems: (state) => state.filteredTableData,
  },
  actions: {
    getTableData: ({ commit }) => {
      tableItems.map((item) => {
        renameDeliveryType(item);
        fixTimes(item);
        return item;
      });
      commit('setTableData', tableItems);
    },
  },
};
