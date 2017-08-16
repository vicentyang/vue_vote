<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav-bar></nav-bar>
    <!-- <home></home> -->
    <!-- <div v-for="item in designData.data">
        <a v-bind:href="item.url">{{item.name}}</a>
    </div> -->
     <router-view></router-view>
     <foot></foot>
  </div>
</template>

<script>
import designData from '../static/data/design.json';
// import emoji from './components/Emoji';
import navBar from './components/NavBar';
import Home from './components/Home';
import Foot from './components/Foot';

console.log('data', designData);
export default {
  name: 'app',
  components: {
    // emoji,
    navBar,
    Home,
    Foot,
  },
  data () {
    return {
        designData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
