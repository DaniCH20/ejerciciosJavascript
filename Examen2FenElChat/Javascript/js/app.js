// Toda la lógica de la aplicación se encuentra en este archivo, app.js

let button = document.getElementById('calcular');
button.addEventListener('click', formulario)
function validar(cvuelo, peso) {
    const errores = [];
    if (!/^[A-Za-z0-9]+$/.test(cvuelo)) {
        errores.push('El codigo de vuelo debe contener dos letras matusculas y 4 numeros')
    }
    if (peso > 100) {
        errores.push('El peso tiene que ser menor a 100 kg')

    }
    return errores

}
function formulario() {
    const codigo = document.getElementById('codigo').value.trim();
    const clase = document.getElementById('clase').value;
    const peso = document.getElementById('peso').value;

   
    const errores = validar(codigo, peso);

   
    if (!mostrarErrores(errores)) {
        return; 
    }
    const nuevaReserva = new Reserva(codigo, clase, peso);
    crearReserva(nuevaReserva);
}
function crearReserva(reserva) {
    const resultado = document.getElementById('resultado');
    let clase = reserva.clase;
    let peso = reserva.peso;
    let exceso = 0;
    let cargo = 0;
    
    if (peso > 20) {
        exceso = peso - 20;
        cargo = exceso * 10;
    }
    if (clase == 'Business') {
        cargo += 50;
    }
    console.log(exceso, cargo)
    if (exceso > 0) {
        resultado.innerHTML = ` <p>Exceso: ${exceso}</p><br>
                        Total :<p style="color: red;"> ${cargo}</p>`
    } else {
        resultado.innerHTML = ` <p>Exceso: ${exceso}</p><br>
                        <b>Total :<b><p style="color: green;"> ${cargo}</p>`
    }

}

function mostrarErrores(errores) {
    const mensajeError = document.getElementById('resultado');
    
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
        
        mensajeError.innerHTML = '';
        mensajeError.style.display = 'none';
        return true;
    }
}