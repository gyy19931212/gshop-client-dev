import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home/home.vue'
import Search from './pages/search/search.vue'
import Order from './pages/order/order.vue'
import Mine from './pages/mine/mine.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
