<template>
  <div class="login">
    <h2>Consultar tus vuelos</h2>
    <form>
      <span>Introduce tu correo y el numero de reservas</span>
      <label>Email:</label>
      <input type="email" v-model="email">
      <label>Numero de reserva</label>
      <input type="text" v-model="reserva">
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useVuelosStore } from '@/stores/vuelos'

const store = useVuelosStore()
const email=ref('');
const reserva=ref('');


onMounted(async () => {
  
})

</script>