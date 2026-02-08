<script setup>
import { ref, onMounted } from "vue";
import { useVideojuegoStore } from "@/stores/useVideojuegosStore";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useVideojuegoStore();
const videojuego = ref(null);
onMounted(async () => {
  if (!store.videojuegos.length > 0) {
    await store.cargarVideojuegos();
  }
  await buscarVideojuego()
});
async function buscarVideojuego() {
  const id = parseInt(route.params.id);
  videojuego.value = store.videojuegos.find((element) => element.id === id);
}
</script>

<template>
  <div v-if="videojuego">
    <h1>{{ videojuego.titulo }}</h1>
  </div>
</template>
