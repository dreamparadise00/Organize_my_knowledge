import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)   // 这里的render: x => x(App)是es6的写法
// 转换过来就是：  暂且可理解为是渲染App组件
}).$mount('#app')
//$mount()手动挂载
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
//假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
