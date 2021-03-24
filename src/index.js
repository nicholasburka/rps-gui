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
//reach["ALGO"].setSignStrategy('mnemonic');
reach["ALGO"].setSignStrategy('AlgoSigner');
import * as loader from "@reach-sh/stdlib/loader.mjs";
import * as backend from "../build/rps.main.mjs"

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

/* Base templates not in separate files */

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
		<button id="go" class="row" v-on:click="$emit('dismissdisplaytext')">Dismiss</button>
		</div>
	`,
	methods: {
		onclick: function() {
			console.log("dismiss");
			console.log(this.$emit);
			this.$emit('dismissdisplaytext');
		}
	}
};
const notif = {
	props: ['message'],
	template: `
		<p>{{message}}</p>
	`
};
const popupC = {
	props: ['message', 'game-outcome', 'move1', 'move2'],
	template: `
		<div class="popup row">
			<div v-if="game-outcome" class="popup-animation column">
			</div>
			<p class="column">{{message}}</p>
		</div>
		`
};

/* UNUSED functions / arch ideas */

function getTime() {
	var d = new Date();
	var t = d.getTime();
	return t;
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
var examplePlayers = [];
examplePlayers.push(new aPlayer("0588xf01", "jherod"));
examplePlayers.push(new aPlayer("1125fxf01", "alli"));
examplePlayers.push(new aPlayer("015aa39v", "mo"));
var exampleGames = [];
const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');
exampleGames.push(new Game({title: "Gerry's Mulligan", wager: "1.1", currency: "ETH", delay: 20, timeCreated: moonLanding, p1: examplePlayers[0]}));
exampleGames.push(new Game({title: "Play me!", wager: ".001", currency: "ETH", delay: 21, timeCreated: moonLanding, p1: examplePlayers[0], p2: examplePlayers[2]}));
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
//function GameMetadata(form_params) {
//	this.title = ma.title;
//	this.wager = metadata.wager
//}
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
					reach[currency].setSignStrategy('mnemonic');
					//reach[currency].setSignStrategy('AlgoSigner');
					//const acc = await reach[currency].getDefaultAccount();
				} else if (currency === "ETH") {
					//const acc = await reach[currency].getDefaultAccount();
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
			try {
				const getGamesByAddressResponse = await axios({
						method: "GET",
						url: ("https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getAllGamesByWalletAddressFunction-16UGOIN5N63P?walletAddress=".concat(String(this.walletAddr)))
					});

				const activeGames = getGamesByAddressResponse.data;
				return context.commit('setActiveGames', activeGames);
			} catch (err) {
				console.log("error getting activeGames");
				console.log(err);
				return false;
			}
		},
		createGame: function(context, game) {

			//upload to db
			//add game to active games
			//interact object
				//get hands ()
				//commit make game playable
				//await resolve
			//deploy
		},
		joinGameByContract: function(context, contractinfo) {
			//upload to db
			//add game to active games
		},
		joinGame: function(context, game) {

		},
		submitHands: function(context, game) {
			context.commit('')
		}
	},
	getters: {
		acc: (state, currency) => {
			return state.acc[currency];
		}
	}
});*/


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
				walletErr: null,
				walletCurrency: "ETH",
				walletAddr: null,
				balance: null,
				balanceCommitted: null,
				prevopponents: [], //this would be a function
				opengames: [],//exampleGames,
				invites: [],
				foundgames: [],
				notifications: [],
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
			copyToClipboard: function(text) {
				var promise = navigator.clipboard.writeText(text);
				promise.then(() => {console.log("wrote to clipboard");}, () => {console.log("clipboard failed")});
			},
			loadReachLib: async function(currency) {
				this.log("getting reach stdlib for currency " + currency);
				this.stdlib = await loader.loadStdlib(currency);
				this.log("loaded stdlib");
				this.log(this.stdlib);
				this.currency = currency;
			},
			getAtomicCurrency: async function(val) {
				//assert(this.currency === "ETH" || this.currency === "ALGO");
				var valAtomic = undefined;
				if (this.currency === 'ETH') {
					valAtomic = await reach[this.currency].parseCurrency(val);
				} else if (this.currency === 'ALGO') {
					valAtomic = await reach[this.currency].parseCurrency(val);
				}
				return valAtomic;
			},
			getReadableCurrency: async function(val) {
				//assert(this.currency === "ETH" || this.currency === "ALGO");
				var valReadable = undefined;
				if (this.currency === 'ETH') {
					valReadable = await reach[this.currency].formatCurrency(val, 4);
				} else if (this.currency === 'ALGO') {
					valReadable = await reach[this.currency].formatCurrency(val, 6);
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
					this.walletErr = err;
				}
			},
			forceOpenGamesUpdate: function() {
				this.opengames.push({});
				this.opengames.pop();
			},
			switchGamePlayable: function(game) {
				game.playable = !(game.playable);
				this.forceOpenGamesUpdate();
			},
			/*getCurrencyPrice: async function() {
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
					await reach[this.currency].transfer(faucet, this.acc, reach[this.currency].parseCurrency(5));
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
			dismissdisplaytext: function() {
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
						self.log(response);
						self.log(response.data);
						self.log("_SELF_");
						self.log(self);
						//TODO this should be in dbquery not in frontend
						self.opengames = response.data.filter((game) => {
							self.log(game);
							self.log(game.status);
							self.log((game.status !== "complete"));
							return (game.status !== "complete");
																});
						self.log("open games from DB");
						self.log(self.opengames);

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
			opponent: function(game) {
				if (this.isP1(game)) {
					return game.p2;
				} else {
					return game.p1;
				}
			},
			finishGame: function(game) {
				//animate game ending
				//move game to game history
				//announce game is over, new balance, put in notification stack
				var ind = this.opengames.findIndex(x => x.ContractAddress === game.ContractAddress);
				this.log("finishing game, removing game from opengames, found game at index " + ind);
				if (ind > -1) {
				  this.opengames.splice(ind, 1);
				}
			},
			gameinfostr: function(game) {
				var str = game.wager + " " + game.currency + "\n";
				if (game.status === "Awaiting Opponent") {
					str += game.contractinfostr;
				} else {
					str += this.opponent(game);
					str += game.status;
				}
				return str;
			},
			displayNotification: function(notif) {
				this.displaytext = notif;
				this.notifications.push(notif);
			},
			ongamecreate: async function(game) {
				var self = this;
				router.push('home');
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
					
					const interact = {
						...reach[this.currency].hasRandom,
						wager: game.wager,
						deadline: game.deadline,
						informTimeout: function(who) {
							var text = "";
							if (who === 0 && isP1(game)) {
								text = "You timed out \n ";
							} else {
								text = "Other player timed out";
							}
							game.status = "Complete";
							self.switchGamePlayable(game);
							self.displaytext = text;
							self.displayNotification(text);
							self.finishGame(game);
						},
						informOpponent: function(opp) {
							game.p2 = opp;
							game.status = "Awaiting outcome";
							var outcome_notif = opp + " joined game!\n" + self.gameinfostr(game);
							self.displaytext = outcome_notif;
							self.displayNotification(outcome_notif);
						},
						informDraw: function() {
							game.status = "Draw";
							var outcome_notif = "Draw! New round \n" + self.gameinfostr(game);
							self.displaytext = outcome_notif;
							self.displayNotification(outcome_notif);
						},
						seeOutcome: function(outcome) {
							var outcome_notif = "";
							console.log(outcome);
							console.log(self.isP1(game));
							if (outcome === 0) {
								game.winner = game.p2;
							} else {
								game.winner = game.p1;
							}
							if (outcome === 0 && self.isP1(game)) {
								outcome_notif = "You lost...\n" + self.gameinfostr(game);
							} else {
								outcome_notif = "You won! \n" + self.gameinfostr(game);
							}
							self.displaytext = outcome_notif;
							self.displayNotification(outcome_notif);
						},
						getHands: async function() {
							console.log("GET HANDS");
							self.switchGamePlayable(game);
							console.log(game);
							console.log(self.opengames);
							self.displaytext = "Ready to play! \n" + self.gameinfostr(game); 
							//self.currentgame = game;
							//console.log(self);
							//console.log(self.currentgame);
							//router.push('play');
							//update game status
							//notification
							//resolve on moves submit
							function resolveHands() {
								return new Promise((resolve,reject) => {
									game.resolveHands = resolve;
								});
							};
							const hands = await resolveHands();
							self.log("received hands");
							self.log(hands);
							return hands;
						}
					};

					//console.log("backend Alice not npmcreated");
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
					self.displaytext = "Game deployed at " + game.contractinfo.address; //include contract info
					//self.setpopup("Game \"" + game.title + "\" deployed!");
					await backend.Deployer(game.contract, interact);			
				} catch (error) {
					this.setpopup("Contract error: " + error);
					console.log("Contract error");
					console.log(error);
				}

			},
			ongameselect: function(game) {
				//call ongameaccept with game's contractinfostr

				//console.log("on game select");
				//console.log(game);
				this.currentgame = game;
				game.gameid = "fafa"; //temp
				this.log("on game select");
				this.log(game);
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

				var self = this;

				
				try {
					this.setpopup("Connecting to contract...");

					var res = await axios({
							method: "GET",
							url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress=".concat(String(gamecontractinfo.address)),
						});//this.getgame(gamecontractinfo.address);
					console.log("received response from API");
					console.log(res);
					var game = res.data;
					console.log("got game");
					console.log(game);
					//needs to check if game is a game (from search) or contract (from join by contract)
					
					router.push('home');
					//game = {title: "A nice game"};

					game.prevHands = [];

					console.log("self");
					console.log(self);
					const interact = {
						...reach[self.currency].hasRandom,
						informTimeout: function(who) {
							var text = "";
							if (who === 0 && isP1(game)) {
								text = "You timed out \n ";
							} else {
								text = "Other player timed out";
							}
							game.status = "Complete";
							self.switchGamePlayable(game);
							self.displaytext = text;
							self.displayNotification(text);
							self.finishGame(game);
						},
						informDraw: function() {
							game.status = "Draw";
							var outcome_notif = "Draw! New round \n" + self.gameinfostr(game);
							self.displaytext = outcome_notif;
							self.displayNotification(outcome_notif);
						},
						acceptGame: async function(wager, deadline) {
							console.log("acceptGame");
							console.log(wager);
							game.wager = await self.getReadableCurrency(wager);
							game.deadline = deadline;

							var notif = "Joining game with wager " + game.wager + " " + self.currency + " and deadline of " + deadline + " blocks";
							self.displaytext = notif;
							self.displayNotification(notif);
						},
						seeOutcome: function(outcome) {
							var outcome_notif = "";
							if (outcome === 0) {
								game.winner = game.p2;
							} else {
								game.winner = game.p1;
							}
							if (outcome === 0 && self.isP1(game)) {
								outcome_notif = "You lost...\n" + self.gameinfostr(game);
							} else {
								outcome_notif = "You won! \n" + self.gameinfostr(game);
							}
							self.displaytext = outcome_notif;
							self.displayNotification(outcome_notif);
						},
						getHands: async function() {
							console.log("GET HANDS");
							self.switchGamePlayable(game);
							console.log(game);
							console.log(self.opengames);
							self.displaytext = "Ready to play! \n" + self.gameinfostr(game); 
							self.currentgame = game;
							console.log(self);
							console.log(self.currentgame);
							//router.push('play');
							//update game status
							//notification
							//resolve on moves submit
							function resolveHands() {
								return new Promise((resolve,reject) => {
									game.resolveHands = resolve;
								})
							};
							const hands = await resolveHands();
							self.log("received hands");
							self.log(hands);
							return hands;
						}
					};

					var gameOnChain = false;
					var ctcAttacher = this.acc.attach(backend, gamecontractinfo); //TODO await?
					console.log("ctcAttacher, stdlib");
					console.log(ctcAttacher);
					console.log(stdlib);

					var update_game = await axios({
						method: "POST",
						url: "https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-acceptGameFunction-4JOWB6APQ5WQ",
						data: {
							"walletAddress": this.walletaddr,
							"ContractAddress": gamecontractinfo.address
						}
					});
					console.log("updated game in db");
					console.log(update_game);

					self.opengames.push(game);
					console.log(self.opengames);
					self.setpopup("Joined game \"" + game.title + "\" ");

					var result = await backend.Attacher(ctcAttacher, interact);
					console.log("created backend");
					console.log(result);
					// axios call to edit the status of the game to accepted

					gameOnChain = true;

					


 				} catch (error) {
					//this.setpopup("Contract error.");
					console.log("Contract error.");
					console.log(error);
					gameOnChain = false;
				}
			},
			handStrToNum: function(hand) {
				switch (hand) {
					case "Rock": return 0;
					case "Paper": return 1;
					case "Scissors": return 2;
				}
			},
			submithands: function(args) {
				console.log(args);
				var game = args.game;
				var hands = args.hands;
				console.log("submitted hands");
				console.log(game);
				console.log(hands);
				const hands_str = hands;
				const hands_nums = hands.map(x => this.handStrToNum(x));
				console.log(hands_nums);
				this.switchGamePlayable(game);
				game.resolveHands(hands_nums);
				//game.prevHands = game.prevHands.concat(hands_str);
				this.displayNotification("Submitting hands " + hands_str);
				router.push("home");
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

