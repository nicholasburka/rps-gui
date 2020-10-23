import Vue from "vue";
import VueRouter from "vue-router";
import detectProvider from "@metamask/detect-provider";
import Axios from "axios";
import * as stdlib from "@reach-sh/stdlib/ETH.mjs";
import * as backend from "../build/index.main.mjs"

/*( async () => {
	console.log("creating acc");
	const accAlice = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
	console.log(accAlice);
})();*/
console.log("vue");
console.log(Vue);
console.log("vue-router");
console.log(VueRouter);
console.log(new VueRouter());

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

const landing = {
	props: ['walletaddr'],
	template: `
		<div id="landing" class="active-page column" v-on:click="function() {if (walletaddr || offlinedev) {$router.push('home')}}">
			<transition appear appear-active-class="rock" leave-active-class="slideOutLeft">
				<img src="assets/rock.png" alt="a rock" style="position: absolute; z-index: 5; max-height: 30vh; width: auto; left: 5vw;">
			</transition>
			<h1 class="row" style="background-color: #b79eff">Rock</h1>
			<transition appear appear-active-class="paper" leave-active-class="slideOutRight">
				<img src="assets/paper.jpg" alt="paper" style="position: absolute; z-index: 5; max-height: 30vh; width: auto; left: 70vw; top: 35vh;">
			</transition>
			<h1 class="row" style="background-color: #af751d">Paper</h1>
			<transition appear appear-active-class="scissors" leave-active-class="slideOutLeft">
				<img src="assets/scissors2.png" alt="scissors" style="position: absolute; z-index: 5; max-height: 30vh; max-width: 30vw; width: auto; left: 20vw; top: 68vh;">
			</transition>
			<h1 class="row" style="background-color: #67e483">Scissors!</h1>
		</div>
	`,
	methods: {
		offlinedev: function() {
			return document.URL.substr(0,4) === "file";
		}
	}
};
//need to add extending open games if there's more than displayable open games
const home = {
	props: ['walletaddr', 'balance', 'opengames', 'invites', 'currency', 'money-committed'],
	template: `
		<div id="home" class="column page-container">
			<transition appear appear-active-class="slideInRight">
			<div id="home-th">
				<ul id="open-games">
					<div id="open-games-header" class="row"><div class="column"><h3 class="row">Wallet addr: {{walletaddr}}</h3><h3 class="row">Balance uncommitted: {{balance}} {{currency}}</h3></div><h3 class="column">Open Games</h3><h3 class="column" style="flex-grow:1"> Committed: <!--{{ money-committed }} {{ currency }}--></h3></div>
					<li class="row activeitem" v-for="game in opengames" v-bind:style="{'background-color': randomcolor()}" v-on:click="() => {$emit('ongameselect', game)}">{{game.wager}} {{game.currency}} : status - {{game.status()}} : time left - {{game.timeLeft()}}</li>
				</ul>
				<ul id="invites">
					<li class="row activeitem" v-for="invite in invites" v-bind:style="{'background-color': randomcolor()}">
						Invited by {{ invite.p1 }} for {{ invite.wager }} ETH : {{ invite.delay }} blocks left
						<div class="buttons">
							<button onclick="confirmGame()" class="column">Accept</button>
							<button onclick="deny()" class="column">Reject</button>
						</div>
					</li>
				</ul>
				<h2 id="game-history" v-on:click="$router.push('history')">history</h2>
			</div>
			</transition>
			<hr style="width: 80%; text-align: center;">
			<transition appear appear-active-class="slideInLeft">
			<div id="home-bh">
				<h1 id="create-game" class="row active" v-on:click="$router.push('create')">create</h1>
				<h1 id="search" class="row active" v-on:click="$router.push('search')">search</h1>
				<h1 id="join" class="row active" v-on:click="$router.push('join')">join by contract</h1>
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
		getGame: function(gameid) {
			$router.push('gameplay', gameid);
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
		<p id="display" class="page-container column">
		{{displaytext}}
		</p>
		<button id="go" class="column" v-on:click="$emit('dismiss')">Dismiss</button>
	`
};
const confirmGame = {
	props: ['game', 'action', 'blocktime'],
	template: `
		<div id="confirm-game" class="page-container column">
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
	`

}
/*
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

*/
const createGame = {
	// "creating..." --> "Game Created!" & Home screen, w/ Added to list of Games
	props: ['prevopponents', 'walletaddr', 'balance', 'currency', 'private', 'invite'],
	components: {
		confirmGame: confirmGame
	},
	data: function() {
		return {
			'wager': null,
			'delay': null,
			'title': null,
			'addrentry': null,
			'addrprev': null,
			'err_msg': null,
			'confirm': false,
			'game': {}
		}
	},
	template: `
		<div id="create-game" class="column">
				<confirmGame v-if="this.confirm" class="confirmPopup row" :game="this.game" :action="'Create'" :blocktime="100" v-on:confirm="confirmm()" v-on:deny="deny()"></confirmGame>
				<form id="game-settings" class="column" v-on:submit.prevent>
					<p v-model="this.err_msg" class="row">{{ this.err_msg }}</p>
					<h3 class="row form-caption">Wager</h3>
					<div class="row">
					<input v-model="this.wager" class="form-input" type="number" name="wager" v-bind:max="balance" step="0.01" min="0" default="0"><p>ETH</p>
					</div>
					<h3 class="row form-caption">Delay</h3>
					<div class="row">
					<input v-model="this.delay" class="form-input" type="number" name="delay" step="5" min="0" default="0" placeholder="default"><p>blocks until timeout</p></div>
					<p class="row">(Est. time per block ~15s, see https://etherscan.io/chart/blocktime for current blocktime)</p>
					<h3 class="row form-caption">Title</h3>
					<input v-model="this.title" class="row form-input" type="text" name="title" placeholder="">
					<h3 class="row form-caption">Who</h3>
					<div class="row" id="priv-pub">
						<label class="column">
							<input type="radio" name="permissions"  v-on:click="private = false;">Public 
						</label>
						<label class="column">
							<input id="priv" type="radio" name="permissions" v-on:click="private = true; console.log(private);">Private
						</label>
					</div>
					<div v-if="private" class="column">
						<input v-model="this.addrentry" class="row form-input" type="text" name="who-addr-entry" placeholder="enter a wallet address">
						<select v-model="this.addrprev" class="row form-input" type="text" name="who" placeholder="">
							<option selected="selected">select from previous opponents</option>
							<option v-for="player in prevopponents" v-bind:value="player.walletAddr" >{{ player.nickname }} : {{ player.walletAddr }}</option>
						</select>
						<label class="row">
							<input type="radio" v-on:click="invite = true;">Invite link
						</label>
					</div>
					<div v-else>
					</div>
					<button id="go" class="row" v-on:click="onSubmit(this.wager, this.delay, this.title, this.addrentry, this.addrprev, this.walletaddr, $emit)">Go!</button>
				</form>
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
		onSubmit: function(wager, delay, title, addrentry, addrprev, walletaddr, emit) {
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
			else */if(wager && delay) {
				var p2;
				var permissions;
				if (addrprev) {
					p2 = {walletaddr: addrprev};
					permissions = "private";
				} else if(addrentry) {
					p2 = {walletaddr: addrentry};
					permissions = "private";
				} else {
					p2 = undefined;
					permissions = "public";
				}
				this.game = {
					title: title,
					wager: wager,
					delay: delay,
					p1: {walletaddr: walletaddr},
					p2: p2,
					status: "pending",
					permissions: permissions
				}
				this.confirm = true;
				console.log("this.game");
				console.log(this.game);
				console.log("confirmed");
				console.log(this.confirm);
				console.log(this.confirmGame);
				this.$emit('ongamecreate', this.game);
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
	props: ['prevopponents', 'sign'],
	template: `
		<div id="search-game" class="page-container">
		<form id="game-settings" class="column">
			<h3 class="row form-caption">Wager</h3>
			<input class="row form-input" type="number" name="wager" step="0.01" min="0" default="0" placeholder="ETH">
			<div class="row" style="flex-basis: 40%; width: 60%; align-self: center;">
				<div class="column"><input v-model="sign" v-bind:value="l" type="radio" name="wager-cond" value="lessthaneq"><label for="lessthaneq">&#8804;</label></div>
				<div class="column"><input v-model="sign" v-bind:value="l" type="radio" name="wager-cond" value="eq" class="column"><label for="eq">&#61;</label></div>
				<div class="column"><input v-model="sign" v-bind:value="l" type="radio" name="wager-cond" value="greaterthaneq" class="column"><label for="greaterthaneq">&#8805;</label></div>
			</div>
			<h3 class="row form-caption">Delay</h3>
			<input class="row form-input" type="number" name="delay" step="5" min="0" default="0" placeholder="default">
			<h3 class="row form-caption">Title</h3>
			<input class="row form-input" type="text" name="wager" placeholder="">
			<h3 class="row form-caption">Who</h3>
			<input class="row form-input" type="text" name="who-addr-entry" placeholder="enter a wallet address">
			<select class="row form-input" type="text" name="who" placeholder="">
				<option v-for="player in prevopponents" >{{ player.nickname }} : {{ player.walletAddr }}</option>
				<option selected="selected">select from previous opponents</option>
			</select>
			<button id="go" class="row" v-on:submit.prevent="onSubmit" v-on:click="$emit('ongamesearch',
					 {title: title, 
					 	wager: wager,
					 	sign: sign,
					 	delay: delay, 
					 	p1: {walletaddr: walletaddr}, 
					 	p2: undefined, 
					 	p2addrentry: addrentry, 
					 	p2prev: addrprev});">Go!</button>
		</form>
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
const gameSearchResults = {
	props: ["results"],
	components: {
		'searchResult': searchResult
	},
	template: `
		<div id="game-search-results" class="column" style="margin-top:2vh;">
			<searchResult v-for="game in results" v-bind:title="game.title" v-bind:wager="game.wager" v-bind:playerAddr="game.p1.walletAddr" v-on:click="$router.push('play', game)">
			</searchResult>
		</div>
	`
};
const joinGame = {
	props: ["contract"],
	template: `
		<div id="joinGame" class="column" v-on:submit.prevent>
			<h1 class="row">Join by Contract</h1>
			<h3 class="row">Please paste the contract info below.</h3>
			<textarea v-model="contract" id="" rows="10" cols="50">
			</textarea>
			<button id="submit" class="row" v-on:submit.prevent v-on:click="$emit('ongameaccept', contract);">Submit</button>
		</div>
	`
}
const gameplay = {
	props: ["currentgame", "rockHist", "paperHist", "scissorsHist"],
	template: `
	<div id="gameplay" class="">
		<div class="row" id="game-header">
			<h3 class="column">{{ currentgame.status() }}</h3>
			<h3 class="column" id="wager">{{currentgame.wager}} {{currentgame.currency}}</h3>
		</div>
		<div id="game" class="row" style="position: relative; height: 60vh;">
			<img id="rock" src="assets/rock.png" alt="rock" style="position:absolute; max-height: 25vh; width: auto; top: 15%; left: 10%" onclick="play('rock');" v-on:click="$emit('onmoveselect', currentgame, 'rock')">
			<p class="count-used" style="position:absolute; top: 20%; left: 15%">{{rockHist}}</p>
			<img id="paper" src="assets/paper.jpg" alt="paper" style="position:absolute; max-height: 25vh; width: auto; top: 29%; left: 70%" onclick="play('paper');" v-on:click="$emit('onmoveselect', currentgame, 'paper')">
			<p class="count-used" style="position:absolute; top: 27%; left: 75%">{{paperHist}}</p>
			<img id="scissors" src="assets/scissors2.png" alt="scissors" style="position:absolute; max-height: 25vh; width: auto; top: 65%; left: 25%;" onclick="play('scissors');" v-on:click="$emit('onmoveselect', currentgame, 'scissors')">
			<p class="count-used" style="position:absolute; top: 70%; left: 45%">{{scissorsHist}}</p>
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
	{path: '/', component: landing},
	{path: '/home', component: home},
	{path: '/create', component: createGame},
	{path: '/search', component: searchGame},
	{path: '/search-results', component: gameSearchResults},
	{path: '/play', component: gameplay},
	{path: '/join', component: joinGame}
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

function Player(walletAddr, nickname) {
	this.walletAddr = walletAddr;
	this.nickname = nickname;
};
function Wallet(addr) {
	this.addr = addr;
	this.balance = undefined;
	this.committed = undefined;
	this.currency = undefined;
};

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
	this.timeLeft = function() {
		//need to check units
		//this will actually be a call to Reach or a blockchain API
		return (this.delay + this.timeCreated) - (new Date()).getTime();
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

var examplePlayers = [];
examplePlayers.push(new Player("0588xf01", "jherod"));
examplePlayers.push(new Player("1125fxf01", "sunduz"));
examplePlayers.push(new Player("015aa39v", "mo"));

var exampleGames = [];
const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');
exampleGames.push(new Game({title: "Gerry's Mulligan", wager: "1.1", currency: "ETH", delay: 20, timeCreated: moonLanding, p1: examplePlayers[0]}));
exampleGames.push(new Game({title: "Play me!", wager: ".001", currency: "ETH", delay: 21, timeCreated: moonLanding, p1: examplePlayers[0], p2: examplePlayers[2]}));
/*exampleGames.push(new Game("A friendly game...", ".05", "ETH", 21, moonLanding, examplePlayers[0], examplePlayers[2]));
exampleGames.push(new Game("Noobs only", ".01", "ETH", 21, moonLanding, examplePlayers[0]));*/

console.log("APP");
Vue.use(VueRouter);
console.log(Vue.use(VueRouter));
const app = new Vue({
		router: router,
		el: "#app",
		components: {
			'landing': landing,
			'popupC': popupC
		},
		data: function() {
			return { walletLoading: true, walletFound: null, walletUnavailable: null, 
				acc: null,
				wallet: null,
				walletText: "Wallet service found: ",
				displayWalletText: true,
				walletAddr: null,
				balance: null,
				walletCurrency: "ETH",
				prevopponents: examplePlayers, //this would be a function
				opengames: exampleGames,
				invites: null,
				currentgame: null,
				popup: null,
				popuptime: 2500,
				popups: [],
				displaytext: null
			}
		},
		created: function() {
			console.log("created Vue app");
			console.log(this);
			this.getEthProvider();
			var self = this;
			var exampleActions = function() {
				var p1 = {walletaddr: this.walletaddr};
				var p2 = {walletaddr: "124024124"};
				var game = new Game({
					title: "Big Game",
					wager: .01,
					delay: 10,
					currency: "ETH",
					timeCreated: getTime(),
					p1: p1,
					p2: p2,
					p1move: 'rock'
				});
				console.log(this.walletaddr);
				console.log(this.popuptime);
				self.opengames.push(game);

				setTimeout(() => {

				});
			};
			//exampleActions();
			//console.log(this.$router.name);
			//console.log(this.$router.currentRoute.path);
		},
		computed: {
		},
		methods: {
			getEthProvider: async function() {
				this.walletLoading = true;
				const prov = await detectProvider();
				//console.log(prov);

				if (prov) {
					this.walletFound = true;
					this.walletLoading = false;
					console.log('found wallet: ' + prov);
					this.wallet = prov;
					console.log(this.wallet);
					return (prov);
				} else {
					this.walletUnavailable = true;
					this.walletLoading = false;
					return false;
				}
			},
			reqEthAccount: async function() {
				/*ethereum.request({ method: 'eth_requestAccounts'})
					.then((res) => {
						console.log(res);
						this.walletAddr = res[0];
						this.walletText = "Wallet address: " + this.walletAddr;
						console.log(this.walletText);
						console.log(this.walletAddr);


						this.updateBalance();

						setTimeout(() => {
							console.log(router.currentRoute.path);
							console.log(router);
							if (router.path === "/") {
								router.push("/home");
							}
							this.displayWalletText = false;
						}, 2000)

						//fetch account info
				})	.catch((err) => {
					this.walletText = "Connection denied, please connect a wallet.";
				})*/
				var r_connected;
				console.log(stdlib.getDefaultAccount);
				var self = this;
				/*var r_acc = await stdlib.getDefaultAccount().then(function(res) {
					console.log("account promise resolved");
					console.log(res);
					console.log(res.networkAccount);
					console.log(res.networkAccount.getAddress);
					console.log("trying to get address");
					res.networkAccount.getAddress().then(function(res) {
						console.log("got address");
						console.log(res);
						self.walletAddr = res;
						self.balance = 
					});
				});*/
				console.log("get account");
				var acc = await stdlib.getDefaultAccount();
				this.acc = acc;
				console.log("get address");
				this.walletAddr = await acc.networkAccount.getAddress();
				console.log(this.walletAddr);
				console.log("get balance");
				var atomicBalance = await stdlib.balanceOf(acc);
				this.balance = await stdlib.formatCurrency(atomicBalance, 4);
				console.log(this.balance);
			},
			updateBalance: function() {
				ethereum.request({method: 'eth_getBalance', params: [this.walletAddr, 'latest']})
					.then((res) => {
						this.balance = res[0];
						console.log("raw resp");
						console.log(res);
						console.log("balance: " + res[0]);
					})
					.catch((err) => {
						console.log("ERR getting balance, " + err);
					})
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
			ongameaccept: async function(contract) {
				console.log("on game accept");
				router.replace('home');
				this.setpopup("Connecting to contract provided...");
				try {
					var ctcbob = await this.acc.attach(backend, ctc);
					var result = await backend.Bob(stdlib, ctcbob,
						{...Player('Bob', ctcbob),
						acceptWager: (amt) => {
							return true;
						}}
						);
				} catch (error) {
					this.setpopup("Could not connect to contract.");
					console.log("Could not connect to contract.");
					console.log(error);
				}
			},
			ongamesearch: function(gameparams) {
				console.log(gameparams);
				router.replace('home');
			},
			onmoveselect: function(game, move) {
				console.log(game);
				console.log(move);

				games[game.ctcAddr].onMove(move);
				//submit the move to the game
				router.replace('home');
				this.setpopup("Move submitted!");
			},
			ongamecomplete: function(game) {
				var outcome = game.outcome();
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
			setpopup: function(msg) {
				
				this.popup = msg;
				setTimeout(() => {
					this.popup = null;
					console.log("settimeout finished");
				}, this.popuptime);
			},
			removePopup: function() {
				this.popup = null;
			},
			dismiss: function() {
				this.displaytext = null;
			},
			getGames: function() {
				//
			},
			askHand_: async(ctc) => {
				return new Promise((resolve) => {

					this.games[ctc].onMove = ((hand) => {
						resolve(hand);
					});

				});
			},
			//syntactic sugar for a funct that returns an object
			Player: (Who, ctc) => ({
				...stdlib.hasRandom,
				getHand: async() => {
					var hand = await askHand_(ctc);
					console.log("received hand");
					console.log(hand);
					return hand;
				},
				seeOutcome: (outcome) => {
					this.games[ctc].outcome = outcome;
					//this.games[ctc].oncomplete("complete", outcome);
					//send result to Lambda via Axios

					console.log("outcome!");
					console.log(outcome);
					var isp1 = (this.games[ctc].p1 === this.walletAddr);
					if (outcome === 1) {
					//draw
						//var outcome_text = "Draw!";
						this.displaytext = "Draw!<br/>";
					} else if ((outcome === 0 && isp1) || (outcome === 2 && (!isp1))) {
					//you win
						this.displaytext = "You won!";
					} else {
					//you lose
						this.displaytext = "You lost";
					}
				},
				informTimeout: () => {
					//this.ongamecomplete(ctc, "timeout")
					//send result to Lambda
					this.displaytext = "Game timeout";
				}
			}),
			ongamecreate: async function(game) {
				router.replace('home');
				this.setpopup("Processing...");
				console.log(game);
				var d = new Date();
				var t = d.toDateString() + d.toTimeString();
				var game = new Game({title: game.title, wager: game.wager, currency: this.walletCurrency, delay: game.delay, timeCreated: t, dateCreated: d, p1: game.p1});
				this.setpopup("Deploying...");
				var balanceBefore = this.balance;
				try {
					game.address = await this.acc.deploy(backend);
					this.setpopup("Deployed at " + game.address);
					this.displaytext = JSON.stringify(await game.address.getInfo(), null, 2);
					this.opengames.push(game);
					var game_res = await backend.Alice(stdlib, game.address, {
						...Player('Alice', game.address),
						wager: game.wager,
						delay: game.delay
					});
					//axios -> send game to DB
				} catch (error) {
					this.setpopup("Deploy failed.");
					console.log("Deploy failed");
					console.log(error);
				}
			}
		},
		watch: {
			//wallet: function(new, old) {

			//}
		}
	});

//app.$mount('#app');

