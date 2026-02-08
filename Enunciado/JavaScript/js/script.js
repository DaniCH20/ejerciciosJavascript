// fichero script.js para manejar la validación  y lógica del carné de socio

function validarFormulario(nombre) {
    const errores = [];
    const nombresinvalidos = ["Doraemon", "Nobita", "Shizuka", "Gigante", "Suneo"];
    
    // Validación 1: Solo letras (mayúsculas, minúsculas, acentos) y espacios
    if (!nombre || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        errores.push('El nombre solo puede contener letras (mayúsculas, minúsculas, acentos) y espacios.');
    }
    
    // Validación 2: Al menos una mayúscula y una minúscula
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(nombre)) {
        errores.push('El nombre debe contener al menos una mayúscula y una minúscula.');
    }
    
    // Validación 3: No puede ser un personaje principal
    if (nombresinvalidos.includes(nombre)) {
        errores.push('El nombre no puede ser igual al de los personajes principales.');
    }

    return errores;
}

function mostrarErrores(errores) {
    const mensajeError = document.getElementById('mensajeError');
    
    if (errores.length > 0) {
        // Crear lista HTML de errores
        const listaErrores = errores.map(error => `<li>${error}</li>`).join('');
        mensajeError.innerHTML = `
            <p style="color: red; font-weight: bold;">Errores encontrados:</p>
            <ul style="margin: 5px 0; padding-left: 20px;">${listaErrores}</ul>
        `;
        mensajeError.style.display = 'block';
        return false;
    } else {
        // Limpiar errores
        mensajeError.innerHTML = '';
        mensajeError.style.display = 'none';
        return true;
    }
}

function manejarEnvio(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombreSocio').value.trim();
    const personaje = document.getElementById('personaje').value;
    const vip = document.getElementById('esVip').checked;

    // Validar los datos
    const errores = validarFormulario(nombre);

    // Mostrar errores en el HTML
    if (!mostrarErrores(errores)) {
        return; // Detener si hay errores
    }

    // Crear nuevo socio
    const nuevoSocio = new Socio(nombre, personaje, vip);
    crearCarnet(nuevoSocio);
}

function crearCarnet(socio) {
    const configPersonajes = {
        "Doraemon": { 
            color: "#2980b9", 
            img: "img/doraemon.webp",
            nombreCompleto: "Doraemon"
        },
        "Nobita": { 
            color: "#f1c40f", 
            img: "img/nobita.webp",
            nombreCompleto: "Nobita Nobi"
        },
        "Shizuka": { 
            color: "#e84393", 
            img: "img/shizuka.webp",
            nombreCompleto: "Shizuka Minamoto"
        },
        "Gigante": { 
            color: "#d35400", 
            img: "img/gigante.webp",
            nombreCompleto: "Takeshi Goda (Gigante)"
        },
        "Suneo": { 
            color: "#2c3e50", 
            img: "img/suneo.webp",
            nombreCompleto: "Suneo Honekawa"
        }
    };

    const carne = document.getElementById('carne');
    const personajeConfig = configPersonajes[socio.personaje];
    
    if (!personajeConfig) {
        console.error('Personaje no encontrado:', socio.personaje);
        return;
    }

    // Determinar tipo de socio
    const tipoSocio = socio.vip ? "Socio VIP" : "Socio Básico";

    // Crear HTML del carnet
    carne.innerHTML = `
        <div id="tarjeta" style="background-color: ${personajeConfig.color}">
            <img src="${personajeConfig.img}" alt="${socio.personaje}" class="tarjeta-img"><br>
            <p>${socio.nombre}</p><br>
            <p>${tipoSocio}</p>
        </div>
    `;

}




function inicializarFormulario() {
    // Limpiar formulario y mensajes al cargar
    document.getElementById('formularioSocio').reset();
    document.getElementById('mensajeError').innerHTML = '';
    document.getElementById('carne').innerHTML = '';
    
    // Agregar placeholder dinámico
    const nombreInput = document.getElementById('nombreSocio');
    nombreInput.placeholder = "Ej: Juan Pérez";
    
    // Agregar validación en tiempo real
    nombreInput.addEventListener('input', function() {
        const nombre = this.value.trim();
        const errores = validarFormulario(nombre);
        mostrarErrores(errores);
    });
    
    // Agregar estilos para errores
    if (!document.getElementById('estilos-error')) {
        const estilosError = document.createElement('style');
        estilosError.id = 'estilos-error';
        estilosError.textContent = `
            #mensajeError {
                background: #f8d7da;
                border: 1px solid #f5c6cb;
                border-radius: 5px;
                padding: 10px;
                margin-top: 10px;
                display: none;
            }
            
            #mensajeError ul {
                margin: 5px 0;
                padding-left: 20px;
            }
            
            #mensajeError li {
                margin-bottom: 3px;
            }
            
            .error-input {
                border: 2px solid #dc3545 !important;
                background-color: #fff8f8;
            }
            
            .success-input {
                border: 2px solid #28a745 !important;
            }
        `;
        document.head.appendChild(estilosError);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarFormulario();
    
    const button = document.getElementById('btnGenerar');
    const formulario = document.getElementById('formularioSocio');
    
    button.addEventListener('click', manejarEnvio);
    
    // También manejar submit del formulario
    formulario.addEventListener('submit', manejarEnvio);
});