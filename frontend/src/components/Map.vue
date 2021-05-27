<template>
  <div class="hello">
    <l-map ref="map" >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        :options="tileOptions"
      />
    </l-map>
    <!-- <p>
      This is a super important project using Kuzzle.
    </p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <button @click="fetchDataz">Fetch Dataz!</button>
      <br>
      <code>{{ dataz }}</code>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DocumentNotification, Kuzzle, WebSocket } from 'kuzzle-sdk'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

const kuzzle: Kuzzle = new Kuzzle(new WebSocket('localhost'))

export default Vue.extend({
  name: 'HelloWorld',
  components: {
    LMap, LTileLayer
  },
  data() {
    return {
      dataz: '',
      loading: false,
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      tileOptions: {
        minZoom: 3.5
      }
    }
  },
  methods: {
    async fetchDataz() {
      try {
        console.log('fetching dataz...')
        await kuzzle.realtime.subscribe('iot', 'measures', {}, (n) => {
          const notif = <DocumentNotification>n
          this.dataz = `temperature: ${notif.result._source.temperature.degree}`
        })
      } catch (error) {
        this.dataz = error.message
      }
    }
  },
  async mounted() {
    this.loading = true
    await kuzzle.connect()
    this.loading = false
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}
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
