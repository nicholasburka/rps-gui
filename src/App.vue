<style>
  html {
    overflow: hidden;
  }
  body {
    text-align: center;
    margin: 0;
    font-family: Gill Sans Extrabold, sans-serif;
    /*color: #282c51;*/
  }
  #app {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .row-buff {
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    margin: 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  /*.display-val-box {
    display: flex;
    justify-content: center;
    border: solid;
    width: 80%;
    max-width: 600px;
  }*/
  #popup {
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    border: solid;
    top: 80vh;
    width: 50vw;
    left: 25vw;
    font-size: 20px;
    background-color: lightblue;
    opacity: 80%;
  }
  .confirmPopup {
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    border: solid;
    top: 3vh;
    height: 90vh;
    left: 15vw;
    width: 70vw;
    font-size: 20px;
    background-color: gray;
    /*opacity: 95%;*/
    z-index:5;
  }
  #textdisplay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    border: solid;
    top: 60vh;
    height: 30vh;
    left: 15vw;
    width: 70vw;
    font-size: 1vw;
    background-color: gray;
    /*opacity: 80%;*/
  }
  .flex-center {
    display: flex;
    justify-content: center;
    text-align: center;
    align-self: center;
    /*padding-top: 1%;*/
  }
  .form-detail-text {
    flex-basis: 60%;
    font-size: 10px;
    margin: 0;
  }
  #form-submit {
    display: flex;
    width: 40%;
    max-height: 150px;
    min-width: 100px;
    align-self: center;
    margin-top: 1%;
    font-size: 3vw;
    font-family: Gill Sans Extrabold, sans-serif;
  }
  .form-input {
    width: 80%;
    max-height: 50px;
    font-size: 18px;
    align-self: center;
  }
  .bottomBanner {
    position: absolute;
    z-index: 5;
    opacity: 80%;
    top: 93vh;
    height: 5vh;
    width: 80vw;
    left: 10vw;
    border: black;
    background: darkgrey;
    display: flex;
  }
  .slideOut-left {
    animation-name: slideOutLeft;
    animation-duration: .5s;
  }
  .slideOut-right {
    animation-name: slideOutRight;
    animation-duration: .5s;
  }
  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(130vw);
    }
  }
  @keyframes slideOutRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-130vw);
    }
  }
  .slide {
    animation: slideIn 1s;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-500px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .slideInRight {
    animation: slideInRight .3s ease-out;
  }
  @keyframes slideInRight {
    0% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .slideInLeft {
    animation: slideInLeft .3s ease-out;
  }
  @keyframes slideInLeft {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .slideup {
    animation: .5s slideupframes;
    transition: opacity .5s;
  }
  .slideup-leave-to {
    opacity: 0;
  }
  .slideup-enter-active {
    animation: .5s slideupframes;
  }
  @keyframes slideupframes {
    0% {
      transform: translateY(200px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .disappear {
    animation: disappearframes;
  }
  .activeitem:hover {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
  .active:hover {
    background-color: lightblue;
  }
  #rock-cont {
    position:absolute;
    top: 20vh;
    left:0;
    width: 33vw;
  }
  #paper-cont {
    position:absolute;
    top: 20vh;
    left:33.3vw;
    width: 33vw;
  }
  #scissors-cont {
    position:absolute;
    top: 20vh;
    left:66.6vw;
    width: 33vw;
  }
  #back-arrow {
    position: absolute;
    z-index: 5;
    height: 5vh;
    width: auto;
    top: 2vh;
    left: 2vh;
  }
  li {
    list-style-type: none;
  }
  .currency {
    color: teal;
  }
</style>
<template>
	<div>
		<router-view class="view" :walletFound="walletFound" :prevopponents="prevopponents" :walletaddr="walletaddr" :balance="balance" :currency="currency" :walletErr="walletErr" :price="price" :opengames="opengames" :foundgames="foundgames" :invites="invites"  :currentgame="currentgame" v-on:submithands="submithands" v-on:ongameselect="ongameselect" v-on:ongamecreate="ongamecreate" v-on:ongamesearch="ongamesearch" v-on:ongameaccept="ongameaccept" v-on:onmoveselect="onmoveselect" v-on:dismisstextdisplay="dismisstextdisplay" v-on:gamehistory="gamehistory" v-on:tryfaucet="tryfaucet" v-on:displaycontractinfo="displaycontractinfo" v-on:refreshwallet="refreshwallet"/>

    <transition name="slideup">
      <TextDisplay v-if="textdisplay" v-bind:text="textdisplay" id="textdisplay" v-on:dismisstextdisplay="dismisstextdisplay"></TextDisplay>
      <p v-if="popup" v-bind:popup="popup" v-on:click="removePopup" id="popup" class="row">{{ popup }}</p>
    </transition>
    <!--<router-view />-->
    <!--<transition name="slideup">
    <div v-if="popups.length" v-bind:popups="popups">
      <popupC v-for="popup in popups" v-bind:key="popups" message="popup.message"></popupC>
    </div>
    <p v-if="popup" v-bind:popup="popup" v-on:click="removePopup" id="popup" class="row">{{ popup }}</p>
    <textdisplayarea v-if="textdisplay" v-bind:text="textdisplay" id="textdisplay" v-on:dismisstextdisplay="dismisstextdisplay"></textdisplayarea>
    </transition>-->
	</div>
</template>
<script>
  import TextDisplay from "./views/TextDisplay.vue"


  import * as axios from 'axios'
  import * as backend from '../build/rps.main.mjs'
  //import * as stdlib from '@reach-sh/stdlib/ETH.mjs'
  import * as ethstdlib from '@reach-sh/stdlib/ETH'
  import * as algostdlib from '@reach-sh/stdlib/ALGO'
  const reach = {
    ETH: ethstdlib,
    ALGO: algostdlib
  };
  //reach.ALGO.setSignStrategy('AlgoSigner');
  reach.ALGO.setSignStrategy('mnemonic');
  export default {
      components: {
        TextDisplay
      },
      data: function () {
        return {
          walletLoading: true,
          walletFound: null,
          walletUnavailable: null,
          acc: null,
          wallet: null,
          walletErr: null,
          currency: 'ETH',
          walletaddr: null,
          balance: null,
          balanceCommitted: null,
          prevopponents: [], // this would be a function
          opengames: [], // exampleGames,
          invites: [],
          foundgames: [],
          notifications: [],
          currentgame: null,
          price: null,
          popup: null,
          popuptime: 3000,
          popups: [],
          textdisplay: '',
          TEST: false,
          DEV_LOG: true
        }
      },
      created: function () {
        if (this.TEST) {
          this.runTests()
          this.walletaddr = 12345931
        }

        console.log('created Vue app')
        console.log(this)
        // console.log(this.$this.$router.name);
        // console.log(this.$this.$router.currentRoute.path);
      },
      computed: {
      },
      methods: {
        log: function (message) {
          if (this.DEV_LOG) {
            console.log(message)
          }
        },
        copyToClipboard: function (text) {
          var promise = navigator.clipboard.writeText(text)
          promise.then(() => { console.log('wrote to clipboard') }, () => { console.log('clipboard failed') })
        },
        loadReachLib: async function (currency) {
          /*this.log('getting reach stdlib for currency ' + currency)
          this.stdlib = await loader.loadStdlib(currency)
          this.log('loaded stdlib')
          this.log(this.stdlib)
          this.currency = currency*/
        },
        getAtomicCurrency: async function (val) {
          // assert(this.currency === "ETH" || this.currency === "ALGO");
          var valAtomic = undefined
          if (this.currency === 'ETH') {
            valAtomic = await reach[this.currency].parseCurrency(val)
          } else if (this.currency === 'ALGO') {
            valAtomic = await reach[this.currency].parseCurrency(val)
          }
          return valAtomic
        },
        getReadableCurrency: async function (val) {
          // assert(this.currency === "ETH" || this.currency === "ALGO");
          var valReadable = undefined
          if (this.currency === 'ETH') {
            valReadable = await reach[this.currency].formatCurrency(val, 4)
          } else if (this.currency === 'ALGO') {
            valReadable = await reach[this.currency].formatCurrency(val, 6)
          }
          return valReadable
        },
        updateBalance: async function () {
          var atomicBalance = await reach[this.currency].balanceOf(this.acc)
          this.balance = await this.getReadableCurrency(atomicBalance)
          return this.balance
        },
        onLocalhost: function() {
          return window.location.hostname === "localhost"
        },
        refreshwallet: async function (currency) {
          console.log(axios);
          //this.log('refresh wallet')
          this.log(reach[currency]);
          try {
            this.currency = currency
            /* if (currency === "ALGO") {
                const acc = await reach[currency].newAccountFromAlgoSigner();
              } else if (currency === "ETH") {
                const acc = await reach[currency].getDefaultAccount();
              } */
            this.acc = await reach[currency].getDefaultAccount()
            console.log(this.acc)
            if (currency === 'ALGO') {
              this.walletaddr = this.acc.networkAccount.addr
              console.log(this.acc);
              console.log(this.walletaddr);
            } else if (currency === 'ETH') {
              this.walletaddr = await this.acc.networkAccount.getAddress()
              await this.updateBalance()
            }
            if (!this.onLocalhost()) {
              this.getGames()
            }
          } catch (err) {
            this.log('could not refresh wallet')
            this.log(err)
            this.walletErr = err
          }
        },
        forceOpenGamesUpdate: function () {
          this.opengames.push({})
          this.opengames.pop()
        },
        switchGamePlayable: function (game) {
          game.playable = !(game.playable)
          this.forceOpenGamesUpdate()
        },
        /* getCurrencyPrice: async function() {
            axios({
                method: 'get',
                withCredentials: true,
                url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest/items?slug=ethereum',
                headers: {'X-CMC_PRO_API_KEY': '22193dce-f532-4c64-98ea-bd408903ae8f'}
                })
                .then(response => {console.log(response); this.price = response.data['1']['quote']['usd'];})
                .catch(error => {console.log(error)});
          }, */
        tryfaucet: async function () {
          try {
            console.log('faucet')
            console.log(axios);
            /*const faucet = await reach[this.currency].getFaucet()
            console.log(faucet)
            await reach[this.currency].transfer(this.acc, faucet, reach[this.currency].parseCurrency(100))//reach[this.currency].parseCurrency(100)*/
            await reach[this.currency].fundFromFaucet(this.acc, reach[this.currency].parseCurrency(1)) //reach[this.currency].parseCurrency(1))
            console.log('transferred?')
            this.balanceAtomic = await reach[this.currency].balanceOf(this.acc)
            this.balance = await this.getReadableCurrency(this.balanceAtomic)
          } catch (e) {
            console.log(e)
          }
        },
        displaycontractinfo: function (game) {
          this.log('received a displaycontractinfo event')
          this.log(game)
          this.log(this)
          this.log(this.textdisplay)
          this.log(JSON.stringify(game.contractinfo, null, 2))
          this.textdisplay = JSON.stringify(game.contractinfo, null, 2)
          this.log(this.textdisplay)
        },
        setpopup: function (msg) {
          this.popup = msg
          setTimeout(() => {
            this.popup = null
            this.log('settimeout finished')
          }, this.popuptime)
        },
        removePopup: function () {
          this.popup = null
        },
        dismisstextdisplay: function () {
          console.log('dismiss in vue parent')
          this.textdisplay = null
        },
        getGames: function () {
          // need to edit to ensure correct form of request
          var self = this
          try {

            axios({
              method: 'GET',
              url: ('https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getAllGamesByWalletAddressFunction-16UGOIN5N63P?walletAddress='.concat(String(this.walletaddr)))
            }).then(function (response) {
              self.log(response)
              self.log(response.data)
              self.log('_SELF_')
              self.log(self)
              // TODO this should be in dbquery not in frontend
              self.opengames = response.data.filter((game) => {
                self.log(game)
                self.log(game.status)
                self.log((game.status !== 'complete'))
                return (game.status !== 'complete')
              })
              self.log('open games from DB')
              self.log(self.opengames)

              self.opengames = self.opengames.map((game) => {
                if (!game.wagerreadable) {
                  // console.log("no readable wager");
                  // console.log(game.wager.hex);
                  // console.log(stdlib.hexToBigNumber(game.wager.hex));
                  // console.log(stdlib.formatCurrency(stdlib.hexToBigNumber(game.wager.hex), 4));
                  // console.log(stdlib.standardUnit);
                  game.wagerreadable = reach[this.currency].formatCurrency(reach[this.currency].hexToBigNumber(game.wager.hex), 4)
                }
                return game
              })
            }).catch((error) => {
              console.log(error)
            })
          } catch (err) {
            console.log(err)
          }
        },
        gamehistory: function () {
          this.log('game history')
          // show all games that have status "completed"
          // show results (need to make vue component)
          // route to game history vue component
        },
        askHand_: async (ctc) => {
          return new Promise((resolve) => {
            this.games[ctc].onMove = (hand) => {
              resolve(hand)
            }
          })
        },
        isP1: function (game) {
          return (game.p1 === this.walletaddr)
        },
        opponent: function (game) {
          if (this.isP1(game)) {
            return game.p2
          } else {
            return game.p1
          }
        },
        finishGame: function (game) {
          // animate game ending
          // move game to game history
          // announce game is over, new balance, put in notification stack
          var ind = this.opengames.findIndex(x => x.ContractAddress === game.ContractAddress)
          this.log('finishing game, removing game from opengames, found game at index ' + ind)
          if (ind > -1) {
              this.opengames.splice(ind, 1)
          }
        },
        gameinfostr: function (game) {
          var str = game.wager + ' ' + game.currency + '\n'
          if (game.status === 'Awaiting Opponent') {
            str += game.contractinfostr
          } else {
            str += this.opponent(game)
            str += game.status
          }
          return str
        },
        displayNotification: function (notif) {
          this.textdisplay = notif
          this.notifications.push(notif)
        },
        ongamecreate: async function (game) {
          var self = this
          this.$router.push('home')
          console.log(game)
          var d = new Date() // note that dates are used to provide time *estimates* of how much time is left before expiry
          d = d.toISOString() // time format, does this convert back functionally
          // var t = d.toDateString() + d.toTimeString();
          // var the_game = new Game({title: game.title, wager: game.wager, currency: this.walletCurrency, delay: game.delay, starttime: d, p1: game.p1, status: "open"});
          game.starttime = d
          this.setpopup('Deploying...')
          var balanceBefore = this.balance
          var self = this
          console.log('deploying')

          game.wagerreadable = game.wager
          game.wager = reach[this.currency].parseCurrency(game.wager) // convert ETH to WEI, js num => BigNumber
          var gameOnChain = true
          try {
            // deploy game and update game address and status
            game.contract = this.acc.deploy(backend)

            // logging
            console.log('contract')
            console.log(game.contract)
            console.log('awaiting contract info')
            game.contractinfo = await game.contract.getInfo()
            console.log(game.contractinfo)
            game.contractinfostr = JSON.stringify(game.contractinfo, null, 2)
            self.textdisplay = game.contractinfostr
            console.log(this.textdisplay)
            /* try {
                  await navigator.clipboard.writeText(game.contractinfostr);
                  self.textdisplay = self.textdisplay + "&#13;&#10;copied to clipboard";
                  //self.setpopup("copied contract info to clipboard");
              } catch (error) {
                  console.error("copy failed", error);
              } */

            game.ContractAddress = game.contractinfo.address
            game.status = 'Awaiting Opponent'
            game.playable = false
            // update balance
            self.balance = await this.updateBalance()// this.acc.getBalance();

            const interact = {
              ...reach[this.currency].hasRandom,
              wager: game.wager,
              deadline: game.deadline,
              informTimeout: function (who) {
                var text = ''
                if (who === 0 && isP1(game)) {
                  text = 'You timed out \n '
                } else {
                  text = 'Other player timed out'
                }
                game.status = 'Complete'
                self.switchGamePlayable(game)
                self.textdisplay = text
                self.displayNotification(text)
                self.finishGame(game)
              },
              informOpponent: function (opp) {
                game.p2 = opp
                game.status = 'Awaiting outcome'
                var outcome_notif = opp + ' joined game!\n' + self.gameinfostr(game)
                self.textdisplay = outcome_notif
                self.displayNotification(outcome_notif)
              },
              informDraw: function () {
                game.status = 'Draw'
                var outcome_notif = 'Draw! New round \n' + self.gameinfostr(game)
                self.textdisplay = outcome_notif
                self.displayNotification(outcome_notif)
              },
              seeOutcome: function (outcome) {
                var outcome_notif = ''
                console.log(outcome)
                console.log(self.isP1(game))
                if (outcome === 0) {
                  game.winner = game.p2
                } else {
                  game.winner = game.p1
                }
                if (outcome === 0 && self.isP1(game)) {
                  outcome_notif = 'You lost...\n' + self.gameinfostr(game)
                } else {
                  outcome_notif = 'You won! \n' + self.gameinfostr(game)
                }
                self.textdisplay = outcome_notif
                self.displayNotification(outcome_notif)
              },
              getHands: async function () {
                console.log('GET HANDS')
                self.switchGamePlayable(game)
                console.log(game)
                console.log(self.opengames)
                self.textdisplay = 'Ready to play! \n' + self.gameinfostr(game)
                // self.currentgame = game;
                // console.log(self);
                // console.log(self.currentgame);
                // this.$router.push('play');
                // update game status
                // notification
                // resolve on moves submit
                function resolveHands () {
                  return new Promise((resolve, reject) => {
                    game.resolveHands = resolve
                  })
                };
                const hands = await resolveHands()
                self.log('received hands')
                self.log(hands)
                return hands
              }
            }

            // console.log("backend Alice not npmcreated");
            game.wager = game.wagerreadable
            console.log('POSTing game')
            if (!self.onLocalhost()) {
              var response = await axios({
                method: 'POST',
                url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-newGameFunction-3AXA73S81IZH',
                data: game
              })
            } else {
              var response = {};
              response.data = "";
            }

            console.log('game added to db')
            console.log(response)
            console.log(response.data)
            self.opengames.push(game)
            console.log(self.opengames)
            self.textdisplay = 'Game deployed at ' + game.contractinfo.address // include contract info
            // self.setpopup("Game \"" + game.title + "\" deployed!");
            await backend.Deployer(game.contract, interact)
          } catch (error) {
            this.setpopup('Contract error: ' + error)
            console.log('Contract error')
            console.log(error)
          }
        },
        ongameselect: function (game) {
          // call ongameaccept with game's contractinfostr

          // console.log("on game select");
          // console.log(game);
          this.currentgame = game
          game.gameid = 'fafa' // temp
          this.log('on game select')
          this.log(game)
          // TO DO, right HERE
          this.$router.push({ path: 'play', query: { game: game.gameid } })
        },
        /* getgame: async function(contract_address) {
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
          }, */
        ongameaccept: async function (gamecontractinfo) {
          console.log('on game accept - feb 4')
          console.log('given')
          var gamecontractinfo = JSON.parse(gamecontractinfo)
          console.log(gamecontractinfo)
          console.log(gamecontractinfo.address)

          var self = this

          try {
            this.setpopup('Connecting to contract...')

            if (this.onLocalhost()) {
              var game = {title: 'localgame', wager: 1, currency: this.currency, contractinfo: gamecontractinfo}
            } else {
              var res = await axios({
                method: 'GET',
                url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-getGameFunction-5SZ0BCNK8Z5W?contractAddress='.concat(String(gamecontractinfo.address))
              })// this.getgame(gamecontractinfo.address);
              console.log('received response from API')
              console.log(res)
              var game = res.data
              console.log('got game')
              console.log(game)
            }
            // needs to check if game is a game (from search) or contract (from join by contract)

            this.$router.push('home')
            // game = {title: "A nice game"};

            game.prevHands = []

            console.log('self')
            console.log(self)
            const interact = {
              ...reach[self.currency].hasRandom,
              informTimeout: function (who) {
                var text = ''
                if (who === 0 && isP1(game)) {
                  text = 'You timed out \n '
                } else {
                  text = 'Other player timed out'
                }
                game.status = 'Complete'
                self.switchGamePlayable(game)
                self.textdisplay = text
                self.displayNotification(text)
                self.finishGame(game)
              },
              informDraw: function () {
                game.status = 'Draw'
                var outcome_notif = 'Draw! New round \n' + self.gameinfostr(game)
                self.textdisplay = outcome_notif
                self.displayNotification(outcome_notif)
              },
              acceptGame: async function (wager, deadline) {
                console.log('acceptGame')
                console.log(wager)
                game.wager = await self.getReadableCurrency(wager)
                game.deadline = deadline

                var notif = 'Joining game with wager ' + game.wager + ' ' + self.currency + ' and deadline of ' + deadline + ' blocks'
                self.textdisplay = notif
                self.displayNotification(notif)
              },
              seeOutcome: function (outcome) {
                var outcome_notif = ''
                if (outcome === 0) {
                  game.winner = game.p2
                } else {
                  game.winner = game.p1
                }
                if (outcome === 0 && self.isP1(game)) {
                  outcome_notif = 'You lost...\n' + self.gameinfostr(game)
                } else {
                  outcome_notif = 'You won! \n' + self.gameinfostr(game)
                }
                self.textdisplay = outcome_notif
                self.displayNotification(outcome_notif)
              },
              getHands: async function () {
                console.log('GET HANDS')
                self.switchGamePlayable(game)
                console.log(game)
                console.log(self.opengames)
                self.textdisplay = 'Ready to play! \n' + self.gameinfostr(game)
                self.currentgame = game
                console.log(self)
                console.log(self.currentgame)
                // this.$router.push('play');
                // update game status
                // notification
                // resolve on moves submit
                function resolveHands () {
                  return new Promise((resolve, reject) => {
                    game.resolveHands = resolve
                  })
                };
                const hands = await resolveHands()
                self.log('received hands')
                self.log(hands)
                return hands
              }
            }

            var gameOnChain = false
            var ctcAttacher = this.acc.attach(backend, gamecontractinfo) // TODO await?
            console.log('ctcAttacher, stdlib')
            console.log(ctcAttacher)
            //console.log(stdlib)

            if (this.onLocalhost()) {

            } else {
              var update_game = await axios({
                method: 'POST',
                url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-acceptGameFunction-4JOWB6APQ5WQ',
                data: {
                  walletAddress: this.walletaddr,
                  ContractAddress: gamecontractinfo.address
                }
              })
              console.log('updated game in db')
              console.log(update_game)
            }

            self.opengames.push(game)
            console.log(self.opengames)
            self.setpopup('Joined game "' + game.title + '" ')

            var result = await backend.Attacher(ctcAttacher, interact)
            console.log('created backend')
            console.log(result)
            // axios call to edit the status of the game to accepted

            gameOnChain = true
            } catch (error) {
            // this.setpopup("Contract error.");
            console.log('Contract error.')
            console.log(error)
            gameOnChain = false
          }
        },
        handStrToNum: function (hand) {
          switch (hand) {
            case 'Rock': return 0
            case 'Paper': return 1
            case 'Scissors': return 2
          }
        },
        submithands: function (args) {
          console.log(args)
          var game = args.game
          var hands = args.hands
          console.log('submitted hands')
          console.log(game)
          console.log(hands)
          const hands_str = hands
          const hands_nums = hands.map(x => this.handStrToNum(x))
          console.log(hands_nums)
          this.switchGamePlayable(game)
          game.resolveHands(hands_nums)
          // game.prevHands = game.prevHands.concat(hands_str);
          this.displayNotification('Submitting hands ' + hands_str)
          this.$router.push('home')
        },
        ongamesearch: function (gameparams) {
          console.log(gameparams)
          gameparams.wager = reach[this.currency].parseCurrency(gameparams.wager)
          // this.$router.replace('home');
          this.setpopup('searching...')
          var search_param_str = Object.keys(gameparams).map(key => key + '=' + gameparams[key]).join('&')
          console.log(search_param_str)
          var self = this
          axios({
            method: 'GET',
            url: 'https://3gnz0gxbcc.execute-api.us-east-2.amazonaws.com/reach-rps-searchGamesFunction-ZR0MD8OA2QNR?'.concat(search_param_str)
          }).then(function (response) {
            console.log('search results')
            console.log(response)
            console.log(response.data)
            self.foundgames = response.data
            console.log(self.foundgames)
            this.$router.push('search-results')
          }).catch((error) => {
            console.log(error)
          })
        },
        onmoveselect: function (game, move) {
          console.log('move selected')
          console.log(game)
          console.log(move)

          // how to find the game
          if (game.playable) {
            game.onMove(move) // this should resolve the promise getHand and return to the backend
          }

          // games[game.ctcAddr].onMove(move);
          // submit the move to the game
          this.$router.push('home')
          this.setpopup('Move submitted!')
        },
        ongamecomplete: function (game) {
          var outcome = game.outcome()
          // send complete message to the DB, if that's not already handled on the backend (open q)
          popupmsg = 'Game ' + game.title + ' complete. (wager: ' + game.wager + game.currency + ')<br>'
          if (outcome === 'tie') {
            popupmsg += ' Tie!'
          } else if (outcome.walletaddr === this.walletaddr) {
               popupmsg += 'You won!'
          } else {
            popupmsg += 'You lost...'
          }
          this.setpopup(popupmsg)
        },
        runTests: function () {
          this.textdisplay = 'please click this example text'
          // how to do await within synchronous function as a Promise

          // test Player function, does not seem to be working
        }
      },
      watch: {
        // wallet: function(new, old) {

        // }
      }
  }
</script>