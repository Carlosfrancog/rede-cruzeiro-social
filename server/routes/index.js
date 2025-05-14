import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../components/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
