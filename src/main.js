import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyLoad'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './base/fonts/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(MintUI)

Vue.config.productionTip = false
// fastclick.attach(document.body)
Vue.prototype.$ajax = axios;
axios.defaults.withCredentials=true;
axios.defaults.timeout ==5000;
axios.defaults.baseURL = 'http://api.woniuzhixin.com/person'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
