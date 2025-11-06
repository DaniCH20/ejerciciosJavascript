
// Ejercicio 3 - DOM y eventos

let peliculas = [
  { titulo: "Matrix" },
  { titulo: "El Padrino" },
  { titulo: "Inception" }
];
const button= document.getElementById("btnMostrar");
button.addEventListener("click",insertarPeliculas());
 function insertarPeliculas(){

    for (let i=0; i<peliculas.length;i++){
      const peli=document.getElementById("listaPeliculas").appendChild(document.createElement("li")).innerText=peliculas[i].titulo
      peli.documentElement.addEventListener("mouseover",hover(peli));
      peli.documentElement.addEventListener("mouseout",out(peli));
    }
  }
// Al pulsar el botón debes recorrer el array y mostrar cada título como <li>

 
  // Al pasar el ratón por encima, pone el texto en negrita
document.getElement("li").addEventListener("mouseover",hover(this));

function hover(element){
  element.style.fontWeight="bold";
}
  // Al quitar el ratón, vuelve al estilo normal
document.getElement("li").addEventListener("mouseout",out(this));
function out(element){
  element.style.fontWeight="normal";
}