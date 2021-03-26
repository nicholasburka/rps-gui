import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import detectProvider from '@metamask/detect-provider'
import * as axios from 'axios'
import * as stdlib from '@reach-sh/stdlib/ETH.mjs'
import * as ethstdlib from '@reach-sh/stdlib/ETH'
import * as algostdlib from '@reach-sh/stdlib/ALGO'
// reach["ALGO"].setSignStrategy('AlgoSigner');
import * as loader from '@reach-sh/stdlib/loader.mjs'
import * as backend from '../build/rps.main.mjs'

import App from './App.vue'
import Landing from './views/Landing.vue'
import Home from './views/Home.vue'
import CreateGame from './views/CreateGame.vue'
import SearchGames from './views/SearchGames.vue'
import SearchResults from './views/SearchResults.vue'
import AcceptGame from './views/AcceptGame.vue'
import JoinGameByContract from './views/JoinGameByContract.vue'
import PlayGame from './views/PlayGame.vue'
import BasePopup from './views/BasePopup.vue'
import GameOutcomePopup from './views/GameOutcomePopup.vue'
const reach = {
  ETH: ethstdlib,
  ALGO: algostdlib
}
//reach.ALGO.setSignStrategy('mnemonic')

console.log('landing')
console.log(Landing)

console.log('vue')
console.log(Vue)
console.log('vue-router')
console.log(VueRouter)
console.log(new VueRouter())
Vue.use(Vuex)

console.log(stdlib)
console.log(stdlib.connectAccount)

function removeClass (elementID, className) {
  document.getElementById(elementID).className.replace(/(?:^|\s)className(?!\S)/g, '')
};
var source
function dragstarted (e) {
  source = e.target
  e.dataTransfer.setData('text/html', e.target.outerHTML)
  console.log(e.dataTransfer.setData('text/html', e.target.outerHTML))
  e.dataTransfer.effectAllowed = 'move'
};
function draggingover (e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
};
function dropped (e) {
  e.preventDefault()
  e.stopPropagation()
  source.outerHTML = e.target.outerHTML
  console.log(e.target)
  console.log(e.dataTransfer.getData('text/html'))
  e.target.outerHTML = e.dataTransfer.getData('text/html')
};
function play (choice) {
  // send choice to backend
  var chosenim = document.getElementById(choice)
  // add chosen class to element to trigger css/animation
  // animate page away
};

/* Base templates not in separate files */

// shows basic info:
// players, wager, outcome if outcome
const gameinfo = {
  props: ['game'],
  template: `

	`
}
// outcome in terms of whether the user won
const gameresult = {
  props: ['game', 'outcome'],
  template: `
		<p></p>
	`
}
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
    onclick: function () {
      console.log('dismiss')
      console.log(this.$emit)
      this.$emit('dismissdisplaytext')
    }
  }
}
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

/* UNUSED functions / arch ideas */

function getTime () {
  var d = new Date()
  var t = d.getTime()
  return t
};
function timeLeft (game) {
  var blocktime_est = 100
  function isoToObj (s) {
		    var b = s.split(/[-TZ:]/i)

		    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]))
  }

  function timeToGo (s) {
		    // Utility to add leading zero
		    function z (n) {
		      return (n < 10 ? '0' : '') + n
		    }

		    // Convert string to date object
		    var d = isoToObj()
		    var diff = d - new Date()

		    // Allow for previous times
		    var sign = diff < 0 ? '-' : ''
		    diff = Math.abs(diff)

		    // Get time components
		    var hours = diff / 3.6e6 | 0
		    var mins = diff % 3.6e6 / 6e4 | 0
		    var secs = Math.round(diff % 6e4 / 1e3)

		    // Return formatted string
		    return sign + z(hours) + ':' + z(mins) + ':' + z(secs)
  }
  // need to check units
  // this will actually be a call to Reach or a blockchain API
  // return (this.delay + this.timeCreated) - (new Date()).getTime();
  var enddate = new Date(game.starttime)
  enddate.setSeconds(enddate.getSeconds() + blocktime_est * game.delay) // assuming that blocktime is in seconds
  return timeToGo(enddate.toISOString())
};
// Source: http://stackoverflow.com/questions/497790
var dates = {
  convert: function (d) {
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
      d.constructor === Date ? d
        : d.constructor === Array ? new Date(d[0], d[1], d[2])
          : d.constructor === Number ? new Date(d)
            : d.constructor === String ? new Date(d)
              : typeof d === 'object' ? new Date(d.year, d.month, d.date)
                : NaN
    )
  },
  compare: function (a, b) {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    // NOTE: The code inside isFinite does an assignment (=).
    return (
      isFinite(a = this.convert(a).valueOf()) &&
            isFinite(b = this.convert(b).valueOf())
        ? (a > b) - (a < b)
        : NaN
    )
  },
  inRange: function (d, start, end) {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    // NOTE: The code inside isFinite does an assignment (=).
    return (
      isFinite(d = this.convert(d).valueOf()) &&
            isFinite(start = this.convert(start).valueOf()) &&
            isFinite(end = this.convert(end).valueOf())
        ? start <= d && d <= end
        : NaN
    )
  }
}

function aPlayer (walletAddr, nickname) {
  this.walletAddr = walletAddr
  this.nickname = nickname
};
function Wallet (addr) {
  this.addr = addr
  this.balance = undefined
  this.committed = undefined
  this.currency = undefined
};
var examplePlayers = []
examplePlayers.push(new aPlayer('0588xf01', 'jherod'))
examplePlayers.push(new aPlayer('1125fxf01', 'alli'))
examplePlayers.push(new aPlayer('015aa39v', 'mo'))
var exampleGames = []
const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00')
exampleGames.push(new Game({ title: "Gerry's Mulligan", wager: '1.1', currency: 'ETH', delay: 20, timeCreated: moonLanding, p1: examplePlayers[0] }))
exampleGames.push(new Game({ title: 'Play me!', wager: '.001', currency: 'ETH', delay: 21, timeCreated: moonLanding, p1: examplePlayers[0], p2: examplePlayers[2] }))
// syntactic sugar for a funct that returns an object
class Player {
  // ...stdlib.hasRandom,
  // this.game = game;
  // this.ctc = ctc,
  constructor (vue, ctc, game) {
    this.logging = true
    console.log('creating a player')
    this.wager = game.wager
    this.deadline = game.delay
    this.vue = vue
    this.contract = ctc
    this.game = game
  }

  random () {
    return stdlib.hasRandom.random()
  }

  log (msg) { if (this.logging) { console.log(msg) } }
  async getHand () {
    this.log('calling getHand')
    // var hand = await askHand_(ctc);
    var hand = await new Promise(resolveHand => {
      this.game.playable = true
      this.game.status = 'playable'
      this.game.onMove = resolveHand
    })
    console.log('received hand')
    console.log(hand)
    this.game.status = 'waitingForResults' // move submitted
    return hand
    // update game status to
  }

  seeOutcome (winner) {
    this.log('see outcome')
    this.log('see outcome')
    this.log(winner)
    this.log('this in see outcome')
    this.log(this)
    // this.games[ctc].outcome = outcome;
    // this.games[ctc].oncomplete("complete", outcome);
    // send result to Lambda via Axios

    console.log('outcome!')
    console.log(outcome)
    this.game.status = 'completed'
    var isp1 = (this.vue.games[ctc].p1 === this.vue.walletAddr)
    if (winner === 0) {
      // draw
      // var outcome_text = "Draw!";
      this.vue.displaytext = 'Draw!<br/>'
    } else if ((outcome === 0 && isp1) || (outcome === 2 && (!isp1))) {
      // you win
      this.vue.displaytext = 'You won!'
    } else {
      // you lose
      this.vue.displaytext = 'You lost'
    }
  }

  informTimeout () {
    this.log('player: informtimeout')
    // this.ongamecomplete(ctc, "timeout")
    // send result to Lambda
    this.game.status = 'completed'
    this.vue.displaytext = 'Game timeout'
  }
};
class Deployer extends Player {
  constructor (props) {
    super(props)
  }
};
function Game (obj) {
  this.title = obj.title
  this.wager = obj.wager
  this.delay = obj.delay
  this.currency = obj.currency
  this.timeCreated = obj.timeCreated // would really get this from blockchain
  this.gameid = obj.gameid // would get this from blockchain?
  this.contractAddress = obj.contractAddress
  this.p1 = obj.p1
  this.p2 = obj.p2
  this.p1move = obj.p1move
  this.p2move = obj.p2move
  this.completed = false
  this.starttime = obj.starttime
  this.timeLeft = function () {
    var blocktime_est = 100
    function isoToObj (s) {
		    var b = s.split(/[-TZ:]/i)

		    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]))
    }

    function timeToGo (s) {
		    // Utility to add leading zero
		    function z (n) {
		      return (n < 10 ? '0' : '') + n
		    }

		    // Convert string to date object
		    var d = isoToObj()
		    var diff = d - new Date()

		    // Allow for previous times
		    var sign = diff < 0 ? '-' : ''
		    diff = Math.abs(diff)

		    // Get time components
		    var hours = diff / 3.6e6 | 0
		    var mins = diff % 3.6e6 / 6e4 | 0
		    var secs = Math.round(diff % 6e4 / 1e3)

		    // Return formatted string
		    return sign + z(hours) + ':' + z(mins) + ':' + z(secs)
    }
    // need to check units
    // this will actually be a call to Reach or a blockchain API
    // return (this.delay + this.timeCreated) - (new Date()).getTime();
    var enddate = new Date(this.starttime)
    enddate.setSeconds(enddate.getSeconds() + blocktime * this.delay) // assuming that blocktime is in seconds
    return timeToGo(enddate.toISOString())
  }
  this.status = function () {
    if (!this.p2) {
      return 'created'
    } else if (this.p2 && !(this.p1move && this.p2move)) {
      return 'accepted'
    } else if (!this.completed) {
      return 'submitted'
    } else {
      return 'completed'
    }
  }
  this.outcome = function () {
    if (!(this.p1move && this.p2move)) {
      return undefined
    } else if (this.p1move === this.p2move) {
      return 'tie'
    } else if (((this.p1move === 'rock') && (this.p2move === 'paper')) ||
					((this.p1move === 'paper') && (this.p2move === 'scissors')) ||
					((this.p1move === 'scissors') && (this.p2move === 'rock'))) {
      return this.p2
    } else {
      return this.p1
    }
  }
};
// Games class that has both game metadata and backend functions and interact
/* class Game {
	constructor(stdlib, gameparams) {

	}
} */

// Games store that reads out
// open games
// filter games with status of
// games history
// get games history from db
// filter games
// function GameMetadata(form_params) {
//	this.title = ma.title;
//	this.wager = metadata.wager
// }
/* function aGame(form_params) {
	...form_params

} */

/* const store = new Vuex.Store({
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
}); */

const routes = [
  { path: '/', component: Landing },
  { path: '/home', component: Home },
  { path: '/create', component: CreateGame },
  { path: '/search', component: SearchGames },
  { path: '/search-results', component: SearchResults },
  { path: '/play', component: PlayGame },
  { path: '/join', component: JoinGameByContract }
]

console.log('ROUTER')
const router = new VueRouter({
  routes
})

console.log('APP')
Vue.use(VueRouter)
console.log(Vue.use(VueRouter))
const app = new Vue({
  router: router,
  el: '#app',
  // store,
  components: {
    popupC: popupC,
    displaytextarea: displaytext,
    App
  },
  render: (h) => {
    return h(App)
  }
})

console.log('app')
console.log(app)
app.$mount('#app');
/*
live game on ropsten chain
{
  "address": "0xB887a0D282486754E237813Dc269bb9301aD3A73",
  "creation_block": 9019484,
  "creator": "0x690bd024a6EE65719bd70be0F91D5099B6255951",
  "transactionHash": "0xad903dcf7decc569ce68d9181454517d1878908d10a5a671f21b82e44971d2bc"
}
*/
