<style scoped>
</style>

<template>
	<div class="row">
		<h3>{{amount}}</h3><h3 class="currency">{{currency}}</h3><img class="currency-icon" v-bind:src="imsrc(currency)"/>
	</div>
</template>

<script>
	export default {
		props: ["amount", "currency"],
		methods: {
			imsrc: function(curr) {
				switch (curr) {
					case "ETH": return require("../img/ETH.png");
					case "ALGO": return require("../img/ALGO.png");
				}
			}
		}
	}
</script>