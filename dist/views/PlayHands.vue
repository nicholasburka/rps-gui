<style scoped>
#rps-piece {
	height: ;
}
</style>

<template>
	<div class="column">
		<div id="game" class="row" style="position: relative; height: 60vh;">
			<div id="rock-cont" class="column">
				<img id="rock" class="rps-piece" src="img/rock.png" alt="rock" v-on:click="addHand('Rock')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{rockCount}}</p>
			</div>
			<div id="paper-cont" class="column">
				<img id="paper" class="rps-piece" src="img/paper.jpg" alt="paper" v-on:click="addHand('Paper')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{paperCount}}</p>
			</div>
			<div id="scissors-cont" class="column">
				<img id="scissors" class="rps-piece" src="img/scissors2.png" alt="scissors" v-on:click="addHand('Scissors')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{scissorsCount}}</p>
			</div>
		</div>
		<div id="chosen" class="row" style="height: 20vh; background-color: purple">
			<img v-for="hand in hands" v-bind:id="hand" class="rps-piece" v-bind:src="'img/' + hand + '.png'" v-bind:alt="hand" v-on:click="rmoveHand(hand)">
		</div>
		<div id="submit" class="row">
			<button v-on:click="submithands()"></button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["rockCount", "paperCount", "scissorsCount"],
		data: function() {
			return {
				hands: []
			}
		},
		methods: {
			addHand: function(hand) {
				this.hands.push(hand);
			},
			/*removeHand: function() {
				this.hands.pop();
			},*/
			removeHand: function(hand) {
				const index = array.indexOf(hand);
				if (index > -1) {
				  this.hands.splice(index, 1);
				}
			},
			submithands: function() {
				this.$emit('submithands', this.hands);
			}
		}
	}
</script>