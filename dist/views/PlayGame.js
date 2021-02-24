<template>
	<div id="gameplay" class="">
		<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<div class="row" id="game-header">
			<h3 class="column">{{ currentgame.status }}</h3>
			<h3 class="column" id="wager">{{currentgame.wagerreadable}} {{currentgame.currency}}</h3>
		</div>
		<div id="game" class="row" style="position: relative; height: 60vh;">
			<div id="rock-cont">
				<img id="rock" class="rps-piece" src="assets/rock.png" alt="rock" onclick="play('rock');" v-on:click="$emit('onmoveselect', currentgame, 'rock')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{rockHist}}</p>
			</div>
			<div id="paper-cont">
				<img id="paper" class="rps-piece" src="assets/paper.jpg" alt="paper" onclick="play('paper');" v-on:click="$emit('onmoveselect', currentgame, 'paper')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{paperHist}}</p>
			</div>
			<div id="scissors-cont">
				<img id="scissors" class="rps-piece" src="assets/scissors2.png" alt="scissors" onclick="play('scissors');" v-on:click="$emit('onmoveselect', currentgame, 'scissors')">
				<p class="count-used" style="position: relative; text-align: center; display: block;">{{scissorsHist}}</p>
			</div>
		</div>
		<div id="history" class="">
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
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["currentgame", "rockHist", "paperHist", "scissorsHist"]
	}
</script>