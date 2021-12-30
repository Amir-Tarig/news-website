<template>
	<div class="home"></div>
	<button @click="getNews">get news</button>
	<div class="error" v-if="displayError">
		{{ displayError.message }}
	</div>
	<div class="loading" v-else-if="displayloading">loading...</div>
	<div class="news" v-for="post in getNewsArray" :key="post.id" v-else>
		{{ post.title }}
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
			return store.state.news;
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
