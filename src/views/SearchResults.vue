<style scoped>
#game-search-results {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	align-items: center;
	padding: 0;
	min-height: 100vh;
	max-height: 100vh;
	overflow-y: scroll;
	margin: 0;
	flex-shrink: 0;
}
.game-search-result {
	min-height: 23vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
#search-results {
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
li {
	width: 100vw;
	height: 7vh;
	flex-grow: 1;
}
li:hover {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
#play {
	height: 100vh;
	width: 100vw;
}
#accept {
	height: 100vh;
}
#game {
	display: flex;
	height: 60vh;
}
#history {
	display: flex;
	height: 20vh;
	width: 100%;
	flex-wrap: wrap;
}
#history img {
	/*border: solid;
	height: 100%;*/
	align-self: center;
}
.rps-piece {
	position:relative;
	display: block;
	max-height: 90%;
	max-width: 18vw;
	object-fit: contain;
	margin-left: auto;
	margin-right: auto;
}
#game-header {
	max-height: 10vh;
}
</style>

<template>
	<div id="game-search-results" class="column" style="">
		<div v-if="!this.play">
			<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
			<!--<SearchResult v-for="game in searchResults" v-bind:game="game" v-bind:title="game.title" v-bind:wager="game.wagerreadable" v-bind:playerAddr="game.p1" v-bind:style="{'background-color': randomcolor()}" v-on:click.native="onclick(game);">
			</SearchResult>!-->
			<li v-for="game in searchResults" v-on:click="onclick(game)" v-bind:style="{'background-color': randomcolor()}">{{game.wagerreadable}} {{game.currency}} - {{game.title}} - {{game.status}} - made by {{ game.p1 }} </li>
		</div>
		<!--<PlayGame id="play" v-if="this.play" :game="this.game" v-on:back="cancelPlay()" v-on:submithands="this.submitHands"></PlayGame>-->
		<div v-if="this.play">
			<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="cancelPlay()">
			<div class="row" id="game-header">
				<h3 v-if="game.title" class="column">{{ game.title }}</h3>
				<h3 class="column" id="wager">{{game.wagerreadable}} {{game.currency}}</h3>
			</div>
			<h3 class="row">Winner chosen by first non-tie hand</h3>
			<div class="row" style="height: 80vh;">
				<div id="game" class="row" style="position: relative; height: 40vh;">
					<div id="rock-cont" class="column">
						<img id="rock" class="rps-piece" src="../img/rock.png" alt="rock" v-on:click="addHand(0)">
						<p class="count-used" style="position: relative; text-align: center; display: block;">{{rockCount}}</p>
					</div>
					<div id="paper-cont" class="column">
						<img id="paper" class="rps-piece" src="../img/paper.jpg" alt="paper" v-on:click="addHand(1)">
						<p class="count-used" style="position: relative; text-align: center; display: block;">{{paperCount}}</p>
					</div>
					<div id="scissors-cont" class="column">
						<img id="scissors" class="rps-piece" src="../img/scissors2.png" alt="scissors" v-on:click="addHand(2)">
						<p class="count-used" style="position: relative; text-align: center; display: block;">{{scissorsCount}}</p>
					</div>
				</div>
				<div id="chosen" class="row" style="height: 25vh; background-color: purple" v-on:click="removeLastHand()">
					<img v-for="hand in hands" v-bind:id="hand" class="rps-piece" v-bind:src="imsrc(hand)" v-bind:alt="hand" v-on:click="removeHand(hand)">
				</div>
				<div id="submit" class="row" style="height: 10vh">
					<!--<h3 v-if="err">{{err}}</h3>-->
					<button v-on:click="submithands()">Shoo!</button>
				</div>
			</div>
		</div>
		<AcceptGame id="confirm" v-if="this.confirm" :game="this.game" :blocktime="100" :currency="currency" v-on:confirm="confirmgame()" v-on:deny="deny()"></AcceptGame>
	</div>
</template>

<script>
	import SearchResult from "./SearchResult.vue";
	import AcceptGame from "./AcceptGame.vue"
	import PlayGame from './PlayGame.vue'
	import {mapState} from 'vuex'

	export default {
		components: {
			PlayGame,
			AcceptGame,
			SearchResult
		},
		props: [],
		computed: {
			...mapState({
				currency: state => state.wallet.currency,
				searchResults: state => state.searchResults
			})
		},
		data: function() {
			console.log(this.searchResults);
			return {
				confirm: false,
				play: false,
				game: undefined,
				chosen_hands: [],
				hands: [],
				err: ""
			};
		},
		components: {
			'SearchResult': SearchResult,
			'AcceptGame': AcceptGame
		},
		methods: {
			onclick: function(game) {
				console.log("clicked " + game.title);
				console.log(game)
				this.game = game;
				this.play = true;
				console.log(this);
				console.log(this.confirm);
			},
			cancelPlay: function() {
				this.play = false
			},
			submitHands: function(hands) {
				this.game.firstHands = hands
				this.play = false
				this.confirm = true
			},
			confirmgame: function() {
				console.log(this.game);
				this.$store.dispatch('joinGame', this.game)
				this.$router.push('home')
			},
			deny: function() {
				this.confirm = false;
			},
			randomcolor: function() { 
			  return "hsl(" + 360 * Math.random() + ',' +
			             (25 + 70 * Math.random()) + '%,' + 
			             (65 + 10 * Math.random()) + '%)'
			},
			choose_hand: function(hand) {
				chosen_hands.push(hand);
			},
			remove_hand: function() {
				if (this.hands.length > 0) {
					this.chosen_hands.pop();
				}
			},
			addHand: function(hand) {
				if (this.hands.length < 5) {
					this.hands.push(hand);
				}
			},
			imsrc: function(hand) {
				switch (hand) {
					case "Rock": return require("../img/rock.png");
					case "Paper": return require("../img/paper.jpg");
					case "Scissors": return require("../img/scissors2.png");
					case 0: return require("../img/rock.png");
					case 1: return require("../img/paper.jpg");
					case 2: return require("../img/scissors2.png");
				}
			},
			removeHand: function(hand) {
				const index = this.hands.indexOf(hand)
				if (index > -1) {
				  this.hands.splice(index, 1)
				}
			},
			removeLastHand: function() {
				this.hands.pop()
			},
			handStrToNum: function(hand) {
			  switch (hand) {
			    case "Rock": return 0;
			    case "Paper": return 1;
			    case "Scissors": return 2;
			  }
			},
			submithands: function() {
				if (this.hands.length === 5) {
					//this.game.resolveHands(this.hands)
					//this.$router.push('home')
					//const hands = this.hands.map((hand) => this.handStrToNum(hand))
					this.submitHands(this.hands);
				} else {
					this.$store.commit('setPopup', '5 hands to play')
					this.err = "Need 5 hands!"
				}
			}
		}
	}
</script>