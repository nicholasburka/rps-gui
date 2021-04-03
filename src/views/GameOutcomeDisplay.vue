<style scoped>
#GameOutcome {
	display: flex;
	flex-direction: column;
	align-items: center
}
</style>

<template>
	<div id="gameoutcome">
		<div>
			<div v-if="why==='winner'">
				<h1 v-bind:class="{playerWon: playerWon}">{{ headlineString }}</h1>
				<div style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.wagerReadable }}</h3><h3 class="currencyString"> {{game.currency}}</h3></div>
				<h3 class="row">{{game.ContractAddress}}</h3>
				<HandsDisplayPanel v-bind:hands="playerHands"></HandsDisplayPanel>
				<HandsDisplayPanel v-bind:hands="opponentHands"></HandsDisplayPanel>
			</div>
			<div v-else>
				<h1>{{ winnerString }} timed out</h1>
				<h3>{{ game.wagerReadable }} {{game.currency}}</h3>
				<h3>Against {{ opp }}</h3>
			</div>
			<!--<ul v-for="move in game.moves">
					<img v-bind:src="imsrc(move.p1)" class="{playerMove: isP1, opponentMove: !isP1}">
					<img v-bind:src="imsrc(move.p2)" class="{playerMove: !isP1, opponentMove: isP1}">
			</ul>-->
			<button v-on:click="dismiss">Dismiss</button>
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
		props: ['gameOutcome'],
		data: function() {
			return {
				game: gameOutcome.game,
				who: gameOutcome.who,
				why: gameOutcome.why,
				p1Hands: gameOutcome.p1Hands,
				p2Hands: gameOutcome.p2Hands
			}
		}
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
			}.
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