<template>
	<div>
		<Hedr />
	</div>
	<RouterView />
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
