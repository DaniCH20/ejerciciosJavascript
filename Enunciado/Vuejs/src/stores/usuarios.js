import { defineStore } from "pinia";
import { ref, computed } from "vue"; // ¡IMPORTANTE: Importar ref!
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  // --- ESTADO (STATE) ---
  const usuarioAutenticado = ref(null); // Usuario logueado
  const usuarios = ref([]); // Lista de todos los usuarios
  const vehiculos = ref([]); // Lista de vehículos
  const categorias = ref([]); // Lista de categorías
  const loading = ref(false); // Estado de carga
  const error = ref(null); // Errores
  const reservas = ref([]);

  //Geetter
  const reservasConDetalles = computed(() => {
    return reservas.value.map((reserva) => {
      // Buscar el vehículo por ID
      const vehiculo = vehiculos.value.find((v) => v.id == reserva.vehiculoId);

      return {
        ...reserva, // Mantener todos los datos de la reserva
        vehiculoModelo: vehiculo
          ? `${vehiculo.marca} ${vehiculo.modelo}`
          : "Desconocido",
        vehiculoTipo: vehiculo ? vehiculo.tipo : "Sin categoria",
      };
    });
  });

  // --- ACCIONES (ACTIONS) ---

  /**
   * Cargar lista de usuarios desde JSON
   */
  async function cargarUsuarios() {
    loading.value = true;
    error.value = null;

    try {
      const respuesta = await axios.get("./public/data/usuarios.json");
      usuarios.value = respuesta.data; // Asignamos directamente
      console.log("Usuarios cargados:", usuarios.value.length);
      return usuarios.value;
    } catch (err) {
      error.value = "Error al cargar usuarios: " + err.message;
      console.error(error.value);
      throw err; // Propaga el error
    } finally {
      loading.value = false;
    }
  }

  /**
   * Cargar lista de vehículos
   */
  async function cargarVehiculos() {
    loading.value = true;
    try {
      const respuesta = await axios.get("./public/data/vehiculos.json");
      vehiculos.value = respuesta.data;
      console.log("Vehículos cargados:", vehiculos.value.length);
      return vehiculos.value;
    } catch (err) {
      error.value = "Error al cargar vehículos: " + err.message;
      console.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  }

  /**
   * Cargar lista de categorías
   */
  async function cargarCategorias() {
    loading.value = true;
    try {
      const respuesta = await axios.get("./public/data/categorias.json");
      categorias.value = respuesta.data;
      console.log("Categorías cargadas:", categorias.value.length);
      return categorias.value;
    } catch (err) {
      error.value = "Error al cargar categorías: " + err.message;
      console.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  }

  /**
   * Cargar todos los datos iniciales
   */
  async function cargarDatosIniciales() {
    try {
      await Promise.all([
        cargarUsuarios(),
        cargarVehiculos(),
        cargarCategorias(),
      ]);
      console.log("Todos los datos cargados correctamente");
    } catch (err) {
      console.error("Error al cargar datos iniciales:", err);
    }
  }

  /**
   * Verificar usuario - Devuelve true/false
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña
   * @returns {boolean} - true si es correcto, false si no
   */
  function verificarUsuario(email, password) {
    // 1. Validar parámetros
    if (!email || !password) {
      console.error("Email y password son requeridos");
      return false;
    }

    // 2. Buscar usuario por email (case-insensitive)
    const usuarioEncontrado = usuarios.value.find(
      (usuario) => usuario.email.toLowerCase() === email.toLowerCase(),
    );

    // 3. Si no encuentra usuario
    if (!usuarioEncontrado) {
      console.log("Usuario no encontrado:", email);
      return false;
    }

    // 4. Verificar contraseña
    const passwordCorrecta = usuarioEncontrado.password === password;

    if (passwordCorrecta) {
      usuarioAutenticado.value = usuarioEncontrado;

      console.log("Usuario autenticado:", usuarioAutenticado.value.nombre);
      return true;
    } else {
      console.log("Contraseña incorrecta para:", email);
      usuarioAutenticado.value = null;
      return false;
    }
  }

  /**
   * Versión async de verificarUsuario (para API real)
   */
  async function verificarUsuarioAPI(email, password) {
    try {
      // En un caso real, llamarías a tu API
      const respuesta = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (respuesta.data.success) {
        usuarioAutenticado.value = respuesta.data.user;
        return true;
      }
      return false;
    } catch (err) {
      console.error("Error en autenticación:", err);
      return false;
    }
  }

  /**
   * Cerrar sesión
   */
  function logout() {
    usuarioAutenticado.value = null;
    console.log("Sesión cerrada");
  }

  /**
   * Verificar si hay usuario autenticado
   */
  function estaAutenticado() {
    return usuarioAutenticado.value !== null;
  }

  // --- RETORNAR TODO LO PÚBLICO ---
  return {
    // Estado
    usuarioAutenticado,
    usuarios,
    vehiculos,
    categorias,
    loading,
    error,
    reservas,
    reservasConDetalles,
    
    // Acciones
    cargarUsuarios,
    cargarVehiculos,
    cargarCategorias,
    cargarDatosIniciales,
    verificarUsuario,
    verificarUsuarioAPI,
    logout,
    estaAutenticado,
  };
});
