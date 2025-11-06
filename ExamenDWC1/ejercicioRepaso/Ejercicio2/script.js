const productos=[
    {nombre:"Camisa",precio:20,categoria:"ropa"},
    {nombre:"Pantalones",precio:30,categoria:"ropa"},
    {nombre:"Zapatos",precio:50,categoria:"calzado"},
    {nombre:"Reloj",precio:30,categoria:"tecnologia"},
    {nombre:"Cronometro",precio:20,categoria:"tecnologia"},]
productos.forEach(recorrerForEach);
function recorrerForEach(value){
        console.log("forEach:",value.nombre +" - "+value.precio);
}
 const tecnologia=productos.filter(filtrado);
 console.log("Productos de tecnologia:",tecnologia);
 function filtrado(value){
    return value.categoria==="tecnologia";
}
const nombresProductos=productos.map(mapear);
console.log("Nombres de los productos:",nombresProductos);
function mapear(value){
    return value.nombre;
}

const precioTotal=productos.reduce((total,producto)=> total + producto.precio,0);
console.log("Precio total de los productos:",precioTotal);

buscarProducto("Reloj");
function buscarProducto(nombre){
    let miproducto=productos.find(producto =>producto.nombre=== nombre)
     console.log(miproducto);
}
const productoOrdenados=productos.sort((a, b) => a.precio - b.precio);
console.log(productoOrdenados);
