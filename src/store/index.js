import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		news: [],
		loading: false,
		error: {
			status: null,
			message: '',
		},
	},
	mutations: {
		setNews(state, payload) {
			state.news = payload;
			payload.map((post) => state.news.push(post));
		},

		handleError(state, payload) {
			state.error.status = payload.err.response.status;
			state.error.message = payload.err.response.message;
		},

		loadingStatus(state, payload) {
			state.loading = payload;
		},
	},
	actions: {
		async getNews({ commit }) {
			const API_KEY = 'c5f12347d0544da89c51e954caf2a7ba';
			commit('loadingStatus', true);

			try {
				const data = await axios.get(
					`https://newsapi.org/v2/everything?=covid-19&apiKey=${API_KEY}`
				);

				// if (data.status !== 200) throw new Error();

				commit('setNews', data.data.articles);
				commit('loadingStatus', false);
			} catch (err) {
				if (err.response) {
					//The server respond with status of ${err.response.status}
					commit('handleError', err.response.status, err.response.data.message);
					console.log('Errors ', err.response.data.message);
					console.log('Errors ', err.response.status);
					console.log('Errors ', err.response.headers);
				} else if (err.request) {
					console.log(err.request);
				} else {
					console.log('Error ', err.message);
				}
			}
		},
	},
	modules: {},
});
