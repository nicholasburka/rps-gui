<style scoped>
#game-search-results {
	flex-wrap: wrap;
}
.game-search-result {
	min-height: 23vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
</style>

<template>
	<div id="game-search-results" class="column" style="margin-top:2vh;">
		<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<SearchResult v-for="game in foundgames" v-bind:game="game" v-bind:title="game.title" v-bind:wager="game.wagerreadable" v-bind:playerAddr="game.p1" v-bind:style="{'background-color': randomcolor()}" v-on:click.native="onclick(game);">
		</SearchResult>
		<AcceptGame v-if="this.confirm" :game="this.game" :blocktime="100" :currency="this.currency" v-on:confirm="confirmgame()" v-on:deny="deny()"></AcceptGame>
	</div>
</template>

<script>
	import SearchResult from "./SearchResult.vue";
	import AcceptGame from "./AcceptGame.vue"

	export default {
		props: ["foundgames"],
		data: function() {
			console.log(this.foundgames);
			return {
				confirm: false,
				game: undefined,
				
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
				this.confirm = true;
				console.log(this);
				console.log(this.confirm);
			},
			confirmgame: function() {
				//send to chain or to page?
				this.$emit('ongameacceptsearch', this.game);
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