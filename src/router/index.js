import Vue from 'vue'
import VueRouter from 'vue-router'

import memberRoutes from './member/index'
import defaultSetRoutes from './defaultRouterSet'
import memberBoardRoutes from './board'
Vue.use(VueRouter)

const routes = [
  ...memberRoutes,
  ...defaultSetRoutes,
  ...memberBoardRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
