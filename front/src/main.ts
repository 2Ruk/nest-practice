import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import * as VueMoment from 'vue-moment';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {ins as axios} from './util/axios';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


Vue.use(VueToast, {position: 'top-right'});
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.use(IconsPlugin);
Vue.use(VueMoment);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
