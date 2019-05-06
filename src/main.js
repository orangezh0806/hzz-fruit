// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './vant.js'
import './assets/css/variables.less'
import './assets/css/common.less'
import './assets/css/base.less'
import '../node_modules/font-awesome/css/font-awesome.css'
import VueSticky from 'vue-sticky' // Es6 module
Vue.config.productionTip = false

console.log(VueSticky)
Vue.directive('sticky', VueSticky)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
