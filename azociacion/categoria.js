function categoria() {
    let nacimiento;
  do {
    nacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
  } while (isNaN(nacimiento) || nacimiento <= 0);
  let actual = new Date().getFullYear();
  let edad = actual - nacimiento;
  let categoria='';

  if (edad ==5 || edad==6) {

    categoria="Micros";
  }else if (edad ==7 || edad==8){
    categoria="Prebenjamín";
  }else if (edad ==9 || edad==10){
    categoria="Benjamín";
  }else if (edad ==11 || edad==12){
    categoria="Alevín";
  }else if (edad ==13 || edad==14){
    categoria="Infantil";
  }else if (edad ==15 || edad==16){
    categoria="Cadete";
  }else if (edad ==17 || edad==18){
    categoria="Juvenil";
  }else if(edad >=19){
    categoria="Senior";
  }else{
        categoria="de no nacido";
  }
   document.getElementById("edad").innerHTML =
    "Tu edad es <b>" + edad + "</b><br>"+
    "Te encuentras en la categoría: <span style='color:black; font-weight:bold'>" + categoria + "</span>";
}
