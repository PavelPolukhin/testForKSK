<template>
 <v-container fluid>
   <v-container>
     <div class="tableView">
       <v-row>
         <v-col cols="3">
           <table-filter/>
         </v-col>
         <v-col cols="9">
           <table-header/>
           <table-app v-if="viewType === 'table'"/>
           <row-view-data v-else/>
         </v-col>
       </v-row>
     </div>
   </v-container>
 </v-container>
</template>

<style lang="scss">

</style>
<script>
import TableFilter from '@/components/table/tableFilter.vue';
import TableHeader from '@/components/table/tableHeader.vue';
import TableApp from '@/components/table/tableApp.vue';
import { mapActions, mapGetters } from 'vuex';
import RowViewData from '@/components/table/rowViewData.vue';

export default {
  components: {
    RowViewData, TableApp, TableHeader, TableFilter,
  },
  methods: {
    ...mapActions('tableData', ['getTableData']),
    async loadTableData() {
      await this.getTableData();
    },
  },
  mounted() {
    this.loadTableData();
  },
  computed: {
    ...mapGetters({
      viewType: 'getViewType',
    }),
  },
};
</script>
