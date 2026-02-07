<template>
  <div class="flex flex-row">
    <div v-for:="reserva in store.reservasConDetalles" :key="reserva.id">
      <span>{{ reserva.vehiculoId}}</span><br>
      <span>{{ reserva.vehiculoModelo }}</span
      ><br />
      <span>{{ reserva.vehiculoTipo }}</span
      ><br />
      <span>{{ reserva.fechaReserva }}</span
      ><br />
      <span>{{ reserva.proposito }}</span
      ><br />
      <span>{{ reserva.creada }}</span>
      <br />
      <button>Eliminar reserva</button>

      <div></div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "@/stores/usuarios";

const store = useAuthStore();

onMounted(async () => {
  if (store.vehiculos.length === 0) {
    store.cargarVehiculos();
  }
});
</script>
<style></style>
