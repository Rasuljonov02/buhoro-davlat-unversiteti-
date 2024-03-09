<template>
	<div>
		<Hedr />
	</div>
	<RouterView />
</template>

<script>
import Hedr from "./components/Hedr.vue";
import { RouterView } from "vue-router";
export default {
	components: {
		Hedr,
	},
};
</script>
