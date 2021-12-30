<template>
	<div class="home">
		<button @click="getNews">get news</button>
		<div v-if="displayError.status !== null" class="error">
			{{ displayError.status }} {{ displayError.message }}
		</div>
		<div class="loading" v-else-if="displayloading">loading...</div>
		<div class="news" v-for="post in getNewsArray" :key="post.id" v-else>
			{{ post.title }}
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
	name: 'Home',
	components: {},
	setup() {
		const store = useStore();

		const getNewsArray = computed(() => {
			// console.log(store.getters.getPosts);
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
