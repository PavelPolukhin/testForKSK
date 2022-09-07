<template>
  <v-card class="card filter">
    <div class="card-title">
      Фильтр
    </div>
    <div class="form">
      <div class="form__input">
        <div class="form__input-title">
          Номер накладной:
        </div>
        <v-text-field
          label="Введите фрагмент"
          v-model="invoiceNumber"
        ></v-text-field>
      </div>
      <div class="form__input">
        <div class="form__input-title">
          Тип заказа:
        </div>
        <v-select
          :items="orderTypes"
          outlined
          v-model="orderType"
        ></v-select>
      </div>
    </div>
  </v-card>
</template>
<script>

export default {
  data: () => ({
    invoiceNumber: null,
    orderTypes: [
      {
        text: 'Самовывоз',
        value: 'Pickup',
      }, {
        text: 'Курьерская доставка',
        value: 'Delivery',
      }, {
        text: 'Доставка в пункт выдачи',
        value: 'Pick-point',
      }, {
        text: 'Любой',
        value: 'all',
      }],
    orderType: 'all',
  }),
  watch: {
    orderType(val) {
      const type = 'order';
      this.$store.commit('tableData/setFilterTableData', { type, filter: val });
    },
    invoiceNumber(val) {
      const type = 'invoice';
      this.$store.commit('tableData/setFilterTableData', { type, filter: val });
    },
  },
};
</script>
