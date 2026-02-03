// fichero script.js para manejar la validación  y lógica del carné de socio
class Socio {

    constructor(nombre, personaje, vip) {
        this.nombre = nombre;
        this.personaje = personaje;
        this.vip = vip;
    }
}
function validarFormulario(nombre) {
    const errores = [];
    const nombresinvalidos = ["Doraemon", "Nobita", "Shizuka", "Gigante", "Suneo"]
    
    if (!nombre || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        errores.push('El nombre solo puede contener letras mayusculas , minusculas  y espacios.');
    }
    if (nombresinvalidos.includes(nombre)) {
        errores.push('El nombre no puede ser igual al de los personajes principales.');
    }


    return errores;
}

function manejarEnvio(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombreSocio').value.trim();
    const personaje = document.getElementById('personaje').value.trim();
    const vip = document.getElementById('esVip').checked;
    const error = document.getElementById('mensajeError').value;

    // Validar los datos
    const errores = validarFormulario(nombre);

    if (errores.length > 0) {
        // Mostrar errores en un alert
        console.log(errores)
        return;
    }

    // Crear nuevo asistente
    const nuevoSocio = new Socio(nombre, personaje, vip);
    crearCarnet(nuevoSocio)


}
function crearCarnet(socio) {
    configPersonajes = {
        "Doraemon": { color: "#2980b9", img: "img/doraemon.webp" },
        "Nobita": { color: "#f1c40f", img: "img/nobita.webp" },
        "Shizuka": { color: "#e84393", img: "img/shizuka.webp" },
        "Gigante": { color: "#d35400", img: "img/gigante.webp" },
        "Suneo": { color: "#2c3e50", img: "img/suneo.webp" }
    }
    const carne = document.getElementById('carne');
    console.log(socio)
    let person = []
    person= configPersonajes.indexOf(socio.personaje)
    let sucio;
    if (socio.vip) {
        sucio = "Socio Vip"
    } else {
        sucio = "Socio Basico"
    }

    carne.innerHtml = `
          <div background-color="${person.color}" class="tarjeta">
            <img src='./${person.img}' class="tarjeta img" alt="img">
            <td>${socio.nombre}</td>
            <h2>${sucio}</h2>
          </div>
        `;

}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnGenerar');
    button.addEventListener('click', manejarEnvio);
});