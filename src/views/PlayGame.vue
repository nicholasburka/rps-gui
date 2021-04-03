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
	<div id="gameplay" class="column">
		<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="this.back">
		<div class="row" id="game-header">
			<h3 v-if="game.title" class="column">{{ game.title }}</h3>
			<h3 class="column" id="wager">{{game.wagerreadable}} {{game.currency}}</h3>
		</div>
		<h3 class="row">Winner chosen by first non-tie</h3>
		<div class="row" style="height: 80vh;">
			<div id="game" class="row" style="position: relative; height: 40vh;">
				<div id="rock-cont" class="column">
					<img id="rock" class="rps-piece" src="../img/rock.png" alt="rock" v-on:click="addHand('Rock')">
					<p class="count-used" style="position: relative; text-align: center; display: block;">{{rockCount}}</p>
				</div>
				<div id="paper-cont" class="column">
					<img id="paper" class="rps-piece" src="../img/paper.jpg" alt="paper" v-on:click="addHand('Paper')">
					<p class="count-used" style="position: relative; text-align: center; display: block;">{{paperCount}}</p>
				</div>
				<div id="scissors-cont" class="column">
					<img id="scissors" class="rps-piece" src="../img/scissors2.png" alt="scissors" v-on:click="addHand('Scissors')">
					<p class="count-used" style="position: relative; text-align: center; display: block;">{{scissorsCount}}</p>
				</div>
			</div>
			<div id="chosen" class="row" style="height: 25vh; background-color: purple" v-on:click="removeLastHand()">
				<img v-for="hand in hands" v-bind:id="hand" class="rps-piece" v-bind:src="imsrc(hand)" v-bind:alt="hand" v-on:click="removeHand(hand)">
			</div>
			<div id="submit" class="row" style="height: 10vh">
				<h3 v-if="err">{{err}}</h3>
				<button v-on:click="submithands()">Shoo!</button>
			</div>
		</div>
		<!--<PlayHands v-on:submithands="submithands" :rockCount="rockCount" :paperCount="paperCount" :scissorsCount="scissorsCount"></PlayHands>-->
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
	import {mapState} from 'vuex'

	export default {
		props: ["game", "rockCount", "paperCount", "scissorsCount"],
		data: function() {
			return {
				chosen_hands: [],
				hands: [],
				err: ""
			}
		}, 
		methods: {
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
			submithands: function() {
				if (this.hands.length === 5) {
					//this.game.resolveHands(this.hands)
					//this.$router.push('home')
					this.$emit('submithands', this.hands);
				} else {
					this.err = "Need 5 hands!"
				}
			},
			back: function() {
				this.$emit('back')
			}
		}
	}
</script>