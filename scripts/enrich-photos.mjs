/**
 * Télécharge des photos supplémentaires de haute qualité depuis le CDN Unsplash.
 * WebP qualité 90%, 1920px — beaucoup plus de photos par destination.
 */

import { existsSync, mkdirSync, statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('sharp manquant'); process.exit(1);
}

const cdn = (id, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=92&fm=jpg&auto=format&fit=crop`;

// ── Nouvelles photos à télécharger ──────────────────────────────
const PHOTOS = [

  // ════════ LOUXOR — Karnak (nouveaux angles) ════════════════════
  { id: '1710886324980-997f7742f16c', dest: 'louxor', name: 'temple-karnak-obélisque' },
  { id: '1566288623394-377af472d81b', dest: 'louxor', name: 'temple-karnak-avenue-sphinx' },
  { id: '1579782976009-cf98f14aec61', dest: 'louxor', name: 'temple-karnak-interieur-colonnes' },
  { id: '1689876405589-666038511bf9', dest: 'louxor', name: 'temple-karnak-lumiere-matinale' },
  { id: '1681403419483-a30ff02a385f', dest: 'louxor', name: 'temple-karnak-sculptures-hieroglyphes' },
  { id: '1594332963101-0949c9b467ee', dest: 'louxor', name: 'temple-karnak-lac-sacre' },
  { id: '1662655558673-4e628102f545', dest: 'louxor', name: 'temple-karnak-coucher-soleil' },
  { id: '1561830608-3bac329162ef', dest: 'louxor', name: 'temple-karnak-colonne-detail' },

  // ════════ LOUXOR — Vallée des Rois (nouveaux) ═════════════════
  { id: '1664218018646-f009f078d9fd', dest: 'louxor', name: 'vallee-des-rois-panorama' },
  { id: '1689876021889-b3f6cfd41b95', dest: 'louxor', name: 'vallee-des-rois-montagne' },
  { id: '1667765912995-07c5b404888a', dest: 'louxor', name: 'vallee-des-rois-paysage-desert' },
  { id: '1622962522220-0d9e0d29d62d', dest: 'louxor', name: 'vallee-des-rois-entree-tombe' },
  { id: '1620966530906-4d3938c03195', dest: 'louxor', name: 'vallee-des-rois-peintures-murales' },
  { id: '1648139210431-f5a62bc3f126', dest: 'louxor', name: 'vallee-des-rois-sarcophage' },

  // ════════ LOUXOR — Temple de Louxor nuit ══════════════════════
  { id: '1662655558628-b45dfcfb4bd6', dest: 'louxor', name: 'temple-louxor-nuit-illumine' },
  { id: '1603639204058-a3a4120adef5', dest: 'louxor', name: 'temple-louxor-colonnes-detail' },
  { id: '1762945527140-4f45fcbf3c64', dest: 'louxor', name: 'temple-louxor-obelisque-crepuscule' },
  { id: '1678975478317-8f017b1f8f46', dest: 'louxor', name: 'temple-louxor-facade-principale' },

  // ════════ LE CAIRE — Pyramides (beaucoup plus) ════════════════
  { id: '1600520611035-84157ad4084d', dest: 'caire', name: 'pyramides-gizeh-aerial-desert' },
  { id: '1705492074909-67fda36787d2', dest: 'caire', name: 'pyramides-gizeh-lever-soleil' },
  { id: '1635446997009-a1fd4a92dbe6', dest: 'caire', name: 'pyramides-sphinx-vue-laterale' },
  { id: '1729815748245-af46ba401a0a', dest: 'caire', name: 'pyramides-gizeh-brume-matin' },
  { id: '1597500993730-613ee0eab73b', dest: 'caire', name: 'pyramides-gizeh-panorama-desert' },
  { id: '1656393139305-cd0eeafc47a9', dest: 'caire', name: 'pyramides-gizeh-chameaux-desert' },
  { id: '1684514570867-39e5f12f03ce', dest: 'caire', name: 'pyramides-gizeh-nuit-etoiles' },
  { id: '1566288623451-6807a7795ebe', dest: 'caire', name: 'pyramides-gizeh-vue-rapprochee' },
  { id: '1708992485876-f193e746f6dd', dest: 'caire', name: 'sphinx-gizeh-vue-frontale' },
  { id: '1668646998533-792d1efca2a4', dest: 'caire', name: 'pyramides-gizeh-coucher-panorama' },

  // ════════ ASSOUAN — Abu Simbel (plus d'angles) ════════════════
  { id: '1710803622349-0a17829918c5', dest: 'assouan', name: 'abu-simbel-colosses-interieur' },
  { id: '1742262379112-eacb2813ca6d', dest: 'assouan', name: 'abu-simbel-lever-soleil' },
  { id: '1738580789782-48d43361e556', dest: 'assouan', name: 'abu-simbel-nuit-étoiles' },
  { id: '1633164051622-4fc773b68e96', dest: 'assouan', name: 'abu-simbel-peintures-pharaon' },
  { id: '1633163973863-d44691f969b4', dest: 'assouan', name: 'abu-simbel-vue-ensemble' },
  { id: '1633163940265-e0e82292e290', dest: 'assouan', name: 'abu-simbel-entree-sanctuaire' },
  { id: '1648139210599-aa27a54177a4', dest: 'assouan', name: 'abu-simbel-temple-nefertari' },
  { id: '1696514023600-b6b7e3d170d8', dest: 'assouan', name: 'abu-simbel-sunset-ciel-rouge' },

  // ════════ ASSOUAN — Nil & Nubie ═══════════════════════════════
  { id: '1633033254409-bd538e785f51', dest: 'assouan', name: 'nil-assouan-premier-cataracte' },
  { id: '1623674567450-b600b67864a6', dest: 'assouan', name: 'nil-assouan-village-nubien' },
  { id: '1626436819821-d2855be474c1', dest: 'assouan', name: 'assouan-bateau-nil-panorama' },
  { id: '1663596680812-0df611df4fe0', dest: 'assouan', name: 'nil-assouan-ile-elephantine' },
  { id: '1579006115236-bb31287042ea', dest: 'assouan', name: 'assouan-desert-dunes-nil' },

  // ════════ MER ROUGE — Sous l'eau (haute qualité) ══════════════
  { id: '1651871756929-09d7bde4e97d', dest: 'mer-rouge', name: 'mer-rouge-corail-coloré-hurghada' },
  { id: '1633205719979-e47958ff6d93', dest: 'mer-rouge', name: 'mer-rouge-poissons-recif' },
  { id: '1589308945435-38c3f99b3824', dest: 'mer-rouge', name: 'mer-rouge-plongée-epave' },
  { id: '1651247515420-2625b7724546', dest: 'mer-rouge', name: 'mer-rouge-anémone-poissons-clowns' },
  { id: '1581807307911-3502120a1cb5', dest: 'mer-rouge', name: 'mer-rouge-plongeur-recif' },
  { id: '1717932816720-6aa886d986e7', dest: 'mer-rouge', name: 'mer-rouge-tortue-marine' },
  { id: '1660151173380-9f6cd0222971', dest: 'mer-rouge', name: 'mer-rouge-coraux-bleus' },
  { id: '1777715821806-0af9fbd5f3e6', dest: 'mer-rouge', name: 'hurghada-plage-eau-cristal' },

  // ════════ NIL — Croisière (plus de variété) ═══════════════════
  { id: '1661956893568-a6e305457ea9', dest: 'nil', name: 'croisiere-nil-bateau-panorama' },
  { id: '1644517270263-4112379d97ca', dest: 'nil', name: 'nil-felouque-coucher-doré' },
  { id: '1609254009350-e8802119df6c', dest: 'nil', name: 'croisiere-nil-pont-coucher-soleil' },
  { id: '1704643764048-ce3aad419661', dest: 'nil', name: 'dahabeya-nil-voiles-blanches' },
  { id: '1664591930253-728be8868cc8', dest: 'nil', name: 'nil-reflets-or-crepuscule' },
  { id: '1774223146816-8472905a40b8', dest: 'nil', name: 'nil-palmiers-rive-egypte' },
  { id: '1775129841086-95e0b1ada71d', dest: 'nil', name: 'nil-bateau-temples-bord' },
  { id: '1662030199805-60f061e3fbe9', dest: 'nil', name: 'nil-lever-soleil-matin-calme' },
];

const DEST_DIRS = {
  hero:        path.join(ROOT, 'public', 'images', 'hero'),
  louxor:      path.join(ROOT, 'public', 'images', 'destinations', 'louxor'),
  caire:       path.join(ROOT, 'public', 'images', 'destinations', 'caire'),
  assouan:     path.join(ROOT, 'public', 'images', 'destinations', 'assouan'),
  'mer-rouge': path.join(ROOT, 'public', 'images', 'destinations', 'mer-rouge'),
  nil:         path.join(ROOT, 'public', 'images', 'destinations', 'nil'),
};

Object.values(DEST_DIRS).forEach((d) => mkdirSync(d, { recursive: true }));

async function processPhoto(photo) {
  const dir  = DEST_DIRS[photo.dest];
  const webp = path.join(dir, `${photo.name}.webp`);

  if (existsSync(webp)) {
    const kb = Math.round(statSync(webp).size / 1024);
    process.stdout.write(`  ⏭  ${photo.name}.webp (${kb} Ko)\n`);
    return;
  }

  process.stdout.write(`  ⬇   ${photo.name} … `);

  const url = cdn(photo.id, photo.w ?? 1920);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Louxor-site/1.0)' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());

  await sharp(buf)
    .resize(photo.w ?? 1920, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(webp);

  const kb = Math.round(statSync(webp).size / 1024);
  process.stdout.write(`✅  ${kb} Ko\n`);
}

async function main() {
  console.log(`\n📸  Enrichissement — ${PHOTOS.length} nouvelles photos haute qualité\n`);

  let ok = 0, fail = 0;
  for (const photo of PHOTOS) {
    try {
      await processPhoto(photo);
      ok++;
      await new Promise((r) => setTimeout(r, 350));
    } catch (err) {
      console.log(`  ❌  ${photo.name} — ${err.message}`);
      fail++;
    }
  }

  console.log(`\n✅  ${ok} ok, ${fail} échecs\n`);
}

main().catch(console.error);
