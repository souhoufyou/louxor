/**
 * Télécharge les photos des destinations depuis le CDN Unsplash
 * et les convertit en WebP avec Sharp.
 *
 * Pas de clé API requise — accès direct aux images via CDN.
 * Attribution : photos © leurs auteurs respectifs sur Unsplash.
 */

import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('❌  sharp non installé'); process.exit(1);
}

// Format CDN : ?w=1920&q=90&fm=jpg&auto=format&fit=crop
const cdn = (id, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=90&fm=jpg&auto=format&fit=crop`;

// ── Catalogue curé de photos ────────────────────────────────────
const PHOTOS = [

  // ════════ HERO ═════════════════════════════════════════════════
  {
    id: '1696269061408-9e8572651ca3',
    dest: 'hero',
    name: 'hero-montgolfiere-louxor',
    alt: 'Montgolfières au lever du soleil sur les temples de Louxor, Égypte',
    w: 2560,
  },
  // Fallback hero si le premier n'est pas assez bon
  {
    id: '1648139210454-23c95b91409f',
    dest: 'hero',
    name: 'hero-montgolfiere-louxor-02',
    alt: "Montgolfières dorées au-dessus de Louxor à l'aube",
    w: 2560,
  },

  // ════════ LOUXOR ═══════════════════════════════════════════════
  {
    id: '1566288592443-0a0d6853dddc',
    dest: 'louxor',
    name: 'temple-karnak-colonnes-louxor',
    alt: 'Colonnes monumentales du temple de Karnak, Louxor, Égypte',
  },
  {
    id: '1584719763904-2799b453ba8d',
    dest: 'louxor',
    name: 'temple-karnak-louxor-egypte',
    alt: 'Grande salle hypostyle du temple de Karnak, Louxor',
  },
  {
    id: '1678640982613-70150a406d0a',
    dest: 'louxor',
    name: 'temple-karnak-lumiere-doree',
    alt: 'Temple de Karnak baigné de lumière dorée au coucher du soleil',
  },
  {
    id: '1629468855534-450d7c4c5f72',
    dest: 'louxor',
    name: 'temple-louxor-egypte',
    alt: 'Temple de Louxor illuminé, Égypte',
  },
  {
    id: '1632944398987-494eebe663be',
    dest: 'louxor',
    name: 'vallee-des-rois-louxor',
    alt: 'Vallée des Rois, nécropole royale de Louxor, Égypte',
  },
  {
    id: '1632944511358-0753f3f61283',
    dest: 'louxor',
    name: 'vallee-des-rois-tombeau-louxor',
    alt: "Entrée d'une tombe dans la Vallée des Rois, Louxor",
  },
  {
    id: '1663192365280-3b02f48b36a9',
    dest: 'louxor',
    name: 'vallee-des-rois-desert-louxor',
    alt: 'Paysage désertique de la Vallée des Rois, Louxor, Égypte',
  },
  {
    id: '1599656531273-70bbbe4272ff',
    dest: 'louxor',
    name: 'temple-hatchepsout-louxor',
    alt: "Temple d'Hatchepsout à Deir el-Bahari, Louxor, Égypte",
  },
  {
    id: '1596130535979-eedea4278d29',
    dest: 'louxor',
    name: 'colosses-memnon-louxor',
    alt: 'Colosses de Memnon devant les montagnes de la rive ouest de Louxor',
  },
  {
    id: '1680356217112-dad9300ce49d',
    dest: 'louxor',
    name: 'nil-louxor-felouque',
    alt: 'Felouques traditionnelles sur le Nil à Louxor au coucher du soleil',
  },
  {
    id: '1685616075808-04bb9db4ea1c',
    dest: 'louxor',
    name: 'montgolfiere-louxor-lever-soleil',
    alt: 'Montgolfières au lever du soleil au-dessus de Louxor, Égypte',
  },
  {
    id: '1703902770170-7cc56c8c3067',
    dest: 'louxor',
    name: 'montgolfiere-louxor-temples',
    alt: "Montgolfière survolant les temples de Louxor à l'aube",
  },

  // ════════ LE CAIRE ═════════════════════════════════════════════
  {
    id: '1539768942893-daf53e448371',
    dest: 'caire',
    name: 'pyramides-gizeh-caire-egypte',
    alt: 'Pyramides de Gizeh vues en grand angle, Le Caire, Égypte',
  },
  {
    id: '1623674587543-9c7564de99d1',
    dest: 'caire',
    name: 'pyramides-gizeh-desert-caire',
    alt: 'Pyramides de Gizeh dans le désert, Le Caire',
  },
  {
    id: '1639901375872-9e7218d6c64d',
    dest: 'caire',
    name: 'pyramides-gizeh-vue-panoramique',
    alt: 'Vue panoramique des trois pyramides de Gizeh, Le Caire',
  },
  {
    id: '1678038592492-d73c063bb9e2',
    dest: 'caire',
    name: 'pyramides-gizeh-coucher-soleil',
    alt: 'Pyramides de Gizeh au coucher du soleil, ciel orangé, Le Caire',
  },
  {
    id: '1678038592327-c5730737f867',
    dest: 'caire',
    name: 'pyramides-sphinx-coucher-soleil',
    alt: 'Sphinx et pyramides de Gizeh au coucher du soleil, Égypte',
  },
  {
    id: '1568322445389-dc9223328f88',
    dest: 'caire',
    name: 'sphinx-gizeh-caire-egypte',
    alt: 'Grand Sphinx de Gizeh devant les pyramides, Le Caire, Égypte',
  },

  // ════════ ASSOUAN ══════════════════════════════════════════════
  {
    id: '1633163893862-4cdc62de7d82',
    dest: 'assouan',
    name: 'abu-simbel-temple-assouan',
    alt: "Temple d'Abou Simbel avec ses colosses, Assouan, Nubie",
  },
  {
    id: '1702909171830-2c4dca2ac090',
    dest: 'assouan',
    name: 'abu-simbel-facade-assouan',
    alt: "Façade du grand temple d'Abou Simbel, Assouan, Égypte",
  },
  {
    id: '1633164006864-be2345665822',
    dest: 'assouan',
    name: 'abu-simbel-ramses-assouan',
    alt: "Statues de Ramsès II au temple d'Abou Simbel, Assouan",
  },
  {
    id: '1681403515304-e9ae8544ac28',
    dest: 'assouan',
    name: 'temple-philae-nil-assouan',
    alt: 'Temple de Philae sur son île dans le Nil, Assouan, Égypte',
  },
  {
    id: '1596130679837-0cc8d4f7d471',
    dest: 'assouan',
    name: 'nil-assouan-felouque-nubie',
    alt: 'Felouques traditionnelles sur le Nil à Assouan, Nubie',
  },

  // ════════ MER ROUGE ════════════════════════════════════════════
  {
    id: '1777551881568-50b1beab7d91',
    dest: 'mer-rouge',
    name: 'snorkeling-mer-rouge-coraux',
    alt: 'Snorkeling en Mer Rouge — coraux colorés et poissons tropicaux',
  },
  {
    id: '1777552955794-77aa990a47df',
    dest: 'mer-rouge',
    name: 'plongee-mer-rouge-hurghada',
    alt: 'Plongée sous-marine en Mer Rouge, Hurghada, Égypte',
  },
  {
    id: '1777551747256-0bb44c8086fc',
    dest: 'mer-rouge',
    name: 'mer-rouge-poissons-tropicaux',
    alt: 'Poissons tropicaux dans les eaux cristallines de la Mer Rouge',
  },
  {
    id: '1636268057303-4bd2b9eb77cb',
    dest: 'mer-rouge',
    name: 'plongee-recif-corallien-hurghada',
    alt: 'Plongée sur un récif corallien en Mer Rouge, Hurghada',
  },
  {
    id: '1609082565521-31707c9f0c79',
    dest: 'mer-rouge',
    name: 'bateau-excursion-mer-rouge',
    alt: "Bateau d'excursion voguant sur la Mer Rouge, Hurghada",
  },
  {
    id: '1624914127207-133d16a2e9ae',
    dest: 'mer-rouge',
    name: 'coucher-soleil-mer-rouge-egypte',
    alt: 'Coucher de soleil doré sur la Mer Rouge, Égypte',
  },

  // ════════ NIL / CROISIÈRE ══════════════════════════════════════
  {
    id: '1684100096410-fd39cdff91a3',
    dest: 'nil',
    name: 'felouque-nil-coucher-soleil',
    alt: 'Felouque à voiles blanches sur le Nil au coucher du soleil, Égypte',
  },
  {
    id: '1761421847426-e482352ce99e',
    dest: 'nil',
    name: 'croisiere-nil-egypte-temples',
    alt: 'Croisière sur le Nil entre les temples, Égypte',
  },
  {
    id: '1761351108707-f3f54ce15895',
    dest: 'nil',
    name: 'bateau-croisiere-nil-egypte',
    alt: 'Bateau de croisière traditionnel sur le Nil, Égypte',
  },
  {
    id: '1662552445969-78212cc5899f',
    dest: 'nil',
    name: 'dahabeya-nil-egypte',
    alt: 'Dahabeya traditionnel voguant sur le Nil, Égypte',
  },
  {
    id: '1680356217112-dad9300ce49d',
    dest: 'nil',
    name: 'nil-felouques-coucher-soleil',
    alt: 'Felouques sur le Nil au coucher du soleil, Égypte',
  },
  {
    id: '1761351108511-661ab43bbe0c',
    dest: 'nil',
    name: 'temples-vue-nil-croisiere',
    alt: 'Temples égyptiens vus depuis le Nil en croisière',
  },
];

const DEST_DIRS = {
  hero:      path.join(ROOT, 'public', 'images', 'hero'),
  louxor:    path.join(ROOT, 'public', 'images', 'destinations', 'louxor'),
  caire:     path.join(ROOT, 'public', 'images', 'destinations', 'caire'),
  assouan:   path.join(ROOT, 'public', 'images', 'destinations', 'assouan'),
  'mer-rouge': path.join(ROOT, 'public', 'images', 'destinations', 'mer-rouge'),
  nil:       path.join(ROOT, 'public', 'images', 'destinations', 'nil'),
};

// Crée les répertoires
Object.values(DEST_DIRS).forEach((d) => mkdirSync(d, { recursive: true }));

async function downloadJpeg(id, w) {
  const url = cdn(id, w);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; site-builder/1.0)' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} pour ${id}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return buf;
}

async function processPhoto(photo) {
  const dir  = DEST_DIRS[photo.dest];
  const webp = path.join(dir, `${photo.name}.webp`);

  if (existsSync(webp)) {
    process.stdout.write(`  ⏭  ${photo.name}.webp (existe déjà)\n`);
    return { name: photo.name, alt: photo.alt, src: webp };
  }

  process.stdout.write(`  ⬇   ${photo.name} … `);
  const buf = await downloadJpeg(photo.id, photo.w ?? 1920);

  // Convertir en WebP qualité 80%
  await sharp(buf)
    .resize(photo.w ?? 1920, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webp);

  const stat = (await import('fs')).statSync(webp);
  const kb   = Math.round(stat.size / 1024);
  process.stdout.write(`✅  ${kb} Ko\n`);

  return { name: photo.name, alt: photo.alt, src: webp };
}

async function main() {
  console.log('\n📸  Téléchargement des photos destinations depuis Unsplash CDN\n');

  const results = { hero: [], louxor: [], caire: [], assouan: [], 'mer-rouge': [], nil: [] };
  let ok = 0, fail = 0;

  for (const photo of PHOTOS) {
    try {
      const r = await processPhoto(photo);
      results[photo.dest].push({ name: photo.name, alt: photo.alt });
      ok++;
      // Petite pause pour ne pas surcharger le CDN
      await new Promise((r) => setTimeout(r, 400));
    } catch (err) {
      console.log(`  ❌  ${photo.name} — ${err.message}`);
      fail++;
    }
  }

  // Génère le catalogue JSON pour le code Next.js
  const catalogPath = path.join(ROOT, 'content', 'photo-catalog.json');
  writeFileSync(catalogPath, JSON.stringify(results, null, 2), 'utf-8');

  console.log(`\n✅  ${ok} photos téléchargées, ${fail} échecs`);
  console.log('📄  Catalogue sauvegardé dans content/photo-catalog.json');
  console.log('\n👉  Prochaine étape : les galeries sont déjà câblées dans le code !\n');
}

main().catch((err) => {
  console.error('❌', err.message);
  process.exit(1);
});
