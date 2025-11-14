subTotal();
function subTotal(){
    let precios=document.getElementsByClassName("precioTotal").value
    let subtotal=0;
    for (let precio of precios){
        console.log(precio.value);
        subtotal+=precio.value;
    }
    let iva=subtotal*0.18;
     let tbody=document.getElementById("resultado");

    var celdaSubtotal = document.createElement("td");
    celdaSubtotal=document.createTextNode(subtotal);
    var celdaIva = document.createElement("td");
    celdaIva=document.createTextNode(iva);
   
    tbody.appendChild(celdaSubtotal);
     tbody.appendChild(celdaIva);

}