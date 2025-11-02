let nombre = "Juan";   // Variable de bloque (más común)
const PI = 3.1416;     // Constante (no cambia)
var edad = 25;         // Antiguo, tiene alcance de función (evítalo)
/*
Aritméticos: + - * / % **
Asignación: = += -= *= /=
Comparación: == != === !== > < >= <=
Lógicos: && || !
*/
let resultado = (edad >= 18) ? "Adulto" : "Menor";
//---------------------------------------------Funcion normal
function saludar(nombre) {
  return "Hola " + nombre;
}
//--------------------------------------------Función flecha
const saludar = (nombre) => "Hola " + nombre;
//------------------------------------------------------------------Arrays
let numeros = [1, 2, 3, 4];
numeros.push(5); // añade
numeros.pop();   // quita último
numeros.length;  // longitud
function comprobarArray(miArray) {
  let errores = [];
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] !== i + 1) {
      errores.push(`Error en la posición ${i}, hay un ${miArray[i]} cuando se esperaba un ${i + 1}`);
    }
  }
  if (errores.length === 0) {
    document.write("El array es correcto");
    return true;
  } else {
    errores.forEach(e => document.write(e + "<br>"));
    return false;
  }
}
let miArray = [1, 2, 3, 9, 5, 6, 7, 8, 9];
comprobarArray(miArray);
//------------------------------------------------------------Gestion de temporizadores
let timer = setTimeout(() => alert("¡Corre, mete ya el password!"), 10000);
clearTimeout(timer); // para cancelarlo
//------------------------------------------------------------------Objetos y clases
class Jugador {
  constructor(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas) {
    this.nombre = nombre;
    this.numeroVidas = numeroVidas;
    this.tienePistola = tienePistola;
    this.tieneGranada = tieneGranada;
    this.numeroBalas = tienePistola ? numeroBalas : 0;
  }

  set nombreJugador(nuevoNombre) { this.nombre = nuevoNombre; }
  get nombreJugador() { return this.nombre; }

  toString() {
    return `El jugador ${this.nombre} tiene ${this.numeroVidas} vidas, ${this.tienePistola ? `tiene pistola con ${this.numeroBalas} balas` : 'no tiene pistola'} y ${this.tieneGranada ? 'granada' : 'no granada'}`;
  }
}
let jugadores = [
  new Jugador("Pepe", 3, true, false, 2),
  new Jugador("Ana", 2, false, true, 0),
  new Jugador("Luis", 1, true, true, 3)
];

function imprime() {
  jugadores.forEach(j => document.write(j.toString() + "<br>"));
}

function ruletaRusa() {
  let elegido = Math.floor(Math.random() * jugadores.length);
  jugadores[elegido].numeroVidas = 0;
}

imprime();
ruletaRusa();
imprime();
//-----------------------------------------------------------Validación de formularios
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const boton = document.getElementById("meterPassword");
const mensaje = document.getElementById("mensaje");

// a) Vaciar al enfocar
[usuario, password].forEach(input => input.addEventListener("focus", () => input.value = ""));

// b y c) Validaciones
password.addEventListener("blur", () => {
  let pass = password.value;
  if (pass.length < 7 || pass.length > 15) {
    mensaje.textContent = "El password debe tener entre 7 y 15 caracteres.";
    return;
  }
  if (!(/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /\d/.test(pass))) {
    mensaje.textContent = "Debe tener mayúscula, minúscula y número.";
    return;
  }
  mensaje.textContent = "";
});

// d) Temporizador
let timers = setTimeout(() => mensaje.textContent = "¡Corre, mete ya el password!", 10000);

// e) Botón
boton.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(timers);
  if (usuario.value && mensaje.textContent === "") {
    mensaje.textContent = "Los datos introducidos son válidos";
  }
});

