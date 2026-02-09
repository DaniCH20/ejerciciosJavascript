import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuelosView from '../views/VuelosView.vue'
import DetalleView from '../views/VuelosDetalleView.vue'
import Consulta from '../views/ConsultaVueloView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vuelos',
      name: 'vuelos',
      component: VuelosView
    }
    ,
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: DetalleView
    },
    {
      path: '/consulta',
      name: 'consulta',
      component: Consulta
    }
  ]
})

export default router
