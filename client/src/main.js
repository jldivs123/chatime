import Vue from 'vue';
import App from './App';
import router from './router';
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';

import "@/assets/style.css"

const socket = io('https://server.serveo.net');
Vue.use(new VueSocketIO({
  connection: socket
}
));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
