<template>
    <div class="login">
        <h2>Vuelos Disponibles</h2>
        <div>
            <label>Origen</label>
            <select v-model:="filtroOrigen" @change="filtrar">
                <option></option>
                <option v-for:="origen in store.origenes" :key="origen">
                    {{ origen.nombre }}</option>
            </select>
            <br>
            <label>Destino</label>
            <select v-model:="filtroDestino" @change="filtrar">
                <option></option>
                <option v-for:="destino in store.destinos" :key="destino">
                    {{ destino.nombre }}</option>
            </select>
            <label>Identificador</label>
            <input type="text" id="codigo" v-model="filtroCodigo" @keyup="filtrar">

        </div>
        <div>
            <table>
                <tr>
                    <th>Identificador</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Fecha/Hora Salida</th>
                    <th>Duracion</th>
                    <th>Acciones</th>
                </tr>
                <tr v-for="vuelo in vuelosFiltrados" :key="vuelo.codigo">
                    <td>{{ vuelo.codigo }}</td>
                    <td>{{ vuelo.origen }}</td>
                    <td>{{ vuelo.destino }}</td>
                    <td>{{ vuelo.fechaSalida }}{{ vuelo.horaSalida }}</td>
                   
                    {{ min = vuelo.duracion % 60  }}   
                    <!-- jajaja pense que no lo podria hacer-->
                    <td>{{ Math.round(vuelo.duracion/60) }} h {{min  }}min</td>
                    <button>
                        <RouterLink :to="{ name: 'detalle', params: { id: vuelo.codigo } }">Ver Detalles</RouterLink>
                    </button>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useVuelosStore } from '@/stores/vuelos'
import { RouterLink } from "vue-router";
const store = useVuelosStore()

const filtroOrigen = ref('');
const filtroDestino = ref('');
const filtroCodigo = ref('');
const vuelosFiltrados = ref([]);
const min=ref();

onMounted(async () => {
    await store.cargarVuelos()
    await store.obtenerOrigenes()
    await store.obtenerDestinos()
})
async function filtrar() {
    vuelosFiltrados.value = store.vuelos.filter((vuelo) => {
        const texto = filtroCodigo.value.toLowerCase();
        const coincideTexto =
            !texto ||
            vuelo.codigo.toLowerCase().includes(texto);

        const coincideOrigen =
            !filtroOrigen.value || vuelo.origen === filtroOrigen.value;

        const coincideDestino =
            !filtroDestino.value || vuelo.destino.includes(filtroDestino.value);
        return coincideTexto && coincideOrigen && coincideDestino;
    });
}

</script>
