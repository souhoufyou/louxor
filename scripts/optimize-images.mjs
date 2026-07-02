/**
 * Optimise toutes les images du site avec Sharp.
 *
 * Pour chaque répertoire ciblé :
 *   - Convertit en WebP (qualité 85%)
 *   - Génère 3 tailles : 400px, 800px, 1200px
 *   - Noms SEO-friendly (déjà définis à la convention)
 *
 * Usage :
 *   npm run optimize-images
 *   npm run optimize-images -- --only hisham
 *   npm run optimize-images -- --only destinations
 */

import { createReadStream, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('❌  sharp non installé — lancez : npm install sharp');
  process.exit(1);
}

const WIDTHS = [400, 800, 1200];
const QUALITY_WEBP = 85;
const QUALITY_AVIF = 60;

const DIRS = {
  hisham: path.join(ROOT, 'public', 'images', 'hisham'),
  destinations: path.join(ROOT, 'public', 'images', 'destinations'),
  hero: path.join(ROOT, 'public', 'images', 'hero'),
};

const only = process.argv.find((a, i) => process.argv[i - 1] === '--only');
const targetDirs = only
  ? { [only]: DIRS[only] }.filter((_, k) => DIRS[k])
  : DIRS;

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.tiff', '.webp']);

function getAllImages(dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllImages(full));
    } else if (SUPPORTED.has(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

async function optimizeImage(src) {
  const ext = path.extname(src).toLowerCase();
  const base = path.basename(src, ext);
  const dir = path.dirname(src);
  const outDir = path.join(dir, 'optimized');

  mkdirSync(outDir, { recursive: true });

  const meta = await sharp(src).metadata();
  const originalWidth = meta.width ?? 1920;

  let converted = 0;

  for (const width of WIDTHS) {
    if (width > originalWidth * 1.1) continue; // évite l'upscaling

    // WebP
    const webpOut = path.join(outDir, `${base}-${width}w.webp`);
    if (!existsSync(webpOut)) {
      await sharp(src)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY_WEBP })
        .toFile(webpOut);
      converted++;
    }

    // AVIF (meilleur ratio poids/qualité pour les grands écrans)
    if (width >= 800) {
      const avifOut = path.join(outDir, `${base}-${width}w.avif`);
      if (!existsSync(avifOut)) {
        await sharp(src)
          .resize(width, null, { withoutEnlargement: true })
          .avif({ quality: QUALITY_AVIF })
          .toFile(avifOut);
        converted++;
      }
    }
  }

  // Taille full en WebP (pour la lightbox)
  const fullOut = path.join(outDir, `${base}-full.webp`);
  if (!existsSync(fullOut)) {
    await sharp(src)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(fullOut);
    converted++;
  }

  return converted;
}

async function main() {
  console.log('🖼   Optimisation des images avec Sharp\n');

  let totalImages = 0;
  let totalConverted = 0;

  for (const [name, dir] of Object.entries(targetDirs)) {
    if (!existsSync(dir)) {
      console.log(`  ⏭  ${name}/ — répertoire vide, ignoré`);
      continue;
    }

    const images = getAllImages(dir).filter(
      (f) => !f.includes('/optimized/') && !f.includes('\\optimized\\')
    );

    if (!images.length) {
      console.log(`  ⏭  ${name}/ — aucune image source trouvée`);
      continue;
    }

    console.log(`📁  ${name}/ — ${images.length} image(s) à traiter`);

    for (const src of images) {
      const rel = path.relative(ROOT, src);
      process.stdout.write(`    ${rel} … `);
      try {
        const n = await optimizeImage(src);
        console.log(n ? `✅  (${n} fichiers)` : '⏭  (déjà optimisé)');
        totalConverted += n;
        totalImages++;
      } catch (err) {
        console.log(`❌  ${err.message}`);
      }
    }
  }

  console.log(`\n✅  ${totalImages} image(s) traitée(s), ${totalConverted} fichier(s) générés`);
  console.log('   → Fichiers dans chaque sous-répertoire /optimized/');
  console.log('\n💡  Pour utiliser les optimisées dans Next.js :');
  console.log('   Remplacez "/images/X.jpg" par "/images/X/optimized/X-800w.webp"');
}

main().catch((err) => {
  console.error('❌', err.message);
  process.exit(1);
});
