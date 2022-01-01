<template>
	<div class="home">
		<TheSlider />
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TheSlider from '../components/TheSlider.vue';
export default {
	name: 'Home',
	components: { TheSlider },
	setup() {
		const store = useStore();

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

		return { getNews, getNewsArray, displayError, displayloading };
	},
};
</script>

<style scoped>
.home {
	border: 1px solid red;
	height: 100vh;
}
</style>
