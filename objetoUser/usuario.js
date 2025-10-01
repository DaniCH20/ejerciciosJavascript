export class usuario {
  constructor(nombre, apellido, dni, nacimiento, provincia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.provincia = provincia;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getDni() {
    return this.dni;
  }
  getNacimiento() {
    return this.nacimiento;
  }
  getProvincia() {
    return this.provincia;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }
  setDni(dni) {
    this.dni = dni;
  }
  setNacimiento(nacimiento) {
    this.nacimiento = nacimiento;
  }
  setProvincia(provincia) {
    this.provincia = provincia;
  }
  getLogin() {
    var login =
      this.nombre.charAt(0) +
      this.apellido.charAt(0) +
      this.nacimiento.toString().slice(-2);
    return login;
  }
  toString() {
    return `${this.nombre}${this.apellido}${this.dni}${this.nacimiento}${this.provincia}`;
  }
  toHtml() {
    return `<ul><li>Nombre: ${this.nombre}</li><li>Apellido: ${this.apellido}</li><li>DNI: ${this.dni}</li><li>Nacimiento: ${this.nacimiento}</li><li>Provincia: ${this.provincia}</li></ul>`;
  }
}
var usuario1 = new usuario("Juan", "Andres", 12345678, 1990, "Buenos Aires");
var usuario2 = new usuario("Maria", "Gomez", 87654321, 1985, "Cordoba");
var usuario3 = new usuario("Pedro", "Lopez", 11223344, 2000, "Santa Fe");
var usuario4 = new usuario("Ana", "Martinez", 44332211, 1995, "Mendoza");
console.log(usuario1.getLogin());
console.log(usuario1.toString());
document.body.innerHTML +=
  "DNI:" + usuario1.getDni() + "<br>" + "Login:" + usuario1.getLogin() + "<br>";
document.body.innerHTML += usuario1.toHtml();

console.log(usuario2.getLogin());
console.log(usuario2.toString());
document.body.innerHTML +=
  "DNI:" + usuario2.getDni() + "<br>" + "Login:" + usuario2.getLogin() + "<br>";

document.body.innerHTML += usuario2.toHtml();

console.log(usuario3.getLogin());
console.log(usuario3.toString());
document.body.innerHTML +=
  "DNI:" + usuario3.getDni() + "<br>" + "Login:" + usuario3.getLogin() + "<br>";

document.body.innerHTML += usuario3.toHtml();

console.log(usuario4.getLogin());
console.log(usuario4.toString());
document.body.innerHTML +=
  "DNI:" + usuario4.getDni() + "<br>" + "Login:" + usuario4.getLogin() + "<br>";

document.body.innerHTML += usuario4.toHtml();
