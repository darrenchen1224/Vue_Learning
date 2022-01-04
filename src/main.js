import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io';
import SockerIO from 'socket.io-client';

const socketConnection = SockerIO('http://localhost:3000/');

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: socketConnection,
  }),
);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
