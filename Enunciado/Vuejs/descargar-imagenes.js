import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs de imágenes de vehículos eléctricos desde Unsplash (acceso libre)
const imagenes = [
  { nombre: 'audi-etron-gt.jpg', url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80' },
  { nombre: 'vw-id4.jpg', url: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80' },
  { nombre: 'peugeot-e208.jpg', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
  { nombre: 'hyundai-kona.jpg', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' },
  { nombre: 'porsche-taycan.jpg', url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80' },
  { nombre: 'renault-zoe.jpg', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
  { nombre: 'mercedes-eqc.jpg', url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80' },
  { nombre: 'kia-ev6.jpg', url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80' },
  { nombre: 'ford-mustang-mache.jpg', url: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80' },
  { nombre: 'mini-cooper-se.jpg', url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80' },
  { nombre: 'seat-mo.jpg', url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80' },
  { nombre: 'bmw-ce04.jpg', url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80' },
  { nombre: 'volvo-xc40.jpg', url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80' },
  { nombre: 'fiat-500e.jpg', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
  { nombre: 'jaguar-ipace.jpg', url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80' },
  { nombre: 'polestar-2.jpg', url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80' },
  { nombre: 'mg-zs-ev.jpg', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' }
];

const directorioImagenes = path.join(__dirname, 'public', 'images');

// Función para descargar una imagen
function descargarImagen(url, nombreArchivo) {
  return new Promise((resolve, reject) => {
    const rutaCompleta = path.join(directorioImagenes, nombreArchivo);
    
    // Verificar si ya existe
    if (fs.existsSync(rutaCompleta)) {
      console.log(`✓ ${nombreArchivo} ya existe, omitiendo...`);
      resolve();
      return;
    }

    const archivo = fs.createWriteStream(rutaCompleta);
    
    https.get(url, (response) => {
      response.pipe(archivo);
      
      archivo.on('finish', () => {
        archivo.close();
        console.log(`✓ Descargada: ${nombreArchivo}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(rutaCompleta, () => {});
      console.error(`✗ Error descargando ${nombreArchivo}:`, err.message);
      reject(err);
    });
  });
}

// Descargar todas las imágenes
async function descargarTodas() {
  console.log('Iniciando descarga de imágenes...\n');
  
  for (const img of imagenes) {
    try {
      await descargarImagen(img.url, img.nombre);
      // Pequeña pausa para no saturar el servidor
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error con ${img.nombre}`);
    }
  }
  
  console.log('\n¡Descarga completada!');
}

descargarTodas();
