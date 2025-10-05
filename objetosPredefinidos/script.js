window.addEventListener("load", inicio, true);
let meses = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];
window.onload = function () {
  let presente = new Date();

  let mess = presente.getMonth();
  let dia = presente.getDate();
  let anio = presente.getFullYear();
  let horas = presente.getHours();
  let minutos = presente.getMinutes();

  document.getElementById("presenteMes").value = meses[mess];
  document.getElementById("presenteDia").value = dia;
  document.getElementById("presenteAno").value = anio;
  document.getElementById("presenteHora").value = horas;
  document.getElementById("presenteMinuto").value = minutos;
};
function inicio() {
  document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas() {
  let desmes = document.getElementById("destinoMes").value;
  let desdia = parseInt(document.getElementById("destinoDia").value);
  let desanio = parseInt(document.getElementById("destinoAno").value);
  let deshoras = parseInt(document.getElementById("destinoHora").value);
  let desminutos = parseInt(document.getElementById("destinoMinuto").value);

  let premes = document.getElementById("presenteMes").value;
  let predia = parseInt(document.getElementById("presenteDia").value);
  let preanio = parseInt(document.getElementById("presenteAno").value);
  let prehoras = parseInt(document.getElementById("presenteHora").value);
  let preminutos = parseInt(document.getElementById("presenteMinuto").value);

  let fechaDestino = new Date(
    desanio,
    meses.indexOf(desmes),
    desdia,
    deshoras,
    desminutos
  );
  let fechaPresente = new Date(
    preanio,
    meses.indexOf(premes),
    predia,
    prehoras,
    preminutos
  );

  let diferencia = fechaDestino - fechaPresente;

  if (diferencia < 0) {
    diferencia = Math.abs(diferencia);
    let diferenciaSegundos = Math.floor(diferencia / 1000);
    let diferenciaMinutos = Math.floor(diferenciaSegundos / 60);
    let diferenciaHoras = Math.floor(diferenciaMinutos / 60);
    let diferenciaDias = Math.floor(diferenciaHoras / 24);
    let diferenciaAnios = Math.floor(diferenciaDias / 365);
    let mensaje = `Viajaras al pasado  ${diferenciaAnios} años, 
        ${diferenciaDias % 365} días, ${diferenciaHoras % 24} horas, ${
      diferenciaMinutos % 60
    } minutos para llegar a la fecha destino.`;
    const mip = document.getElementById("mensaje");
    mip.textContent = mensaje;

    return;
  } else if (diferencia === 0) {
    const mip = document.getElementById("mensaje");
    mip.textContent = "¡La fecha destino es la misma que la fecha presente!";
    return;
  } else {
    let diferenciaSegundos = Math.floor(diferencia / 1000);
    let diferenciaMinutos = Math.floor(diferenciaSegundos / 60);
    let diferenciaHoras = Math.floor(diferenciaMinutos / 60);
    let diferenciaDias = Math.floor(diferenciaHoras / 24);
    let diferenciaAnios = Math.floor(diferenciaDias / 365);
    let mensaje = `Viajaras al futuro  ${diferenciaAnios} años, 
        ${diferenciaDias % 365} días, ${diferenciaHoras % 24} horas, ${
      diferenciaMinutos % 60
    } minutos para llegar a la fecha destino.`;
    const mip = document.getElementById("mensaje");
    mip.textContent = mensaje;

    return;
  }
}
