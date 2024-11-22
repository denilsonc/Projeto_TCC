import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Users',
      name: 'Users',
      component: () => import('../views/Users.vue'),
      children:[
        {
          path: 'View',
          name: 'UsersView',
          component: () => import('../views/Users/View.vue'),
        }
      ]
    },
    {
      path: '/',
      name: 'Singin',
      component: () => import('../views/SingIn.vue'),
    },
  ],
})

export default router
