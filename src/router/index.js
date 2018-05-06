import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/pages/home/PageHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
  ],
});
