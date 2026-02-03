# 🚗 EcoDrive - Gestión de Flota de Vehículos Eléctricos

Proyecto base para el examen de Vue.js - 2ª Evaluación DWC

## 📋 Estructura del Proyecto

El proyecto ya incluye:

- ✅ **Vue 3** con Composition API
- ✅ **Vue Router** configurado
- ✅ **Pinia** para gestión de estado
- ✅ **Axios** instalado (deberás usarlo)
- ✅ Vista Home de bienvenida
- ✅ Estilos CSS base
- ✅ Datos JSON en `/public/data/`
- ✅ Carpeta para imágenes en `/public/images/`

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 📁 Estructura de Carpetas

```
src/
├── assets/          # Estilos CSS
├── components/      # Componentes reutilizables (CREAR AQUÍ)
├── views/           # Vistas/Páginas (CREAR AQUÍ)
├── router/          # Configuración de rutas
├── stores/          # Stores de Pinia (CREAR AQUÍ)
├── App.vue          # Componente raíz
└── main.js          # Punto de entrada

public/
├── data/            # Archivos JSON con datos
│   ├── vehiculos.json
│   └── categorias.json
└── images/          # Imágenes de vehículos
```

## 📊 Datos Disponibles

### Vehículos (`/data/vehiculos.json`)

Contiene 20 vehículos eléctricos con:
- `id`: Identificador único
- `modelo`: Nombre del modelo
- `marca`: Fabricante
- `tipo`: Categoría (Turismo, SUV, Deportivo, Moto)
- `autonomia`: Kilómetros de autonomía
- `precioDia`: Precio de alquiler por día
- `imagen`: Nombre del archivo de imagen
- `descripcion`: Descripción del vehículo
- `bateria`: Capacidad de batería
- `potencia`: Potencia del motor
- `velocidadMax`: Velocidad máxima
- `plazas`: Número de plazas

### Categorías (`/data/categorias.json`)

4 categorías de vehículos para usar en filtros

## 🛠️ Tecnologías a Utilizar

En el examen deberás demostrar el uso de:

1. **Componentes y Vistas** - Crear componentes reutilizables
2. **Axios** - Cargar datos desde archivos JSON locales
3. **Vue Router** - Rutas básicas, dinámicas y navegación programática
4. **Pinia** - Gestión de estado global

## 📝 Notas Importantes

- ⚠️ **Sin acceso a internet** durante el examen
- 📦 Todos los datos están en archivos JSON locales
- 🖼️ Las imágenes estarán disponibles en `/public/images/`
- 🎨 Los estilos base ya están incluidos, puedes modificarlos

## 🔗 Uso de Axios con Archivos Locales

Ejemplo de carga de datos:

```javascript
import axios from 'axios'

// Cargar vehículos
const response = await axios.get('/data/vehiculos.json')
const vehiculos = response.data

// Usar imágenes
const imagenUrl = `/images/${vehiculo.imagen}`
```

## 💡 Consejos

- Lee todo el enunciado antes de empezar
- Planifica la estructura de componentes
- Usa nombres descriptivos para componentes y variables
- Comenta el código cuando sea necesario
- Prueba cada funcionalidad antes de continuar

---

**¡Buena suerte en el examen!** 🍀
