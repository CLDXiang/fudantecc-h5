import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../views/Loading.vue'
import Home from '../views/Home.vue'
import Department from '../views/Department.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/department/:dpname/:nickname',
    name: 'Department',
    component: Department,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
