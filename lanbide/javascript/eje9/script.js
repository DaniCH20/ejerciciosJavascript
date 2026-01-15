let button = document.getElementById("agregar");
button.addEventListener("click", function () {
  let lista = document.getElementById("lista");
  let numero =document.getElementById("numero").value;
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = numero;
  lista.appendChild(nuevoElemento);
  let listas= document.querySelectorAll("li");
  let suma=0;
    for (let i = 0; i < listas.length; i++) {
        suma += parseInt(listas[i].textContent);
    }
    document.getElementById("resultado").innerText = "Suma: " + suma;

});
/*
 1.- Verdadero , falso , falso , Verdadero .
por que a y b tienen el numero 5 pero no el mismo tipo de dato.
2.-
let edad=18;
let pais="Mexico"
if ( edad == 18 && pais =="Mexico"  ) {
  console.log("Puede votar");
} else {
  console.log("No puede votar");
}
3.-
let x = 10;
let resultado = x > 5 ? "Mayor" : "Menor";
console.log(resultado)
El resultado es Mayor
4.-
let numeros = [3, 7, 2, 9, 4,25];
numeros.push(10)
console.log(numeros)
numeros.shift()
console.log(numeros)
console.log(numeros.length)
let maximo =0; 
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}
console.log(maximo);
5.-Devuelve las frutas en mayuscula 
6.-  
  for (let i=1 ;i<11 ;i++){
  console.log(i)
}
7.-    let num=0
while(num<50){
  num++;
}
console.log(num)
  8.- break finaliza el bucle y continue salta a la siguiente iteracion
  9.-
  num=7;
espar(num);
function espar(num){
  if(num % 2 ){
    console.log(num+"es impar")
  }else{
    console.log(num+"es par")
  }
  
}
  10.- calcular([2, 4, 6]); 

function calcular(numeros){
  let total=0
  for(let i=0 ;i<numeros.length ;i++){
    total+=numeros[i]
  }
  let promedio=total/numeros.length;
  console.log(total)
   console.log(promedio)
}
11.- let button=document.getElementById('button')
button.addEventListener("click" , cambiar)
function cambiar(){
  document.getElementById('mensaje').innerText("Texto cambiado")
}
12.- cambia el color a todos los li de la lista de el querySelectorAll                               
13.-let button = document.getElementById("button");
button.addEventListener("click", function () {
  let lista = document.getElementById("lista");
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Nuevo elemento";
  lista.appendChild(nuevoElemento);
});
14.- let button = document.getElementById("agregar");
button.addEventListener("click", function () {
  let lista = document.getElementById("lista");
  let numero =document.getElementById("numero").value;
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = numero;
  lista.appendChild(nuevoElemento);
  let listas= document.querySelectorAll("li");
  let suma=0;
    for (let i = 0; i < listas.length; i++) {
        suma += parseInt(listas[i].textContent);
    }
    document.getElementById("resultado").innerText = "Suma: " + suma;

});
*/