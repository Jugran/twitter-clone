
import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import { store } from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
      meta: { public: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
      meta: { public: true }
    },
    {
      path: '/feed',
      name: 'feed',
      component: HomePage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicRoute = to.matched.some(record => record.meta.public);
  const authenticated = store.state.auth.isAuthenticated;

  if (publicRoute && authenticated) {
    console.info("publlic route")
    next('/feed');
  }
  else if (!publicRoute && authenticated) {
    console.info("authenticated")
    next()
  }
  else if (!publicRoute && !authenticated) {
    console.info("not authenticated")
    next('/')
  }
  else {
    next()
  }
})


export default router;