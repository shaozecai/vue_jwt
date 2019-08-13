import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { needLogin: false }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { needLogin: false }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { needLogin: true }
    }
  ]
})
