const grados = () => {
    let grados = parseInt(prompt("Ingrese los grados a convertir:"));
    if (isNaN(grados)) {
        alert("Por favor ingrese un número válido.");
        return;
    }
    alert(grados + " grados centígrados son " + ((grados * 9/5) + 32) + " grados Farenheit.");
};
const tabla = () => {
    let resultado = "<table border='1' ><tr><th>Tabla</th><th>Resultado</th></tr>";
    for (let i = 1; i <= 10; i++) {
        resultado += `<tr><td>2 x ${i}</td><td>${i*2}</td></tr>`;
    }   
    resultado += "</table>";
    document.getElementById("result").innerHTML = resultado;
};
const decimal = ()=>{
    let numero = parseInt(prompt("Ingrese un número decimal:"));
    alert("El número " + numero + " en binario es: " + numero.toString(2));
}