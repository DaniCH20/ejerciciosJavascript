import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiculosView from '../views/VehiculosView.vue'
import MisReservasView from '../views/MisReservasView.vue'
import LoginView from '../views/LoginView.vue'
import VehiculosDetalleView from '../views/VehiculosDetalleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehiculos',
      name: 'vehiculos',
      component: VehiculosView
    },
    {
      path:'/reservas',
      name:'reservas',
      component:MisReservasView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/vehiculosdetalle:id',
      name:'vehiculosdetalle',
      component:VehiculosDetalleView
    }
    // Los alumnos añadirán más rutas aquí:
    // - Ruta dinámica para detalle de vehículo
    // - Ruta para mis reservas
  ]
})

export default router
