import Vue from 'vue'
import store from './store/index'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
