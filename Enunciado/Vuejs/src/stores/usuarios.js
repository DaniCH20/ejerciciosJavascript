import { defineStore } from 'pinia'
import axios from 'axios';
/**
 * Store de ejemplo - Los alumnos deberán crear su propio store
 * para gestionar la lista de vehículos en revisión
 */
export const userStore = defineStore('user', {
    state: () => ({
        usuarioAutenticado: [],
        usuarios: []
    }),

    getters: {
        
    },

    actions: {
        cargarUsuarios() {
            axios.get('.public/data/usuarios.json')
                .then((respuesta) => {
                    this.usuarios = respuesta.data.results
                })
        },
        verificarUsuario(email, password) {
            const posicionUser = this.usuarios.findIndex(el => el.email == email);
            const posicionPassword = this.usuarios.findIndex(el => el.password == password);
            if (posicionUser == posicionPassword && posicionUser != -1) {
                alert("Usuario correcto");
                this.usuarioAutenticado = this.usuarios[posicionUser];
            }
            else {
                this.usuarioAutenticado = [];
            }
            return this.usuarioAutenticado;
        },


    }
})
