<template>
  <div class="vehiculos-view">
    <h1>Catálogo de Vehículos</h1>
    <p>Aquí se mostrará el listado de vehículos disponibles</p>

    <!-- Los alumnos implementarán aquí el catálogo completo -->
    <div>
      <label>Busqueda</label>
      <input type="text" id="nombre" placeholder="modelo o marca" v-model="filtroModeloNombre">
      <br>
      <label>Tipo</label>
      <select v-for="tipo in tipos" :index="tipo">
        <option>{{ tipo }}</option>
      </select>
      <br>
      <label>Acceso</label>
      <select>
        <option>Todos</option>
        <option>Empleados</option>
      </select>
    </div>
    <div>

      <table>
        <tr>
          <th>Imagen</th>
          <th>Modelo/Marca</th>
          <th>Tipo</th>
          <th>Acceso</th>
          <th>Accion</th>
        </tr>
        <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <td><img :src="`/public/images/${vehiculo.imagen}`" alt="imagen" width="100" height="100"></td>
          <td>{{ vehiculo.modelo }} {{ vehiculo.marca }}</td>
          <td>{{ vehiculo.tipo }}</td>
          <td v-if="vehiculo.acceso == 'directivo'">Acceso a solo directivos</td>
          <td v-else>Acceso a empleados</td>
          <td>
            <RouterLink :to="`/vehiculosdetalle/${vehiculo.id}`">Ver Detalles</RouterLink>
          </td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { RouterLink } from "vue-router";
import { onMounted, ref, computed } from 'vue'
// Importar axios para cargar datos
// Implementar la carga de vehículos desde /data/vehiculos.json
// Implementar filtros y búsqueda
const vehiculos = ref([]);
const error = ref(null)

const filtroModeloNombre = ref('')
const tipos=ref([])
const tipo=ref('')

const cargarVehiculos = async () => {
  try {
    const response = await axios.get('/data/vehiculos.json')
    console.log(response.data)
    vehiculos.value = response.data

  } catch (err) {
    console.error('Error al cargar usuarios:', err)
    error.value = 'Error al iniciar sesión'
  }
}

const obtenerTipos= async ()=>{
   

    vehiculos.array.forEach(element => {
      tipos.push(element.tipo)
    });
        console.log(tipos)

}


const vehiculosFiltrados = computed(() => {
  return vehiculos.value.filter(vehiculo => {
    const coincideNombre = vehiculo.nombre.toLowerCase().includes(filtroModeloNombre.value.toLowerCase()) || vehiculo.modelo.toLowerCase().includes(
      filtroModeloNombre.value.toLowerCase())
    return coincideNombre 
  })
})

onMounted(() => {
  cargarVehiculos()
  obtenerTipos()
 
})

</script>

<style scoped>
.vehiculos-view {
  padding: 2rem 0;
}

h1 {
  color: #1e3c72;
  margin-bottom: 1rem;
}
</style>
