<template>
  <titlebar-vue />
  <app-navigation />
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TitlebarVue from './components/Titlebar.vue';
import AppNavigation from '/@/components/AppNavigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
    TitlebarVue,
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
html, body {
  margin: 0;
  padding: 0;
  background-color: #222222;
  box-sizing: border-box;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dee1e4;
}
</style>
