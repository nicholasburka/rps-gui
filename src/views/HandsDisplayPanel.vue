<style scoped>
#displayPanel {

}
.rps-piece {
	position:relative;
	display: block;
	max-height: 25vh;
	max-width: 18vw;
	object-fit: contain;
	margin-left: auto;
	margin-right: auto;
}
</style>

<template>
	<div id="displayPanel" class="row">
		<img v-for="hand in hands" v-bind:id="hand" class="rps-piece" v-bind:src="imsrc(hand)" v-bind:alt="hand" v-on:click="playHandSound(hand)">
	</div>
</template>

<script>
export default {
	props: ['hands'],
	methods: {
	   imsrc: function(hand) {
	   	switch (hand) {
	   		case "Rock": return "img/rock.png";
	   		case "Paper": return "img/paper.jpg";
	   		case "Scissors": return "img/scissors2.png";
	   	}
	   },
	   playHandSound: function(hand) {

	   }
	}
}
</script>