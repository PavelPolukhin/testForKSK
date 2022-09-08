<template>
  <div class="rowData">
    <v-row>
      <v-col cols="4" v-for="(item, index) in tableData" :key="index">
        <v-card class="card">
          <div class="card__header">
            <div class="card__header-title">{{ item.id }}</div>
            <div class="card__header-actions">
              <v-btn @click="deleteItem(item.id)">Delete</v-btn>
            </div>
          </div>
          <div class="card__body">
            <div class="card__body-item">
              <b>Номер накладной:</b>
              <span>{{ item.number }}</span>
            </div>
            <div class="card__body-item">
              <b>Тип заказа:</b>
              <span>{{ item.deliveryType }}</span>
            </div>
            <div class="card__body-item">
              <b>Дата создания:</b>
              <span>{{ item.creationDate }}</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      tableData: 'tableData/getTableFilteredItems',
    }),
  },
  methods: {
    deleteItem(id) {
      this.$store.commit('tableData/deleteItem', id);
    },
  },
};
</script>
