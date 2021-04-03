<style scoped>
</style>
<template>
	<div class="page-container column">
		<p class="row">
			{{text}}
		</p>
		<button id="go" class="row" v-on:click="onclick">Dismiss</button>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		props: [],
		computed: {
			...mapState({
				text: 'textDisplay'
			})
		},
		methods: {
			onclick: function() {
				console.log('dismiss')
				this.$store.commit('setTextDisplay', '')
				//this.$emit('dismisstextdisplay')
			}
		}
	}
</script>