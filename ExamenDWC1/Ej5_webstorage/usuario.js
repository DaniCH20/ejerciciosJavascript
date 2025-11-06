
// Ejercicio 5 - Web Storage

  // Si hay usuario en localStorage -> mostrar "Bienvenido de nuevo" y botón cerrar sesión
  // Si no, mostrar formulario

  // Guardar usuario en localStorage si no está vacío

  // Borrar usuario de localStorage y restaurar formulario

if(localStorage.getItem("usuario")){
  alert("Bienvenido de nuevo ",localStorage.getItem("usuario"))

}else{
 alert("Bienvenido de nuevo ",localStorage.getItem("usuario"))
}


document.getElementById("formUsuario").addEventListener("submit",guardarNombre);

function guardarNombre(){
  localStorage.setItem("usuario")=document.getElementById("nombreUsuario").value;
}