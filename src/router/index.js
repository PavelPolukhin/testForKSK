import Vue from 'vue';
import VueRouter from 'vue-router';
import tableView from '../views/tableView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: tableView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
