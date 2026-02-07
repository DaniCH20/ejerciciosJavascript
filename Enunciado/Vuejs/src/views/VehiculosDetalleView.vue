<template>
  <div>
    <div v-if="vehiculo">
      <img
        :src="`/public/images/${vehiculo.imagen}`"
        alt="imagen"
        width="100"
        height="100"
      />
      <h1>{{ vehiculo.modelo }} {{ vehiculo.marca }}</h1>
      <p>{{ vehiculo.descripcion }}</p>
      <span>{{ vehiculo.tipo }}</span
      ><br><span>{{ vehiculo.autonomia }} {{ vehiculo.id }}</span><br>
      <span>{{ vehiculo.velocidadMax }}</span
      ><span>{{ vehiculo.plazas }}</span>
      <RouterLink to="/vehiculos"></RouterLink>

      <div>
        <h2>Reservar</h2>
        <div v-if="!store.usuarioAutenticado">
          <p>Debes iniciar sesion para reservar</p>
          <RouterLink to="/login">Login</RouterLink>
        </div>
        <div v-else>
          <form @submit.prevent="guardarReserva">
            <p v-if="!vehiculo.acceso.includes('empleado')">
              Solo directivos pueden acceder a este vehiculo
            </p>
            <label>Fecha</label>
            <input type="date" id="fecha" v-model="fecha" required />
            <label>Proposito/opcional</label>
            <input
              type="text"
              id="texto"
              v-model="descripcion"
              placeholder="Reunion , fiesta "
            />
            <button type="submit" :disabled="!usuarioPuedeReservar">
              Confirmar reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "@/stores/usuarios";

const route = useRoute();
const vehiculo = ref(null);
const error = ref(null);
const store = useAuthStore();
const fecha = ref(null);
const descripcion = ref("");
async function obtenerVehiculo() {
  const id = parseInt(route.params.id);
  vehiculo.value = store.vehiculos.find((element) => element.id === id);
}
const usuarioPuedeReservar = computed(() => {
  if (!store.usuarioAutenticado || !vehiculo.value) return false;

  const rolUsuario = store.usuarioAutenticado.rol; // "empleado" o "directivo"
  const accesosPermitidos = vehiculo.value.acceso; // ["empleado"] o ["directivo"] o ["empleado", "directivo"]

  // Verificar si el rol del usuario está en los accesos permitidos
  return accesosPermitidos.includes(rolUsuario);
});

async function guardarReserva() {
  const fechaActual = new Date();
  const nuevaReserva = {
    vehiculoId: vehiculo.value.id,
    fechaReserva: fecha,
    proposito: descripcion,
    creada:  new Date().toISOString(),
  };
  store.reservas.push(nuevaReserva);
  alert("Reserva guardada correctamente");
}

onMounted(async () => {
  await obtenerVehiculo();
});
</script>
<style></style>
