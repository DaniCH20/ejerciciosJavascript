<template>
  <div class="vehiculos-view">
    <h1>Catálogo de Vehículos</h1>
    <p>Aquí se mostrará el listado de vehículos disponibles</p>

    <!-- Los alumnos implementarán aquí el catálogo completo -->
    <div>
      <label>Busqueda</label>
      <input
        type="text"
        id="nombre"
        placeholder="modelo o marca"
        v-model="filtroNombre"
        @keyup="filtrar"
      />
      <br />
      <label>Tipo</label>
      <select v-model:="filtroCategoria" @change="filtrar">
        <option></option>
        <option v-for:="tipo in store.categorias" :key="tipo">
          {{ tipo.nombre }}
        </option>
      </select>
      <br />
      <label>Acceso</label>
      <select v-model="filtroAcceso" @change="filtrar">
        <option value="directivo">Todos</option>
        <option value="empleado">Empleados</option>
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
        <div></div>
        <tr v-for="vehiculo in vehiculosFiltrados" :key="vehiculo.id">
          <td>
            <img
              :src="`/public/images/${vehiculo.imagen}`"
              alt="imagen"
              width="100"
              height="100"
            />
          </td>
          <td>{{ vehiculo.modelo }} {{ vehiculo.marca }}</td>
          <td>{{ vehiculo.tipo }}</td>
          <td v-if="vehiculo.acceso == 'directivo'">
            Acceso a solo directivos
          </td>
          <td v-else>Acceso a empleados</td>
          <td>
            <RouterLink
              :to="{
                name: 'vehiculosdetalle',
                params: { id: vehiculo.id },
              }"
              >Ver Detalles</RouterLink
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "@/stores/usuarios";
const store = useAuthStore();

const filtroNombre = ref("");
const filtroCategoria = ref("");
const filtroAcceso = ref("");
const vehiculosFiltrados = ref([]);

async function filtrar() {
  vehiculosFiltrados.value = store.vehiculos.filter((vehiculo) => {
    const texto = filtroNombre.value.toLowerCase();
    const coincideTexto =
      !texto ||
      vehiculo.modelo.toLowerCase().includes(texto) ||
      vehiculo.marca.toLowerCase().includes(texto);

    const coincideCategoria =
      !filtroCategoria.value || vehiculo.tipo === filtroCategoria.value;

    const coincideAcceso =
      !filtroAcceso.value || vehiculo.acceso.includes(filtroAcceso.value);
    return coincideTexto && coincideCategoria && coincideAcceso;
  });

  console.log(vehiculosFiltrados.value);
}

onMounted(async () => {
  await store.cargarVehiculos();
  await store.cargarCategorias();
  await  filtrar();
});
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
