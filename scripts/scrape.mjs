// Scraper Playwright pour guidefrancophonelouxor.com (site WebSelf, contenu rendu en JS)
// Usage: node scripts/scrape.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const BASE = 'https://www.guidefrancophonelouxor.com';
const OUT_RAW = process.env.RAW_DIR || path.resolve('scripts/.raw');
const IMG_DIR = path.resolve('public/images/legacy');

const PAGES = [
  { slug: 'accueil',                          url: `${BASE}/accueil` },
  { slug: 'louxor',                           url: `${BASE}/louxor` },
  { slug: 'caire',                            url: `${BASE}/caire` },
  { slug: 'assouan',                          url: `${BASE}/assouan` },
  { slug: 'hurghada',                         url: `${BASE}/hurghada` },
  { slug: 'croisieres-en-egypte-sur-le-nil',  url: `${BASE}/croisieres-en-egypte-sur-le-nil` },
  { slug: 'montgolfiere',                     url: `${BASE}/montgolfiere` },
  { slug: 'service-de-transfert-aeroport',    url: `${BASE}/service-de-transfert-aeroport` },
  { slug: 'visites',                          url: `${BASE}/visites` },
  { slug: 'livre-dor',                        url: `${BASE}/livre-dor` },
];

fs.mkdirSync(OUT_RAW, { recursive: true });
fs.mkdirSync(IMG_DIR, { recursive: true });

const imageManifest = {}; // absoluteUrl -> localFilename

function safeName(u) {
  try {
    const url = new URL(u);
    let base = path.basename(url.pathname) || 'img';
    base = base.split('?')[0];
    // strip extension to re-add clean one
    let ext = (base.match(/\.(jpe?g|png|webp|gif|svg|avif)$/i) || [, ''])[0] || '';
    let name = base.replace(/\.(jpe?g|png|webp|gif|svg|avif)$/i, '');
    name = name.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').slice(0, 60) || 'img';
    if (!ext) ext = '.jpg';
    const hash = crypto.createHash('md5').update(u).digest('hex').slice(0, 8);
    return `${name}-${hash}${ext.toLowerCase()}`;
  } catch {
    const hash = crypto.createHash('md5').update(u).digest('hex').slice(0, 10);
    return `img-${hash}.jpg`;
  }
}

async function downloadImage(u) {
  if (imageManifest[u]) return imageManifest[u];
  const fname = safeName(u);
  const dest = path.join(IMG_DIR, fname);
  if (fs.existsSync(dest)) { imageManifest[u] = fname; return fname; }
  try {
    const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': BASE } });
    if (!res.ok) { console.log('  ! img', res.status, u.slice(0, 80)); return null; }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 200) return null; // skip tiny/placeholder
    fs.writeFileSync(dest, buf);
    imageManifest[u] = fname;
    return fname;
  } catch (e) {
    console.log('  ! img err', u.slice(0, 80), e.message);
    return null;
  }
}

const extractor = () => {
  const abs = (s) => { try { return new URL(s, location.href).href; } catch { return null; } };
  const clean = (t) => (t || '').replace(/\s+/g, ' ').trim();

  // headings in document order
  const headings = [...document.querySelectorAll('h1,h2,h3,h4')]
    .map(h => ({ tag: h.tagName.toLowerCase(), text: clean(h.innerText) }))
    .filter(h => h.text.length > 1);

  // text blocks: paragraphs, list items, table cells, and standalone divs/spans w/ text
  const blocks = [];
  document.querySelectorAll('p,li,td,th,blockquote,figcaption').forEach(el => {
    const t = clean(el.innerText);
    if (t.length > 2) blocks.push({ tag: el.tagName.toLowerCase(), text: t });
  });

  // full visible text of body
  const fullText = clean(document.body.innerText);

  // images <img>
  const imgEls = [...document.querySelectorAll('img')].map(im => ({
    src: abs(im.currentSrc || im.src || im.getAttribute('data-src') || ''),
    alt: clean(im.getAttribute('alt') || ''),
    w: im.naturalWidth, h: im.naturalHeight,
  })).filter(i => i.src && !i.src.startsWith('data:'));

  // background images
  const bgImgs = [];
  document.querySelectorAll('*').forEach(el => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') {
      const m = bg.match(/url\(["']?(.*?)["']?\)/);
      if (m && m[1] && !m[1].startsWith('data:')) bgImgs.push(abs(m[1]));
    }
  });

  // nav links
  const navLinks = [...document.querySelectorAll('nav a, header a, a')]
    .map(a => ({ text: clean(a.innerText), href: a.href }))
    .filter(a => a.href && a.href.includes(location.hostname) && a.text);

  // price-like strings
  const priceRe = /(\d[\d\s.,]*)\s?(€|eur|euros?|usd|\$|le\b|egp|livres?\s?égyptiennes?|cad)/gi;
  const prices = [...new Set((fullText.match(priceRe) || []).map(s => s.trim()))];

  return { title: document.title, metaDescription:
    (document.querySelector('meta[name="description"]')?.content || ''),
    metaKeywords: (document.querySelector('meta[name="keywords"]')?.content || ''),
    ogImage: (document.querySelector('meta[property="og:image"]')?.content || ''),
    headings, blocks, fullText, imgEls, bgImgs: [...new Set(bgImgs)], navLinks, prices };
};

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
    viewport: { width: 1366, height: 900 },
    locale: 'fr-FR',
  });
  const page = await ctx.newPage();

  for (const p of PAGES) {
    console.log('==>', p.slug, p.url);
    try {
      await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // wait for JS content to render
      await page.waitForFunction(() => document.body.innerText.replace(/\s+/g, ' ').trim().length > 400,
        { timeout: 20000 }).catch(() => {});
      // scroll to trigger lazy images / backgrounds
      await page.evaluate(async () => {
        await new Promise(r => {
          let y = 0; const t = setInterval(() => { window.scrollBy(0, 600); y += 600;
            if (y > document.body.scrollHeight + 1200) { clearInterval(t); r(); } }, 120);
        });
      });
      await page.waitForTimeout(1500);
      const data = await page.evaluate(extractor);

      // download images
      const allImgUrls = [...new Set([...data.imgEls.map(i => i.src), ...data.bgImgs])];
      const imageMap = [];
      for (const u of allImgUrls) {
        const local = await downloadImage(u);
        if (local) imageMap.push({ src: u, local: `/images/legacy/${local}` });
      }
      data.slug = p.slug; data.url = p.url; data.imageMap = imageMap;
      fs.writeFileSync(path.join(OUT_RAW, `${p.slug}.json`), JSON.stringify(data, null, 2), 'utf8');
      console.log(`    ok: ${data.headings.length} headings, ${data.blocks.length} blocks, ${imageMap.length}/${allImgUrls.length} imgs, ${data.fullText.length} chars`);
    } catch (e) {
      console.log('    FAIL', p.slug, e.message);
      fs.writeFileSync(path.join(OUT_RAW, `${p.slug}.ERROR.txt`), String(e.stack || e), 'utf8');
    }
  }

  fs.writeFileSync(path.join(OUT_RAW, '_imageManifest.json'), JSON.stringify(imageManifest, null, 2), 'utf8');
  await browser.close();
  console.log('DONE. Raw ->', OUT_RAW, '| Images ->', IMG_DIR, '| total images:', Object.keys(imageManifest).length);
};

run().catch(e => { console.error(e); process.exit(1); });
