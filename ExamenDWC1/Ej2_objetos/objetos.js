
// Ejercicio 2 - OBJETOS Y CLASES

// Clase Pelicula
// Constructor con: titulo, director, anio, categoria, valoracion
// Método mostrar() -> "Matrix (1999), dirigida por Wachowski, categoría: Ciencia Ficción"

// Crear al menos 2 objetos y meterlos en un array
// Recorrer y mostrar en consola
class pelicula{

    constructor( titulo, director, anio, categoria, valoracion){
        this.titulo=titulo;
        this.director=director;
        this.anio=anio;
        this.categoria=categoria;
        this.valoracion=valoracion;
    }
     getTitulo(){
        return this.titulo;
    }
     setTitulo(nuevoTitulo){
        this.titulo=nuevoTitulo;
    }
       getDirector(){
        return this.director;
    }
     setDirector(nuevoDirector){
        this.director=nuevoDirector;
    }
       getAnio(){
        return this.anio;
    }
     setAnio(nuevoAnio){
        this.anio=nuevoAnio;
    }
       getCategoria(){
        return this.categoria;
    }
     setCategoria(nuevoCategoria){
        this.categoria=nuevoCategoria;
    }
       getValoracion(){
        return this.valoracion;
    }
     setValoracion(nuevoValoracion){
        this.valoracion=nuevoValoracion;
    }
    mostrar(){
        return `${this.titulo} es dirigida por ${this.director} en la categoria de ${this.categoria}`
    }
}
let peli1 =new pelicula();
peli1.setTitulo("Mortadelo Y Filemon");
peli1.setDirector("Jimmy");
peli1.setAnio(2012);
peli1.setCategoria("comedia");
peli1.setValoracion(9);

let peli2 =new pelicula();
peli2.setTitulo("Sherk");
peli2.setDirector("DreamWorks");
peli2.setAnio(2005);
peli2.setCategoria("animacion")
peli2.setValoracion(10)
let array=[peli1,peli2]
for (let i=0; i<array.length;i++){
       console.log(array[i].mostrar())  
  }