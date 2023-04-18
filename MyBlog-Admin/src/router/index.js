import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

// 个人介绍
import ShowIntroduce from '@/views/introduce/ShowIntroduce'
import ModifyIntroduce from '@/views/introduce/ModifyIntroduce'

// 留言管理
import ManageMes from '@/views/message/ManageMes'

// 笔记管理
import ModifyNote from '@/views/note/ModifyNote'
import AddNote from '@/views/note/AddNote'

// Demo 管理
import AddDemo from '@/views/demo/AddDemo'
import ModifyDemo from '@/views/demo/ModifyDemo'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/showintroduce' },
      { path: '/managemes', component: ManageMes },

      { path: '/modifynote', component: ModifyNote },
      { path: '/addnote', component: AddNote },

      { path: '/showintroduce', component: ShowIntroduce },
      { path: '/modifyintr', component: ModifyIntroduce },
      
      { path: '/adddemo', component: AddDemo },
      { path: '/modifydemo', component: ModifyDemo },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
