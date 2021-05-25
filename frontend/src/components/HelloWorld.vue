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
import { Options, Vue } from 'vue-class-component'
import { Kuzzle, WebSocket } from 'kuzzle-sdk'

const kuzzle: Kuzzle = new Kuzzle(new WebSocket('localhost'))

@Options({
  props: {
  }
})
export default class HelloWorld extends Vue {
  dataz = '';
  loading = false;

  async fetchDataz (): Promise<void> {
    try {
      console.log('fetching dataz...')
      const resp = await kuzzle.document.search(
        'tenant-shipment-jeodus',
        'assets',
        { sort: { '_kuzzle_info.createdAt': 'desc' } }, {
          size: 1
        })

      console.log(resp)
      this.dataz = resp.hits[0]._id
    } catch (error) {
      this.dataz = error.message
    }
  }

  async mounted (): Promise<void> {
    this.loading = true
    await kuzzle.connect()
    this.loading = false
  }
}
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
