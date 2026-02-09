import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useVuelosStore = defineStore('vuelos', () => {
  const vuelos = ref([]);
  const reservas = ref([]);
  const error = ref('');
  const origenes = ref([]);
  const destinos = ref([]);



  async function cargarVuelos() {
    error.value = null;
    try {
      const respuesta = await axios.get("./public/data/vuelos.json");
      vuelos.value = respuesta.data;
      console.log("Vuelos cargados:", vuelos.value.length);
      return vuelos.value;
    } catch (err) {
      error.value = "Error al cargar : " + err.message;
      console.error(error.value);
      throw err;
    }
  }
  async function obtenerOrigenes() {

    for (let i = 0; i < vuelos.value.length; i++) {
      console.log(vuelos.value[i].origen)
      if (!origenes.value.includes(vuelos.value[i].origen)) {
        const nuevoOrigen={nombre: vuelos.value[i].origen}
        origenes.value.push(nuevoOrigen)
      }
    }
    console.log(origenes.value)
  }
  async function obtenerDestinos() {

    for (let i = 0; i < vuelos.value.length; i++) {
      console.log(vuelos.value[i].destino)
      if (!destinos.value.includes(vuelos.value[i].destino)) {
        const nuevoDestino={nombre: vuelos.value[i].destino}
        destinos.value.push(nuevoDestino)
      }
    }
    console.log(destinos.value)
  }
  


  return {
    vuelos,
    reservas,
    origenes,
    destinos,
    error,


    cargarVuelos,
    obtenerOrigenes,
    obtenerDestinos,
  }

})
