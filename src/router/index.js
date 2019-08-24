import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import NewsApp from '../components/newsapp/NewsApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/ps',
      name: 'NewsApp',
      component: NewsApp
    }
  ]
})
