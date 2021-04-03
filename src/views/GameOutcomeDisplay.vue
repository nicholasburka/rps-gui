<style scoped>
#GameOutcome {
	display: flex;
	flex-direction: column;
	align-items: center
}
</style>

<template>
	<div id="GameOutcome">
		<div>
			<div class="column" v-if="why==='winner'">
				<h1 class="row" v-bind:class="{playerWon: playerWon}">{{ headlineString }}</h1>
				<div class="row" style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.wagerReadable }}</h3><h3 class="currencyString"> {{game.currency}}</h3></div>
				<h3 class="row">{{game.ContractAddress}}</h3>
				<HandsDisplayPanel v-bind:hands="playerHands"></HandsDisplayPanel>
				<HandsDisplayPanel v-bind:hands="opponentHands"></HandsDisplayPanel>
				<button class="row" v-on:click="dismiss">Dismiss</button>
			</div>
			<div class="column" v-else>
				<h1 class="row">{{ winnerString }} timed out</h1>
				<h3 class="row">{{ game.wagerReadable }} {{game.currency}}</h3>
				<h3 class="row">Against {{ opp }}</h3>
				<button class="row" v-on:click="dismiss">Dismiss</button>
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
		props: ['gameoutcome'],
		data: function() {
			return {
				game: gameoutcome.game,
				who: gameoutcome.who,
				why: gameoutcome.why,
				p1Hands: gameoutcome.p1Hands,
				p2Hands: gameoutcome.p2Hands
			}
		},
		computed: {
			...mapState({
				walletAddress: state => state.wallet.address
			}),
			isWinner: function() {
				return (who ? !(this.isP1) : isP1)
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
				return (this.isP1 ? game.p1Hands : game.p2Hands)
			},
			opponentHands: function() {
				return (this.isP1 ? game.p2Hands : game.p1Hands)
			}
		}
	}
</script>