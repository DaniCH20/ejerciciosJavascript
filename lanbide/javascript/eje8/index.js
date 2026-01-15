/*
Crea 3 divs diferentes, cada uno con un h1 dentro (o un &lt;p&gt;) y un texto. Crea una función
para que cuando el raton pase por cada div, se pinte el fondo del div de un color. Usa
diferentes colores para cada div. Pista: Puedes usar en la función un parámetro para
enviar el color en cada evento.
*/

//Primera manera de hacerlo

function vizualizarColor(div, color) {
    div.style.backgroundColor = color;
}

//Segunda manera de hacerlo

/*
function vizualizarColor(id, color) {
    let div = document.getElementById(id);
    div.style.backgroundColor = color;
}
*/
