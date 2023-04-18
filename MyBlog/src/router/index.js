import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('@/components/Home')

// 侧边栏导航
const About = () => import('@/view/About')
const Introduce = () => import('@/view/Introduce')
const Resume = () => import('@/view/Resume')
const Demo = () => import('@/view/Demo')
const Study = () => import('@/view/Study')
const Comments = () => import('@/view/Comments')
const Contact = () => import('@/view/Contact')

// 笔记
const Notes = () => import('@/view/notes')

// 练习demo
const ShowTag = () => import('@/view/Demo/demo/ShowTag.vue')
const ShowLogin = () => import('@/view/Demo/demo/ShowLogin')
const ShowCard = () => import('@/view/Demo/demo/ShowCard')
const showBallJump = () => import('@/view/Demo/demo/ShowBallJump')
const ShowFluxayBtn = () => import('@/view/Demo/demo/ShowFluxayBtn')


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/about', },
  { // 内容页
    path: '/home', component: Home, children: [
      { path: '/', redirect: '/introduce' },
      { path: '/introduce', component: Introduce },
      { path: '/resume', component: Resume },
      { path: '/demo', component: Demo },
      { path: '/study', component: Study },
      { path: '/comments', component: Comments },
      { path: '/contact', component: Contact },
    ]
  },
  { path: '/about', component: About }, // 首页
  { path: '/notes', component: Notes}, // 笔记页 markdown
  // demo
  { path: '/showtag', component: ShowTag}, 
  { path: '/showlogin', component: ShowLogin},
  { path: '/showcard', component: ShowCard},
  { path: '/showballjump', component: showBallJump},
  { path: '/showfluxaybtn', component: ShowFluxayBtn},
]

const router = new VueRouter({
  routes
})

export default router
