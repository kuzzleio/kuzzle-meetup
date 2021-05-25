<template>
  <div class="hello">
    <p>
      This is a super important project using Kuzzle.
    </p>
    <h1>{{ dataz }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Kuzzle, WebSocket } from 'kuzzle-sdk'

@Options({
  props: {
  }
})
export default class HelloWorld extends Vue {
  dataz?: string;

  mounted (): void {
    const kuzzle: Kuzzle = new Kuzzle(new WebSocket('localhost'))
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
