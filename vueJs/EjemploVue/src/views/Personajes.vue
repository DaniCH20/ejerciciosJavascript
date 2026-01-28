<template>
    <h1>Home </h1>
    <div>
        Bienvenido a la página principal
    </div>
    <div>
        <router-link to="/">Home</router-link>
        <div v-for="personaje in personajes" :key="personaje.id">
            <h2>{{ personaje.nombre }}</h2>
            <p>Descripción: {{ personaje.descripcion }}</p>

        </div>
    </div>
</template>
<script>
import { getPersonajes } from '@/stores/api.js'
import { ref, onMounted } from 'vue'
onMounted( () => {
    loadPersonajes()
})
const personajes = ref([])
async function loadPersonajes() 
{
    personajes.value = await getPersonajes()
    
}
</script>
<style scoped></style>