<style scoped>
#create-game {
	height: 100vh;
}
</style>



<template>
	<div id="create-game" class="column">
			<img id="back-arrow" src="../img/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
			<form v-if="!this.play" id="game-settings" class="column" v-on:submit.prevent>
				<!--<p v-model="this.err_msg" class="row">{{ this.err_msg }}</p>-->
				<h3 class="row flex-center">Wager</h3>
				<div class="row">
					<p class="column" style="flex-basis:10%"></p>
					<input v-model="wager" class="form-input column" style="flex-grow: 3" type="number" name="wager" step="0.0001" min="0" v-bind:max="balance" default="0">
					<p class="column" style="flex-basis: 5%">{{currency}}</p>
					<p class="column" style="flex-basis: 5%"></p>
				</div>
				<p v-if="price" class="row form-detail-text">1 {{currency}} to {{ price }} USD * {{ wager }}, est. invested {{ price * wager }}</p>
				<h3 class="row flex-center">Deadline</h3>
				<div class="row" style="justify-content: center">
					<p class="column" style="flex-basis: 10%"></p>
					<input v-model="deadline" class="form-input column" style="flex-grow: 3;" type="number" name="deadline" step="1" min="1" default="100" placeholder="default">
					<p class="column" style="flex-basis:5%">blocks until timeout</p>
					<p class="column" style="flex-basis: 5%"></p>
				</div>
				<p v-if="currency==='ETH'" class="row form-detail-text">(Est. time per ETH block ~15s, see https://etherscan.io/chart/blocktime for current blocktime)</p>
				<p v-else-if="currency==='ALGO'" class="row form-detail-text">(Est. time per ALGO block < 5s</p>
				<h3 class="row flex-center">Title</h3>
				<input v-model="title" class="form-input" style="flex-basis:50%" type="text" name="title" placeholder="">
				<h3 class="row flex-center">Who</h3>
				<div class="row" id="priv-pub">
					<p style="flex-basis: 30%"></p>
					<label class="column">
						<input id="public" type="radio" style="flex-basis:20%" name="permissions" checked="true" v-on:click="private_game = false;">Public   
					</label>
					<label class="column">
						<input id="priv" type="radio" style="flex-basis:20%" name="permissions" v-on:click="private_game = true; console.log(private_game);">Private
					</label>
					<p style="flex-basis: 30%"></p>
				</div>
				<div v-if="private_game" class="column">
					<p class="row" style="flex-basis: 60%; font-size: 10px;">Optional: specify opponents to invite - you can also share the invite link after submitting.</p>
					<input v-model="addrentry" class="row form-input" type="text" name="who-addr-entry" placeholder="enter a wallet address">
					<select v-model="addrprev" class="row form-input" type="text" name="who" placeholder="select from previous opponents">
						<option selected="selected">select from previous opponents</option>
						<option v-for="player in prevopponents" v-bind:value="player.walletAddress" >{{ player.nickname }} : {{ player.walletAddress }}</option>
					</select>
					<!---<label class="row">
						<input type="radio" v-on:click="invite = true;">Invite link
					</label>-->
				</div>
				<div v-else>
				</div>
				<button id="form-submit" class="row" v-on:click="onSubmit(wager, deadline, title, addrentry, addrprev, walletAddress, private_game, $emit)">Go!</button>
			</form>
			<PlayGame v-if="this.play" :game="this.game" v-on:back="cancelPlay()" v-on:submithands="this.addhandsandconfirm"></PlayGame>
			<CreateGameConfirm v-if="this.confirm" :game="this.game" :action="'Create'" :blocktime="100" :currency="this.currency" v-on:confirm="confirmm()" v-on:deny="denyy()"></CreateGameConfirm>
	</div>
</template>

<script>
	import CreateGameConfirm from "./CreateGameConfirm.vue"
	import PlayGame from "./PlayGame.vue"
	import {mapState} from 'vuex'

	export default {
		props: ['prevopponents', 'invite', 'private_game', 'price'], //'confirm'
		components: {
			CreateGameConfirm,
			PlayGame
		},
		computed: {
			...mapState({
				walletAddress: state => state.wallet.address,
				balance: state => state.wallet.balance,
				currency: state => state.wallet.currency
			})
		},
		data: function() {
			const titles = ["Rock Paper Skissors", "I always choose paper", "Rock lovers only", "Srossics repap kcor", "My R-P-S Game", "Clunk clunk shh shh snip snip"];
			const rand_title = titles[Math.floor(Math.random()*titles.length)];
			confirm = false;
			//console.log("wallet addr");
			//console.log(walletAddress);
			return {
				'wager': .0005,
				'deadline': 100,
				'title': rand_title,
				'addrentry': null,
				'addrprev': null,
				'err_msg': null,
				'play': false,
				'confirm': false,
				//'walletAddress': this.walletAddress,
				//'currency': this.currency,
				//'private': false,
				//<!---<confirmGame v-if="confirm" class="confirmPopup row" :game="this.game" :action="'Create'" :blocktime="100" v-on:confirm="confirmm()" v-on:deny="deny()"></confirmGame>-->
				'game': {}
			}
		},
		methods: {
			/*game: function(title, wager, deadline, p1addr, p2addrentry, p2select) {
				var game = {};
			},*/
			err: function(err_msg) {

			},
			onClick: function() {

			},
			onSubmit: function(wager, deadline, title, addrentry, addrprev, walletAddress, private_game, emit) {
				if(this.wager && this.deadline) {
					var p2;
					var permissions;
					if (addrprev) {
						p2 = {walletAddress: addrprev};
						permissions = "private";
					} else if(addrentry) {
						p2 = {walletAddress: addrentry};
						permissions = "private";
					} else if (private_game) {
						p2 = undefined;
						permissions = "private";
					} else {
						p2 = undefined;
						permissions = "public";
					}
					this.game = {
						title: this.title,
						wager: this.wager,
						currency: this.currency,
						deadline: this.deadline,
						p1: this.walletAddress,
						p2: p2,
						status: "pending",
						permissions: permissions
					}
					//this.confirm = true;
					console.log("this.game");
					console.log(this.game);
					console.log("confirmed");
					console.log(this.confirm);
					console.log(CreateGameConfirm);
					//this.$emit('ongamecreate', this.game);
					/*game.resolveHands = function(hands) {
						game.firstHands = hands
						this.$store.dispatch('createGame', this.game)
					}*/
					//this.$store.commit('setCurrentGame', this.game)
					//this.$router.push('play')
					this.play = true
				} else {
					//alert("HEY!");
					//alert(this);
					console.log(this.wager);
					console.log(this.deadline);
					console.log(this.addrprev);
					console.log(this.addrentry);
					console.log('not completed');
				}
			},
			cancelPlay: function() {
				this.play = false
			},
			addhandsandconfirm: function(hands) {
				this.game.firstHands = hands;
				this.confirm = true;
			},
			confirmm: function() {
				console.log("conf");
				console.log(this.game);
				//this.$emit('ongamecreate', this.game);
				this.$store.dispatch('createGame', this.game)
				this.wager = null;
				this.deadline = null;
				this.title = null;
				this.addrentry = null;
				this.addrprev = null;
				this.err_msg = null;
				this.play = false;
				this.confirm = false;
				this.$router.push('home')
			},
			denyy: function() {
				console.log("received");
				this.confirm = false;
				this.play = false;
			}
		}
	}
</script>