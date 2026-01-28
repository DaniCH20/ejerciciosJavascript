<script>
import { getPersonajes } from '../stores/api.js'
import { ref, onMounted } from 'vue'
onMounted( () => {
    loadPersonajes()
})

const personajes = ref([])
async function loadPersonajes() 
{
    const response = await getPersonajes()
    personajes.value = response.items
    console.log(personajes.value)
    
}


</script>
<template>
    <h1>Home </h1>
    <div>
        Bienvenido a la página principal
    </div>
    <div>
        <router-link to="/personajes">Ver Personajes</router-link>
        
        <div v-for="personaje in personajes" :key="personaje.id">
            <h2>{{ personaje.name }}</h2>
            <p>Descripción: {{ personaje.description }}</p>

        </div>
    </div>
</template>

<style scoped></style>