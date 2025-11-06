
// Ejercicio 1 - Arrays y sintaxis básica

let peliculas = [
  { titulo: "Dune: Parte Dos", director: "Denis Villeneuve", anio: 2025, categoria: "Ciencia Ficción", valoracion: 8.5 },
  { titulo: "Inside Out 2", director: "Kelsey Mann", anio: 2023, categoria: "Animación", valoracion: 7.8 },
  { titulo: "Mufasa: The Lion King", director: "Barry Jenkins", anio: 2024, categoria: "Aventura", valoracion: 8.0 }
];

// FUNCIONES


// - buscarPorTitulo(titulo)
// - mediaValoraciones()
mayusculas()
peliculasPorCategoria("Animación")
buscarPorTitulo("Dos")
mediaValoraciones()
function mayusculas(){
  for (let i=0; i<peliculas.length;i++){
     var tituloM =peliculas[i].titulo.toUpperCase()
     console.log(tituloM)
  }
}

function peliculasPorCategoria(categoria){
  let pelisCategoria=[];
  for (let i=0; i<peliculas.length;i++){
    if( categoria == peliculas[i].categoria){
      pelisCategoria.push(peliculas[i].titulo)
    }
  }
   return pelisCategoria;
}
function buscarPorTitulo(titulo){
   let pelisTitulo=[];
  for (let i=0; i<peliculas.length;i++){
    if( peliculas[i].titulo.includes( titulo)){
      pelisTitulo.push(peliculas[i].titulo)
    }
  }
  return pelisTitulo;
}
function mediaValoraciones(){
  let media=0;
  for (let i=0; i<peliculas.length;i++){
       media += peliculas[i].valoracion
     
  }
  let mediaReal=media /peliculas.length
  return mediaReal;
}
