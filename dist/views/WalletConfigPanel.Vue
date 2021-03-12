<style scoped>
#wallet_config {
	z-index: 10;
	position: absolute;
	height: 60vh;
	top: 20vh;
	width: 70vw;
	left: 15vw;
	background-color: hsla(180, 100%, 100%, 0.5);
}
#x {
	top: 5%;
	left: 5%;
	max-height: 5vh;
	max-width: auto;
	background-color: black;
	border-radius: 50%;
}
#faucet {
	z-index: 5;
	height: 5vh;
	width: auto;
	top: 2vh;
	left: 2vh;
}
</style>

<template>
	<div id="wallet_config" class="flex-center">
		<!--<h3 style="font-size: 80%">Change your active wallet in Metamask or Algosigner (Chrome), then click here to connect the new wallet.</h3>
		<div id="refresh">
			<button id="refresh_wallets" v-on:click="refresh_wallets()">Refresh</button>
		</div>-->
		<div>
			<img id="x" src="img/x2.png" v-on:click="dismissWalletConfig()">
			<img id="faucet" src="img/faucet.png" v-on:click="tryfaucet()">
			<div v-if="this.walletAddr" id="current" class="flex-center">
				<h3 class="smalltext">{{ this.walletAddr }}</h3>
				<div class="row"><h3> {{ this.thebalance }} </h3><h3 class="currency"> {{ this.currency }} </h3><img class="currency-icon" v-bind:src="this.currency + '.png'"></div>
			</div>
			<div v-else class="flex-center">
				<h3> Please connect a cryptocurrency wallet using <a href="https://metamask.io/download.html">MetaMask</a> or <a href="https://www.purestake.com/technology/algosigner/">AlgoSigner</a></h3>
			</div>
			<div class="row"> 
				<div id="ETH">
					<!--<h3>current ETH wallet: {{current_eth}}</h3>-->
					<button class="refresh_wallet" v-on:click="refresh_wallet('ETH')">(re)connect ETH</button>
				</div>
				<div id="ALGO">
					<!--<h3>current ALGO wallet: {{current_algo}}</h3>-->
					<button class="refresh_wallet" v-on:click="refresh_wallet('ALGO')">(re)connect ALGO</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		props: ["walletAddr", "balance", "currency"],
		data: {
			loading: false
			//thebalance: undefined//(() => {if (this.balance) {return this.balance}  else {return undefined}})()
		},
		computed: {
			current_eth: function() {
				if (this.currency === "ETH") {
					return this.walletAddr;
				} else {
					return "None";
				}
			},
			current_algo: function() {
				if (this.currency === "ALGO") {
					return this.walletAddr;
				} else {
					return "None";
				}
			},
			algo_text: function() {
				//if (this.$store.wallet &&  
			}
		},
		methods: {
			refresh_wallet: async function(currency) {
				//await this.$store.dispatch('refresh_wallet', currency);
				this.$emit('refreshWallet', currency);
				this.loading = true;
			},
			dismissWalletConfig: function() {
				this.$emit('dismissWalletConfig');
			},
			tryfaucet: function() {
				this.$emit('tryfaucet');
			}
		}
	}
</script>