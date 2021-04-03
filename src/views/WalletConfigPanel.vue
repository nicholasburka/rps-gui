<style scoped>
#wallet_config {
	z-index: 10;
	position: absolute;
	height: 60vh;
	top: 20vh;
	width: 70vw;
	left: 15vw;
	background-color: hsla(120, 80%, 80%, 0.7);
	flex: 1;
}
#x {
	top: 5%;
	left: 5%;
	max-height: 7vh;
	max-width: auto;
	background-color: black;
	border-radius: 50%;
}
#faucet {
	z-index: 5;
	height: 7vh;
	width: auto;
	top: 2vh;
	left: 2vh;
}
.smaller {
	font-size: 80%;
}
a {
	margin-left: 4px;
	margin-right: 4px;
}
</style>

<template>
	<div id="wallet_config" class="flex-center">
		<!--<h3 style="font-size: 80%">Change your active wallet in Metamask or Algosigner (Chrome), then click here to connect the new wallet.</h3>
		<div id="refresh">
			<button id="connectWallets" v-on:click="connectWallets()">Refresh</button>
		</div>-->
		<div>
			<img id="x" src="../img/x2.png" v-on:click="dismissWalletConfig()">
			<img id="faucet" src="../img/faucet.png" v-on:click="tryfaucet()">
			<h3 class="row smaller"> Connect a cryptocurrency wallet using <a href="https://metamask.io/download.html">&nbsp;&nbsp;MetaMask</a>&nbsp;or [soon available, only on Betanet]<a href="https://www.purestake.com/technology/algosigner/">&nbsp;AlgoSigner</a></h3>

			<div class="row"> 
				<div id="ETH">
					<!--<h3>current ETH wallet: {{current_eth}}</h3>-->
					<button class="connectWallet" v-on:click="connectWallet('ETH')">(re)connect ETH</button>
				</div>
				<div id="ALGO">
					<!--<h3>current ALGO wallet: {{current_algo}}</h3>-->
					<button class="connectWallet" v-on:click="connectWallet('ALGO')">(re)connect ALGO</button>
				</div>
			</div>
			<!--<div v-if="this.walletAddress" id="current" class="flex-center">
				<h3 class="smalltext">{{ this.walletAddress }}</h3>
				<div class="row"><h3> {{ this.thebalance }} </h3><h3 class="currency"> {{ this.currency }} </h3><img class="currency-icon" v-bind:src="imsrc(this.currency)"></div>
			</div>-->
			<img v-if="this.walletLoading" src="../img/loading.gif"/>
			<h3 v-if="this.walletErr">{{ this.walletErr }}</h3>
			<AmountCurrencyDisplay v-if="this.walletAddress && !this.walletLoading" v-bind:amount="this.balance" v-bind:currency="this.currency"></AmountCurrencyDisplay>
		</div>
	</div>
</template>


<script>
	import {mapState, mapActions} from 'vuex'
	import AmountCurrencyDisplay from './AmountCurrencyDisplay.vue'

	export default {
		components: {
			AmountCurrencyDisplay
		},
		props: [],
		data: function() {
			return {
			}
			//thebalance: undefined//(() => {if (this.balance) {return this.balance}  else {return undefined}})()
		},
		computed: {
			...mapState({
				walletAddress: 'wallet.address',
				balance: 'wallet.balance',
				currency: 'wallet.currency',
				walletErr: 'walletErr',
				walletLoading: 'walletLoading'
			}),
			current_eth: function() {
				if (this.currency === "ETH") {
					return this.walletAddress;
				} else {
					return "None";
				}
			},
			current_algo: function() {
				if (this.currency === "ALGO") {
					return this.walletAddress;
				} else {
					return "None";
				}
			},
			algo_text: function() {
				//if (this.$store.wallet &&  
			},
			wallet_error: function() {
				if (walletErr) {
					return walletErr;
				}
			}
		},
		methods: {
			...mapActions([
				'connectWallet'	
			]),
			/*connectWallet: async function(curr) {
				console.log(curr)
				console.log(typeof(curr))
				await this.$store.dispatch('connectWallet', curr)
				//this.$emit('refreshWallet', currency);
				this.loading = true
			},*/
			dismissWalletConfig: function() {
				this.$emit('dismissWalletConfig');
			},
			tryfaucet: function() {
				this.$store.dispatch('fundFromFaucet')
				//this.$emit('tryfaucet');
			}
		}
	}
</script>