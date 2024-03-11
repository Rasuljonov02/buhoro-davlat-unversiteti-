<template>
	<div>
		<Hedr />
	</div>
<div class="h-[700px] w-full bg-slate-100 pt-[60px]"> 
	<RouterView />

</div>
	<div>
		<Footr />
	</div>
</template>

<script>
import Hedr from "./components/Hedr.vue";
import Footr from "./components/Footr.vue";

import { RouterView } from "vue-router";
export default {
	components: {
		Hedr,
		Footr,
	},
};
</script>
