<template>
    <div v-if="vuelo">
        <h1>Vuelo {{ vuelo.codigo }}</h1>
        <p>Origen: {{ vuelo.origen }}</p>
        <p>Destino: {{ vuelo.destino }}</p>
        <p>Fecha de salida: {{ vuelo.fechaSalida }}</p>
        <p>Hora: {{ vuelo.horaSalida }}</p>
        <p>Duracion: {{ vuelo.duracion }}</p>
        <p>Precio: {{ vuelo.precio }}</p>
        <form @submit.prevent="reservar">
            <label>Introduce tu email para reservar</label>
            <input type="email" v-model="email" required />
            <label>Numero de pasajeros</label>
            <input type="text" v-model="numero" required />
            <br>
            <span>Precio Total : {{ vuelo.precio * numero }}</span>
            <br>
            <button type="submit">Reservar Vuelo</button>
        </form>
        <button>
            <RouterLink to="/vuelos">Vuelos</RouterLink>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useVuelosStore } from '@/stores/vuelos'
import { useRoute, RouterLink } from "vue-router";
const store = useVuelosStore()
const route = useRoute();
const email = ref('');
const numero = ref('');
const vuelo = ref(null);
const precioTotal = ref('');

async function obtenerVuelo() {
    const id = route.params.id;
    console.log(id)
    vuelo.value = store.vuelos.find((element) => element.codigo === id);
}
async function reservar() {
    const idUnico = vuelo.codigo + Math.random(1, 999);
    precioTotal = vuelo.precio * numero;
    /*
    const nuevaReserva = {
        id: idUnico,
        codVuelo=vuelo.codigo,
        correo: email,
        precioTotal: precioTotal,
    };
    store.reservas.push(nuevaReserva)
    */
}
onMounted(async () => {
    await obtenerVuelo()
})

</script>