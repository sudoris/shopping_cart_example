import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import ShoppingCart from './components/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/checkout',
      name: 'checkout',    
      props: true,  
      component: ShoppingCart
    }
  ]
})
