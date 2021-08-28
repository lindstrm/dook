<template>
  <div class="titlebar">
    dook
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Titlebar',
  setup() {
    const count = ref(0);

    return {count};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlebar {
  width: calc(100vw - 20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px 10px;
  background-color: #161618;
  color: #fbff07;
  -webkit-app-region: drag;
}
</style>
