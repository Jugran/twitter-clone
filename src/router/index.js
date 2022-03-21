
import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/feed/Feed'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'feed',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'Feed',
      component: Feed
    }
  ]
})