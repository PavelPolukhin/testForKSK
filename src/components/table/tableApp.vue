<template>
  <div class="table">
    <v-data-table
      :headers="tableHeaders"
      :items="tableData"
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      tableHeaders: 'tableData/getTableHeaders',
      tableData: 'tableData/getTableFilteredItems',
    }),
  },
};
</script>
