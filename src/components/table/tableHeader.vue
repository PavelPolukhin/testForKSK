<template>
  <v-row>
    <v-col cols="10">
      <div class="tableHeader">
        <v-card>
          <v-select
            label="Сортировка"
            v-model="sortType"
            :items="sortTypes"
            outlined
          ></v-select>
        </v-card>
      </div>
    </v-col>
    <v-col cols="2">
      <div class="tableActions">
        <v-radio-group
          v-model="viewType"
          mandatory
        >
          <v-radio
            label="Radio 1"
            value="table"
          ></v-radio>
          <v-radio
            label="Radio 2"
            value="row"
          ></v-radio>
        </v-radio-group>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    sortTypes: [
      {
        text: 'По возрастанию номера накладной',
        value: 'up',
      }, {
        text: 'По убыванию номера накладной',
        value: 'lower',
      }],
    sortType: '',
    viewType: 'table',
  }),
  watch: {
    sortType(val) {
      this.$store.commit('tableData/setSortedTableData', val);
    },
    viewType(val) {
      this.$store.commit('setViewType', val);
    },
  },
};
</script>
