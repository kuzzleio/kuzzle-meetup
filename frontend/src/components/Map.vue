<template>
  <div class="hello">
    <p v-if="loading">Loading...</p>
    <l-map v-else ref="map" >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        :options="tileOptions"
        />
      <l-marker 
        v-if="marker !== null" 
        :lat-lng="new L.latLng(marker.lat, marker.lng)"></l-marker>
    </l-map>
    <!-- <p>
      This is a super important project using Kuzzle.
    </p>
    
    <div >
      <button @click="fetchDataz">Fetch Dataz!</button>
      <br>
      <code>{{ dataz }}</code>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DocumentNotification, Kuzzle, WebSocket } from 'kuzzle-sdk'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet' //
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import { Icon } from 'leaflet';

type D = Icon.Default & {
  _getIconUrl?: string;
};

delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const kuzzle: Kuzzle = new Kuzzle(new WebSocket('localhost'))

export default Vue.extend({
  name: 'HelloWorld',
  components: {
    LMap, LTileLayer, LMarker
  },
  data() {
    return {
      marker: null,
      loading: false,
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      tileOptions: {
        minZoom: 3.5
      }
    }
  },
  computed: {
    L() {
      return L
    }
  },
  async mounted() {
    this.loading = true
    await kuzzle.connect()

    // CODE HERE
    
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
