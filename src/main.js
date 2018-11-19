// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入Vue-resource
import VueResource from 'vue-resource'
//注册VueRource
Vue.use(VueResource)

Vue.config.productionTip = false
//部分引入
import { Header,Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import './css/commen.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
