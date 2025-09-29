export function listaUsuarios() {
  function eliminarprincipio(usuario) {
    return usuario.shift();
  }
  function eliminarfinal(usuario) {
    return usuario.pop();
  }
  function mostrar(usuario) {
    return console.log(usuario);
  }
  function buscar(usuario, name) {
    if (usuario.find((user) => user.nombre === name)) {
      console.log("El usuario " + name + " está en la lista");
    } else {
      console.log("El usuario "+name+" no está en la lista");
    }
  }
  function buscarnacimiento(usuario, year) {
    let alumn =usuario.find((user) => user.nacimiento === year)
    if (alumn) {
      console.log("El usuario "+alumn.nombre+" nacio el "+ year +" asi que si esta en la lista");
    } else {
      console.log("El usuario no está en la lista");
    }
  }

  return { eliminarprincipio, eliminarfinal, mostrar, buscar, buscarnacimiento };
}
