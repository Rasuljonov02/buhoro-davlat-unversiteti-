import { createRouter, createWebHistory } from 'vue-router';
import Boglan from '../views/Boglanish/Boglan.vue'
import Bosh from '../views/Bosh/Bosh.vue'
import Faxrimiz from '../views/Faxrimiz/Faxrimiz.vue'
import Ittifoq from '../views/Ittifoq/Ittifoq.vue'
import Litsey from '../views/Litsey/Litsey.vue'
import Rahbariat from '../views/Rahbariyat/Rahbariat.vue'
import Tuzilma from '../views/Tuzilma/Tuzilma.vue'
import Yangilik from '../views/Yangilik/Yangilik.vue'
import Direktor from '../views/Rahbariyat/app/Direktor.vue'
import MMIBDO from '../views/Rahbariyat/app/MMIBDO.vue'
import OIBDO from '../views/Rahbariyat/app/OIBDO.vue'
import XIBDO from '../views/Rahbariyat/app/XIBDO.vue'


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
   },
   {
    path: '/Bozorov-Nemat-Ergashovich',
    name: 'OIBDO',
    component: OIBDO
  },
  {
    path: '/Мамиров-Феруз-Тўрахонович',
    name: 'MMIBDO',
    component: MMIBDO
  },
  {
    path: '/Jumaqulov-G`olib-asanovich',
    name: 'Direktor',
    component: Direktor
  },
  {
    path: '/Ergashev-Qalandar-Sharopovich',
    name: 'XIBDO',
    component: XIBDO
  }
 ]
});

export default router;
