import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Personajes from '@/views/Personajes.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/personajes',
    component: Personajes,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
