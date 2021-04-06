<style scoped>
#GameOutcome {
	display: flex;
	flex-direction: column;
	align-items: center
}
.handsdisplay {
	max-width: 100%;
	max-height: 20vh;
}
</style>

<template>
	<div id="GameOutcome">
		<div>
			<div class="column" v-if="reasonWinner">
				<h1 class="row"> </h1>
				<h1 class="row"> </h1>
				<h1 class="row" v-bind:class="{playerWon: playerWon}">{{ headlineString }}</h1>
				<div class="row" style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.wagerreadable }}</h3><h3 class="currency"> {{game.currency}}</h3></div>
				<h3 class="row">game {{game.ContractAddress}}</h3>
				<HandsDisplayPanel class="handsdisplay" v-bind:hands="playerHands"></HandsDisplayPanel>
				<HandsDisplayPanel class="handsdisplay" v-bind:hands="opponentHands"></HandsDisplayPanel>
				<button class="row" v-on:click="dismissOutcome()">Dismiss</button>
			</div>
			<div class="column" v-else>
				<h1 class="row">{{ this.winnerString }} timed out</h1>
				<h3 class="row">{{ this.game.wagerReadable }} {{game.currency}}</h3>
				<h3 class="row">Against {{ this.opp }}</h3>
				<h3 class="row">game {{game.ContractAddress}}</h3>
				<button class="row" v-on:click="dismissOutcome()">Dismiss</button>
			</div>
			<!--<ul v-for="move in game.moves">
					<img v-bind:src="imsrc(move.p1)" class="{playerMove: isP1, opponentMove: !isP1}">
					<img v-bind:src="imsrc(move.p2)" class="{playerMove: !isP1, opponentMove: isP1}">
			</ul>-->
			
		</div>
	</div>
</template>
<script>
	import HandsDisplayPanel from "./HandsDisplayPanel.vue"
	import {mapState} from 'vuex'

	export default {
		components: {
			HandsDisplayPanel
		},
		props: ["gameoutcome"],
		data: function() {
			//console.log(gameoutcome)
			//console.log(this.gameoutcome)
			return {
				game: this.gameoutcome.game,
				who: this.gameoutcome.who,
				why: this.gameoutcome.why,
				p1Hands: this.gameoutcome.p1Hands,
				p2Hands: this.gameoutcome.p2Hands
			}
		},//
		computed: {
			...mapState({
				walletAddress: state => state.wallet.address,
				/*gameoutcome: state => state.gameOutcome,
				game: state => state.gameOutcome.game,
				who: state => state.gameOutcome.who,
				why: state => state.gameOutcome.why,
				p1Hands: state => state.gameOutcome.p1Hands,
				p2Hands: state => state.gameOutcome.p2Hands,*/
			}),
			dismissOutcome: function () {
				console.log("dismiss outcome in GameOutcomeDisplay")
				this.$store.commit('dismissOutcome')
			},
			reasonWinner: function() {
				return this.why === "winner"
			},
			isWinner: function() {
				return (this.who ? !(this.isP1) : this.isP1)
			},
			isP1: function() {
				return (this.game.p1 === this.walletAddress)
			},
			opp: function() {
				return this.isP1 ? this.game.p2 : this.game.p1
			},
			headlineString: function() {
				if (this.isWinner) {
					return ("You won!")
				} else {
					return ("You lost")
				}
			},
			winnerString: function() {
				if (this.isWinner) {
					return ("You")
				} else {
					return (this.opp)
				}
			},
			playerHands: function() {
				console.log(this.isP1 ? this.p1Hands : this.p2Hands)
				return this.isP1 ? this.p1Hands : this.p2Hands
			},
			opponentHands: function() {
				console.log(this.isP1 ? this.p2Hands : this.p1Hands)
				return this.isP1 ? this.p2Hands : this.p1Hands
			}
		}
	}
</script>