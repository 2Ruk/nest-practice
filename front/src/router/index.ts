import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Chart from "@/views/Chart.vue";
import CatPage from "@/views/Home.vue";
import Survey from "@/views/Survey.vue";
import BoardList from "@/views/BoardList.vue";
import ChartPage from "@/views/Chart.vue";

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
    component: BoardList,
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path:'/chart/:id',
    name : 'Chart1',
    component: ChartPage,
    props: true
  },
  {
    path: '/Survey',
    name: 'Survey',
    component: Survey,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
