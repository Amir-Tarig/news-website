<template>
	<TheHeader />
</template>
<script>
import TheHeader from './components/TheHeader.vue';

export default {
	components: { TheHeader },
	setup() {
		return {};
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Open;
	font-family: 'Open Sans', sans-serif;
}
</style>
