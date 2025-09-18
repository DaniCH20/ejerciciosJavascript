function fcm() {
  let edad, sexo;


  do {
    edad = parseInt(prompt("Ingrese su edad:"));
  } while (isNaN(edad) || edad <= 0);

  
  do {
    sexo = prompt("Es usted Hombre o Mujer:").toLowerCase().trim();
  } while (sexo !== "hombre" && sexo !== "mujer");

  let fcm;

  if (sexo === "hombre") {
    fcm = 220 - edad;
  } else {
    fcm = 226 - edad;
  }

  let clasificacion = "";

  if (fcm <= 70) {
    clasificacion = "Zona de recuperación (% 60-70)";
  } else if (fcm <= 80) {
    clasificacion = "Zona aeróbica (% 70-80).";
  } else if (fcm <= 90) {
    clasificacion = "Zona anaeróbica (% 80-90).";
  } else {
    clasificacion = "Línea roja (% 90-100).";
  }

  document.getElementById("fcm").innerHTML =
    "Tu FCM es <b>" + fcm.toFixed(2) + "</b><br>" +
    "Te encuentras en : <span style='color:black; font-weight:bold'>" + clasificacion + "</span>";
}
