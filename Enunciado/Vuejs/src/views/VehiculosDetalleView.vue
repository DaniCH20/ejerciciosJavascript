<template>

    <div v-if="vehiculo">

        <img :src="`/public/images/${vehiculo.imagen}`" alt="imagen" width="100" height="100">
        <h1>{{ vehiculo.modelo }} {{ vehiculo.marca }}</h1>
        <p>{{ vehiculo.descripcion }}</p>
        <span>{{ vehiculo.tipo }}</span><span>{{ vehiculo.autonomia }}</span>
        <span>{{ vehiculo.velocidadMax }}</span><span>{{ vehiculo.plazas }}</span>
        <RouterLink to="/vehiculos"></RouterLink>

        <div>
            <h2>Reservar</h2>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import { useRoute, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
const vehiculos = ref([]);

const route = useRoute();
const vehiculo = ref();
const error = ref(null);

 //console.log('ID del vehiculo:', route.params.id);
const cargarVehiculos = async () => {
    try {
        const response = await axios.get('/data/vehiculos.json')
        console.log(response.data)
        vehiculos.value = response.data
        obtenerVehiculo()
    } catch (err) {
        console.error('Error al cargar usuarios:', err)
        error.value = 'Error al iniciar sesión'
    }
}

const obtenerVehiculo = async () => {
    vehiculo = vehiculos.find(element => element.id === parseInt(route.params.id));
}


onMounted(() => {
    cargarVehiculos()
})

</script>
<style></style>