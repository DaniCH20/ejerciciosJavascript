import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios"; // npm install axios

export const useVideojuegoStore = defineStore("videojuego", () => {
  const videojuegos = ref([]);
  const usuarios = ref([]);
  const favoritos = ref([]);
  const loading = ref(false);
  const error = ref("");
    const juego=ref(null);
  async function cargarVideojuegos() {
    loading.value = true;
    error.value = null;
    try {
      const respuesta = await axios.get("./public/data/juegos.json");
      videojuegos.value = respuesta.data;
      return videojuegos.value;
    } catch (err) {
      error.value = "Error al cargar : " + err.message;
      console.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  async function cargarUsuarios() {
    loading.value = true;
    error.value = null;
    try {
      const respuesta = await axios.get("./public/data/usuarios.json");
      usuarios.value = respuesta.data;
      return usuarios.value;
    } catch (err) {
      error.value = "Error al cargar : " + err.message;
      console.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  async function login(email, password) {
    
    error.value = null;
    const usuarioEncontrado = usuarios.value.find(
      (user) =>
        user.email.toLowerCase() == email.toLowerCase() &&
        user.password.toLowerCase() == password.toLowerCase(),
    );
    if (usuarioEncontrado) {
      localStorage.setItem("nombre", usuarioEncontrado.nombre);
    } else {
      error.value = "Error en la contraseña y correo";
    }
  }
  async function logout() {
    localStorage.clear();
  }
   async function buscarVideojuego(id) {
       juego = videojuegos.value.find(j=> j.id==id)
        
    
   }

  return {
    usuarios,
    videojuegos,
    error,
    loading,
    favoritos,
  

    cargarUsuarios,
    cargarVideojuegos,
    login,
    logout,
  
  };
});
