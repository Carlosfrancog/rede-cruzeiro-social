import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/registro', component: RegistroView },
  {path: '/home', component: HomeView},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
