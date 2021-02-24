<style scoped>
#GameOutcome {
	display: flex;
	flex-direction: column;
	align-items: center
}
</style>

<template>
	<div id="GameOutcome">
		<div v-if="walletAddress === game.winnerAddress" class="playerWon">
			<h1>{{ headlineString }}</h1>
			<div style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.payout }}</h3><h3 class="currencyString"> {{game.currency}}</h3></div>
			<ul v-for="move in game.moves">
					<img src="move.p1" class="{playerMove: isP1, opponentMove: !isP1}">
					<img src="move.p2" class="{playerMove: !isP1, opponentMove: isP1}">
			</ul>
		</div>
	</div>
</template>


<script>
	module.exports = {
		props: ["walletAddress", "game"],
		computed: {
			isWinner: function() {
				return (this.game.winner === this.walletAddress);
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
			}
		}
	}
</script>