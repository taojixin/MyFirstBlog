import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局变量

// element-ui组件库
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入笔记样式
import '@/assets/css/markdown.css'
// 导入axios
import axios from 'axios'
// axios.defaults.baseURL = 'http://120.79.177.24:8881'
// 将axios挂载到vue的原型对象上.这样vue的每一个组件都可以通过this直接访问到$http从而发起axios请求

import '@/mock'
Vue.prototype.$http = axios





Vue.config.productionTip = false

new Vue({
  router,
  store,
  base: '/blog/',
  render: h => h(App)
}).$mount('#app')
