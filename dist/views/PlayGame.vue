<style scoped>
#gameplay {
	/*width: 100vw;
	height: 100vh*/
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
	max-height: 25vh;
	max-width: 30vw;
	object-fit: contain;
	margin-left: auto;
	margin-right: auto;
}
</style>

<template>
	<div id="gameplay" class="column">
		<img id="back-arrow" src="img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<div class="row" id="game-header">
			<h3 v-if="currentgame.title" class="column">{{ currentgame.title }}</h3>
			<h3 class="column" id="wager">{{currentgame.wagerreadable}} {{currentgame.currency}}</h3>
		</div>
		<PlayHands v-on:submithands="submithands" :rockCount="rockCount" :paperCount="paperCount" :scissorsCount="scissorsCount"></PlayHands>
		<!--<div id="history" class="">
			<div class="row">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="rock" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="paper" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="scissors" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="rock" class="column">
			</div>
			<div class="row">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="paper" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="scissors" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="rock" class="column">
				<img src="" draggable="true" ondragstart="dragstarted(event)" ondragover="draggingover(event)"  ondrop="dropped(event)" alt="scissors" class="column">
			</div>
		</div>-->
	</div>
</template>

<script>
	import PlayHands from './PlayHands.vue';

	export default {
		components: PlayHands,
		props: ["currentgame", "rockCount", "paperCount", "scissorsCount"],
		data: function() {
			return {
				chosen_hands: []
			}
		}, 
		methods: {
			choose_hand: function(hand) {
				chosen_hands.push(hand);
			},
			remove_hand: function() {
				this.chosen_hands.pop();
			},
			submithands: function(hands) {
				//this.currentgame.resolveHands(hands);
				this.$emit('submithands', this.currentgame, hands);
			}
		}
	}
</script>