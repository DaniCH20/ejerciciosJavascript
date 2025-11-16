ListarProductos();
function ListarProductos(busqueda) {
  fetch("listar.php", {
    method: "POST",
    body: busqueda,
  })
    .then((response) => response.text())
    .then((response) => {
      resultado.innerHTML = response;
      imprimir();
    });
}
enviar.addEventListener("click", () => {
  fetch("anadir.php", {
    method: "POST",
    body: new FormData(update),
  })
    .then((response) => response.text())
    .then((response) => {
      if (response == "ok") {
        Swal.fire({
          icon: "success",
          title: "Modificado",
          showConfirmButton: false,
          timer: 1500,
        });
        update.reset();
        ListarProductos();
      }
    });
});

function imprimir() {
  let precios = document.getElementsByClassName("precioTotal");
  let subtotal = 0;

  for (let i = 0; i < precios.length; i++) {
    subtotal += Number(precios[i].textContent);
  }

  let iva = subtotal * 0.18;
  let total = subtotal + iva;


  document.getElementById("subtotal").innerHTML = "<td>SubTotal:</td>";
  document.getElementById("iva").innerHTML = "<td>Iva(18%):</td>";
  document.getElementById("total").innerHTML = "<td>Total:</td>";

  document.getElementById("subtotal").innerHTML += `<td>${subtotal}</td>`;
  document.getElementById("iva").innerHTML += `<td>${iva}</td>`;
  document.getElementById("total").innerHTML += `<td>${total}</td>`;
}

