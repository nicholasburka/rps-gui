<style scoped>
.handsdisplay {
	max-width: 100%;
}
</style>

<template>
	<div id="confirm-game" class="row confirmPopup">
		<h1 class="row"> Create game?</h1>
		<p class="row">(Your {{currency}} will be committed unless there's a timeout)</p>
		<p class="row"> {{ game.title }}</p>
		<p class="row"> {{ game.wager }} {{game.currency}} </p>
		<p class="row"> {{ game.deadline }} block timeout (Est. time with ~15s per block: {{ game.deadline * 15 }}s) </p>
		<p class="row" v-if="currency==='ETH'"> (see https://etherscan.io/chart/blocktime for current blocktime) </p>
		<p class="row"> Permissions: {{ game.permissions }} </p>
		<HandsDisplayPanel :hands="this.game.firstHands" class="handsdisplay"></HandsDisplayPanel>
		<div id="buttons" class="row">
		<button id="form-submit" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('confirm')">Yes!</button>
		<button id="form-submit" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('deny')">Back</button>
		</div>
	</div>
</template>

<script>
	import HandsDisplayPanel from './HandsDisplayPanel.vue';

	export default {
		components: {
			HandsDisplayPanel
		},
		props: ['game', 'action', 'blocktime', 'currency', 'hands']
	}
</script>