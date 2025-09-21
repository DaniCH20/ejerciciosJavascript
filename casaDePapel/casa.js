
// En 'La casa de papel', los atracadores tienen nombres de ciudades (Tokio, Berlín, Moscú, Nairobi...).
//  La policía no sabe cuál es un nombre de atracador y cuál es un nombre de ciudad. Dado que es una capital, 
// crea un programa que indique si uno de los nombres seleccionados por el 'Profesor' para un miembro de su equipo 
// es o no uno de los nombres. Pero no te conformes con una única forma: encuentra al menos 5 formas diferentes
//  de resolverlo... ¡o más!
function casa1(){
    // Usando array
    const capitalesDelMundo = [
        "Kabul","Tirana",       
        "Argel","Andorra la Vieja", 
        "Luanda","Buenos Aires", 
        "Ereván",       
        "Canberra",     
        "Viena",        
        "Bakú",         
        "Nassau",       
        "Manama",       
        "Daca",         
        "Bridgetown",   
        "Minsk",        
        "Bruselas",    
        "Belmopán",     
        "Porto-Novo",  
        "Thimphu",      
        "La Paz",       
    ];
    let nombreAtracador = prompt("Introduzca el nombre del atracador");
    let esCapital = false;

    for (let i = 0; i < capitalesDelMundo.length; i++) {
        if (capitalesDelMundo[i] === nombreAtracador) {
            esCapital = true;
            break;
        }
    }
    if(!esCapital){
        alert("No es capital");
    }else{
        alert("Es capital");
    }

}
function casa2(){
   // Usando Google
    let nombreAtracador = prompt("Introduzca el nombre del atracador");

  window.open("https://www.google.com/search?q=" + nombreAtracador + " es una capital", "_blank");

}
function casa3(){
    // Usando Set
    const setCapital = new Set();
    setCapital.add("Ottawa");
    setCapital.add("La Paz");
    setCapital.add("Washington D.C.");
    setCapital.add("Andorra la Vieja");
    setCapital.add("Roma");
    setCapital.add("Buenos Aires");
    setCapital.add("Ereván");
    setCapital.add("Madrid");
    setCapital.add("Lima");
    let nombreAtracador = prompt("Introduzca el nombre del atracador");
    if(setCapital.has(nombreAtracador)){

        alert("Es capital");
    }else{
        alert("No es capital");
    }
}
function casa4(){
    // Ignorar mayúsculas y minúsculas
    const capitalesDelMundo = [
        "Kabul","Tirana",       
        "Argel","Andorra la Vieja", 
        "Luanda","Buenos Aires", 
        "Ereván",       
        "Canberra",     
        "Viena",        
        "Bakú",         
        "Nassau",       
        "Manama",       
        "Daca",         
        "Bridgetown",   
        "Minsk",        
        "Bruselas",    
        "Belmopán",     
        "Porto-Novo",  
        "Thimphu",      
        "La Paz",       
    ];
    let nombreAtracador = prompt("Introduzca el nombre del atracador");
    let esCapital = false;

    for (let i = 0; i < capitalesDelMundo.length; i++) {
        if (capitalesDelMundo[i].localeCompare(nombreAtracador, undefined, { sensitivity: 'accent' }) === 0) {
            esCapital = true;
            break;
        }
    }
    if(!esCapital){
        alert("No es capital");
    }else{
        alert("Es capital");
    }

}