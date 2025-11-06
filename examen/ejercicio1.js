var array=[1,2,3,5,4,6,7,8,9];

//El script debería comprobar si hay algún número fuera de su posición, 
// informando al usuario. Se obtendrá mayor puntuación si se indican todas las posiciones
//  en las que se encuentra un error, y menos si solo se comprueba el primer caso. Por ejemplo,
//  en el array [1,2,3,9,5,6,7,8,9] se debería obtener el mensaje "Error en la posición 3, hay un 9 cuando se
//  esperaba un 4". En caso de que todos los elementos estén en la posición correcta, se mostrará un mensaje indicativo.
//  Los mensajes se mostrarán en la página Web a la que va asociada el script.
comprobarMyArray(array);
function comprobarMyArray(array){
    var error=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==i+1){
          console.log(`Error en la posición ${i}, hay un ${array[i]} cuando se esperaba un ${i+1}.<br>`);
            error++;
        }

    }   
    if(error>0){
        console.log("hay en total "+error+" errores.<br>");
        return false;
    }
    console.log("Todos los elementos están en la posición correcta.<br>");
    return true;
}