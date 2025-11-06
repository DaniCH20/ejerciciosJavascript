
// Ejercicio 4 - Validación de formulario

  // Validaciones a implementar:
  // - titulo y director: entre 3 y 50 caracteres
  // - anio: numérico de 4 dígitos entre 1900 y 2099
  // - categoria: no vacía

  // Al enviar el formulario, mostrar mensajes de error o éxito en el div#mensaje
  function validarCaracteres(texto){
    let regex = /^(?=.*[a-z])[A-Za-z\d]{3,50}$/;
    if(regex.test(texto)){
      return true;
    }else{
      return false;
    }
    
  }
  function validarAnio(anio){
  
  if(  anio>1900 && anio<2099){
      return true;
    }else{
      return false;
    }
  }
  function validarcategoria(cate){
    if(cate!=""){
      return true;
    }else{
      return false;
    }

  }
  document.getElementById('validar').addEventListener('click', () => {
    event.preventDefault();
    const titulo =document.getElementById('titulo').value;
    const director =document.getElementById('director').value;
    const anio =document.getElementById('anio').value;
    const categoria =document.getElementById('categoria').value;
    if(!validarCaracteres(titulo)){
      alert("El titulo es incorrecto se encuentra fuera del rango de caracteres");
      exit;
    }
    if(!validarCaracteres(director)){
      alert("El director es incorrecto se encuentra fuera del rango de caracteres");
      exit;
    }
     if(!validarAnio(anio)){
      alert("El año es incorrecto se encuentra fuera del rango");
      exit;
    }
     if(!validarcategoria(categoria)){
      alert("La categoria esta vacio");
      exit;
    }
    document.getElementById('mensaje').innerHTML="Película validada correctamente"

  });