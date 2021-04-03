<style scoped>
button {
	margin-left: auto;
	margin-right: auto;
}
#joinGame {
	height: 100vh;
}
</style>

<template>
	<div id="joinGame" class="column" v-on:submit.prevent>
		<div v-if="!this.play">
			<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
			<h1 class="row">Join by Contract</h1>
			<h3 class="row">Please paste the contract info below:</h3>
			<textarea v-model="contractInfo" id="" rows="10" cols="50">
			</textarea>
			<button id="form-submit" class="row" v-on:click="getGame()" v-on:submit.prevent>Submit</button>
		</div>
		<PlayGame v-if="this.play" :game="this.game" v-on:back="this.play=false" v-on:submithands="submitGame"></PlayGame>
	</div>
</template>

<script>
	import PlayGame from './PlayGame.vue'
	import {mapState} from 'vuex'

	export default {
		components: {
			PlayGame
		},
		data: function() {
			return {
				contractInfo: "",
				game: undefined,
				play: false
			}
		},
		methods: {
			getGame: async function() {
				this.contractInfo = JSON.parse(this.contractInfo)
				try {
					console.log(this.contractInfo)
					this.game = await this.$store.dispatch('apiGetGame', this.contractInfo)
					console.log(this.game)
					this.play = true
				} catch (err) {
					console.log(err)
				}
			},
			submitGame: async function({game, hands}) {
				try {
					this.game.firstHands = hands
					this.$store.dispatch('joinGame', this.game)
					this.$router.push('home')
				} catch (err) {

				}
			}
		}
	}
</script>