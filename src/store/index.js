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
//reach.ALGO.setSignStrategy('mnemonic')


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
  		'balance': undefined,
      'networkName': undefined
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
      try {
        if (state.wallet.acc.networkAccount.provider._network.name && (state.wallet.acc.networkAccount.provider._network.name !== "unknown")) {
          state.wallet.networkName = state.wallet.acc.networkAccount.provider._network.name
        }
      } catch(err) {
        state.wallet.networkName = ''
      }
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
    setSearchResults: function(state, res) {
      state.searchResults = res
    },
  	setCurrentGame: function(state, game) {
  		state.currentGame = game
  	},
  	setGameJoined: function(state, {game, opp}) {
  		game.status = 'In Progress'
      game.p2 = opp
  		state.setTextDisplay = opp + ' joined your game with wager ' + game.wager + ' ' + game.currency + ', declassifying hands...'
  	},
  	setGamePlayable: function(state, game) {
  		game.resolveHands = () => {
  			return new Promise((resolve, reject) => {
  				game.submitHands = resolve
  			})
  		}
  		game.playable = true //this should work without mutating activeGames obj, but check
      state.activeGames = state.activeGames
      const ind = state.activeGames.map((g) => {return g.ContractAddress}).indexOf(game.ContractAddress)
      state.activeGames[ind].playable = true
      console.log('set game playable!')
  	},
    setGameUnplayable: function(state, game) {
      game.playable = false
    },
  	setGameOutcome: function(state, {game, who, why, p1Hands, p2Hands}) {
  		state.displayGameOutcome = true
  		state.gameOutcome = {game,who,why,p1Hands,p2Hands}
      console.log('set game outcome, game, who, why')
      console.log(game)
      console.log(who)
      console.log(why)

      console.log("game outcome")
      var outcome_msg = ''
      if (state.wallet.address === game.p1) {
        if (why === "winner") {
          if (who === 0) {
            outcome_msg = "You won " + game.wagerreadable + " " + game.currency
          } else {
            outcome_msg = "You lost " + game.wagerreadable + " " + game.currency
          }
        } else {
          if (who === 0) {
            outcome_msg = "You timed out - " + game.p2 + " wins " + game.wagerreadable + " " + game.currency
          } else {
            outcome_msg = game.p2 + " timed out - you win " + game.wagerreadable + " " + game.currency + "!"
          }
        }
      } else if (state.wallet.address === game.p2) {
        if (why === "winner") {
          if (who === 1) {
            outcome_msg = "You won " + game.wagerreadable + " " + game.currency
          } else {
            outcome_msg = "You lost " + game.wagerreadable + " " + game.currency
          }
        } else {
          if (who === 1) {
            outcome_msg = "You timed out - " + game.p1 + " wins " + game.wagerreadable + " " + game.currency
          } else {
            outcome_msg = game.p1 + " timed out - you win " + game.wagerreadable + " " + game.currency + "!"
          }
        }
      } else {
        throw new Error("trying to show game outcome for a game the player isn't in")
      }
      //state.textDisplay = outcome_msg

  		const ind = state.activeGames.map((g) => {return g.ContractAddress}).indexOf(game.ContractAddress)
  		state.activeGames.splice(ind, 1)

      console.log('ind of removed game')
      console.log(ind)
  	},
  	dismissOutcome: function(state) {
      console.log("dismissOutcome in store")
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
  					url: ("https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getAllGamesByWalletAddressFunction-16UGOIN5N63P?walletAddress=".concat(String(state.wallet.address)))
  				})
  			const activeGames = getGamesByAddressResponse.data
  			commit('setActiveGames', activeGames)
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
        console.log('api new game err')
        console.log(err)
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
        console.log('updated game in db to joined')
        console.log(res)
  			return true
  		} catch (err) {
        consoel.log('api join game err')
        console.log(err)
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
        console.log('got game from db')
        console.log(res)
  			return res.data
  		} catch (err) {
        console.log('api get game err')
        console.log(err)
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
        console.log('searched db for games')
        return res.data
  		} catch (err) {
        console.log('api searchgames err')
        console.log(err)
  			commit('setPopup', 'Could not connect to games database')
  			throw new Error(err)
  		}
  	},
  	apiCompleteGame: async function({state, commit, dispatch}, {game, winner, why, p1Hands, p2Hands}) {
      if (!p1Hands) {
        p1Hands = []
        p2Hands = []
      }
  		try {
  			const res = await axios({
  				method: 'POST',
  				url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-completeGameFunction-K1ASGJEITHP1',
  				data: {
  				  game,
  				  winner,
  				  why,
            p1Hands,
            p2Hands,
  				  ContractAddress: game.ContractAddress
  				}
  			})
        console.log('updated game to complete in db')
        console.log(res)
        return true
  		} catch (err) {
        console.log('api complete game err')
        console.log(err)
  			commit('setPopup', 'Could not connect to games database')
  			throw new Error(err)
  		}
  	},
    apiDeleteGame: async function({state, commit, dispatch}, game) {

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
    reattachDeployer: async function({state, commit, dispatch}, game) {
      try {
        const ctc = state.wallet.acc.attach(contractBackend, game.contractInfo)
        const interact = {
          ...state.reach[state.wallet.currency].hasRandom,
          wager: game.wager,
          deadline: game.deadline,
          firstHands: game.firstHands,
          informTimeout: function (who) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            commit('setGameOutcome', {game, who, why: 'timeout'})
            const winner = !who
            dispatch('apiCompleteGame', {game, winner, why: 'timeout'})
          },
          informOpponent: function (opp) {
            commit('setGameJoined', {game, opp})
          },
          getHands: async function() {
            commit('setGamePlayable', game)
            commit('setPopup', 'Draw! Play another round')
            const hands = await game.resolveHands()
            console.log("store/game/interact received hands in getHands " + hands)
            commit('setGameUnplayable', game)
            return hands
          },
          seeOutcome: function(who, p1Hands, p2Hands) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            who = (who === 2) ? 0 : 1
            p1Hands = p1Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            p2Hands = p2Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            commit('setGameOutcome', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('apiCompleteGame', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('updateBalance')
          }
        }
        game.attached = true
        await contractBackend.Deployer(ctc, interact)
      } catch (err) {
        game.attached = false
        console.log("error reattaching to contract")
        console.log(err)
        dispatch('apiDeleteGame', game)
      }
    },
    reattachAttacher: async function({state, commit, dispatch}, game) {
      try {
        const ctc = state.wallet.acc.attach(contractBackend, game.contractInfo)
        const interact = {
          ...state.reach[state.wallet.currency].hasRandom,
          firstHands: game.firstHands,
          informTimeout: function (who) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            commit('setGameOutcome', {game, who, why: 'timeout'})
            const winner = !who
            dispatch('apiCompleteGame', {game, winner, why: 'timeout'})
          },
          informOpponent: function (opp) {
            commit('setGameJoined', {game, opp})
          },
          getHands: async function() {
            commit('setGamePlayable', game)
            commit('setPopup', 'Draw! play another round')
            const hands = await game.resolveHands()
            console.log("store/game/interact received hands in getHands " + hands)
            commit('setGameUnplayable', game)
            return hands
          },
          seeOutcome: function(who, p1Hands, p2Hands) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            who = (who === 2) ? 0 : 1
            p1Hands = p1Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            p2Hands = p2Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            commit('setGameOutcome', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('apiCompleteGame', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('updateBalance')
          }
        }
        game.attached = true
        await contractBackend.Attacher(ctc, interact)
      } catch (err) {
        game.attached = false
        console.log("error reattaching to contract")
        console.log(err)
        dispatch('apiDeleteGame', game)
      }
    },
    reattachOne: async function({state,commit,dispatch}, game) {
      console.log('reattaching game')
      //game.contract.stdlib = state.reach[state.wallet.currency]
      console.log(game)
      try {
        if (game.p1 === state.wallet.address) {
          console.log('reattaching deployer')
          dispatch('reattachDeployer', game)
        } else if (game.p2 === state.wallet.address) {
          console.log('reattaching attacher')
          dispatch('reattachAttacher', game)
        } else {
          console.log("reattachOne: game does not have this wallet address")
          console.log(game)
        }
      } catch (err) {
        console.log("error reattaching to one")
        console.log(err)
      }
    },
    reattachAll: async function({state,commit,dispatch}) {
      try {
        state.activeGames.forEach((game) => {
          if (game.p1 === state.wallet.address) {
            dispatch('reattachDeployer', game)
          } else if (game.p2 === state.wallet.address) {
            dispatch('reattachAttacher', game)
          } else {
            console.log("reattachAll: game does not have this wallet address")
            console.log(game)
          }
        })
      } catch (err) {
        console.log('error reattaching all')
        console.log(err)

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
        //game.firstHandsReadable = game.firstHands
        //game.firstHands = game.firstHands.map((hand) => handStrToNum(hand))
  			game.ContractAddress = game.contractInfo.address
  			game.status = "Awaiting Opponent"
  			game.playable = false
        if (state.wallet.networkName) {
          game.network = state.wallet.networkName
        }

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
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
  					commit('setGameOutcome', {game, who, why: 'timeout'})
  					const winner = !who
  					dispatch('apiCompleteGame', {game, winner, why: 'timeout'})
  				},
  				informOpponent: function (opp) {
  					commit('setGameJoined', {game, opp})
  				},
  				getHands: async function() {
  					commit('setGamePlayable', game)
            commit('setPopup', 'Draw! Play another round')
  					const hands = await game.resolveHands()
  					console.log("store/game/interact received hands in getHands " + hands)
            commit('setGameUnplayable', game)
  					return hands
  				},
  				seeOutcome: function(who, p1Hands, p2Hands) {
            console.log('see outcome deployer, p1hands, p2hands')
            console.log(p1Hands)
            console.log(p2Hands)
            p1Hands = p1Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            p2Hands = p2Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            who = (who === 2) ? 0 : 1
  					commit('setGameOutcome', {game, who, why: 'winner', p1Hands, p2Hands})
  					dispatch('apiCompleteGame', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('updateBalance')
  				}
  			}

  			try {
          game.attached = true
          commit('setPopup', 'Attaching to contract and paying wager')
  				await contractBackend.Deployer(game.contract, interact)
  			} catch (err) {
          game.attached = false
          console.log('error attaching to contract')
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
        console.log('got search results')
        console.log(searchResults)
  			commit('setSearchResults', searchResults)
  			return searchResults
  		} catch (err) {
  			commit('setPopup', 'Error connecting to games database')
  			throw new Error(err)
  		}
  	},
  	joinGame: async function({state, commit, dispatch}, game) {
  		try {
  			const contract = state.wallet.acc.attach(contractBackend, game.contractInfo)

        //game.firstHandsReadable = game.firstHands
        //game.firstHands = game.firstHands.map((hand) => handStrToNum(hand))
        game.p2 = state.wallet.address

        commit('setPopup', 'Updating game in games database')
  			if (!localhost) {await dispatch('apiJoinGame', game)}

        commit('addActiveGame', game)
        commit('setPopup', 'Paying wager & submitting hands')

  			const interact = {
  				...state.reach[state.wallet.currency].hasRandom,
  				firstHands: game.firstHands,
  				informTimeout: function (who) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
  					commit('setGameOutcome', {game, who, why: 'timeout'})
            const winner = !who
            dispatch('apiCompleteGame', {game, winner, why: 'timeout'})
  				},
  				informOpponent: function (opp) {
  					commit('setGameJoined', {game, opp})
  				},
  				getHands: async function() {
  					commit('setGamePlayable', game)
            commit('setPopup', 'Draw! play another round')
  					const hands = await game.resolveHands()
            console.log("store/game/interact received hands in getHands " + hands)
            commit('setGameUnplayable', game)
  					return hands
  				},
  				seeOutcome: function(who, p1Hands, p2Hands) {
            who = state.reach[state.wallet.currency].bigNumberToNumber(who)
            who = (who === 2) ? 0 : 1
            p1Hands = p1Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
            p2Hands = p2Hands.map((hand) => state.reach[state.wallet.currency].bigNumberToNumber(hand))
  					commit('setGameOutcome', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('apiCompleteGame', {game, who, why: 'winner', p1Hands, p2Hands})
            dispatch('updateBalance')
  				}
  			}

        game.attached = true
  			await contractBackend.Attacher(contract, interact)
  		} catch (err) {
        game.attached = false
        console.log('error attaching to contract')
        console.log(err)
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
