import { createRouter, createWebHistory } from 'vue-router';
import UserCreateComponent from '@/components/users/create-user/UserCreateComponent.vue';
import UserListComponent from '@/components/users/list-user/UserListComponent.vue';
import UserUpdateComponent from '@/components/users/update-user/UserUpdateComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Singin',
      component: () => import('@/views/SingIn.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar usuário',
          component: UserCreateComponent,
        }, 
        {
          path: 'list',
          name: 'Listar Usuários',
          component: UserListComponent,
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Usuário',
          component: UserUpdateComponent,
        }
      ]
    },
    {
      path: '/drivers',
      name: 'meunmotoristas',
      component: () => import('@/views/Motorista.vue'),
    },
  ],
})

export default router
