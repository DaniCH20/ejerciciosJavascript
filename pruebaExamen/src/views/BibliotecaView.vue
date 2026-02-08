<script setup>
import { useVideojuegoStore } from "@/stores/useVideojuegosStore";
import { ref, onMounted } from "vue";

const store = useVideojuegoStore();
onMounted(async () => {
  await store.cargarVideojuegos();
});
</script>

<template>
  <div>
    <h1>Biblioteca de juegos</h1>
    <div v-for="videojuego in store.videojuegos" :key="videojuego.id">
      <h2>{{ videojuego.titulo }}</h2>
      <h2>{{ videojuego.decripcion }}</h2>
      <RouterLink
        :to="{
          name: 'detalles',
          params: { id: videojuego.id },
        }"
        >Ver Detalles</RouterLink>
       
    </div>
  </div>
</template>
