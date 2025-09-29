var usuario = [
  { nombre: "daniel", nacimiento: 2000 },
  { nombre: "ana", nacimiento: 2005 },
  { nombre: "sofia", nacimiento: 2003 },
];

import { listaUsuarios } from "./array.js";

const crearUsuario =function () {
  function anadirprincipio(name, year) {
    let nuevo = { nombre: name, nacimiento: year };
    console.log(nuevo);
     usuario.unshift(nuevo);
     return usuario;
  }
  function anadirfinal(name , year) {
     let nuevo = { nombre: name, nacimiento: year };
    console.log(nuevo);
    usuario.push(nuevo);
    return usuario;
  } 

  return { anadirprincipio, anadirfinal };
}
const usuarioFinal=crearUsuario();
listaUsuarios().mostrar(usuario);
usuarioFinal.anadirprincipio("maria", 1999);
listaUsuarios().mostrar(usuario);
usuarioFinal.anadirfinal("juan", 2001);
listaUsuarios().mostrar(usuario);
listaUsuarios().buscar(usuario, "ana");
listaUsuarios().eliminarprincipio(usuario);
listaUsuarios().mostrar(usuario);
listaUsuarios().eliminarfinal(usuario);
listaUsuarios().buscarnacimiento(usuario, 2003);

console.log(usuario);
