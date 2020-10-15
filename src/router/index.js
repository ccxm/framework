import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./../pages/index')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('./../pages/hello')
    }
  ]
})
