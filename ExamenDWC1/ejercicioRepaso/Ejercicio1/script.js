const numeros =[];
  for(let i =0 ; i<10 ;i++){
        numeros.push(Math.floor(Math.random() * (100 - 1) ) + 1);
        
    }
recorrerFor();
numeros.forEach(recorrerForEach)
for (let value of numeros) {
  if(value%2!==0){
    console.log("for of:",value);
  }
  
}
const mayoresque50 = numeros.filter(filtrado);
console.log("Numeros Mayores que 50: ",mayoresque50);
const sumaTotal=numeros.reduce(reducir);
console.log("Suma Total:",sumaTotal);

function recorrerFor(){
    for(let i =0 ; i<numeros.length ;i++){
        console.log("for: ",numeros[i])
    }
}

function recorrerForEach(value){
    if(value%2===0){
        console.log("forEach:",value);

    }
}

function filtrado(value){
     return value > 50;
}

function reducir(total,value){
    return total+value;
}

const promedio = numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
console.log("Promedio:",promedio);