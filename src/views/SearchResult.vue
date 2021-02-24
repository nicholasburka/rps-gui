<template>
	<div class="game-search-result">
		<h2 class="row game-title">{{ title }}</h2>
		<div class="row">
			<h3 class="column wager">{{ wager }} ETH</h3>
			<h3 class="column player-contract-addr">{{ playerAddr }}</h3>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["title", "wager", "playerAddr"]
	};
</script>