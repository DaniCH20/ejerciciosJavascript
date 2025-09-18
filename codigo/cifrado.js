function cifrado(){
   let mensaje;
    let caracter;
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'm','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    mensaje = prompt("Ingresa tu mensaje");
    let cifrado = "";
    for (let i = 0; i < mensaje.length; i++) {//recorre los caracteres del mensaje
       caracter = mensaje.charAt(i);
       let encontrado = false;

       for (let l = 0; l < letras.length; l++) {//recorre el array de las letras
           if (caracter.toLowerCase() === letras[l]) {//si encuentra la letra 
               cifrado += letras[(l + 3) % letras.length];//le suma 3 posiciones
               encontrado = true;
               break;
           }
       }

       if (!encontrado) {
           cifrado += caracter; 
       }
   }
console.log("Array de caracteres:", cifrado.toUpperCase());
   document.getElementById("msj").innerHTML =
    "Tu mensaje es  <b>" + mensaje + "</b><br>"+
    "Te mensaje cifrado: <span style='color:black; font-weight:bold'>" + cifrado.toUpperCase() + "</span>";

}
function descifrar(){//lo mismo pero al reves
    let mensaje;
    let caracter;
    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l', 'm','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    mensaje = prompt("Ingresa tu mensaje cifrado");
    let descifrado  = "";
    for (let i = 0; i < mensaje.length; i++) {
       caracter = mensaje.charAt(i);
       let encontrado = false;

       for (let l = 0; l < letras.length; l++) {
           if (caracter.toLowerCase() === letras[l]) {
               descifrado += letras[(l - 3 + letras.length) % letras.length];
               encontrado = true;
               break;
           }
       }
       if (!encontrado) {
           descifrado += caracter;
       }
   }
console.log("Array de caracteres:", descifrado.toUpperCase());
   document.getElementById("caracter").innerHTML =
    "Tu mensaje cifrado es  <b>" + mensaje + "</b><br>"+
    "Te mensaje descifrado: <span style='color:black; font-weight:bold'>" + descifrado.toUpperCase() + "</span>";

}