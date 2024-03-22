<template>
  <div>
    <Hedr />
  </div>
  <div class="w-full bg-slate-100 pt-[60px]">
    <RouterView />
  </div>
 
</template>

<script>
import Hedr from './components/Hedr.vue'

import { RouterView } from 'vue-router'
export default {
  components: {
    Hedr,
   
    RouterView
  }
}
</script>
