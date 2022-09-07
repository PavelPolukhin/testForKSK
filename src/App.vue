<template>
  <v-app id="app">
    <header-app/>
    <router-view/>
  </v-app>
</template>

<script>

import HeaderApp from '@/components/headerApp/headerApp.vue';

export default {
  name: 'App',
  components: { HeaderApp },
  data: () => ({
    //
  }),
};
</script>
