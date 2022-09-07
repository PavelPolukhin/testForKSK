<template>
  <v-container fluid class="header">
    <v-container>
      <h1 class="header-title">{{title || ''}}</h1>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderApp',

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      title: 'header/getTitle',
    }),
  },
};
</script>

<style lang="scss">

</style>
