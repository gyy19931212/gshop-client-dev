/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuex from './store/index'


new Vue({
  el: '#app',
  router: Router,
  store:Vuex,
  render: h => h(App)
})


