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
    /*opacity: 80%;*/
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
  #gameOutcome {
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    border: solid;
    top: 20vh;
    left: 15vw;
    width: 70vw;
    font-size: 1vw;
    background-color: orange;
    z-index: 10;
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
    text-align: center;
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
    top: 5vh;
    left:0;
    width: 33vw;
  }
  #paper-cont {
    position:absolute;
    top: 5vh;
    left:33.3vw;
    width: 33vw;
  }
  #scissors-cont {
    position:absolute;
    top: 5vh;
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
  button {
    margin-bottom: 1vh;
  }
</style>
<template>
	<div id="app">
		<router-view class="view"/>

    <transition name="slideup">
      <TextDisplay v-if="textDisplay" id="textdisplay"></TextDisplay>
      <p v-if="popup" v-bind:popup="popup" v-on:click="removePopup" id="popup" class="row">{{ popup }}</p>
      <GameOutcomeDisplay v-if="displayGameOutcome" v-bind:gameoutcome="gameOutcome" id="gameOutcome"></GameOutcomeDisplay>
    </transition>
	</div>
</template>
<script>
  import store from './store/index.js' 
  import TextDisplay from "./views/TextDisplay.vue"
  import GameOutcomeDisplay from "./views/GameOutcomeDisplay.vue"
  import {mapState} from 'vuex'

  export default {
      store: store,
      components: {
        TextDisplay,
        GameOutcomeDisplay
      },
      computed: {
        ...mapState({
          popup: 'popup',
          textDisplay: 'textDisplay',
          displayGameOutcome: 'displayGameOutcome',
          gameOutcome: state => state.gameOutcome
        })
      },
      data: function () {
        return {
        }
      },
      created: function () {
      },
      methods: {
        removePopup: function() {
          this.$store.commit('setPopup', '')
        },
        dismissOutcome: function() {
          this.$store.commit('dismissOutcome')
        }
      }
  }
</script>