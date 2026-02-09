/**
 * Clase Reserva - Contenedor de datos de una reserva
 * 
 * Solo almacena la información de la reserva.
 * Los cálculos se realizan en app.js
 */
class Reserva {
  constructor( codigoVuelo, clase , peso){
    this.codigoVuelo=codigoVuelo;
    this.clase=clase;
    this.peso=peso;
  }
}
