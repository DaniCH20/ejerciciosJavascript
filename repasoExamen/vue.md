Comando para crear proyecto vue
# npm init vue@latest
Instalar dependencias
# npm install
Servidor de desarrollo
# npm run dev
Construir para producción
# npm run build

Instalar pinia 
# npm install pinia 
# ------------------------------------
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
# ------------------------------------
Instalar vue router
# npm install vue-router@4  
Crear un archivo .js donde definiremos las rutas
# ------------------------------------
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'
    import Ruleta from '../views/Ruleta.vue'
    const routes = [
    {
        path: '/',
        name:home,
        component: Home,
    },
    {
        path: '/ruleta',
        name:ruleta,
        component: Ruleta,
    },
    ]

    const router = createRouter({
    history: createWebHistory(),
    routes,
    })

    export default router
# ------------------------------------