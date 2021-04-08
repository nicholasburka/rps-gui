<style scoped>
#GameOutcome {
	display: flex;
	flex-direction: column;
	align-items: center
}
.handsdisplay {
	max-width: 100%;
	height: 20vh;
	margin: 1vh auto;
}
.playerhands {
	background-color: hsla(125, 100%, 50%, 50%);
}
.opphands {
	background-color: hsla(348, 100%, 54%, 50%);
}
.winningHandTop {
	animation: handDown;
	animation-duration: 2s;
	animation-fill-mode: forwards;
	/*background-color: hsla(125, 100%, 50%, 70%);*/
	overflow: hidden;
	z-index: 20;
}
.winningHandBottom {
	animation: handUp;
	animation-duration: 2s;
	animation-fill-mode: forwards;
	/*background-color: hsla(348, 100%, 54%, 70%);*/
	overflow: hidden;
	z-index: 20;
}
.rps-piece {
	position:relative;
	display: block;
	max-height: 100%;
	max-width: 10vw;
	object-fit: contain;
	margin-left: auto;
	margin-right: auto;
}
.post-hands {
	opacity: .5;
}
@keyframes handDown {
	0% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(7.5vh);
	}
}
@keyframes handUp {
	0% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(-7.5vh);
	}
}
</style>

<template>
	<div id="GameOutcome">
			<div class="column" v-if="reasonWinner">
				<h1 class="row"> </h1>
				<h1 class="row"> </h1>
				<h1 class="row" v-bind:class="{playerWon: playerWon}">{{ headlineString }}</h1>
				<div class="row" style="display:flex; flex-direction: row"><h3>{{ winnerString }} won {{ game.wagerreadable }}</h3><h3 class="currency"> {{game.currency}}</h3></div>
				<h3 class="row">game {{game.ContractAddress}}</h3>
				<div class="row handsdisplay playerhands">
					<img v-for="hand in playerPreHand" v-bind:id="hand" class="rps-piece" v-bind:src="imsrc(hand)" v-bind:alt="hand">
					<img v-bind:src="imsrc(playerHand)" class="rps-piece" v-bind:class="{winningHandTop: (this.isWinner && (this.why === 'winner'))}">
					<img v-for="hand in playerPostHand" v-bind:id="hand" class="rps-piece post-hands" v-bind:src="imsrc(hand)" v-bind:alt="hand">
				</div>
				<div class="row handsdisplay opphands">
					<img v-for="hand in oppPreHand" v-bind:id="hand" class="rps-piece" v-bind:src="imsrc(hand)" v-bind:alt="hand">
					<img v-bind:src="imsrc(oppHand)" class="rps-piece" v-bind:class="{winningHandBottom: (!this.isWinner && (this.why === 'winner'))}">
					<img v-for="hand in oppPostHand" v-bind:id="hand" class="rps-piece post-hands" v-bind:src="imsrc(hand)" v-bind:alt="hand">
				</div>
				<button class="row" v-on:click="dismissOutcome()">Dismiss</button>
			</div>
			<div class="column" v-else>
				<h1 class="row">{{ this.winnerString }} timed out</h1>
				<h3 class="row">{{ this.game.wagerreadable }} {{this.game.currency}}</h3>
				<h3 class="row">Against {{ this.opp }}</h3>
				<h3 class="row">game {{this.game.ContractAddress}}</h3>
				<button class="row" v-on:click="dismissOutcome()">Dismiss</button>
			</div>
			<!--<ul v-for="move in game.moves">
					<img v-bind:src="imsrc(move.p1)" class="{playerMove: isP1, opponentMove: !isP1}">
					<img v-bind:src="imsrc(move.p2)" class="{playerMove: !isP1, opponentMove: isP1}">
			</ul>-->
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
			var walletAddress = this.$store.state.wallet.address
			//console.log(gameoutcome)
			//console.log(this.gameoutcome)
			var isP1 = (this.gameoutcome.game.p1 === walletAddress)
			var isWinner = (this.gameoutcome.who ? (!(isP1)) : isP1)
			var playerHands = isP1 ? this.gameoutcome.p1Hands : this.gameoutcome.p2Hands
			var opponentHands = isP1 ? this.gameoutcome.p2Hands : this.gameoutcome.p1Hands
			var firstDiffHand = this.gameoutcome.p1Hands.findIndex((hand, index) => {return hand !== this.gameoutcome.p2Hands[index]})
			var playerPreHand = playerHands.splice(0, firstDiffHand)
			var oppPreHand = opponentHands.splice(0, firstDiffHand)
			var playerHand = playerHands.splice(0,1)[0]
			var oppHand = opponentHands.splice(0,1)[0]
			var playerPostHand = playerHands
			var oppPostHand = opponentHands
			console.log('isp1, playerhands, opphands')
			console.log(isP1)
			console.log(playerHands)
			console.log(opponentHands)
			console.log('first diff, ppre, opre, player, opp')
			console.log(firstDiffHand)
			console.log(playerPreHand)
			console.log(oppPreHand)
			console.log(playerHand)
			console.log(oppHand)

			return {
				game: this.gameoutcome.game,
				who: this.gameoutcome.who,
				why: this.gameoutcome.why,
				p1Hands: this.gameoutcome.p1Hands,
				p2Hands: this.gameoutcome.p2Hands,
				isP1,
				isWinner,
				playerHand,
				oppHand,
				playerPreHand,
				oppPreHand,
				firstDiffHand,
				playerPostHand,
				oppPostHand
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
			/*isWinner: function() {
				return (this.who ? !(this.isP1) : this.isP1)
			},
			isP1: function() {
				return (this.game.p1 === this.walletAddress)
			},*/
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
			/*firstDiffHand: function() {
				this.p1Hands.forEach((x,i) => 
					{if (this.p2Hands[i] !== x) {
					return i;
				}});
				return -1;
			},
			playerHands: function() {
				console.log(this.isP1 ? this.p1Hands : this.p2Hands)
				return this.isP1 ? this.p1Hands : this.p2Hands
			},
			opponentHands: function() {
				console.log(this.isP1 ? this.p2Hands : this.p1Hands)
				return this.isP1 ? this.p2Hands : this.p1Hands
			},
			playerPreHand: function() {
				return this.playerHands.splice(0, this.firstDiffHand)
			},
			oppPreHand: function() {
				return this.opponentHands.splice(0, this.firstDiffHand)
			},
			playerHand: function() {
				return this.playerHands[this.firstDiffHand] 
			},
			oppHand: function() {
				return this.opponentHands[this.firstDiffHand]
			}*/
		},
		methods: {
			imsrc: function(hand) {
				switch (hand) {
					case "Rock": return require("../img/rock.png");
					case "Paper": return require("../img/paper.jpg");
					case "Scissors": return require("../img/scissors2.png");
					case 0: return require("../img/rock.png");
					case 1: return require("../img/paper.jpg");
					case 2: return require("../img/scissors2.png");
				}
			}	
		}
	}
</script>