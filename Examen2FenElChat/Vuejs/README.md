# Gestión de Vuelos

Aplicación web desarrollada en **Vue 3** para la gestión y consulta de vuelos y reservas. El proyecto implementa una arquitectura híbrida utilizando **Pinia** para el estado global y **Axios** para la carga de datos.

## 🚀 Tecnologías

- **Vue 3** (Composition API)
- **Pinia** (Gestión de estado)
- **Vue Router** (Navegación)
- **Axios** (Peticiones HTTP)
- **Vite** (Build tool)

## 📋 Funcionalidades Principales

### 1. Exploración de Vuelos (`/vuelos`)
- Listado completo de vuelos extraído de `public/data/vuelos.json`.
- **Filtros**: Permite filtrar vuelos por rango de duración del viaje.
- Visualización de tarjetas con información clave: Origen, Destino, Duración y **Precio por pasajero**.

### 2. Detalle y Reserva (`/vuelos/:codigo`)
- Vista detallada de un vuelo específico.
- **Formulario de Reserva**:
  - Selección de número de pasajeros.
  - Validación de campos (Email obligatorio).
  - Cálculo automático del precio total.
- **Lógica de Reserva**:
  - Generación local de un **Código de Reserva** alfanumérico único (6 caracteres).
  - Mensaje de confirmación en la misma página (sin redirección forzada).
  - Almacenamiento en el store de Pinia.

### 3. Consulta de Reservas (`/consulta-vuelo`)
- Sistema de búsqueda para usuarios:
  - Búsqueda por **Email** (obligatorio).
  - Filtrado opcional por **Código de Reserva**.
- **Tabla de Resultados**: Muestra el cruce de datos entre la reserva (código, pasajeros) y el vuelo (origen, destino, precio unitario).
- **Resumen Financiero**: Cálculo y visualización de totales (Total Pasajeros y Precio Total acumulado) fuera de la tabla de datos.

## 🛠️ Configuración del Proyecto

### Instalación de dependencias
```sh
npm install
```

### Ejecutar servidor de desarrollo
```sh
npm run dev
```

### Compilar para producción
```sh
npm run build
```

## 📂 Estructura de Datos

El repositorio incluye datos simulados en `public/data/`:
- **`vuelos.json`**: Catálogo de vuelos (incluye campo `precio`).

## 🏛️ Arquitectura del Estado (Store)

El store de Pinia (`src/stores/vuelos.js`) mantiene tres colecciones principales:
1. **`vuelos`**: Catálogo completo (necesario para enriquecer los datos de las reservas en la vista de consulta).
2. **`reservas`**: "Base de datos" en memoria de las reservas realizadas por los usuarios.
3. **`vuelosGuardados`**: Lista de identificadores de vuelos marcados como favoritos o guardados.
