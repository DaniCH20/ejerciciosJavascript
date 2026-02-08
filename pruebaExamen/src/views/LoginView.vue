<script setup>
import { useVideojuegoStore } from "@/stores/useVideojuegosStore";
import { ref, onMounted } from "vue";

const store = useVideojuegoStore();

const email = ref("");
const password = ref("");

onMounted(async () => {
  await store.cargarUsuarios();
});
</script>

<template>
  <div>
    <form @submit.prevent="store.login(email, password)">
      <label>Email</label>
      <input type="text" id="email" v-model="email" />
      <br />
      <label>Password</label>
      <input type="text" id="email" v-model="password" />
      <div v-if="store.loading">Cargando...</div>
      <div v-if="store.error" class="error">{{ store.error }}</div>

      <button type="submit">Acceder</button>
    </form>
    <div>
        <button @click="store.logout()">CerrarSesion</button>
    </div>
  </div>
</template>
