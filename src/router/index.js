import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import PomdpSal from '../components/pomdpsal/PomdpSal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/ps',
      name: 'PomdpSal',
      component: PomdpSal
    }
  ]
})
