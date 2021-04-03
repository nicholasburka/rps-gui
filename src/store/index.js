import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localhost = process.env.NODE_ENV !== 'production'

import * as axios from 'axios'

import * as contractBackend from '../../build/index.main.mjs'
import * as ethstdlib from '@reach-sh/stdlib/ETH'
import * as algostdlib from '@reach-sh/stdlib/ALGO'

const reach = {
  ETH: ethstdlib,
  ALGO: algostdlib
}
reach.ALGO.setSignStrategy('AlgoSigner')


const handStrToNum = function(hand) {
  switch (hand) {
    case "Rock": return 0;
    case "Paper": return 1;
    case "Scissors": return 2;
  }
}

export default new Vuex.Store({
  state: {
  	reach,
  	wallet: {
  		'currency': undefined,
  		'acc': undefined,
  		'address': undefined,
  		'balance': undefined
  	},
  	walletLoading: false,
  	walletErr: '',
  	//dictionary with contract address,
  	activeGames: [],
  	searchResults: [],
  	friends: [],
  	recentOpponents: [],
  	popup: '',
  	textDisplay: '',
  	displayGameOutcome: false,
  	gameOutcome: {},
  	currentGame: {}
  	//notifications: []
  },
  mutations: {
  	setWallet: function(state, {currency, acc, address, balance}) {
  		state.wallet.currency = currency
  		state.wallet.acc = acc
  		state.wallet.address = address
  		state.wallet.balance = balance
      state.walletErr = ''
  	},
  	setBalance: function(state, newBalance) {
  		state.wallet.balance = newBalance
  	},
  	setWalletLoading: function(state, bool) {
  		state.walletLoading = bool
  	},
  	setWalletErr: function(state, err) {
  		state.walletErr = err
  	},
  	setActiveGames: function(state, games) {
  		state.activeGames = games
  	},
  	addActiveGame: function(state, game) {
  		state.activeGames.push(game)
  	},
  	setPopup: function(state, text) {
  		state.popup = text
      setTimeout(() => state.popup = '', 2000)
  	},
  	setTextDisplay: function(state, text) {
  		state.textDisplay = text
  	},
  	setCurrentGame: function(state, game) {
  		state.currentGame = game
  	},
  	setGameJoined: function(state, {game, opp}) {
  		game.status = 'In Progress'
  		state.setPopup = opp + ' joined your game with wager ' + game.wager + ' ' + game.currency
  	},
  	setGamePlayable: function(state, game) {
  		game.resolveHands = () => {
  			return new Promise((resolve, reject) => {
  				game.submitHands = resolve
  			})
  		}
  		game.playable = true //this should work without mutating activeGames obj, but check
  		state.setPopup = 'Draw! Play another round'
  	},
  	setGameOutcome: function(state, {game, who, why}) {
  		state.displayGameOutcome = true
  		state.gameOutcome = {game,who,why}
  		const ind = state.activeGames.map((g) => {return g.ContractAddress}).indexOf(game.ContractAddress)
  		state.activeGames.splice(ind, 1)
  	},
  	dismissOutcome: function(state) {
  		state.displayGameOutcome = false
  	}
  	/*addGameNotification: function(state, msg, game) {
  		//eventually notifications could include invites
  		state.notifications.push({msg, game})
  	}*/
  },
  actions: {
  	apiRefreshGames: async function({state, commit, dispatch}) {
  		//get games call
  		//metadata
  		try {
  			const getGamesByAddressResponse = await axios({
  					method: "GET",
  					url: ("https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getAllGamesByWalletAddressFunction-16UGOIN5N63P?walletAddress=".concat(String(this.walletAddr)))
  				})

  			const activeGames = getGamesByAddressResponse.data
  			context.commit('setActiveGames', activeGames)
  		} catch (err) {
  			console.log("Error getting games from db")
  			console.log(err)
  			commit('setPopup', 'Could not connect to games database, reconnect your wallet to try again.')
  		}
  	},
  	apiNewGame: async function({state, commit, dispatch}, game) {
      console.log('store apiNewGame')
  		try {
			  const res = await axios({
              method: 'POST',
              url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-newGameFunction-3AXA73S81IZH',
              data: game
            })
        console.log('added game to db')
        console.log(res)
        return true
  		} catch (err) {
        console.log('db err')
  			throw new Error(err)
  			return false
  		}
  	},
  	apiJoinGame: async function({state, commit, dispatch}, game) {
  		try {
  			const res = await axios({
  				method: 'POST',
  				url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-acceptGameFunction-4JOWB6APQ5WQ',
  				data: {
  				  walletAddress: state.wallet.address,
  				  ContractAddress: game.ContractAddress
  				}
  			})
  			return true
  		} catch (err) {
  		    commit('setPopup', 'Error: could not connect to games database')
  		    throw new Error(err)
  		}
  	},
  	apiGetGame: async function({state, commit, dispatch}, gameContractInfo) {
  		try {
  			const res = await axios({
  				method: 'GET',
  				url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress='.concat(String(gameContractInfo.address))
  			})
  			return res.data
  		} catch (err) {
  			commit('setPopup', 'Could not retreive game from database')
  			throw new Error(err)
  		}
  	},
  	apiSearchGames: async function({state, commit, dispatch}, searchParams) {
  		try {
  			const searchParamString = Object.keys(searchParams).map(key => key + '=' + searchParams[key]).join('&')
  			const res = await axios({
           	  method: 'GET',
              url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-searchGamesFunction-ZR0MD8OA2QNR?'.concat(searchParamString)
            })
            return res.data
  		} catch (err) {
  			commit('setPopup', 'Could not connect to games database')
  			throw new Error(err)
  		}
  	},
  	apiCompleteGame: async function({state, commit, dispatch}, game, winner, why) {
  		try {
  			const res = await axios({
  				method: 'POST',
  				url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-completeGameFunction-K1ASGJEITHP1',
  				data: {
  				  game,
  				  winner,
  				  why,
  				  ContractAddress: game.ContractAddress
  				}
  			})
  		} catch (err) {
  			commit('setPopup', 'Could not connect to games database')
  			throw new Error(err)
  		}
  	},
  	connectWallet: async function({commit, state, dispatch}, currency) {
  		try {
  			commit('setWalletLoading', true)

        console.log("store connect wallet")
        console.log(reach)
        console.log(currency)
        console.log(reach[currency])

  			const acc = await reach[currency].getDefaultAccount()
        console.log(acc)
        console.log(reach[currency].getDefaultAccount)
        console.log(reach[currency].getDefaultAccount())
  			const address = await acc.networkAccount.getAddress()
        const balance = await reach[currency].balanceOf(acc)
        var balReadable = undefined;
        if (currency === 'ETH') {
          balReadable = await reach[currency].formatCurrency(balance, 4);
        } else if (currency === 'ALGO') {
          balReadable = await reach[currency].formatCurrency(balance, 6);
        }

  			commit('setWalletLoading', false)
  			commit('setWallet', {currency, acc, address, balReadable})

  			if (!localhost) {
  				dispatch('apiRefreshGames')
  			}

        dispatch('updateBalance')

  		} catch (err) {
  			console.log("error refreshing wallet")
  			console.log(err)

  			commit('setWalletLoading', false)
  			commit('setWalletErr', err)
  		}
  	},
  	updateBalance: async function({state, commit, dispatch}) {
  		try {
  			const newBalance = await state.reach[state.wallet.currency].balanceOf(state.wallet.acc)
        var balReadable = undefined;
        if (state.wallet.currency === 'ETH') {
          balReadable = await reach[state.wallet.currency].formatCurrency(newBalance, 4);
        } else if (state.wallet.currency === 'ALGO') {
          balReadable = await reach[state.wallet.currency].formatCurrency(newBalance, 6);
        }
  			commit('setBalance', balReadable)
  		} catch (err) {
  			commit('setPopup', 'Error requesting balance of current account')
  		}
  	},
  	fundFromFaucet: async function({state, commit, dispatch}) {
  		try {
  			const fundAmount = 2
  			commit('setPopup', 'Trying to transfer ' + fundAmount + ' ' + state.wallet.currency + ' from faucet')
  			await state.reach[state.wallet.currency].fundFromFaucet(state.wallet.acc, state.reach[state.wallet.currency].parseCurrency(fundAmount))
  			await dispatch('updateBalance')
        commit('setPopup', 'Fund successful')
  		} catch (err) {
  			commit('setPopup', 'Could not connect to faucet')
  		}
  	},
  	createGame: async function({state, commit, dispatch}, game) {
  		try {
  			//this.$router.push('home')
  			commit('setPopup', 'Deploying contract...')

  			game.contract = state.wallet.acc.deploy(contractBackend)
  			game.contractInfo = await game.contract.getInfo()

  			commit('setPopup', 'Contract deployed.')

  			game.wagerreadable = game.wager
  			game.wager = reach[state.wallet.currency].parseCurrency(game.wager)
        game.firstHandsReadable = game.firstHands
        game.firstHands = game.firstHands.map((hand) => handStrToNum(hand))
  			game.ContractAddress = game.contractInfo.address
  			game.status = "Awaiting Opponent"
  			game.playable = false

  			if (!localhost) {
  				try {
					  dispatch('apiNewGame', game)
  				} catch (err) {
  					commit('setPopup', 'Could not connect to games database')//, will retry in 30 seconds')
  					game.db = false //use this to sort & attempt reupload
  					//auto store in local storage using Vuex Persist https://www.npmjs.com/package/vuex-persist
  					return
  				}
  			}	

  			commit('addActiveGame', game)

  			const interact = {
  				...state.reach[state.wallet.currency].hasRandom,
  				wager: game.wager,
  				deadline: game.deadline,
  				firstHands: game.firstHands,
  				informTimeout: function (who) {
  					commit('setGameOutcome', {game, who, why: 'timeout'})
  					const winner = !who
  					dispatch('apiCompleteGame', {game, winner, why: 'timeout'})
  				},
  				informOpponent: function (opp) {
  					commit('setGameJoined', {game, opp})
  				},
  				getHands: async function() {
  					commit('setGamePlayable', game)
  					const hands = await game.resolveHands()
  					console.log("store/game/interact received hands in getHands " + hands)
  					return hands
  				},
  				seeOutcome: function(who) {
  					commit('setGameOutcome', {game, who, why: 'winner'})
  					dispatch('apiCompleteGame', {game, who, why: 'winner'})
  				}
  			}

  			try {
          commit('setPopup', 'Attaching to contract and paying wager')
  				await contractBackend.Deployer(game.contract, interact)
  			} catch (err) {
          console.log(err)
  				commit('setPopup', 'Error attaching to contract')
  			}
  		} catch (err) {
  			commit('setPopup', 'Error deploying contract')
  		}  		
  		
  	},
  	/*joinGameByContract: async function({state, commit, dispatch}, {contractInfo, }) {
  		try {
  			if (!localhost) {
  				const game = await dispatch('apiGetGame', contractInfo)
  			} else {
  				const game = {title: 'localgame', wager: 1, currency: this.currency, contractinfo: contractInfo}
  			}

  			try {
  				const contract = state.wallet.acc.attach(contractBackend)

  				if (!localhost) {await dispatch('apiJoinGame', game)}

  				const interact = {
  					...state.reach[state.wallet.currency].hasRandom,
  					firstHands: 
  				}

  				await contractBackend.Attacher(contract, interact)
  			} catch (err) {
  				commit('setPopup', 'Error attaching to contract')
  			}

  			//upload to db
  			//add game to active games
  		} catch (err) {
  			commit('setPopup', 'Error connecting to games database')
  		}
  	},*/
  	searchGames: async function({state, commit, dispatch}, params) {
  		try {
  			commit('setPopup', 'Searching...')
  			const searchResults = await dispatch('apiSearchGames', params)
  			commit('setSearchResults', searchResults)
  			return searchResults
  		} catch (err) {
  			commit('setPopup', 'Error connecting to games database')
  			throw new Error(err)
  		}
  	},
  	joinGame: async function({state, commit, dispatch}, game) {
  		try {
  			const contract = state.wallet.acc.attach(contractBackend)

  			if (!localhost) {await dispatch('apiJoinGame', game)}

  			const interact = {
  				...state.reach[state.wallet.currency].hasRandom,
  				firstHands: game.firstHands,
  				informTimeout: function (who) {
  					commit('setGameOutcome', {game, who, why: 'timeout'})
  				},
  				informOpponent: function (opp) {
  					commit('setGameJoined', {game, opp})
  				},
  				getHands: async function() {
  					commit('setGamePlayable', game)
  					const hands = await game.resolveHands()
  					return hands
  				},
  				seeOutcome: function(who) {
  					commit('setGameOutcome', {game, who, why: 'winner'})
  				}
  			}

  			await contractBackend.Attacher(contract, interact)
  		} catch (err) {
  			commit('setPopup', 'Error attaching to contract')
  		}
  	}
  },
  getters: {
  	balanceCommitted: state => {
  		//https://www.jacklmoore.com/notes/rounding-in-javascript/
  		function round(value, decimals) {
  		  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  		}
  		//return '';
  		//appends strings with low decimals, need to convert to wager readable
  		var sum = state.activeGames.reduce((acc, curr)  => {
  			return acc + Number(curr.wagerreadable);
  		}, 0)
  		console.log ("committed")
  		console.log (sum)
  		return round(sum, 7)
  		//return state.activeGames.reduce((acc, game) => {return acc + Number(game.wagerreadable)}, 0)
  	}
  }
})
