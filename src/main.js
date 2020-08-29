import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'

import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//使用fastclick,解决移动端300s延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyload,{
  loading:require('./assets/img/goods/lazy.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
