import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import ChartPage from "@/views/Chart.vue";
import CatPage from "@/views/Home.vue";
import Survey from "@/views/Survey.vue";
import BoardList from "@/views/BoardList.vue";
import Login from "@/views/user/Login.vue";
import Store from "../store/index";
import Register from "@/views/user/Register.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/CatPage',
    name: 'CatPage',
    meta: {
      userAuth: true,
    },
    component: CatPage
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    meta: {
      userAuth: true,
    },
    component: BoardList,
  },
  {
    path: '/chart',
    name: 'Chart',
    meta: {
      userAuth: true,
    },
    component: ChartPage
  },
  {
    path: '/chart/:id',
    name: 'Chart1',
    component: ChartPage,
    meta: {
      userAuth: true,
    },
    props: true
  },
  {
    path: '/Survey',
    name: 'Survey',
    component: Survey,
    meta: {
      userAuth: true,
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const {matched} = to;
  const userAuth = matched.some(({meta}) => meta.userAuth);

  if (userAuth) {
    const isLogin = await Store.getters.isLogin;
    if (!isLogin) {
      Vue.$toast.error('로그인이 필요한 서비스입니다.')
      return next('/')
    }
  }
  return next();
})


export default router
