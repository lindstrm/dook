<template>
  <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a
      href="https://github.com/cawa-93/vite-electron-builder"
      rel="noopener"
      target="_blank"
    >vite-electron-builder documentation</a>.
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >Vite Documentation</a> |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <hr>
  <p>
    Edit
    <code>renderer/components/Home.vue</code> to test hot module replacement.
  </p>
  <button @click="increment()">
    {{ num }}
  </button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { mapMutations, useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore(key);
    const num = ref(store.state.count);
    return { num };
  },
  methods: {
    ...mapMutations([
      'increment',
    ]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
