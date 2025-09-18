/*
Crea un programa que solicite al usuario su altura en centímetros y su peso en kilogramos, y que devuelva el índice de masa corporal mostrado en la pantalla (en el cuerpo de la página).

Además de mostrar el resultado, se mostrará esta escala y se marcará de alguna manera la clasificación correspondiente (negrita, subrayado, resaltado en color...):

< 16.00: Peso inferior al normal (delgadez severa)
16.00 – 16.99: Peso inferior al normal (delgadez moderada)
17.00 - 18.49: Peso inferior al normal (delgadez aceptable)
18.50 - 24.99: Peso normal
25.00 - 29.99: Sobrepeso
30.00 - 34.99: Obesidad (tipo I)
35.00 - 40.00: Obesidad (tipo II)
> 40.00: Obesidad (tipo III)
Además, verificará que no se han introducido valores incorrectos para el peso y la altura y, en ese caso, solicitará los datos nuevamente.
*/
function calcular() {
        let altura, peso;

 
        do {
          altura = parseFloat(prompt("Ingrese su altura en cm:"));
        } while (isNaN(altura) || altura <= 0);

    
        do {
          peso = parseFloat(prompt("Ingrese su peso en kg:"));
        } while (isNaN(peso) || peso <= 0);

      
        let alturaM = altura / 100;
        let imc = peso / (alturaM * alturaM);

        let clasificacion = "";

        if (imc < 16.0) {
          clasificacion = "Peso inferior al normal (delgadez severa)";
        } else if (imc <= 16.99) {
          clasificacion = "Peso inferior al normal (delgadez moderada)";
        } else if (imc <= 18.49) {
          clasificacion = "Peso inferior al normal (delgadez aceptable)";
        } else if (imc <= 24.99) {
          clasificacion = "Peso normal";
        } else if (imc <= 29.99) {
          clasificacion = "Sobrepeso";
        } else if (imc <= 34.99) {
          clasificacion = "Obesidad (tipo I)";
        } else if (imc <= 40.00) {
          clasificacion = "Obesidad (tipo II)";
        } else {
          clasificacion = "Obesidad (tipo III)";
        }

        
        document.getElementById("resultado").innerHTML =
          "Tu IMC es <b>" + imc.toFixed(2) + "</b><br>" +
          "Clasificación: <span style='color:black; font-weight:bold'>" + clasificacion + "</span>";
      }