<style scoped>
#wallet_config {
	z-index: 10;
	position: absolute;
	padding-bottom: 5vh;
	top: 20vh;
	width: 70vw;
	left: 15vw;
	background-color: hsla(120, 80%, 80%, 0.85);
	flex: 1;
	flex-direction: column;
}
#x {
	top: 1vw;
	left: 1vw;
	max-height: 7vh;
	max-width: auto;
	background-color: black;
	border-radius: 50%;
	position: absolute;
}
#faucet {
	z-index: 5;
	height: 7vh;
	width: auto;
	top: -5vh;
}
.smaller {
	font-size: 75%;
}
a {
	margin-left: 4px;
	margin-right: 4px;
}
button {
	display: flex;
	position: relative;
	flex-basis: 40%;
}
.center_text {
	position: relative;
	margin: 0 auto;
}
#buttons {
	display:flex; 
	justify-content: space-around; 
	position: relative;
	width: 100%;
	height: 100%;
}
button {
	display: flex;
	position: relative;
	margin: auto;
	justify-content: center;
}
</style>

<template>
	<div id="wallet_config" class="flex-center">
		<!--<h3 style="font-size: 80%">Change your active wallet in Metamask or Algosigner (Chrome), then click here to connect the new wallet.</h3>
		<div id="refresh">
			<button id="connectWallets" v-on:click="connectWallets()">Refresh</button>
		</div>-->
			<div class="row">
				<img id="x" src="../img/x2.png" v-on:click="dismissWalletConfig()">
				<img id="faucet" src="../img/faucet.png" alt="faucet (only available on local devnets)"v-on:click="tryfaucet()">
			</div>
			<h3 class="row smaller center_text" style="width: 90%;"> Connect a cryptocurrency wallet using ETH <a href="https://metamask.io/download.html">&nbsp;&nbsp;MetaMask</a>&nbsp;or [available soon on Algorand Betanet, Chrome only]<a href="https://www.purestake.com/technology/algosigner/">&nbsp;AlgoSigner</a></h3>
			<!--<div v-if="this.walletAddress" id="current" class="flex-center">
				<h3 class="smalltext">{{ this.walletAddress }}</h3>
				<div class="row"><h3> {{ this.thebalance }} </h3><h3 class="currency"> {{ this.currency }} </h3><img class="currency-icon" v-bind:src="imsrc(this.currency)"></div>
			</div>-->
			<div id="status" style="height: 20vh; object-fit: contain">
				<img style="height: 100" v-if="this.walletLoading" src="../img/loading.gif"/>
				<h3 class="center_text" v-if="this.walletErr">{{ this.walletErr }}</h3>
			</div>
			<div id="buttons" class="row"> 
				<div id="ETH" class="button">
					<!--<h3>current ETH wallet: {{current_eth}}</h3>-->
					<button class="connectWallet" v-on:click="connectWallet('ETH')">(re)connect ETH</button>
				</div>
				<div id="ALGO" class="button">
					<!--<h3>current ALGO wallet: {{current_algo}}</h3>-->
					<button class="connectWallet" v-on:click="connectWallet('ALGO')">(re)connect ALGO</button>
				</div>
			</div>
			<AmountCurrencyDisplay v-if="this.walletAddress && !this.walletLoading" v-bind:amount="this.balance" v-bind:currency="this.currency"></AmountCurrencyDisplay>
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