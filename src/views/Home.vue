<style scoped>
#home-th {
	height: 50vh;
	max-height: 50vh;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
}
#home-bh {
	height: 46vh;
	max-height: 46vh;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
}
#open-games {
	display: flex;
	flex-direction: column;
	flex-basis: 60%;
	align-items: center;
	padding: 0;
	min-height: 30vh;
	max-height: 35vh;
	overflow-y: scroll;
	margin: 0;
	margin-top: 6vh;
	flex-shrink: 0;
}
#open-games-header {
	height: 4vh;
	max-height: 4vh;
}
#open-games div {
	height: 5vh;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	font-size: 150%;
	margin-bottom: .5%;
	/*flex-shrink:0;*/
}
#game-history {
	height: 4vh;
	margin: 0;
	display: flex;
	flex-direction: row;
	flex-basis: 50%;
	align-items: center;
	justify-content: center;
}
#create-game {
	display: flex;
	flex-basis: 100%;
}
#search-game {
	display: flex;
	flex-basis: 100%;
}
.gameclipboard {
	position: relative;
	left: 0%;
	align-self: flex-start;
	height: 100%;
	width: auto;
	max-height: 100%;
	z-index: 5;
}
#wallet {
	position: absolute;
	left: 5vw;
	top: 5vh;
	max-height: 15vh;
	max-width: auto;
	z-index: 10;
}
</style>

<template>
	<div id="home" class="column page-container">
		<WalletConfigPanel v-if="walletConfigOn" v-on:dismissWalletConfig="dismissWalletConfig()" v-on:refreshWallet="refreshWallet" v-on:tryFaucet="tryFaucet()"></WalletConfigPanel>
		<transition appear appear-active-class="slideInRight">
			<div id="home-th" v-bind:class="{ updateAnimation: gameUpdate }">
				<div id="open-games-header" class="row">
					<div class="column" style="max-width: 33vw;">
						<img id="wallet" src="img/wallet.jpg" v-on:click="walletConfig()">
						<div class="row">
							<h3>Wallet addr: </h3>
							<h3 style="font-size: 1vw;">{{walletaddr}}</h3>
						</div>
						<h3 class="row">Balance uncommitted: {{balance}} {{currency}}</h3>
					</div>
					<h3 class="column">Open Games</h3>
					<h3 class="column" style="flex-grow:1"> Committed: <!--{{ money-committed }} {{ currency }}--></h3>
				</div>
				<ul id="open-games">
					<div id="active-games">
						<div id="playable-games">
							<div class="row activeitem playable" v-bind:class="{}" v-for="game in playable_games" v-bind:game="game" v-bind:key="game.ContractAddress" >
								<img src="img/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)" alt="game contract info" title="click to see contract info">
								<li v-on:click="() => {$emit('ongameselect', game)}">{{game.wagerreadable}} {{game.currency}} : {{game.title}} : {{game.status}} : {{ timeLeft(game) }} left</li>
							</div>
						</div>
						<div id="invites">
						</div>
					</div>
					<div id="accepted-games">
						<div class="row accepted" v-bind:class="{}" v-for="game in accepted_games" v-bind:game="game" v-bind:key="game.ContractAddress" >
							<img src="img/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)" alt="game contract info" title="click to see contract info">
							<li v-on:click="() => {$emit('ongameselect', game)}">{{game.wagerreadable}} {{game.currency}} : {{game.title}} : {{game.status}} : {{ timeLeft(game) }} left</li>
						</div>
					</div>
					<div id="waiting-games">
						<div class="row waiting" v-bind:class="{}" v-for="game in awaiting_games" v-bind:game="game" v-bind:key="game.ContractAddress" >
							<img src="img/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)" alt="game contract info" title="click to see contract info">
							<li v-on:click="() => {$emit('ongameselect', game)}">{{game.wagerreadable}} {{game.currency}} : {{game.title}} : {{game.status}} : {{ timeLeft(game) }} left</li>
						</div>
					</div>
				</ul>
				<ul id="invites">
					<li class="row" v-for="invite in invites" v-bind:style="{'background-color': randomcolor()}">
						Invited by {{ invite.p1 }} for {{ invite.wager }} {{currency}} : {{ invite.delay }} blocks left
						<div class="buttons">
							<button onclick="confirmGame()" class="column">Accept</button>
							<button onclick="deny()" class="column">Reject</button>
						</div>
					</li>
				</ul>
				<h2 id="game-history" v-on:click="getHistory()">game history</h2>
			</div>
		</transition>
		<hr style="width: 80%; text-align: center;">
		<transition appear appear-active-class="slideInLeft">
			<div id="home-bh">
				<h1 id="create-game" class="row active" v-on:click="$router.push('create')">create</h1>
				<h1 id="search" class="row active" v-on:click="$router.push('search')">search</h1>
				<h1 id="join" class="row active" v-on:click="$router.push('join')">join with contract</h1>
			</div>
		</transition>
	</div>
</template>

<script>
	import howler from 'howler';
	import WalletConfigPanel from './WalletConfigPanel.vue';

	export default {
		components: {
			WalletConfigPanel
		},
		props: ['walletaddr', 'balance', 'opengames', 'invites', 'currency', 'money-committed'],
		data: function () {
			return {
				gameUpdate: false,
				walletConfigOn: false 
			}
		},
		computed: {
			awaiting_games: function() {
				return this.opengames.filter(x => (x.status === "Awaiting Opponent"));
			},
			accepted_games: function() {
				return this.opengames.filter(x => (x.status !== "Awaiting Opponent" && x.playable === false));
			},
			playable_games: function() {
				return this.opengames.filter(x => (x.playable === true));
			}
		},
		watch : {
			opengames: function (gamesold, gamesnew) {
				var sound = new Howl({
					src: './ding.mp3',
					volume: 0.5
				});
				sound.play();
				this.gameUpdate = true;
				setTimeout(() => {
					this.gameUpdate = false;
				}, 1000);
			}
		},
		methods: {
			randomcolor: function() { 
			  return "hsl(" + 360 * Math.random() + ',' +
			             (25 + 70 * Math.random()) + '%,' + 
			             (65 + 10 * Math.random()) + '%)'
			},
			tryFaucet: function() {
				console.log("clicked faucet");
				this.$emit('tryfaucet');
			},
			getGame: function(gameid) {
				$router.push('gameplay', gameid);
			},
			getHistory: function() {
				this.$emit('gamehistory');
			},
			contractInfo: function(game) {
				console.log("clicked contractinfo clipboard, emitting");
				this.$emit('displaycontractinfo', game);
			},
			timeLeft: function(game) {
				//console.log("timeleft");
				//console.log("game.starttime");
				//console.log(game.starttime);

				return game.starttime + " deadline: " + game.deadline + " blocks"
				/*var blocktime_est = 10000;
				function isoToObj(s) {
				    var b = s.split(/[-TZ:]/i);

				    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));

				}


				function timeToGo(s) {

				    // Utility to add leading zero
				    function z(n) {
				      return (n < 10? '0' : '') + n;
				    }

				    // Convert string to date object
				    var d = isoToObj(s);
				    var diff = d - new Date();

				    // Allow for previous times
				    var sign = diff < 0? '-' : '';
				    diff = Math.abs(diff);

				    // Get time components
				    var hours = diff/3.6e6 | 0;
				    var mins  = diff%3.6e6 / 6e4 | 0;
				    var secs  = Math.round(diff%6e4 / 1e3);

				    // Return formatted string
				    return sign + z(hours) + ' hrs, ' + z(mins) + ' mins, ' + z(secs) + ' s';   
				}
				//need to check units
				//this will actually be a call to Reach or a blockchain API
				//return (this.delay + this.timeCreated) - (new Date()).getTime();
				var enddate = new Date(game.starttime);
				enddate.setSeconds(enddate.getSeconds() + blocktime_est*game.delay); //assuming that blocktime is in seconds
				var tleft = timeToGo(enddate.toISOString());
				//console.log(tleft);
				return tleft;*/
			},
			walletConfig: function() {
				console.log("walletConfig On");
				console.log(this.walletConfigOn);
				this.walletConfigOn = true;
				console.log(this.walletConfigOn);
			},
			dismissWalletConfig: function() {
				this.walletConfigOn = false;
			},
			refreshWallet: function(currency) {
				console.log("refreshWallet " + currency + " in Home.vue");
				this.$emit('refreshwallet', currency);
			}
		}
	}
</script>