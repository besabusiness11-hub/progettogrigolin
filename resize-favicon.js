import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const faviconPath = path.join(__dirname, 'public', 'favicon.png');
const tempPath = path.join(__dirname, 'public', 'favicon-temp.png');

// Leggi l'immagine originale
const image = sharp(faviconPath);

image
  .resize(128, 128, { fit: 'cover' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // Converti bianco e quasi-bianco in trasparente
    // data è un buffer con 4 byte per pixel (RGBA)
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Se il pixel è bianco o quasi bianco (RGB > 240), rendilo trasparente
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; // alpha = 0 (trasparente)
      }
    }
    
    return sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .png()
      .toFile(tempPath);
  })
  .then(() => {
    fs.unlinkSync(faviconPath);
    fs.renameSync(tempPath, faviconPath);
    console.log('Favicon ridimensionato a 128x128 con sfondo trasparente!');
  })
  .catch(err => console.error('Errore:', err));
