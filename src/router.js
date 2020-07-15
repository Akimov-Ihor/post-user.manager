import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/add',
            name: 'createNewPost',
            component: () => import('./views/CreateNewPost.vue')
          },
          {
            path: '/',
            name: 'allPost',
            component: () => import('./views/AllPost.vue')
          },
          {
            path: '/users',
            name: 'allUsers',
            component: () => import('./views/AllUsers.vue')
          },
          {
            path: '/post/:id',
            name: 'post',
            component: () => import('./views/PostInfo.vue')
          }
    ]
    })
