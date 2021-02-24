<template>
	<div id="search-game" class="page-container">
		<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<form id="game-settings" class="column" v-on:submit.prevent>
			<h3 class="row flex-center">Wager</h3>
				<div class="row" style="flex-basis: 40%; width: 80%; align-self: center;">
				<div class="column" style="flex-basis: 10%; max-width: 15%;"><input v-model="sign" type="radio" name="wager-cond" value="lessthaneq"><label for="lessthaneq">&#8804;</label></div>
				<div class="column" style="flex-basis: 10%; max-width: 15%;"><input v-model="sign" type="radio" name="wager-cond" value="eq" class="column"><label for="eq">&#61;</label></div>
				<div class="column" style="flex-basis: 10%; max-width: 15%;"><input v-model="sign" type="radio" name="wager-cond" value="greaterthaneq" class="column"><label for="greaterthaneq">&#8805;</label></div>
				<input class="column form-input" style="max-width: 25%;"  v-model="wager" type="number" name="wager" step="0.0001" min="0" default="0" placeholder="currency">
			</div>
			<br/>
			<div class="row" style="flex-basis: 40%; width: 80%; margin-top:2%; align-self: center;">
			<div class="column" style="max-width: 30%;"><input v-model="sign" type="radio" name="wager-cond" value="between" class="column"><label for="greaterthaneq">between (inclusive)</label></div>
				<label>min&nbsp;</label><input v-model="min" class="column form-input" style="max-width: 25%;" type="number" name="wager" step="0.0001" min="0" default="0" placeholder="currency"><label>&nbsp;and&nbsp;</label>
				<label>max&nbsp;</label><input v-model="max" class="column form-input" style="max-width: 25%;" type="number" name="wager" step="0.0001" min="0" default="0" placeholder="currency">
			</div>
			<!---<h3 class="row flex-center">Delay</h3>
			<input class="row form-input" v-model="timeleft" type="number" name="delay" step="5" min="0" default="0" placeholder="default">--->
			<h3 class="row flex-center">Title</h3>
			<input class="row form-input" v-model="title" type="text" name="title" placeholder="(optional)">
			<h3 class="row flex-center">Who</h3>
			<input class="row form-input" v-model="addrentry" type="text" name="who-addr-entry" placeholder="(optional) enter a wallet address">
			<select class="row form-input" v-model="addrprev" type="text" name="who" placeholder="choose from previous opponents">
				<option v-for="player in prevopponents" >{{ player.nickname }} : {{ player.walletAddr }}</option>
				<option selected="selected">select from previous opponents</option>
			</select>
			<button id="form-submit" class="row" v-on:click="onSubmit(wager, sign, min, max, title, walletaddr, addrentry, addrprev);">Go!</button>
		</form>
	</div>
</template>

<script>
	module.exports = {
		props: ['walletaddr', 'prevopponents', 'balance', 'currency'],
		data: function() {

			return {
				'wager': 0.001,
				'sign': undefined,
				'min': .001,
				'max': .0015,
				'addrprev': undefined,
				'addrentry': undefined,
				'title': undefined,
				'walletaddr': this.walletaddr
			}
		},
		methods: {
			onSubmit: function(wager, sign, min, max, title, searchfromaddr, p2addrentry, p2prevselection) {
				var searchparams = {
					title: title,
					sign: sign,
					min: min,
					max: max,
					wager: wager,
					searchfromaddr: searchfromaddr,
					searchforaddr: undefined
				};
				//fill these in
				if (p2prevselection) {
					gameparams["searchforaddr"] = p2prevselection;//this.addrprev//
				} else if (p2addrentry) {
					gameparams["searchforaddr"] = p2addrentry;//this.addrentry//p2addrentry;
				} else {

				}

				console.log("search params");
				console.log(searchparams);
				console.log(this);
				console.log("max");
				console.log(this.max);

				if (!sign) {
					// do not do anything since sign is necessary
					// can display a message here for user "please choose wager condition"
				} else {

					this.$emit('ongamesearch', searchparams);

					//clear all local vars / component data to null
				}
			}
		}
	}
</script>