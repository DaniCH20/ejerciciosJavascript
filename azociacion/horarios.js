function horarioMañana() {
  // Obtener la referencia donde estara la tabla
  var body = document.getElementsByTagName("body")[0];

  // los elementos de la tabla
  var tabla = document.createElement("table");
  var tblHead = document.createElement("thead");
  var tblBody = document.createElement("tbody");

  var encabezado = document.createElement("tr");
  var dias = ["", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  for (var j = 0; j < 6; j++) {
    //crear las celdas del encabezado y asignar su contenido segun la posicion del array
    var celda = document.createElement("th");
    var textoCelda = document.createTextNode(dias[j]);

    celda.appendChild(textoCelda);
    encabezado.appendChild(celda);
  }
  tblHead.appendChild(encabezado);

  // Crea las celdas
  for (var i = 0; i < 3; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    var horas = ["09:00 - 11:00 ", "11:00 - 13:00", "13:00 - 15:00"];
    for (var j = 0; j < 6; j++) {
      //lo mismo pero con el cuerpo de la tabla
      var celda;
      if (j == 0) {
        celda = document.createElement("th");
        var textoCelda = document.createTextNode(horas[i]);
      } else {
        celda = document.createElement("td");
        var textoCelda = document.createTextNode("");
      }

      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla

    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblHead);
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
  horariotarde()
}
function horariotarde() {
  // Obtener la referencia donde estara la tabla
  var body = document.getElementsByTagName("body")[0];

  // los elementos de la tabla
  var tabla = document.createElement("table");
  var tblHead = document.createElement("thead");
  var tblBody = document.createElement("tbody");

  var encabezado = document.createElement("tr");
  var dias = ["", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado","Domingo"];
  for (var j = 0; j < 8; j++) {
    //crear las celdas del encabezado y asignar su contenido segun la posicion del array
    var celda = document.createElement("th");
    var textoCelda = document.createTextNode(dias[j]);

    celda.appendChild(textoCelda);
    encabezado.appendChild(celda);
  }
  tblHead.appendChild(encabezado);

  // Crea las celdas
  for (var i = 0; i < 5; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    var horas = ["16:00 - 17:00 ", "17:00 - 18:00",
         "18:00 - 19:00","19:00 - 20:00","20:00 - 21:00"];
    for (var j = 0; j < 8; j++) {
      //lo mismo pero con el cuerpo de la tabla
      var celda;
      if (j == 0) {
        celda = document.createElement("th");
        var textoCelda = document.createTextNode(horas[i]);
      } else {
        celda = document.createElement("td");
        var textoCelda = document.createTextNode("");
      }

      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla

    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblHead);
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
