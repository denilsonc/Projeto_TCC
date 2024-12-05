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
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar usuário',
          component: () => import('@/components/users/create-user/UserCreateComponents.vue'),
        }
      ]
    },
    {
      path: '/',
      name: 'Singin',
      component: () => import('@/views/SingIn.vue'),
    },
    {
      path: '/drivers',
      name: 'meunmotoristas',
      component: () => import('@/views/Motorista.vue'),
      children: [
        {
          path: 'view',
          name: 'Visualizar Motoristas',
          component: () => import('@/views/Driver/View.vue')
        },
        {
          path: 'registre',
          name: 'registrar motorista',
          component: () => import('@/views/Driver/Registre.vue')
        }
      ]

    },
  ],
})

export default router
