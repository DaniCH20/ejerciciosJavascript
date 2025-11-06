// Ejemplo 1: Interacción con elementos de formulario
// --------------------------------------------------
// Objetivo: leer valores de distintos inputs (text, radio, checkbox, select, textarea)
// y renderizar una vista previa en vivo. Además, demostrar cómo escribir valores
// (botón "Rellenar demo").
const form = document.getElementById('perfilForm');
const preview = document.getElementById('preview');

// Devuelve el valor del radio seleccionado para un nombre dado
function getSelectedRadio(name) {
  const checked = form.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : '';
}

// Devuelve un array con los valores de los checkboxes marcados
function getCheckedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map(c => c.value);
}

// Recolecta todos los valores de los controles y actualiza el HTML de la vista previa
function renderPreview() {
  const nombre = document.getElementById('nombre').value.trim();
  const genero = getSelectedRadio('genero');
  const intereses = getCheckedValues('intereses');
  const pais = document.getElementById('pais').value;
  const bio = document.getElementById('bio').value;

  preview.innerHTML = `
    <strong>Vista previa</strong><br>
    Nombre: ${nombre || '(sin nombre)'}<br>
    Género: ${genero || '(no indicado)'}<br>
    Intereses: ${intereses.length ? intereses.join(', ') : '(ninguno)'}<br>
    País: ${pais || '(sin país)'}<br>
    Bio: ${bio || '(vacía)'}
  `;
}

// Eventos de formulario: input y change para refrescar la vista previa en vivo
form.addEventListener('input', renderPreview);
form.addEventListener('change', renderPreview);

// Botón para auto-rellenar: ejemplo de "escritura" de valores en los controles
document.getElementById('btnRellenar').addEventListener('click', () => {
  document.getElementById('nombre').value = 'Ana Pérez';
  form.querySelector('input[name="genero"][value="Femenino"]').checked = true;
  form.querySelectorAll('input[name="intereses"]').forEach(c => c.checked = c.value !== 'Deporte');
  document.getElementById('pais').value = 'España';
  document.getElementById('bio').value = 'Soy profe de DWC y me encanta JS.';
  renderPreview();
});

// Render inicial para que la vista previa no esté vacía
renderPreview();