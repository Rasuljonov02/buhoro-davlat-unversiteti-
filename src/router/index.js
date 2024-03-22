import { createRouter, createWebHistory } from 'vue-router';
import Bosh from '../views/Bosh/Bosh.vue'
import Faxrimiz from '../views/Faxrimiz/Faxrimiz.vue'
import Ittifoq from '../views/Ittifoq/Ittifoq.vue'
import Tuzilma from '../views/Tuzilma/Tuzilma.vue'
import Yangilik from '../views/Yangilik/Yangilik.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Bosh
    },
    {
      path: '/faxrimiz',
      name: 'faxrimiz',
      component: Faxrimiz
    },
    {
      path: '/ittifoq',
      name: 'ittifoq',
      component: Ittifoq
    },
    {
      path: '/tuzilma',
      name: 'tuzilma',
      component: Tuzilma
    },
    {
      path: '/yangilik',
      name: 'yangilik',
      component: Yangilik
    }
  ]
});

export default router;
