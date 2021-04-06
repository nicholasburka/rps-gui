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
	max-width: 100vw;
	max-height: 7vh;
	flex-grow: 1;
}
</style>

<template>
	<div v-if="!this.play" id="game-search-results" class="column" style="margin-top:2vh;">
		<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<!--<SearchResult v-for="game in searchResults" v-bind:game="game" v-bind:title="game.title" v-bind:wager="game.wagerreadable" v-bind:playerAddr="game.p1" v-bind:style="{'background-color': randomcolor()}" v-on:click.native="onclick(game);">
		</SearchResult>!-->
		<li v-for="game in searchResults" v-on:click="onclick(game)" v-bind:style="{'background-color': randomcolor()}">{{game.wagerreadable}} {{game.currency}} - {{game.title}} - {{game.status}} - made by {{ game.p1 }} </li>

	</div>
	<PlayGame v-else-if="this.play" :game="this.game" v-on:back="cancelPlay()" v-on:submithands="this.submitHands"></PlayGame>
	<AcceptGame v-else-if="this.confirm" :game="this.game" :blocktime="100" :currency="currency" v-on:confirm="confirmgame()" v-on:deny="deny()"></AcceptGame>
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
				game: undefined
			};
		},
		components: {
			'SearchResult': SearchResult,
			'AcceptGame': AcceptGame
		},
		methods: {
			onclick: function(game) {
				console.log("clicked " + game.title);
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
			}
		}
	}
</script>