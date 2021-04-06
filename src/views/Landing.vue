<style scoped>
:root {
	--anim-time: 4s;/* unused */
}
#landing {
	height: 100vh;
	transition-duration: .5s;
}
#rock {
	position: absolute; 
	z-index: 5; 
	max-width: 30vw; 
	max-height: 15vh; 
	object-fit: contain; 
	width: auto; 
	left: 10vw;
	top: 10vh;
}
.rock-entrance {
	animation-name: rockOver;
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;
	z-index: -1;
}
@keyframes rockOver {
	0% {
		transform: translateY(-30vh);
	}
	50% {
		transform: translateY(0vh);
	}
	100% {
		transform: translateY(0vh);
	}
	100% {
		transform: translateX(0) translateY(0vh);
	}
}
#paper {
	position: absolute; 
	z-index: 5; 
	object-fit: contain;
	max-width: 30vw; 
	max-height: 25vh;
	left: 63vw; 
	top: 40vh;
}
.paper-entrance {
	animation-name: paper-entrance;
	animation-duration: 1s;
	/*animation-delay: .5s;*/
	animation-timing-function: ease-out;
}
@keyframes paper-entrance {
	0% {
		transform: translateX(500px);
	}
	100% {
		transform: translateX(0);
	}
}
#scissors { 
	position: absolute; 
	z-index: 5; 
	max-height: 30vh; 
	max-width: 30vw; 
	width: auto; 
	left: 20vw; 
	top: 65vh;
}
.scissors-entrance {
	animation-name: scissors-entrance;
	animation-duration: 1s;
	animation-timing-function: ease-out;
}
@keyframes scissors-entrance {
	0% {
		transform: translateX(-300px);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes scissors-entrance-old {
	0% {
		transform: translateX(-70px) rotateX(10deg) rotateY(10deg);
	}
	20% {
		transform: translateX(-50px) rotateX(-10deg) rotateY(-10deg);
	}
	40% {
		transform: translateX(-30px) rotateX(10deg) rotateY(10deg);
	}
	60% {
		transform: translateX(-15px) rotateX(-10deg) rotateY(-10deg);
	}
	80% {
		transform: translateX(5px) rotateX(10deg) rotateY(10deg);
	}
	100% {
		transform: translateX(0px) rotateX(0deg) rotateY(0deg);
	}
}
</style>

<template>
	<div id="landing" class="active-page column" v-on:click="function() {$router.push('home')}">
		<transition appear appear-active-class="rock-entrance" leave-active-class="slideOutLeft">
			<img id="rock" src="../img/rock.png" alt="a rock">
		</transition>
		<h1 class="row" style="background-color: #b79eff;">rock</h1>
		<transition appear appear-active-class="paper-entrance" leave-active-class="slideOutRight">
			<img id="paper" src="../img/paper.jpg" alt="paper">
		</transition>
		<h1 class="row" style="background-color: #af751d;">paper</h1>
		<transition appear appear-active-class="scissors-entrance" leave-active-class="slideOutLeft">
			<img id="scissors" src="../img/scissors2.png" alt="scissors">
		</transition>
		<h1 class="row" style="background-color: #67e483;">scissors</h1>
	</div>
	<!--<h3 class="bottomBanner row" v-if="walletLoading && (walletAddr === null)">Detecting crypto service...</h3>
	<div v-else-if="walletFound" id="wallet" class="bottomBanner">
		<div style="flex-basis: 30%" class="row"></div>
		<h3 style="display: flex" class="row">Wallet service found: </h3><button class="row" style="top: 25%" v-on:click="reqAccount" v-if="this.walletAddr===null">Enable crypto</button><h3 v-if="this.walletAddr">{{walletAddr}}</h3>
		<div style="flex-basis: 30%" class="row"></div>
	</div>
	<h3 v-else-if="
	walletUnavailable" class="bottomBanner row">No crypto service found, please install the &nbsp;<a href="https://metamask.io/">MetaMask</a>&nbsp; or &nbsp;<a href="https://www.purestake.com/technology/algosigner/">AlgoSigner (chrome)</a> browser extensions.</h3>
	<v-if -->
</template>

<script>
	import walletConfigPanel from './WalletConfigPanel.vue';

	export default {
		components: {
			walletConfigPanel
		},
		created: function() {
			setTimeout(() => {this.$router.push('home')}, 3000);
		},
		//props: [walletLoading, walletAddr, walletFound, displayWalletText],
		methods: {
			offlinedev: function() {
				return document.URL.substr(0,4) === "file";
			},
			exitLanding: function() {
				$router.push('');
			}
		},
		computed: {
			advance: function() {
				if (this.walletAddr) {
					this.$emit("wallet_found");
					//this should transition
				}
			}
		}
	}
</script>

