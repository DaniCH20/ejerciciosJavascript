<script setup>
import { ref, onMounted } from "vue";
import { useVideojuegoStore } from "@/stores/useVideojuegosStore";
const store = useVideojuegoStore();
onMounted(async () => {
 
});
</script>

<template>
  <div v-for="favorito in store.favoritosDetalles" :key="favorito.id">
    <h1>{{ favorito.id }}</h1>
    <p>{{ favorito.videojuegoTitulo }}</p>
    <p>{{ favorito.videojuegoDescripcion }}</p>
  </div>
</template>
