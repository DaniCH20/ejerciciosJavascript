<script setup>
import { useVideojuegoStore } from "@/stores/useVideojuegosStore";
import { ref, onMounted } from "vue";
import Juegos from "../components/Juegos.vue";
const store = useVideojuegoStore();
onMounted(async () => {
  await store.cargarVideojuegos();
});
async function añadirFavoritos(aid) {
  const nuevoFavorito = {
    id: aid,
  };
  const favorito = store.favoritos.indexOf(aid);
  console.log(favorito);
  if (!favorito) {
    store.favoritos.push(nuevoFavorito);
  } else {
    store.favoritos.splice(favorito, 1);
  }
}
</script>

<template>
  <div>
    <Juegos />
    <h1>Biblioteca de juegos</h1>
    <div v-for="videojuego in store.videojuegos" :key="videojuego.id">
      <h2>{{ videojuego.titulo }}</h2>
      <h2>{{ videojuego.decripcion }}</h2>
      <RouterLink
        :to="{
          name: 'detalles',
          params: { id: videojuego.id },
        }"
        >Ver Detalles</RouterLink
      >
      <button @click="añadirFavoritos(videojuego.id)"><span>⭐</span></button>
    </div>
  </div>
</template>
