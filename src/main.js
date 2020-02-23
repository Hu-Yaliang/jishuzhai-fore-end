import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'summernote'
import 'summernote/dist/lang/summernote-zh-CN'
import 'summernote/dist/summernote.css'

Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
