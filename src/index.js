import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "Vuex";
import detectProvider from "@metamask/detect-provider";
import * as axios from "axios";
import * as stdlib from "@reach-sh/stdlib/ETH.mjs";
import * as ethstdlib from "@reach-sh/stdlib/ETH.mjs";
import * as algostdlib from "@reach-sh/stdlib/ALGO.mjs";
const reach = {
	"ETH": ethstdlib,
	"ALGO": algostdlib
};
reach["ALGO"].setSignStrategy('AlgoSigner');
import * as loader from "@reach-sh/stdlib/loader.mjs";
import * as backend from "../build/index.main.mjs"

import Landing from "views/Landing.vue";
import Home from "views/Home.vue";
import CreateGame from "views/CreateGame.vue";
import SearchGames from "views/SearchGames.vue";
import SearchResults from "views/SearchResults.vue";
import AcceptGame from "views/AcceptGame.vue";
import JoinGameByContract from "views/JoinGameByContract.vue";
import PlayGame from "views/PlayGame.vue";
import BasePopup from "views/BasePopup.vue";
import GameOutcomePopup from "views/GameOutcomePopup.vue";

console.log("landing");
console.log(Landing);

console.log("vue");
console.log(Vue);
console.log("vue-router");
console.log(VueRouter);
console.log(new VueRouter());
Vue.use(Vuex);

console.log(stdlib);
console.log(stdlib.connectAccount);

function removeClass(elementID, className) {
	document.getElementById(elementID).className.replace( /(?:^|\s)className(?!\S)/g , '' )	};
function addClass(elementID, className) {

}
var source;
function dragstarted(e) {
	source = e.target;
	e.dataTransfer.setData("text/html", e.target.outerHTML);
	console.log(e.dataTransfer.setData("text/html", e.target.outerHTML));
	e.dataTransfer.effectAllowed = "move";
};
function draggingover(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = "move";
};
function dropped(e) {
	e.preventDefault();
	e.stopPropagation();
	source.outerHTML = e.target.outerHTML;
	console.log(e.target);
	console.log(e.dataTransfer.getData("text/html"));
	e.target.outerHTML = e.dataTransfer.getData("text/html");
};
function play(choice) {
	//send choice to backend
	var chosenim = document.getElementById(choice);
	//add chosen class to element to trigger css/animation
	//animate page away
};

/* Templates for the pages */

//need to add extending open games if there's more than displayable open games
const home = {
	props: ['walletaddr', 'balance', 'opengames', 'awaiting_games', 'accepted_games', 'invites', 'currency', 'money-committed'],
	template: `
		<div id="home" class="column page-container">
			<transition appear appear-active-class="slideInRight">
			<div id="home-th">
				<img id="faucet" src="assets/faucet.png" v-on:click="tryfaucet()">
				<div id="open-games-header" class="row"><div class="column" style="max-width: 33vw;"><div class="row"><h3>Wallet addr: </h3><h3 style="font-size: 1vw;">{{walletaddr}}</h3></div><h3 class="row">Balance uncommitted: {{balance}} {{currency}}</h3></div><h3 class="column">Open Games</h3><h3 class="column" style="flex-grow:1"> Committed: <!--{{ money-committed }} {{ currency }}--></h3></div>
				<ul id="open-games">
					<div class="row activeitem" v-for="game in opengames" v-bind:game="game" v-bind:key="game.ContractAddress" v-bind:style="{'background-color': randomcolor()}">
						<img src="assets/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)" alt="game contract info" title="click to see contract info">
						<li v-on:click="() => {$emit('ongameselect', game)}">{{game.wagerreadable}} {{game.currency}} : {{game.title}} : {{game.status}} : {{ timeLeft(game) }} left</li>
					</div>
					<!--<li class="row activeitem" v-for="game in opengames" v-bind:key="game.ContractAddress" v-bind:style="{'background-color': randomcolor()}" v-on:click="() => {$emit('ongameselect', game)}"><img src="assets/clipboard.png" class="gameclipboard" v-on:click="contractInfo(game)"> {{game.wagerreadable}} {{game.currency}} : status - {{game.status}} : time left - {{ timeLeft(game) }}</li>-->
				</ul>
				<ul id="invites">
					<li class="row activeitem" v-for="invite in invites" v-bind:style="{'background-color': randomcolor()}">
						Invited by {{ invite.p1 }} for {{ invite.wager }} {{currency}} : {{ invite.delay }} blocks left
						<div class="buttons">
							<button onclick="confirmGame()" class="column">Accept</button>
							<button onclick="deny()" class="column">Reject</button>
						</div>
					</li>
				</ul>
				<h2 id="game-history" v-on:click="getHistory()">game history</h2>
			</div>
			</transition>
			<hr style="width: 80%; text-align: center;">
			<transition appear appear-active-class="slideInLeft">
			<div id="home-bh">
				<h1 id="create-game" class="row active" v-on:click="$router.push('create')">create</h1>
				<h1 id="search" class="row active" v-on:click="$router.push('search')">search</h1>
				<h1 id="join" class="row active" v-on:click="$router.push('join')">join with contract</h1>
			</div>
			</transition>
		</div>
	`, 
	methods: {
		randomcolor: function() { 
		  return "hsl(" + 360 * Math.random() + ',' +
		             (25 + 70 * Math.random()) + '%,' + 
		             (65 + 10 * Math.random()) + '%)'
		},
		tryfaucet: function() {
			console.log("clicked faucet");
			this.$emit('tryfaucet');
		},
		getGame: function(gameid) {
			$router.push('gameplay', gameid);
		},
		getHistory: function() {
			this.$emit('gamehistory');
		},
		contractInfo: function(game) {
			console.log("clicked contractinfo clipboard, emitting");
			this.$emit('displaycontractinfo', game);
		},
		timeLeft: function(game) {
			//console.log("timeleft");
			//console.log("game.starttime");
			//console.log(game.starttime);

			var blocktime_est = 10000;
			function isoToObj(s) {
			    var b = s.split(/[-TZ:]/i);

			    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));

			}


			function timeToGo(s) {

			    // Utility to add leading zero
			    function z(n) {
			      return (n < 10? '0' : '') + n;
			    }

			    // Convert string to date object
			    var d = isoToObj(s);
			    var diff = d - new Date();

			    // Allow for previous times
			    var sign = diff < 0? '-' : '';
			    diff = Math.abs(diff);

			    // Get time components
			    var hours = diff/3.6e6 | 0;
			    var mins  = diff%3.6e6 / 6e4 | 0;
			    var secs  = Math.round(diff%6e4 / 1e3);

			    // Return formatted string
			    return sign + z(hours) + ' hrs, ' + z(mins) + ' mins, ' + z(secs) + ' s';   
			}
			//need to check units
			//this will actually be a call to Reach or a blockchain API
			//return (this.delay + this.timeCreated) - (new Date()).getTime();
			var enddate = new Date(game.starttime);
			enddate.setSeconds(enddate.getSeconds() + blocktime_est*game.delay); //assuming that blocktime is in seconds
			var tleft = timeToGo(enddate.toISOString());
			//console.log(tleft);
			return tleft;
		}
	}
}
//shows basic info:
//players, wager, outcome if outcome
const gameinfo = {
	props: ['game'],
	template: `

	`
};
//outcome in terms of whether the user won
const gameresult = {
	props: ['game', 'outcome'],
	template: `
		<p></p>
	`
};
const displaytext = {
	props: ['text'],
	template: `
		<div class="page-container column">
		<p class="row">
		{{text}}
		</p>
		<button id="go" class="row" v-on:click="$emit('dismiss')">Dismiss</button>
		</div>
	`,
	methods: {
		onclick: function() {
			console.log("dismiss");
			console.log(this.$emit);
			this.$emit('dismiss');
		}
	}
};
const confirmaGame = {
	props: ['game', 'action', 'blocktime', 'currency'],
	template: `
		<div id="confirm-game" class="row confirmPopup">
			<h1 class="row"> Create game?</h1>
			<p class="row">(Your {{currency}} will be committed unless there's a timeout)</p>
			<p class="row"> {{ game.title }}</p>
			<p class="row"> {{ game.wager }} {{currency}} </p>
			<p class="row"> {{ game.delay }} block timeout (Est. time with ~15s per block: {{ game.delay * 15 }}s) </p>
			<p class="row" v-if="currency==='ETH'"> (see https://etherscan.io/chart/blocktime for current blocktime) </p>
			<p class="row"> Permissions: {{ game.permissions }} </p>
			<div id="buttons" class="row">
			<button id="go" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('confirm')">Yes!</button>
			<button id="go" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('deny')">Back</button>
			</div>
		</div>
	`

}
/*

<div id="confirm-game" class="column confirmPopup">
	<h1 class="row">{{ this.action }} Game?</h1>
	<p class="row">(Your ETH will be committed unless there's a timeout)</p>
	<p class="row" v-if="game.title"> {{game.title}}</p>
	<p class="row"> {{ game.wager }} ETH </p>
	<p class="row"> {{ game.delay }} block timeout (Est. time with {{ ~15s }} per block: {{ game.delay * 15 }}s) </p>
	<p class="row"> (see https://etherscan.io/chart/blocktime for current blocktime) </p>
	<p v-if="action === 'create'" class="row"> {{ game.permissions }} </p>
	<p v-else class="row"> {{ game.p1 }}</p>
	<div id="buttons" class="row">
	<button id="go" class="column" v-on:click="$emit('confirm')">Yes!</button>
	<button id="go" class="column" v-on:click="$emit('deny')">Back</button>
	</div>
</div>
				<confirmGame v-if="this.confirm" class="confirmPopup" :game="this.game" :action="'Create'" :blocktime="100" v-on:confirm="confirmm()" v-on:deny="deny()"></confirmGame>
				<p v-if="this.confirm">hello</p>

				<div v-if="this.confirm" id="confirm-game" class="confirmPopup">
					<h1 class="row">Create Game?</h1>
					<p class="row">(Your ETH will be committed unless there's a timeout)</p>
					<p class="row" v-if="this.game.title"> {{this.game.title}}</p>
					<p class="row"> {{ this.game.wager }} ETH </p>
					<p class="row"> {{ this.game.delay }} block timeout (Est. time with {{ ~15s }} per block: {{ this.game.delay * 15 }}s) </p>
					<p class="row"> (see https://etherscan.io/chart/blocktime for current blocktime) </p>
					<p class="row"> {{ this.game.permissions }} </p>
					<p v-else class="row"> {{ this.game.p1 }}</p>
					<div id="buttons" class="row">
					<button id="go" class="column" v-on:click="confirmm()">Yes!</button>
					<button id="go" class="column" v-on:click="deny()">Back</button>
					</div>
				</div>

<div v-if="this.confirm" id="confirm-game" class="column confirmPopup">
	<h1 class="row"> Create game?</h1>
	<div id="buttons" class="row">
	<button id="go" class="column" v-on:click="$emit('confirm')">Yes!</button>
	<button id="go" class="column" v-on:click="$emit('deny')">Back</button>
	</div>
</div>
*/
const createGame = {
	// "creating..." --> "Game Created!" & Home screen, w/ Added to list of Games
	props: ['walletaddr', 'prevopponents', 'balance', 'currency', 'invite', 'private_game', 'price'], //'confirm'
	components: {
		confirmaGame
	},
	data: function() {
		const titles = ["Rock Paper Skissors", "I always choose paper", "Rock lovers only", "Srossics repar kcor", "My R-P-S Game"];
		const rand_title = titles[Math.floor(Math.random()*titles.length)];
		confirm = false;
		//console.log("wallet addr");
		//console.log(walletAddr);
		return {
			'wager': .0005,
			'delay': 100,
			'title': rand_title,
			'addrentry': null,
			'addrprev': null,
			'err_msg': null,
			'confirm': false,
			'walletaddress': this.walletaddr,
			'currency': this.currency,
			//'private': false,
			//<!---<confirmGame v-if="confirm" class="confirmPopup row" :game="this.game" :action="'Create'" :blocktime="100" v-on:confirm="confirmm()" v-on:deny="deny()"></confirmGame>-->
			'game': {}
		}
	},
	template: `
		<div id="create-game" class="column">
				<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
				<form id="game-settings" class="column" v-on:submit.prevent>
					<!--<p v-model="this.err_msg" class="row">{{ this.err_msg }}</p>-->
					<h3 class="row form-caption">Wager</h3>
					<div class="row">
						<p class="column" style="flex-basis:10%"></p>
						<input v-model="wager" v-bind:max="balance" class="form-input column" style="flex-grow: 3" type="number" name="wager" step="0.0001" min="0" default="0">
						<p class="column" style="flex-basis: 5%">{{currency}}</p>
						<p class="column" style="flex-basis: 5%"></p>
					</div>
					<p v-if="price" class="row" class="form-detail-text">1 {{currency}} to {{ price }} USD * {{ wager }}, est. invested {{ price * wager }}</p>
					<h3 class="row form-caption">Delay</h3>
					<div class="row" style="justify-content: center">
						<p class="column" style="flex-basis: 10%"></p>
						<input v-model="delay" class="form-input column" style="flex-grow: 3;" type="number" name="delay" step="1" min="1" default="100" placeholder="default">
						<p class="column" style="flex-basis:5%">blocks until timeout</p>
						<p class="column" style="flex-basis: 5%"></p>
					</div>
					<p class="row" class="form-detail-text">(Est. time per block ~15s, see https://etherscan.io/chart/blocktime for current blocktime)</p>
					<h3 class="row form-caption">Title</h3>
					<input v-model="title" class="form-input" style="flex-basis:50%" type="text" name="title" placeholder="">
					<h3 class="row form-caption">Who</h3>
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
							<option v-for="player in prevopponents" v-bind:value="player.walletAddr" >{{ player.nickname }} : {{ player.walletAddr }}</option>
						</select>
						<!---<label class="row">
							<input type="radio" v-on:click="invite = true;">Invite link
						</label>-->
					</div>
					<div v-else>
					</div>
					<button id="go" class="row" v-on:click="onSubmit(wager, delay, title, addrentry, addrprev, walletaddress, private_game, $emit)">Go!</button>
				</form>
				<confirmaGame v-if="this.confirm" :game="this.game" :action="'Create'" :blocktime="100" :currency="this.currency" v-on:confirm="confirmm()" v-on:deny="deny()"></confirmaGame>
		</div>
`,
	methods: {
		game: function(title, wager, delay, p1addr, p2addrentry, p2select) {
			var game = {};
		},
		err: function(err_msg) {

		},
		onClick: function() {

		},
		onSubmit: function(wager, delay, title, addrentry, addrprev, walletaddr, private_game, emit) {
			console.log("walletaddr");
			console.log(walletaddr);
			console.log(this.walletaddr);
			console.log(this.walletaddress);
			/*var incomplete_fields = [];
			if (!wager) {
				incomplete_fields.push("Wager");
			}
			if (!delay) {
				incomplete_fields.push("Delay");
			} 
			if (!title) {
				incomplete_fields.push("Title");
			}
			if (!(addrprev || addrentry)) {
				incomplete_fields.push("Who");
			}
			if (incomplete_fields) {
				this.err_msg = "Please enter a value for " + incomplete_fields;
			}
			//this could maybe just be an 
			else */if(this.wager && this.delay) {
				var p2;
				var permissions;
				if (addrprev) {
					p2 = {walletaddr: addrprev};
					permissions = "private";
				} else if(addrentry) {
					p2 = {walletaddr: addrentry};
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
					delay: this.delay,
					p1: this.walletaddr,
					p2: p2,
					status: "pending",
					permissions: permissions
				}
				this.confirm = true;
				console.log("this.game");
				console.log(this.game);
				console.log("confirmed");
				console.log(confirm);
				console.log(confirmaGame);
				//this.$emit('ongamecreate', this.game);
			} else {
				//alert("HEY!");
				//alert(this);
				console.log(this.wager);
				console.log(this.delay);
				console.log(this.addrprev);
				console.log(this.addrentry);
				console.log('not completed');
			}
		},
		confirmm: function() {
			console.log("conf");
			console.log(this.game);
			this.$emit('ongamecreate', this.game);
			this.wager = null;
			this.delay = null;
			this.title = null;
			this.addrentry = null;
			this.addrprev = null;
			this.err_msg = null;
		},
		deny: function() {
			console.log("received");
			this.confirm = false;
		}
}};
const searchGame = {
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
	template: `
		<div id="search-game" class="page-container">
		<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
		<form id="game-settings" class="column" v-on:submit.prevent>
			<h3 class="row form-caption">Wager</h3>
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
			<!---<h3 class="row form-caption">Delay</h3>
			<input class="row form-input" v-model="timeleft" type="number" name="delay" step="5" min="0" default="0" placeholder="default">--->
			<h3 class="row form-caption">Title</h3>
			<input class="row form-input" v-model="title" type="text" name="title" placeholder="(optional)">
			<h3 class="row form-caption">Who</h3>
			<input class="row form-input" v-model="addrentry" type="text" name="who-addr-entry" placeholder="(optional) enter a wallet address">
			<select class="row form-input" v-model="addrprev" type="text" name="who" placeholder="choose from previous opponents">
				<option v-for="player in prevopponents" >{{ player.nickname }} : {{ player.walletAddr }}</option>
				<option selected="selected">select from previous opponents</option>
			</select>
			<button id="go" class="row" v-on:click="onSubmit(wager, sign, min, max, title, walletaddr, addrentry, addrprev);">Go!</button>
		</form>
	</div>
	`,
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
			/*$emit('ongamesearch',
					 {title: title, 
					 	wager: wager,
					 	sign: sign,
					 	min: min,
					 	max: max, 
					 	delay: delay,
					 	p1: {walletaddr: walletaddr}, 
					 	p2: undefined, 
					 	p2addrentry: addrentry, 
					 	p2prev: addrprev});*/
		}
	}
};
const confirmAcceptGame = {
	props: ['game', 'action', 'blocktime', 'currency'],
	template: `
		<div id="confirm-game" class="row confirmPopup">
			<h1 class="row">Accept game?</h1>
			<p class="row">(Your {{currency}} will be committed unless there's a timeout)</p>
			<p class="row"> {{ game.title }}</p>
			<p class="row"> {{ game.wagerreadable }} {{currency}} </p>
			<p class="row"> {{ game.delay }} block timeout</p>
			<p v-if="currency==='ETH'" class="row"> (Est. time with ~15s per block: {{ game.delay * 15 }}s) (see https://etherscan.io/chart/blocktime for current blocktime) </p>
			<p class="row"> Opponent: {{ game.p1 }}</p>
			<div id="buttons" class="row">
			<button id="go" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('confirm')">Yes!</button>
			<button id="go" style="flex-direction: column; flex-basis: 30%;" v-on:click="$emit('deny')">Back</button>
			</div>
		</div>
	`
};
const searchResult = {
	props: ["title", "wager", "playerAddr"],
	template: `
		<div class="game-search-result">
			<h2 class="row game-title">{{ title }}</h2>
			<div class="row">
				<h3 class="column wager">{{ wager }} ETH</h3>
				<h3 class="column player-contract-addr">{{ playerAddr }}</h3>
			</div>
		</div>
	`
};

//add "new search" button to return to search
//also need to add back buttons (?)
const gameSearchResults = {
	props: ["foundgames"],
	data: function() {
		console.log(this.foundgames);
		return {
			confirm: false,
			game: undefined,
			test_games: [
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Fri, 11 Dec 2020 16:48:36 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Fri, 11 Dec 2020 16:48:36 GMT",
    "title": "I always choose paper"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Fri, 11 Dec 2020 16:48:48 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Fri, 11 Dec 2020 16:48:48 GMT",
    "title": "Rock Paper Skissors"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Fri, 11 Dec 2020 23:36:03 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Fri, 11 Dec 2020 23:36:03 GMT",
    "title": "Rock lovers only"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Fri, 11 Dec 2020 23:36:18 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Fri, 11 Dec 2020 23:36:18 GMT",
    "title": "Srossics repar kcor"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Thu, 10 Dec 2020 20:21:29 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Thu, 10 Dec 2020 20:21:29 GMT",
    "title": "Rock lovers only"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Thu, 10 Dec 2020 20:57:03 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Thu, 10 Dec 2020 20:57:03 GMT",
    "title": "Rock Paper Skissors"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Thu, 10 Dec 2020 21:06:11 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Thu, 10 Dec 2020 21:06:11 GMT",
    "title": "Rock lovers only"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Thu, 10 Dec 2020 21:22:18 GMT",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Thu, 10 Dec 2020 21:22:18 GMT",
    "title": "I always choose paper"
  },
  {
    "p1": 12345931,
    "currency": "ETH",
    "starttime": "Tue Dec 01 202012:52:12 GMT-0500 (Eastern Standard Time)",
    "wager": 0.001,
    "delay": 100,
    "ContractAddress": "12345931Tue Dec 01 202012:52:12 GMT-0500 (Eastern Standard Time)",
    "title": "I always choose paper"
  }
]
		};
	},
	components: {
		'searchResult': searchResult,
		'confirmAcceptGame': confirmAcceptGame
	},
	template: `
		<div id="game-search-results" class="column" style="margin-top:2vh;">
			<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
			<searchResult v-for="game in foundgames" v-bind:game="game" v-bind:title="game.title" v-bind:wager="game.wagerreadable" v-bind:playerAddr="game.p1" v-bind:style="{'background-color': randomcolor()}" v-on:click.native="onclick(game);">
			</searchResult>
			<confirmAcceptGame v-if="this.confirm" :game="this.game" :blocktime="100" :currency="this.currency" v-on:confirm="confirmgame()" v-on:deny="deny()"></confirmAcceptGame>
		</div>
	`,
	methods: {
		onclick: function(game) {
			console.log("clicked " + game.title);
			this.game = game;
			this.confirm = true;
			console.log(this);
			console.log(this.confirm);
		},
		confirmgame: function() {
			//send to chain or to page?
			this.$emit('ongameaccept', this.game);
		},
		deny: function() {
			this.confirm = false;
		},
		randomcolor: function() { 
		  return "hsl(" + 360 * Math.random() + ',' +
		             (25 + 70 * Math.random()) + '%,' + 
		             (65 + 10 * Math.random()) + '%)'
		}
	}
};
const joinGame = {
	props: ["contract"],
	template: `
		<div id="joinGame" class="column" v-on:submit.prevent>
			<img id="back-arrow" src="assets/back-arrow.png" alt="back" v-on:click="$router.go(-1);">
			<h1 class="row">Join by Contract</h1>
			<h3 class="row">Please paste the contract info below:</h3>
			<textarea v-model="contract" id="" rows="10" cols="50">
			</textarea>
			<button id="go" class="row" v-on:submit.prevent v-on:click="$emit('ongameaccept', contract);">Submit</button>
		</div>
	`
}
const gameplay = {
	props: ["currentgame", "rockHist", "paperHist", "scissorsHist"],
	template: `
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
	`

};
const notif = {
	props: ['message'],
	template: `
		<p>{{message}}</p>
	`
}
const popupC = {
	props: ['message', 'game-outcome', 'move1', 'move2'],
	template: `
		<div class="popup row">
			<div v-if="game-outcome" class="popup-animation column">
			</div>
			<p class="column">{{message}}</p>
		</div>
	`
}

const routes = [
	{path: '/', component: Landing},
	{path: '/home', component: Home},
	{path: '/create', component: CreateGame},
	{path: '/search', component: SearchGames},
	{path: '/search-results', component: SearchResults},
	{path: '/play', component: PlayGame},
	{path: '/join', component: JoinGameByContract}
];

console.log("ROUTER");
const router = new VueRouter({
	routes
});

function getTime() {
	var d = new Date();
	var t = d.getTime();
	return t;
};

function aPlayer(walletAddr, nickname) {
	this.walletAddr = walletAddr;
	this.nickname = nickname;
};
function Wallet(addr) {
	this.addr = addr;
	this.balance = undefined;
	this.committed = undefined;
	this.currency = undefined;
};
function timeLeft(game) {
		var blocktime_est = 100;
		function isoToObj(s) {
		    var b = s.split(/[-TZ:]/i);

		    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));

		}


		function timeToGo(s) {

		    // Utility to add leading zero
		    function z(n) {
		      return (n < 10? '0' : '') + n;
		    }

		    // Convert string to date object
		    var d = isoToObj();
		    var diff = d - new Date();

		    // Allow for previous times
		    var sign = diff < 0? '-' : '';
		    diff = Math.abs(diff);

		    // Get time components
		    var hours = diff/3.6e6 | 0;
		    var mins  = diff%3.6e6 / 6e4 | 0;
		    var secs  = Math.round(diff%6e4 / 1e3);

		    // Return formatted string
		    return sign + z(hours) + ':' + z(mins) + ':' + z(secs);   
		}
		//need to check units
		//this will actually be a call to Reach or a blockchain API
		//return (this.delay + this.timeCreated) - (new Date()).getTime();
		var enddate = new Date(game.starttime);
		enddate.setSeconds(enddate.getSeconds() + blocktime_est*game.delay); //assuming that blocktime is in seconds
		return timeToGo(enddate.toISOString());
	};

// Source: http://stackoverflow.com/questions/497790
var dates = {
    convert:function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
};

var examplePlayers = [];
examplePlayers.push(new aPlayer("0588xf01", "jherod"));
examplePlayers.push(new aPlayer("1125fxf01", "alli"));
examplePlayers.push(new aPlayer("015aa39v", "mo"));

var exampleGames = [];
const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');
exampleGames.push(new Game({title: "Gerry's Mulligan", wager: "1.1", currency: "ETH", delay: 20, timeCreated: moonLanding, p1: examplePlayers[0]}));
exampleGames.push(new Game({title: "Play me!", wager: ".001", currency: "ETH", delay: 21, timeCreated: moonLanding, p1: examplePlayers[0], p2: examplePlayers[2]}));
/*exampleGames.push(new Game("A friendly game...", ".05", "ETH", 21, moonLanding, examplePlayers[0], examplePlayers[2]));
exampleGames.push(new Game("Noobs only", ".01", "ETH", 21, moonLanding, examplePlayers[0]));*/

//syntactic sugar for a funct that returns an object
class Player {

	//...stdlib.hasRandom,
	//this.game = game;
	//this.ctc = ctc,
	constructor(vue, ctc, game) {
		this.logging = true;
		console.log("creating a player");
		this.wager = game.wager;
		this.deadline = game.delay;
		this.vue = vue;
		this.contract = ctc;
		this.game = game;
	}
	random() {
		return stdlib.hasRandom.random();
	}
	log(msg) {if(this.logging){console.log(msg);}}
	async getHand() {
		this.log("calling getHand");
		//var hand = await askHand_(ctc);
		var hand = await new Promise(resolveHand => {
			this.game.playable = true;
			this.game.status = "playable";
			this.game.onMove = resolveHand;
		});
		console.log("received hand");
		console.log(hand);
		this.game.status = "waitingForResults"; //move submitted
		return hand;
		//update game status to 
	}
	seeOutcome (winner) {
		this.log("see outcome");
		this.log("see outcome");
		this.log(winner);
		this.log("this in see outcome");
		this.log(this);
		//this.games[ctc].outcome = outcome;
		//this.games[ctc].oncomplete("complete", outcome);
		//send result to Lambda via Axios

		console.log("outcome!");
		console.log(outcome);
		this.game.status = "completed";
		var isp1 = (this.vue.games[ctc].p1 === this.vue.walletAddr);
		if (winner === 0) {
		//draw
			//var outcome_text = "Draw!";
			this.vue.displaytext = "Draw!<br/>";
		} else if ((outcome === 0 && isp1) || (outcome === 2 && (!isp1))) {
		//you win
			this.vue.displaytext = "You won!";
		} else {
		//you lose
			this.vue.displaytext = "You lost";
		}
	}
	informTimeout() {
		this.log("player: informtimeout");
		//this.ongamecomplete(ctc, "timeout")
		//send result to Lambda
		this.game.status = "completed";
		this.vue.displaytext = "Game timeout";
	}
};
class Deployer extends Player {
	constructor(props) {
		super(props);
	}
}

function Game(obj) {
	this.title = obj.title;
	this.wager = obj.wager;
	this.delay = obj.delay; 
	this.currency = obj.currency;
	this.timeCreated = obj.timeCreated; //would really get this from blockchain
	this.gameid = obj.gameid; //would get this from blockchain?
	this.contractAddress = obj.contractAddress;
	this.p1 = obj.p1;
	this.p2 = obj.p2;
	this.p1move = obj.p1move;
	this.p2move = obj.p2move;
	this.completed = false;
	this.starttime = obj.starttime;
	this.timeLeft = function() {
		var blocktime_est = 100;
		function isoToObj(s) {
		    var b = s.split(/[-TZ:]/i);

		    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));

		}


		function timeToGo(s) {

		    // Utility to add leading zero
		    function z(n) {
		      return (n < 10? '0' : '') + n;
		    }

		    // Convert string to date object
		    var d = isoToObj();
		    var diff = d - new Date();

		    // Allow for previous times
		    var sign = diff < 0? '-' : '';
		    diff = Math.abs(diff);

		    // Get time components
		    var hours = diff/3.6e6 | 0;
		    var mins  = diff%3.6e6 / 6e4 | 0;
		    var secs  = Math.round(diff%6e4 / 1e3);

		    // Return formatted string
		    return sign + z(hours) + ':' + z(mins) + ':' + z(secs);   
		}
		//need to check units
		//this will actually be a call to Reach or a blockchain API
		//return (this.delay + this.timeCreated) - (new Date()).getTime();
		var enddate = new Date(this.starttime);
		enddate.setSeconds(enddate.getSeconds() + blocktime*this.delay); //assuming that blocktime is in seconds
		return timeToGo(enddate.toISOString());
	};
	this.status = function() {
		if (!this.p2) {
			return "created";
		} else if (this.p2 && !(this.p1move && this.p2move)) {
			return "accepted";
		} else if (!this.completed) {
			return "submitted";
		} else {
			return "completed";
		}
	};
	this.outcome = function() {
		if (!(this.p1move && this.p2move)) {
			return undefined;
		} else if (this.p1move === this.p2move) {
			return "tie";
		} else if ( ((this.p1move === "rock") && (this.p2move === "paper")) 
					|| ((this.p1move === "paper") && (this.p2move === "scissors")) 
					|| ((this.p1move === "scissors") && (this.p2move === "rock")) ) {
			return this.p2;
		} else {
			return this.p1;
		}
	};
};
//Games class that has both game metadata and backend functions and interact
/*class Game {
	constructor(stdlib, gameparams) {

	}
}*/

//Games store that reads out 
//open games
//filter games with status of 
//games history
//get games history from db
//filter games
function GameMetadata(form_params) {
	this.title = ma.title;
	this.wager = metadata.wager
}
/*function aGame(form_params) {
	...form_params

}*/

/*const store = new Vuex.Store({
	state: {
		reach,
		wallet: {
			'currency': 'ALGO',
			'acc': undefined,
			'address': undefined,
			'balance': undefined
		},
		//dictionary with contract address,
		activeGames: {}
		//wallets: {
		//	"ETH": {
		//		'acc': undefined,
		//		'address': undefined,
		//		'balance': undefined
		//	},
		//	"ALGO": {
		//
		//	}
		//},
		//ethwallet
	},
	mutations: {
		setWallet: function(state, {currency, acc, address, balance}) {
			state.wallet.currency = currency;
			state.wallet.acc = acc;
			state.wallet.address = address;
			state.wallet.balance = balance;
			return state.wallet;
		},
		setActiveGames: function(state, games) {
			state.activeGames = games;
			return state.activeGames;
		}
	}, 
	actions: {
		refreshWallet: async function(context, currency) {
			try {
				const currency = currency;
				if (currency === "ALGO") {
					const acc = await reach[currency].newAccountFromAlgoSigner();
				} else if (currency === "ETH") {
					const acc = await reach[currency].getDefaultAccount();
				}
				const acc = await reach[currency].getDefaultAccount();
				const address = await acc.networkAccount.getAddress();
				const balance = await reach[currency].balanceOf(state.wallet.acc);
				return context.commit('setWallet', {currency, acc, address, balance});
			} catch (err) {
				console.log("error refreshing wallet");
				console.log(err);
			}
		},
		refreshGames: async function(context) {
			//get games call
			//metadata

			return context.commit('setGames', activeGames);
		}
	},
	getters: {
		acc: (state, currency) => {
			return state.acc[currency];
		}
	}
});*/

console.log("APP");
Vue.use(VueRouter);
console.log(Vue.use(VueRouter));
const app = new Vue({
		router: router,
		el: "#app",
		//store,
		components: {
			'popupC': popupC,
			'displaytextarea': displaytext
		},
		data: function() {
			return { 
				walletLoading: true, 
				walletFound: null, 
				walletUnavailable: null, 
				acc: null,
				wallet: null,
				walletAddr: null,
				balance: null,
				walletCurrency: "ETH",
				prevopponents: examplePlayers, //this would be a function
				opengames: [],//exampleGames,
				opengamesasgameobjs: [], //unused
				foundgames: [],
				invites: null,
				currentgame: null,
				price: null,
				popup: null,
				popuptime: 3000,
				popups: [],
				displaytext: "",
				TEST: false,
				DEV_LOG: true
			}
		},
		created: function() {
			if (this.TEST) {
				this.runTests();
				this.walletAddr = 12345931;
			}

			console.log("created Vue app");
			console.log(this);
			//console.log(this.$router.name);
			//console.log(this.$router.currentRoute.path);
		},
		computed: {
		},
		methods: {
			log: function(message) {
				if (this.DEV_LOG) {
					console.log(message);
				}
			},
			loadReachLib: async function(currency) {
				this.log("getting reach stdlib for currency " + currency);
				this.stdlib = await loader.loadStdlib(currency);
				this.log("loaded stdlib");
				this.log(this.stdlib);
				this.currency = currency;
			},
			getAtomicCurrency: async function(val) {
				assert(this.currency === "ETH" || this.currency === "ALGO");
				if (this.currency === 'ETH') {
					const valAtomic = await reach[this.currency].formatCurrency(val, -4);
				} else if (this.currency === 'ALGO') {
					const valAtomic = await reach[this.currency].formatCurrency(val, -6);
				}
				return valAtomic;
			},
			getReadableCurrency: async function() {
				assert(this.currency === "ETH" || this.currency === "ALGO");
				if (this.currency === 'ETH') {
					const valReadable = await reach[this.currency].formatCurrency(val, 4);
				} else if (this.currency === 'ALGO') {
					const valReadable = await reach[this.currency].formatCurrency(val, 6);
				}
				return valReadable;
			},
			updateBalance: async function() {
				var atomicBalance = await reach[this.currency].balanceOf(this.acc);
				this.balance = await this.getReadableCurrency(atomicBalance);
				return this.balance;
			},
			refreshWallet: async function(currency) {
				this.log("refresh wallet");
				console.log("refresh wallet");
				try {
					this.currency = currency;
					/*if (currency === "ALGO") {
						const acc = await reach[currency].newAccountFromAlgoSigner();
					} else if (currency === "ETH") {
						const acc = await reach[currency].getDefaultAccount();
					}*/
					this.acc = await reach[currency].getDefaultAccount();
					console.log(this.acc);
					if (currency === "ALGO") {
						this.walletAddr = await this.acc.networkAccount.addr;
					} else if (currency === "ETH") {
						this.walletAddr = await this.acc.networkAccount.getAddress();
					}
					await this.updateBalance();
					this.getGames();
				} catch (err) {
					this.log("could not refresh wallet");
					this.log(err);
				}
			},
			/*reqAccount: async function() {
				//right now this requires the user to click "Enable Ethereum" to run
				
				console.log(stdlib.getDefaultAccount);
				
				console.log("get account");
				var acc = await stdlib.getDefaultAccount();
				this.acc = acc;
				console.log(this.acc);
				console.log("get address");
				this.walletAddr = await acc.networkAccount.getAddress();
				console.log(this.walletAddr);
				console.log("get balance");
				await this.updateBalance();
				console.log(this.balance);

				//this will eventually be a place where currency is determined and set
				this.walletCurrency = "ETH";

				try {
					this.getGames();
				} catch (err) {
					console.log(err);
				}
			},
			getCurrencyPrice: async function() {
				axios({
						method: 'get',
						withCredentials: true,
						url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest/items?slug=ethereum',
						headers: {'X-CMC_PRO_API_KEY': '22193dce-f532-4c64-98ea-bd408903ae8f'}
						})
						.then(response => {console.log(response); this.price = response.data['1']['quote']['usd'];})
						.catch(error => {console.log(error)});
			},*/
			tryfaucet: async function() {
				try {
					console.log("faucet");
					const faucet = await reach[this.currency].getFaucet();
					console.log(faucet);
					await reach[this.currency].transfer(faucet, this.acc, stdlib.parseCurrency(5));
					console.log("transferred?");
				}
				catch (e) {
					console.log(e);
				}
			},
			displaycontractinfo: function(game) {
				this.log("received a displaycontractinfo event");
				this.log(game);
				this.log(this);
				this.log(this.displaytext);
				this.log(JSON.stringify(game.contractinfo, null, 2));
				this.displaytext = JSON.stringify(game.contractinfo, null, 2);
				this.log(this.displaytext);
			},
			setpopup: function(msg) {
				this.popup = msg;
				setTimeout(() => {
					this.popup = null;
					this.log("settimeout finished");
				}, this.popuptime);
			},
			removePopup: function() {
				this.popup = null;
			},
			dismissDisplayText: function() {
				console.log("dismiss in vue parent");
				this.displaytext = null;
			},
			getGames: function() {
				//need to edit to ensure correct form of request
				var self = this;
				try {
				axios({
						method: "GET",
						url: ("https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getAllGamesByWalletAddressFunction-16UGOIN5N63P?walletAddress=".concat(String(this.walletAddr)))
					}).then(function(response) {
						this.log(response);
						this.log(response.data);
						this.log("_SELF_");
						this.log(self);
						//TODO this should be in dbquery not in frontend
						self.opengames = response.data.filter((game) => {
							this.log(game);
							this.log(game.status);
							this.log((game.status !== "complete"));
							return (game.status !== "complete");
																});
						this.log("open games from DB");
						this.log(self.opengames);

						self.opengames = self.opengames.map((game) => {
							if (!game.wagerreadable) {
								//console.log("no readable wager");
								//console.log(game.wager.hex);
								//console.log(stdlib.hexToBigNumber(game.wager.hex));
								//console.log(stdlib.formatCurrency(stdlib.hexToBigNumber(game.wager.hex), 4));
								//console.log(stdlib.standardUnit);
								game.wagerreadable = reach[this.currency].formatCurrency(reach[this.currency].hexToBigNumber(game.wager.hex), 4);
							}
							return game;
						});
					}).catch((error) => {
						console.log(error);
					});
				} catch (err) {
					console.log(err);
				}
			},
			gamehistory: function() {
				this.log("game history");
				//show all games that have status "completed"
				//show results (need to make vue component)
				//route to game history vue component
			},
			askHand_: async(ctc) => {
				return new Promise((resolve) => {

					this.games[ctc].onMove = ((hand) => {
						resolve(hand);
					});

				});
			},
			isP1: function(game) {
				return (game.p1 === this.walletAddr);
			},
			ongamecreate: async function(game) {
				var self = this;
				router.push('home');
				this.setpopup("Processing...");
				console.log(game);
				var d = new Date(); //note that dates are used to provide time *estimates* of how much time is left before expiry
				d = d.toISOString(); //time format, does this convert back functionally
				//var t = d.toDateString() + d.toTimeString();
				//var the_game = new Game({title: game.title, wager: game.wager, currency: this.walletCurrency, delay: game.delay, starttime: d, p1: game.p1, status: "open"});
				game.starttime = d;
				this.setpopup("Deploying...");
				var balanceBefore = this.balance;
				var self = this;
				console.log("deploying");

				game.wagerreadable = game.wager;
				game.wager = stdlib.parseCurrency(game.wager); //convert ETH to WEI, js num => BigNumber
				var gameOnChain = true;
				try {
					//deploy game and update game address and status
					game.contract = this.acc.deploy(backend);
				
					//logging
					console.log("contract");
					console.log(game.contract);
					self.setpopup("Deploying at " + game.contract);
					console.log("awaiting contract info");
					game.contractinfo = await game.contract.getInfo();
					console.log(game.contractinfo);
					game.contractinfostr = JSON.stringify(game.contractinfo, null, 2);
					self.displaytext = game.contractinfostr;
					console.log(this.displaytext);
					/*try {
					    await navigator.clipboard.writeText(game.contractinfostr);
					    self.displaytext = self.displaytext + "&#13;&#10;copied to clipboard";
					    //self.setpopup("copied contract info to clipboard");
					} catch (error) {
					    console.error("copy failed", error);
					}*/

					game.ContractAddress = game.contractinfo.address;
					game.status = "Awaiting Opponent";
					game.playable = false;
					//update balance
					self.balance = await this.updateBalance();//this.acc.getBalance();
					
		

					//self.opengames.push(game);
					console.log("not creating backend");
					//await backend.Alice(game.contract, new Player(this, game.contract, game));
					const atomicWager = this.getAtomicCurrency(game.wager);
					const interact = {
						...reach[this.currency].hasRandom,
						wager: atomicWager,
						deadline: game.deadline,
						informTimeout: function(who) {
							
						},
						informDraw: function() {

						},
						seeOutcome: function() {

						},
						getHands: async function() {
							game.status
							//update game status
							//notification
							//resolve on moves submit
						}
					};
					backend.Deployer(game.contract, {

					})

					console.log("backend Alice not npmcreated");
					game.wager = game.wagerreadable;
					console.log("POSTing game");
					var response = await axios({
						method: "POST",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-newGameFunction-3AXA73S81IZH",
						data: game});
					
					console.log("game added to db");
					console.log(response);
					console.log(response.data);
					self.opengames.push(game);
					console.log(self.opengames);
					self.setpopup("Game \"" + game.title + "\" deployed!");
					
				} catch (error) {
					this.setpopup("Deploy failed.");
					console.log("Deploy failed");
					console.log(error);
					
				}

			},

			ongameselect: function(game) {
				//console.log("on game select");
				//console.log(game);
				this.currentgame = game;
				game.gameid = "fafa"; //temp
				console.log(game);
				//TO DO, right HERE
				router.push({path: 'play', query: {game: game.gameid}});
			},
			/*getgame: async function(contract_address) {
				try {
					const response = await axios({
						method: "GET",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress=".concat(String(contract_address)),
					});

					return response.data[0];
				}
				catch(err) {
					console.log("could not get game");
					throw new Error(err);
				}

				axios({
					method: "GET",
					url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress=".concat(String(contract_address)),
				})
				.then(res => {
					console.log("got game");
					console.log(res.data);
					return res.data;
				})
				.catch(err => {
					console.log("couldn't get game");
					console.log(err);
					throw Error(err);
				});
			},*/
			ongameaccept: async function(gamecontractinfo) {
				console.log("on game accept - feb 4");
				console.log("given");
				var gamecontractinfo = JSON.parse(gamecontractinfo);
				console.log(gamecontractinfo);
				console.log(gamecontractinfo.address);

				
				try {
					var res = await axios({
							method: "GET",
							url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress=".concat(String(gamecontractinfo.address)),
						});//this.getgame(gamecontractinfo.address);

					var game = res.data[0];
					console.log("got game");
					console.log(game);
					//needs to check if game is a game (from search) or contract (from join by contract)
					
					router.push('home');
					this.setpopup("Connecting to contract provided...");

					console.log("game chosen");
					console.log(game);
					//console.log("game contract address");
					//console.log(game.ContractAddress);
					var gameOnChain = false;
					var ctcbob = this.acc.attach(backend, gamecontractinfo);
					console.log("ctcbob, stdlib");
					console.log(ctcbob);
					console.log(stdlib);
					var result = await backend.Bob(ctcbob,
						new Player(this, ctcbob, game)
						);
					console.log("created backend");
					console.log(result);
					// axios call to edit the status of the game to accepted

					gameOnChain = true;

					var update_game = await axios({
						method: "POST",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-acceptGameFunction-3AXA73S81IZH",
						data: {
							"walletAddress": this.walletaddr,
							"ContractAddress": gamecontractinfo.address
						}
					});
					console.log("updated game in db");
					console.log(update_game);

					self.opengames.push(game);
					console.log(self.opengames);
					self.setpopup("Game \"" + game.title + "\" accepted!");


 				} catch (error) {
					this.setpopup("Could not connect to contract.");
					console.log("Could not connect to contract.");
					console.log(error);
					gameOnChain = false;
				}

				if (gameOnChain) {
					//update game status
					//accepted, p1 submitted, p2 submitted
					//playable = true
					//set p2 in db
					axios({
						method: "POST",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-acceptGameFunction-3AXA73S81IZH",
						data: {
							"walletAddress": this.walletaddr,
							"ContractAddress": gamecontractinfo.address
						}
					}).then(function(response) {
						console.log(response);
						console.log(response.data);
						//TODO probably want this to change local game given status update
						self.opengames.push(game);
						console.log(self.opengames);
						self.setpopup("Game \"" + game.title + "\" accepted!");
					});
				}
			},
			ongamesearch: function(gameparams) {
				console.log(gameparams);
				gameparams.wager = stdlib.parseCurrency(gameparams.wager);
				//router.replace('home');
				this.setpopup('searching...');
				var search_param_str = Object.keys(gameparams).map(key => key + "=" + gameparams[key]).join("&");
				console.log(search_param_str);
				var self = this;
				axios({
						method: "GET",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-searchGamesFunction-ZR0MD8OA2QNR?".concat(search_param_str)
					}).then(function(response) {
						console.log("search results");
						console.log(response);
						console.log(response.data);
						self.foundgames = response.data;
						console.log(self.foundgames);
						router.push('search-results')
					}).catch((error) => {
						console.log(error);
					});
			},
			onmoveselect: function(game, move) {
				console.log("move selected");
				console.log(game);
				console.log(move);

				//how to find the game 
				if (game.playable) {
					game.onMove(move); //this should resolve the promise getHand and return to the backend
				}

				//games[game.ctcAddr].onMove(move);
				//submit the move to the game
				router.push('home');
				this.setpopup("Move submitted!");
			},
			ongamecomplete: function(game) {
				var outcome = game.outcome();
				//send complete message to the DB, if that's not already handled on the backend (open q)
				popupmsg = "Game " + game.title + " complete. (wager: " + game.wager + game.currency + ")<br>";
				if (outcome === "tie") {
					popupmsg += " Tie!";
				} else if (outcome.walletaddr === this.walletaddr) {
					 popupmsg += "You won!";
				} else {
					popupmsg += "You lost...";
				}
				this.setpopup(popupmsg);
			},
			runTests: function() {
				this.displaytext = "please click this example text";
				//how to do await within synchronous function as a Promise

				//test Player function, does not seem to be working
				
			}
		},
		watch: {
			//wallet: function(new, old) {

			//}
		}
	});

console.log("app");
console.log(app);
//app.$mount('#app');
/*
live game on ropsten chain
{
  "address": "0xB887a0D282486754E237813Dc269bb9301aD3A73",
  "creation_block": 9019484,
  "creator": "0x690bd024a6EE65719bd70be0F91D5099B6255951",
  "transactionHash": "0xad903dcf7decc569ce68d9181454517d1878908d10a5a671f21b82e44971d2bc"
}
*/

