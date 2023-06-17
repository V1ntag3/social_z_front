import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path:'/register',
      name:'RegisterView',
      component: RegisterView
    },
    {
      path:'/home',
      name:'TelaInicialView',
      component: TelaInicialView
    }
  ]
})

export default router
