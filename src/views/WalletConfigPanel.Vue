<style scoped>
#wallet_config {
	z-index: 10;
	position: absolute;
	height: 40vh;
	top: 5vh;
	width: 70vw;
	left: 15vw;
	background-color: hsla(180, 100%, 100%, 0.5);
}
</style>

<template>
	<div id="wallet_config" class="flex-center">
		<!--<h3 style="font-size: 80%">Change your active wallet in Metamask or Algosigner (Chrome), then click here to connect the new wallet.</h3>
		<div id="refresh">
			<button id="refresh_wallets" v-on:click="refresh_wallets()">Refresh</button>
		</div>-->
		<div>
			<div id="ETH">
				<h3>current ETH wallet: {{current_eth}}</h3>
				<button id="refresh_wallet" v-on:click="refresh_wallet('ETH')">reconnect ETH</button>
			</div>
			<div id="ALGO">
				<h3>current ALGO wallet: {{current_algo}}</h3>
				<button id="refresh_wallet" v-on:click="refresh_wallet('ETH')">reconnect ALGO</button>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		props: ["eth_wallet", "algo_wallet"],
		computed: {
			current_eth: function() {
				if (this.eth_wallet) {
					return this.eth_wallet;
				} else {
					return "None";
				}
			},
			current_algo: function() {
				if (this.algo_wallet) {
					return this.algo_wallet;
				} else {
					return "None";
				}
			}
		}
	}
</script>