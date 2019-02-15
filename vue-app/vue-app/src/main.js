import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import { Swipe, SwipeItem } from 'vue-swipe'

Vue.component('swipe', Swipe)  
Vue.component('swipe-item', SwipeItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
