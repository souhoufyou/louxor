/**
 * Télécharge les photos des destinations depuis l'API Unsplash.
 *
 * SETUP :
 *   1. Inscrivez-vous sur https://unsplash.com/developers (gratuit)
 *   2. Créez une application → copiez l'"Access Key"
 *   3. Créez un fichier .env.local à la racine du projet avec :
 *        UNSPLASH_ACCESS_KEY=votre_cle_ici
 *   4. Lancez : npm run download-photos
 *
 * Attribution : Unsplash exige d'afficher le nom du photographe.
 * Ce script génère /public/images/destinations/credits.json avec les attributions.
 */

import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Charger la clé API depuis .env.local
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  if (!existsSync(envPath)) return {};
  return Object.fromEntries(
    readFileSync(envPath, 'utf-8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.startsWith('#'))
      .map((l) => l.split('=').map((p) => p.trim()))
  );
}

const env = loadEnv();
const ACCESS_KEY = env.UNSPLASH_ACCESS_KEY || process.env.UNSPLASH_ACCESS_KEY;

if (!ACCESS_KEY) {
  console.error('❌  UNSPLASH_ACCESS_KEY manquant dans .env.local');
  console.error('   → Créez un compte sur https://unsplash.com/developers');
  console.error('   → Ajoutez UNSPLASH_ACCESS_KEY=votre_cle dans .env.local');
  process.exit(1);
}

const DEST_DIR = path.join(ROOT, 'public', 'images', 'destinations');
const HERO_DIR = path.join(ROOT, 'public', 'images', 'hero');

const PHOTOS = [
  // ── LOUXOR ──────────────────────────────────────────────────────
  { query: 'Valley of Kings Luxor Egypt tomb', filename: 'vallee-des-rois-louxor.jpg', dir: 'louxor', alt: 'Vallée des Rois, Louxor — tombes des pharaons' },
  { query: 'Karnak temple golden light Egypt columns', filename: 'temple-karnak-louxor.jpg', dir: 'louxor', alt: 'Temple de Karnak, Louxor — colonnes en lumière dorée' },
  { query: 'Luxor temple night illuminated Egypt', filename: 'temple-louxor-nuit.jpg', dir: 'louxor', alt: 'Temple de Louxor illuminé la nuit' },
  { query: 'Hatshepsut temple Deir el-Bahari Egypt', filename: 'temple-hatchepsout-louxor.jpg', dir: 'louxor', alt: "Temple d'Hatchepsout à Deir el-Bahari, Louxor" },
  { query: 'Colossi of Memnon Egypt Luxor statues', filename: 'colosses-memnon-louxor.jpg', dir: 'louxor', alt: 'Colosses de Memnon, Louxor' },
  { query: 'hot air balloon sunrise Luxor Egypt Nile', filename: 'montgolfiere-louxor-lever-soleil.jpg', dir: 'louxor', alt: 'Montgolfières au lever du soleil sur Louxor' },
  { query: 'Nile river Luxor sunset felucca boats', filename: 'nil-louxor-coucher-soleil.jpg', dir: 'louxor', alt: 'Nil à Louxor au coucher du soleil' },
  { query: 'Valley of Queens Luxor Egypt tomb paintings', filename: 'vallee-des-reines-louxor.jpg', dir: 'louxor', alt: 'Vallée des Reines, Louxor' },

  // ── LE CAIRE ────────────────────────────────────────────────────
  { query: 'Pyramids of Giza Cairo Egypt wide angle', filename: 'pyramides-gizeh-caire.jpg', dir: 'caire', alt: 'Pyramides de Gizeh, Le Caire' },
  { query: 'Great Sphinx Giza Egypt camel', filename: 'sphinx-gizeh-caire.jpg', dir: 'caire', alt: 'Grand Sphinx de Gizeh' },
  { query: 'Pyramids Giza sunset Egypt golden sky', filename: 'pyramides-coucher-soleil.jpg', dir: 'caire', alt: 'Pyramides de Gizeh au coucher du soleil' },
  { query: 'Khan el Khalili Cairo bazaar market Egypt', filename: 'khan-el-khalili-caire.jpg', dir: 'caire', alt: 'Bazar Khan el-Khalili, Le Caire' },
  { query: 'Egyptian Museum Cairo mummies artifacts', filename: 'musee-egyptien-caire.jpg', dir: 'caire', alt: 'Musée égyptien du Caire' },

  // ── ASSOUAN ─────────────────────────────────────────────────────
  { query: 'Abu Simbel temple Egypt Nubia', filename: 'abu-simbel-assouan.jpg', dir: 'assouan', alt: 'Temple d\'Abou Simbel, Assouan' },
  { query: 'Philae temple island Aswan Egypt Nile', filename: 'temple-philae-assouan.jpg', dir: 'assouan', alt: 'Temple de Philae sur son île, Assouan' },
  { query: 'Nile Aswan Egypt Nubia felucca sunset', filename: 'nil-assouan-felouque.jpg', dir: 'assouan', alt: 'Felouques sur le Nil à Assouan' },
  { query: 'Nubian village Aswan Egypt colorful houses', filename: 'village-nubien-assouan.jpg', dir: 'assouan', alt: 'Village nubien coloré, Assouan' },

  // ── MER ROUGE ───────────────────────────────────────────────────
  { query: 'Red Sea snorkeling coral reef fish Egypt Hurghada', filename: 'snorkeling-mer-rouge-hurghada.jpg', dir: 'mer-rouge', alt: 'Snorkeling en Mer Rouge, Hurghada — coraux et poissons tropicaux' },
  { query: 'scuba diving Red Sea Egypt underwater', filename: 'plongee-mer-rouge.jpg', dir: 'mer-rouge', alt: 'Plongée sous-marine en Mer Rouge' },
  { query: 'Hurghada beach sunset Red Sea Egypt', filename: 'hurghada-coucher-soleil.jpg', dir: 'mer-rouge', alt: 'Coucher de soleil sur la Mer Rouge, Hurghada' },
  { query: 'Red Sea boat excursion Egypt island', filename: 'excursion-bateau-mer-rouge.jpg', dir: 'mer-rouge', alt: 'Excursion en bateau sur la Mer Rouge' },
  { query: 'Egypt desert landscape Red Sea mountains', filename: 'desert-mer-rouge.jpg', dir: 'mer-rouge', alt: 'Désert et Mer Rouge, Hurghada' },

  // ── CROISIÈRE NIL ───────────────────────────────────────────────
  { query: 'felucca Nile sailing Egypt white sails', filename: 'felouque-nil-egypte.jpg', dir: 'nil', alt: 'Felouque à voiles blanches sur le Nil' },
  { query: 'dahabeya traditional boat Nile Egypt cruise', filename: 'dahabeya-croisiere-nil.jpg', dir: 'nil', alt: 'Dahabeya traditionnelle pour croisière sur le Nil' },
  { query: 'Nile sunset cruise Egypt temple shore', filename: 'coucher-soleil-nil-croisiere.jpg', dir: 'nil', alt: 'Coucher de soleil sur le Nil depuis un bateau de croisière' },
  { query: 'Nile cruise Egypt temples view from boat', filename: 'temples-vue-nil.jpg', dir: 'nil', alt: 'Temples vus depuis le Nil en croisière' },
];

const HERO_PHOTO = {
  query: 'Luxor hot air balloon sunrise Egypt temple',
  filename: 'hero-montgolfiere-louxor.jpg',
  dir: 'hero',
  alt: 'Montgolfières au lever du soleil sur les temples de Louxor, Égypte',
};

const credits = {};

async function searchUnsplash(query, orientation = 'landscape') {
  const url = new URL('https://api.unsplash.com/search/photos');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', '5');
  url.searchParams.set('orientation', orientation);
  url.searchParams.set('content_filter', 'high');

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });

  if (!res.ok) {
    throw new Error(`Unsplash API error ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  return data.results ?? [];
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  await pipeline(res.body, createWriteStream(destPath));
}

async function processPhoto(photo) {
  const destDir =
    photo.dir === 'hero'
      ? HERO_DIR
      : path.join(DEST_DIR, photo.dir);

  mkdirSync(destDir, { recursive: true });

  const destPath = path.join(destDir, photo.filename);
  if (existsSync(destPath)) {
    console.log(`  ⏭  ${photo.filename} (déjà téléchargé)`);
    return;
  }

  console.log(`  🔍  Recherche : "${photo.query}"`);
  const results = await searchUnsplash(photo.query);

  if (!results.length) {
    console.warn(`  ⚠  Aucun résultat pour "${photo.query}"`);
    return;
  }

  const best = results[0];
  const downloadUrl = best.urls.full;

  console.log(`  ⬇   Téléchargement : ${photo.filename} (par ${best.user.name})`);
  await downloadImage(downloadUrl, destPath);

  // Trigger Unsplash download tracking (required by API guidelines)
  await fetch(best.links.download_location, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  }).catch(() => {});

  credits[photo.filename] = {
    photographer: best.user.name,
    profile: best.user.links.html,
    unsplash: best.links.html,
    alt: photo.alt,
  };

  console.log(`  ✅  ${photo.filename} sauvegardé`);
}

async function main() {
  console.log('📸  Téléchargement des photos depuis Unsplash\n');

  // Hero
  console.log('🎨  Photo hero...');
  await processPhoto(HERO_PHOTO);

  // Destinations
  for (const photo of PHOTOS) {
    await processPhoto(photo);
    // Délai pour respecter le rate limit Unsplash (50 req/h sur compte demo)
    await new Promise((r) => setTimeout(r, 1200));
  }

  // Sauvegarder les crédits
  const creditsPath = path.join(DEST_DIR, 'credits.json');
  writeFileSync(creditsPath, JSON.stringify(credits, null, 2), 'utf-8');
  console.log('\n📄  Crédits sauvegardés dans', creditsPath);
  console.log('\n✅  Téléchargement terminé !');
  console.log('👉  Lancez maintenant : npm run optimize-images');
}

main().catch((err) => {
  console.error('❌  Erreur :', err.message);
  process.exit(1);
});
