<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <h1>⚡ Txurdinaga Tech</h1>
            <p>Sistema de Reserva de Vehículos</p>
          </div>
          <div class="nav-links">
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/vehiculos">Vehículos</RouterLink>
            <!--
            <v-if :="usuarioAutenticado" >
              <RouterLink to="/reservas">Reservas</RouterLink>
              <p>Hola {{usuarioAutenticado.nombre}}</p>
            </v-if>
            -->
            <RouterLink to="/login">Login</RouterLink>
            <!-- Los alumnos añadirán más enlaces aquí -->
          </div>
        </div>
      </nav>
    </header>

    <main class="container">
      <RouterView />
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2026 Txurdinaga Tech - Portal de Empleados</p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem 0;
}
</style>
