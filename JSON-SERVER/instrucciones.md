# Instrucciones para montar JSON Server y practicar fetch

Este documento explica cómo instalar y usar JSON Server, crear una base de datos de prueba y consumirla desde JavaScript usando `fetch`.

---

## 1.- Instalar JSON Server

JSON Server requiere **Node.js** y **npm** instalados en tu sistema.

1. Abre la terminal o consola.
2. Ejecuta el siguiente comando para instalar JSON Server globalmente:

```bash
npm install -g json-server
```

## 2.- Verifica que la instalación ha sido correcta
```bash
json-server --version
```

## 3.-Crea una carpeta para tu proyecto, por ejemplo:
```bash
mkdir mi-json-server
cd mi-json-server
```

## 4.- Dentro de la carpeta, crea un archivo llamado db.json.
```bash
{
  "posts": [
    { "id": 1, "title": "Primer post", "body": "Hola mundo", "userId": 1 },
    { "id": 2, "title": "Segundo post", "body": "Aprendiendo fetch", "userId": 2 },
    { "id": 3, "title": "Tercer post", "body": "Más contenido de ejemplo", "userId": 1 }
  ],
  "users": [
    { "id": 1, "name": "Juan", "email": "juan@example.com" },
    { "id": 2, "name": "María", "email": "maria@example.com" }
  ]
}
```

## 5.- Arranca JSON-SERVE
```bash
json-server --watch db.json --port 3000
```

## 6.- Deberías ver algo así
```bash
JSON Server is running
Resources
http://localhost:3000/posts
http://localhost:3000/users
```