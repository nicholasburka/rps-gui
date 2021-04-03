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
			<h1 v-bind:class="{playerWon: playerWon}">{{ headlineString }}</h1>
			<div style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.payout }}</h3><h3 class="currencyString"> {{game.currency}}</h3></div>
			<h3 class="row">{{game.ContractAddress}}</h3>
			<HandsDisplayPanel v-bind:hands="playerHands"></HandsDisplayPanel>
			<HandsDisplayPanel v-bind:hands="opponentHands"></HandsDisplayPanel>
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

	export default {
		components: {
			HandsDisplayPanel
		},
		props: ["walletAddress", "game", "winnerNum"],
		computed: {
			isWinner: function() {
				return (winnerNum ? !(this.isP1) : isP1)
			},
			isP1: function() {
				return (this.game.p1 === this.walletAddress)
			},
			headlineString: function() {
				if (this.isWinner) {
					return ("You won!");
				} else {
					return ("You lost")
				}
			},
			winnerString: function() {
				if (this.isWinner) {
					return ("You");
				} else {
					return (this.game.winner);
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