import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '@/views/Landing/Landing.vue'
import Home from '@/views/Home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
