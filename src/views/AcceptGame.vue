<template>
	<div id="confirm-game" class="row confirmPopup">
		<h1 class="row">Accept game?</h1>
		<p class="row">(Your {{currency}} will be committed unless there's a timeout)</p>
		<p class="row"> {{ game.title }}</p>
		<p class="row"> {{ game.wagerreadable }} {{currency}} </p>
		<p class="row"> {{ game.delay }} block timeout</p>
		<p v-if="currency==='ETH'" class="row"> (Est. time with ~15s per block: {{ game.delay * 15 }}s) (see https://etherscan.io/chart/blocktime for current blocktime) </p>
		<p class="row"> Opponent: {{ game.p1 }}</p>
		<!--<HandsDisplayPanel :hands></HandsDisplayPanel>-->
		<div id="buttons" class="row">
		<button id="form-submit" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('confirm')">Yes!</button>
		<button id="form-submit" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('deny')">Back</button>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ['game', 'action', 'blocktime', 'currency', 'hands']
	};
</script>