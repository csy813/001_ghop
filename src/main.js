import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/imgs/loading1.jpg'
import './filters' //加载过滤器

Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
