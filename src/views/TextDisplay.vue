<style scoped>
</style>
<template>
	<div class="page-container column">
		<p class="row">
			{{text}}
		</p>
		<button id="go" class="row" v-on:click="$emit('dismisstextdisplay')">Dismiss</button>
	</div>
</template>
<script>
	export default {
		props: ['text'],
		methods: {
			onclick: function() {
				console.log('dismiss')
				this.$emit('dismisstextdisplay')
			}
		}
	}
</script>