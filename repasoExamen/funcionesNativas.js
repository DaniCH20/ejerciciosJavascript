/*Strings
| Método                        | Descripción                                    | Ejemplo                                             |
| ----------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| `toUpperCase()`               | Convierte a mayúsculas                         | `"hola".toUpperCase()` → `"HOLA"`                   |
| `toLowerCase()`               | Convierte a minúsculas                         | `"HOLA".toLowerCase()` → `"hola"`                   |
| `trim()`                      | Elimina espacios al inicio y al final          | `"  hola  ".trim()` → `"hola"`                      |
| `includes()`                  | Devuelve `true` si contiene una subcadena      | `"hola mundo".includes("hola")` → `true`            |
| `startsWith()` / `endsWith()` | Comprueba si empieza/termina con algo          | `"foto.jpg".endsWith(".jpg")` → `true`              |
| `split()`                     | Divide el texto en un array                    | `"a,b,c".split(",")` → `["a","b","c"]`              |
| `replace(a, b)`               | Reemplaza texto (solo la primera coincidencia) | `"hola pepe".replace("pepe", "ana")` → `"hola ana"` |
| `replaceAll(a, b)`            | Reemplaza todas las coincidencias              | `"a,a,a".replaceAll("a", "b")` → `"b,b,b"`          |
| `slice(inicio, fin)`          | Extrae parte de un texto                       | `"javascript".slice(0,4)` → `"java"`                |
| `charAt(i)`                   | Devuelve el carácter en la posición `i`        | `"hola".charAt(1)` → `"o"`                          |
| `length`                      | Longitud del texto                             | `"hola".length` → `4`                               |

*/
/*Arrays
| Método       | Descripción                             | Ejemplo                                       |
| ------------ | --------------------------------------- | --------------------------------------------- |
| `push()`     | Añade elemento al final                 | `arr.push(4)`                                 |
| `pop()`      | Quita el último elemento                | `arr.pop()`                                   |
| `shift()`    | Quita el primer elemento                | `arr.shift()`                                 |
| `unshift()`  | Añade al principio                      | `arr.unshift(0)`                              |
| `indexOf()`  | Busca un elemento                       | `[1,2,3].indexOf(2)` → `1`                    |
| `includes()` | Comprueba si contiene un elemento       | `[1,2,3].includes(3)` → `true`                |
| `slice()`    | Crea una copia parcial                  | `[1,2,3,4].slice(1,3)` → `[2,3]`              |
| `splice()`   | Añade o quita elementos                 | `arr.splice(2,1)` → quita 1 desde el índice 2 |
| `join()`     | Une los elementos con un separador      | `[1,2,3].join("-")` → `"1-2-3"`               |
| `reverse()`  | Invierte el orden                       | `[1,2,3].reverse()` → `[3,2,1]`               |
| `sort()`     | Ordena (por defecto alfabéticamente)    | `[10,1,2].sort()` → `[1,10,2]`                |
| `map()`      | Crea un nuevo array transformado        | `[1,2,3].map(x=>x*2)` → `[2,4,6]`             |
| `filter()`   | Filtra elementos                        | `[1,2,3].filter(x=>x>1)` → `[2,3]`            |
| `find()`     | Devuelve el primer que cumpla condición | `[1,2,3].find(x=>x>1)` → `2`                  |
| `forEach()`  | Recorre el array                        | `[1,2,3].forEach(x=>console.log(x))`          |
*/
/*Numbers
| Método                      | Descripción                      | Ejemplo                          |
| --------------------------- | -------------------------------- | -------------------------------- |
| `parseInt()`                | Convierte texto a entero         | `parseInt("42")` → `42`          |
| `parseFloat()`              | Convierte texto a decimal        | `parseFloat("3.14")` → `3.14`    |
| `isNaN()`                   | Comprueba si algo “no es número” | `isNaN("hola")` → `true`         |
| `toFixed(n)`                | Redondea a `n` decimales         | `(3.1416).toFixed(2)` → `"3.14"` |
| `Math.round()`              | Redondea normal                  | `Math.round(4.6)` → `5`          |
| `Math.floor()`              | Redondea hacia abajo             | `Math.floor(4.6)` → `4`          |
| `Math.ceil()`               | Redondea hacia arriba            | `Math.ceil(4.1)` → `5`           |
| `Math.random()`             | Número aleatorio entre 0 y 1     | `Math.random()`                  |
| `Math.max()` / `Math.min()` | Máximo o mínimo                  | `Math.max(1,2,3)` → `3`          |

*/
/*Formularios y DOM
| Método                                      | Descripción                                  | Ejemplo                              |
| ------------------------------------------- | -------------------------------------------- | ------------------------------------ |
| `getElementById()`                          | Selecciona elemento por id                   | `document.getElementById("nombre")`  |
| `querySelector()`                           | Selecciona el primero que cumpla el selector | `document.querySelector(".clase")`   |
| `querySelectorAll()`                        | Selecciona todos los que cumplan el selector | `document.querySelectorAll("input")` |
| `addEventListener()`                        | Asocia evento                                | `btn.addEventListener("click", fn)`  |
| `createElement()`                           | Crea un nuevo nodo                           | `document.createElement("div")`      |
| `appendChild()` / `append()`                | Inserta elementos                            | `contenedor.appendChild(p)`          |
| `classList.add()` / `remove()` / `toggle()` | Maneja clases CSS                            | `p.classList.add("rojo")`            |
| `innerHTML` / `textContent`                 | Cambia contenido                             | `div.textContent = "Hola"`           |

*/
/*
let regex = /^[A-Z][a-z]+$/;
console.log(regex.test("Pepe")); // true
console.log(regex.test("pepe")); // false

let texto = "El número es 12345";
let numeros = texto.match(/\d+/);
console.log(numeros[0]); // "12345"

let texto = "Hola 123 mundo 456";
let sinNumeros = texto.replace(/\d+/g, "");
console.log(sinNumeros); // "Hola  mundo "

Validar email
let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; Validar email
console.log(emailRegex.test("usuario@mail.com")); // true

b) Validar un password fuerte

Al menos una mayúscula

Una minúscula

Un número

Entre 7 y 15 caracteres

let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,15}$/;
console.log(passRegex.test("Hola123")); // true
console.log(passRegex.test("hola123")); // false

solo letras y espacios
let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
console.log(nombreRegex.test("José Pérez")); // true
console.log(nombreRegex.test("José123")); // false
 solo numeros : let soloNumeros = /^\d+$/;
console.log(soloNumeros.test("12345")); // true
console.log(soloNumeros.test("12a45")); // false

*/
/*
1. Solo letras (mayúsculas y minúsculas)
regex
^[A-Za-z]+$
Solo letras sin espacios

regex
^[A-Za-z\s]+$
Letras con espacios permitidos

2. Letras, números y espacios
regex
^[A-Za-z0-9\s]+$
Letras, números y espacios (sin caracteres especiales)

3. Letras y números (sin espacios)
regex
^[A-Za-z0-9]+$
4. Al menos una mayúscula
regex
^(?=.*[A-Z]).+$
Este es un lookahead que verifica que haya al menos una mayúscula en cualquier posición

5. Email válido
regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
6. Contiene caracteres especiales
regex
.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*
Verifica que tenga al menos un carácter especial

7. Solo números
regex
^[0-9]+$
8. Contraseña con requisitos específicos
regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
Mínimo 8 caracteres

Al menos una minúscula

Al menos una mayúscula

Al menos un número

Al menos un carácter especial

9. URL válida
regex
^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$
10. Solo letras con acentos y ñ (español)
regex
^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$
11. Validar teléfono (formato simple)
regex
^[\+]?[0-9\s\-\(\)]{7,15}$
12. Código postal (5 dígitos)
regex
^\d{5}$

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (regexEmail.test(email)) {
    // Email válido
}
*/