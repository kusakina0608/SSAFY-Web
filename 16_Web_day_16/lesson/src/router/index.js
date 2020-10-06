import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Main from '../views/Main.vue'
import Intro from '../views/Intro.vue'
import TestForEmit from '../views/TestForEmit.vue'
import VuexEx from '../views/VuexEx.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: "Test",
    component: Test
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/testforemit',
    name: 'TestForEmit',
    component: TestForEmit
  },
  {
    path: '/vuexex',
    name: 'VuexEx',
    component: VuexEx
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
