/*
Crea un menú con cuatro botones: Home, índice, contenido, contacto. Cuando se pulse un
botón se debe de mostrar debajo de los botones el div correspondiente de cada botón. Es
decir, existirán 4 divs diferentes, uno para cada contenido. Inicialmente el div del botón
home estará visible y los otros 3 no. Cuando se pulse un botón, se ocultará el div que se
esté mostrando y se visualizará el div correspondiente al botón.
*/

//Primera manera de hacerlo
/*
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const contents = document.querySelectorAll(".vids");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            contents.forEach((content, contentIndex) => {
                if (index === contentIndex) {
                    content.style.display = "block";
                }
                else {
                    content.style.display = "none";
                }
            });
        });
    });
});
*/

//Segunda manera de hacerlo

function vizualizarContenido(id) {
  const vids = document.querySelectorAll(".vids");
  /*
 Usando ForEach
  vids.forEach((div) => {
    div.style.display = "none";
  });
 */
  /*
    Usando For
*/

  for (let i = 0; i < vids.length; i++) {
    vids[i].style.display = "none";
  }

  let div = document.getElementById(id);

  div.style.display = "block";
}
