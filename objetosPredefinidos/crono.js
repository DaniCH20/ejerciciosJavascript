let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let control;

// Referencias a los elementos HTML
const H = document.getElementById("Horas");
const M = document.getElementById("Minutos");
const S = document.getElementById("Segundos");
const C = document.getElementById("Centesimas");
const tiempos = document.getElementById("tiempos");

function inicio() {
  control = setInterval(cronometro, 10);
  document.getElementById("inicio").disabled = true;
  document.getElementById("parar").disabled = false;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = false;
  document.getElementById("imprimir").disabled = false;
}

function parar() {
  clearInterval(control);
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = false;
}

function reinicio() {
  clearInterval(control);
  centesimas = segundos = minutos = horas = 0;
  actualizarPantalla();
  document.getElementById("inicio").disabled = false;
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = true;
}

// Función principal del cronómetro
function cronometro() {
  centesimas++;
  if (centesimas >= 100) {
    centesimas = 0;
    segundos++;
  }
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos >= 60) {
    minutos = 0;
    horas++;
  }
  actualizarPantalla();
}

// Muestra el tiempo en pantalla formateado con dos dígitos
function actualizarPantalla() {
  H.textContent = ("0" + horas).slice(-2);
  M.textContent = ":" + ("0" + minutos).slice(-2);
  S.textContent = ":" + ("0" + segundos).slice(-2);
  C.textContent = ":" + ("0" + centesimas).slice(-2);
}

// Imprime el tiempo actual en pantalla
function imprimir() {
  const tiempoActual =
    ("0" + horas).slice(-2) +
    ":" +
    ("0" + minutos).slice(-2) +
    ":" +
    ("0" + segundos).slice(-2) +
    ":" +
    ("0" + centesimas).slice(-2);

  tiempos.textContent = "Tiempo registrado: " + tiempoActual;
}
