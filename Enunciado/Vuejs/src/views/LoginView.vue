<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    
    <div v-if="store.loading">Cargando...</div>
    <div v-if="store.error" class="error">{{ store.error }}</div>
    
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit" :disabled="loading">Iniciar Sesión</button>
    </form>
    
    <div v-if="store.usuarioAutenticado">
      Bienvenido, {{ store.usuarioAutenticado.nombre }}
      <button @click="store.logout()">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/usuarios'

const store = useAuthStore()
const email = ref('')
const password = ref('')

// Cargar usuarios al montar el componente
onMounted(async () => {
  await store.cargarUsuarios()
})

const login = async () => {
  const esValido = store.verificarUsuario(email.value, password.value)
  
  if (esValido) {
    // Redirigir o mostrar mensaje de éxito
    console.log('Login exitoso')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>