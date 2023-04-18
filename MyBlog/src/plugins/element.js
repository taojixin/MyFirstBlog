import Vue from 'vue'
// 引入样式，否则没有样式
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Main,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

// 全局注册
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)