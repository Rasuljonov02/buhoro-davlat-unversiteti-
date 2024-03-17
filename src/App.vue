<template>
  <div>
    <Hedr />
  </div>
  <div class="w-full bg-slate-100 pt-[60px]">
    <RouterView />
  </div>
  <div>
    <Footr class="relative mt-[100px]" />
  </div>
</template>

<script>
import Hedr from './components/Hedr.vue'
import Footr from './components/Footr.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    Hedr,
    Footr,
    RouterView
  }
}
</script>
