<template>
	<div id="joinGame" class="column" v-on:submit.prevent>
		<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<h1 class="row">Join by Contract</h1>
		<h3 class="row">Please paste the contract info below:</h3>
		<textarea v-model="contractinfo" id="" rows="10" cols="50">
		</textarea>
		<button id="go" class="row" v-on:submit.prevent v-on:click="$emit('ongameaccept', contractinfo);">Submit</button>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				contractinfo: ""
			}
		}
	}
</script>