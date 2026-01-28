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
Consultas api fetch
Para hacer estas consultas es necesario instalar axios en nuestro proyecto 
#  npm install axios
Importar el plugin en el main.js

# --------------------------------------------
import axiosInstance from './plugins/axios';

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;
# --------------------------------------------
Configurar axios como plugin global en un js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mi.api.com/',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;
# --------------------------------------------
Solicitudes Get

this.$axios.get('/ruta/al/recurso').then(response => {
  this.datos = response.data;
}).catch(error => {
  console.error("Hubo un error en la solicitud: ", error);
});
# --------------------------------------------
Solicitudes Post 
# --------------------------------------------
this.$axios.post('/ruta/al/recurso', { nombre: 'Nuevo Nombre', otroCampo: 'Otro Valor' }).then(response => {
  console.log("Recurso creado con éxito:", response.data);
}).catch(error => {
  console.error("Error al crear el recurso: ", error);
});
# --------------------------------------------
Solicitud PUT 
# --------------------------------------------
this.$axios.put('/ruta/al/recurso/123', { nombre: 'Nombre Actualizado' }).then(response => {
  console.log("Recurso actualizado con éxito", response.data);
}).catch(error => {
  console.error("Error al actualizar el recurso: ", error);
});
# --------------------------------------------
Solicitud Delete 
# --------------------------------------------
this.$axios.delete('/ruta/al/recurso/123').then(() => {
  console.log("Recurso eliminado con éxito");
}).catch(error => {
  console.error("Error al eliminar el recurso: ", error);
});
# --------------------------------------------
