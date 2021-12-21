import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Chart from "@/views/Chart.vue";
import CatPage from "@/views/Home.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'CatPage',
    component: CatPage
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardList.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path:'/chart/:id',
    name : 'Chart1',
    component: Chart,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
