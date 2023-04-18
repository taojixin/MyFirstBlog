import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import '@/assets/css/global.css'
// 导入笔记样式
import './assets/css/markdown.css'
// 引入elementui组件库及样式
import './plugins/element'
// 导入字体图标
import './assets/fonts/iconfont.css'
import 'axios'


Vue.config.productionTip = false

new Vue({
  router,
  base: '/blogadmin/',
  render: h => h(App)
}).$mount('#app')
