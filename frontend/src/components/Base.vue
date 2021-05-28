<template>
  <div class="hello">
    <p>
      This is a super important project using Kuzzle.
    </p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <button @click="fetchDataz">Fetch Dataz!</button>
      <br>
      <code>{{ dataz }}</code>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DocumentNotification, Kuzzle, WebSocket } from 'kuzzle-sdk'

const kuzzle = new Kuzzle(new WebSocket('d45fa3e7199c.ngrok.io', { port: 80 }))

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      dataz: '',
      loading: false
    }
  },
  methods: {
    async fetchDataz() {
      try {
        console.log('fetching dataz...')
        
        // CODE HERE
        
      } catch (error) {
        this.dataz = error.message
      }
    }
  },
  async mounted() {
    this.loading = true

    // Connect to Kuzzle
    
    this.loading = false
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
