import { createRouter, createWebHistory } from 'vue-router';
import Boglan from '../views/Boglanish/Boglan.vue'
import Bosh from '../views/Bosh/Bosh.vue'
import Faxrimiz from '../views/Faxrimiz/Faxrimiz.vue'
import Ittifoq from '../views/Ittifoq/Ittifoq.vue'
import Litsey from '../views/Litsey/Litsey.vue'
import Rahbariat from '../views/Rahbariyat/Rahbariat.vue'
import Tuzilma from '../views/Tuzilma/Tuzilma.vue'
import Yangilik from '../views/Yangilik/Yangilik.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes :[
   {
     path: '/',
     name: 'main',
     component: Bosh
   },
   {
     path: '/boglan',
     name: 'boglan',
     component: Boglan
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
     path: '/litsey',
     name: 'litsey',
     component: Litsey
   },
   {
     path: '/rahbariat',
     name: 'rahbariat',
     component: Rahbariat
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
