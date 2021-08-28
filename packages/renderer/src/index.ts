import {createApp} from 'vue';
import { createStore } from 'vuex';
import type { State } from './store';
import { store, key } from './store';
import App from '/@/App.vue';
import router from '/@/router';

const state = createStore<State>(store);

createApp(App)
  .use(router)
  .use(state, key)
  .mount('#app');
