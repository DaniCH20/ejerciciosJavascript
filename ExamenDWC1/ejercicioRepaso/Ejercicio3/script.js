const empleados=[{nombre:"Ana",salario:3000,antiguedad:5},
{nombre:"Luis",salario:2500,antiguedad:3},
{nombre:"Marta",salario:4000,antiguedad:8},
{nombre:"Carlos",salario:4500,antiguedad:1},
{nombre:"Sofia",salario:3500,antiguedad:6},];

for (let value of empleados) {
    console.log("nombre:",value.nombre,"-","salario",value.salario)
}
const veteranos=empleados.filter(filtrado);
console.log(veteranos);
function filtrado(value){
    return  value.antiguedad>=5;
}
const aumentos=empleados.map(mapear)
console.log(aumentos);
function mapear(value){
    const aum={};
    aum.nombre=value.nombre;
    aum.salarioNuevo=value.salario+(value.salario*0.1);   
    return  aum;
}
const ordenarPorSalario=empleados.sort((a, b) => a.salario - b.salario);
console.log(ordenarPorSalario);



const haySalarioAlto=empleados.some((empleado)=>empleado.salario>4000);
if(haySalarioAlto){
    console.log("Hay empleados con salario mayor a 4000");
}else{
    console.log("No hay empleados con salario mayor a 4000");
}
