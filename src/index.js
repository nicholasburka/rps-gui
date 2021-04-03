import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import * as axios from 'axios'

import * as store from './store/index.js' 

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
Vue.use(Vuex)
console.log(store)
window.addEventListener('load', function() {
  const app = new Vue({
    router: router,
    store: store,
    components: {
      popupC: popupC,
      displaytextarea: displaytext,
      App
    },
    render: (h) => {
      return h(App)
    },
    el: '#app',
  })

  console.log('app')
  console.log(app)
  app.$mount('#app');
})


