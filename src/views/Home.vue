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
	margin-top: 13vh;
	flex-shrink: 0;
}
#open-games-header {
	height: 4vh;
	max-height: 4vh;
	font-size: min(2vw, 3vh);
}
#open-games div {
	height: 5vh;
	display: flex;
	width: 80%;
	align-items: center;
	justify-content: flex-start;
	font-size: min(2.3vw, 2.8vh);
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
.gamex {
	height: 80%;
	width: auto;
	max-height: 80%;
	max-width: 10vw;
	z-index: 4;
	object-fit: contain;
}
#wallet {
	max-height: 8vh;
	max-width: auto;
	object-fit: contain;
	z-index: 10;
}
#playable {
	height: 40vh;
}
.playable {
	background-color: purple;
	margin-top: .1vh;
}
.waiting {
	background-color: #F0FFFF;
}
.inprogress {
	background-color: #00BFFF;
}
.unattached {
	background-color: #FA8072;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gameclipboard {
	position: relative;
	flex-basis: 5vw;
	height: 100%;
	width: auto;
	max-height: 100%;
	max-width: 20vw;
	z-index: 5;
	object-fit: contain;
}
.reattach {
	position: relative;
	flex-basis: 5vw;
	height: 80%;
	width: auto;
	max-height: 80%;
	max-width: 8vw;
	z-index: 4;
	object-fit: contain;
}
li {
	max-width: 80vw;
	max-height: 3vh;
	flex-grow: 1;
}
</style>

<template>
	<div id="home" class="column page-container">
		<PlayGame v-if="this.play" :game="currentGame" v-on:back="cancelPlay" v-on:submithands="submitHands"></PlayGame>
		<div v-else>
			<WalletConfigPanel v-if="walletConfigOn" v-on:dismissWalletConfig="dismissWalletConfig()" v-on:refreshWallet="refreshWallet" v-on:tryfaucet="tryfaucet()"></WalletConfigPanel>
			<transition appear appear-active-class="slideInRight">
				<div id="home-th" v-bind:class="{ updateAnimation: gameUpdate }">
					<div id="open-games-header" class="row">
						<div class="column" style="width: 33vw; max-height: 13vh;">
							<div class="row">
								<img class="column" id="wallet" src="../img/wallet.jpg" v-on:click="walletConfig()">
								<div v-if="walletAddress" class="column">
									<h3 style="font-size: 1vw;">{{walletAddress}}</h3>
									<div class="row"><h3>{{balance}}</h3><h3 class="currency">{{currency}}</h3></div>
								</div>
								<h3 v-else>Please connect a cryptowallet by clicking on the wallet icon.</h3>
							</div>
						</div>
						<h3 class="column" style="width: 33vw;">Open Games</h3>
						<div class="row column" style="width: 33vw; flex-direction: row;"><h3>Committed: ~ {{balanceCommitted}} </h3><h3 class="currency">{{currency}}</h3></div> <!--{{ committed }}{{ money-committed }} {{ currency }}-->
					</div>
						<div class="column" id="open-games">
							<div class="row activeitem" v-bind:class="{playable: game.playable, waiting: (!game.playable && !game.unattached && !game.status === 'In Progress'), unattached: game.unattached, inprogress: game.status === 'In Progress'}" v-for="game in active_games_sorted" v-bind:game="game" v-bind:key="game.ContractAddress" style="height: 4.5vh; max-width: 100vw">
								<img src="../img/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)" alt="game contract info" title="click to see contract info">
								<!--<img v-if="!game.attached" src="../img/redo.png" class="reattach" v-on:click="reattach(game)" alt="reattach to game contract" title="reattach to game contract">-->
								<li v-on:click="gameSelect(game)">{{game.wagerreadable}} {{game.currency}} - {{game.title}} - {{game.status}} </li>
								<h3 v-if="game.playable" style="color: green; font-weight: bold"> - Your turn!</h3>

								 <!--{{ timeLeft(game) }}-->
								<!--<img src="../img/x2.png" class="gamex" v-on:click="deleteConfirm(game)">-->
							</div>
							<h3> waiting on {{ activeGames.length - playable_games.length }} games... </h3>
					</div>
					<ul id="invites">
						<li class="row" v-for="invite in invites" v-bind:style="{'background-color': randomcolor()}">
							Invited by {{ invite.p1 }} for {{ invite.wager }} {{currency}} : {{ invite.delay }} blocks left
							<div class="buttons">
								<button onclick="confirmGame()" class="column">Accept</button>
								<button onclick="deny()" class="column">Reject</button>
							</div>
						</li>
					</ul>
					<!--<h2 id="game-history" v-on:click="getHistory()">game history</h2>-->
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
	</div>
</template>

<script>
	//import howler from 'howler';
	import WalletConfigPanel from './WalletConfigPanel.vue'
	import PlayGame from './PlayGame.vue'
	import {mapState} from 'vuex'

	export default {
		components: {
			WalletConfigPanel,
			PlayGame
		},
		props: ['invites'],
		data: function () {
			return {
				gameUpdate: false,
				walletConfigOn: false,
				playableGames: [],
				currentGame: undefined,
				play: false
			}
		},
		computed: {
			...mapState({
				walletAddress: state => state.wallet.address,
				balance: state => state.wallet.balance,
				currency: state => state.wallet.currency,
				activeGames: 'activeGames'
			}),
			balanceCommitted: function() {
				return this.$store.getters.balanceCommitted
			},
			wallet_text: function() {
				if (this.walletAddress) {
					return this.walletAddress
				} else {
					return "Please connect a cryptowallet by clicking on the wallet icon."
				}
			},
			currency_text: function() {
				if (!this.walletAddress) {
					return "";
				} else {
					return this.currency;
				}
			},
			awaiting_games: function() {
				return this.activeGames.filter(x => (x.status === "Awaiting Opponent" && x.attached));
			},
			accepted_games: function() {
				return this.activeGames.filter(x => (x.status !== "Awaiting Opponent" && !x.playable && x.attached));
			},
			unattached_games: function() {
				return this.activeGames.filter(x => (!x.attached && (x.status !== "Completed")))
			},
			playable_games: function() {
				console.log('playable_games ' + this.activeGames)
				return this.activeGames.filter(x => x.playable && x.attached);
			},
			active_games_sorted: function() {
				return this.playable_games.concat(this.awaiting_games).concat(this.accepted_games).concat(this.unattached_games)
			}
		},
		methods: {
			randomcolor: function() { 
			  return "hsl(" + 360 * Math.random() + ',' +
			             (25 + 70 * Math.random()) + '%,' + 
			             (65 + 10 * Math.random()) + '%)'
			},
			tryfaucet: async function() {
				console.log("clicked faucet");
				await this.$store.dispatch('fundFromFaucet')
			},
			getHistory: function() {
				//this.$store.dispatch('getGameHistory');
			},
			contractInfo: async function(game) {
				console.log("clicked contractinfo clipboard, emitting");
				//this.$emit('displaycontractinfo', game);
				console.log(game)
				console.log(game.contractInfo)
				try {
					await navigator.clipboard.writeText(JSON.stringify(game.contractInfo));
					this.$store.commit('setPopup', 'Copied game\'s contract info to clipboard');
				} catch (error) {
					console.error("copy failed", error);
				}
				//this.$store.commit('setTextDisplay', JSON.stringify(game.contractInfo, null, 2))
			},
			gameSelect: function(game) {
				if (game.playable) {
					this.currentGame = game
					this.play = true
				} else {
					this.contractInfo(game)
				}
			},
			cancelPlay: function() {
				this.play = false
			},
			submitHands: function(hands) {
				this.currentGame.submitHands(hands)
				this.play = false
				this.currentGame = undefined
			},
			reattach: function(game) {
				if (game.attached) {
					this.$store.commit('setPopup', 'Currently attached to game contract')
				} else {
					this.$store.dispatch('reattachOne', game)
				}
			},
			timeLeft: function(game) {
				//console.log("timeleft");
				//console.log("game.starttime");
				//console.log(game.starttime);

				//console.log(game.starttime + " deadline: " + game.deadline + " blocks");

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
				this.$store.dispatch('connectWallet', currency);
			}
		}
	}
</script>