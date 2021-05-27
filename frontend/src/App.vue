<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Map></Map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/Base.vue';
import Map from './components/Map.vue';

export default Vue.extend({
  name: 'App',
  components: {
    // HelloWorld
    Map
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
