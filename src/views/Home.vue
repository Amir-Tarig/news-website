<template>
	<div class="home">
		<TheHeader @openModel="doSome" />
		<Teleport to="body" v-if="model" class="model">
			<TheMenuModel />
		</Teleport>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import TheHeader from '../components/TheHeader.vue';
import TheMenuModel from '../components/TheMenuModel.vue';
export default {
	name: 'Home',
	components: { TheHeader, TheMenuModel },
	setup() {
		const store = useStore();
		let model = ref(false);

		const getNewsArray = computed(() => {
			return store.getters.getPosts;
		});

		const displayError = computed(() => {
			return store.state.error;
		});

		const displayloading = computed(() => {
			return store.state.loading;
		});

		const getNews = () => {
			store.dispatch('getNews');
		};
		const doSome = (el) => {
			model.value = el;
			console.log('am wasting my time', model.value);
		};

		return {
			getNews,
			getNewsArray,
			displayError,
			displayloading,
			doSome,
			model,
		};
	},
};
</script>

<style scoped>
.home {
	border: 1px solid red;
	height: 100vh;
}

.model {
	position: absolute;
}
</style>
