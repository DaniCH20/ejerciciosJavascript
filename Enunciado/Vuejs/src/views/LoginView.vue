<template>
    <h2>
        Acceso Empleados
    </h2>
    <p>Inicia Sesion para gestionar reservas</p>
    <form @submit.prevent>
        <p>
            <label for="username">Email: </label>
            <input type="email" id="username" placeholder="Introduce tu email" v-model="emailUser">
        </p>

        <p>
            <label for="pass">Password: </label>
            <input id="pass" type="password" v-model="passUser" placeholder="Introduce tu contraseña">
        </p>
        <br>
        <span v-if:="!autenticado">Introduce las credenciales correctas</span>
        <br>
        <button value="Login usuario" @click="comprobarUsuario">Login Usuario</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import { userStore } from '../stores/usuarios';
 import { mapState, mapActions } from 'pinia'
const emailUser = ref('');
const passUser = ref('');
const autenticado = ref('');
export default {
    data() {
        return {
            usuarios: [],
            userName: '',
            passUsuario: '',
        }
    },
    mounted() {
        this.cargarUsuarios();
    },
    methods: {
        ...mapActions(userStore, ['cargarUsuarios', 'verificarUsuario']),

        hacerComprobacion() {

            autenticado = this.verificarUsuario(emailUser, passUser)
        }
    },
}
</script>
<style></style>