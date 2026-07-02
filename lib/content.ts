/**
 * Chargeurs de contenu (server-only).
 * Lit les fichiers JSON de /content. À utiliser dans des Server Components,
 * `generateStaticParams`, `generateMetadata`, etc.
 */
import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/* ------------------------------- Types ---------------------------------- */

export interface Seo {
  title: string;
  description: string;
}

export interface Hero {
  image: string;
  tagline?: string;
}

export interface Highlight {
  name: string;
  description: string;
}

export interface ProgramDay {
  label: string;
  items: string[];
}

export interface Program {
  title: string;
  duration?: string;
  description?: string;
  items?: string[];
  days?: ProgramDay[];
}

export interface Destination {
  slug: string;
  type: 'destination';
  legacyPath: string;
  name: string;
  seo: Seo;
  hero: Hero;
  intro: string;
  areas?: Highlight[];
  highlights: Highlight[];
  relatedExcursions?: string[];
  gallery: string[];
  practicalInfo?: PracticalInfo;
  faq?: FaqEntry[];
}

export interface Excursion {
  slug: string;
  type: 'excursion' | 'service';
  category: string;
  legacyPath: string;
  name: string;
  seo: Seo;
  hero: Hero;
  intro: string;
  experience?: string;
  programs?: Program[];
  dayTrips?: Program[];
  options?: Highlight[];
  details?: Record<string, unknown>;
  coverage?: Record<string, unknown>;
  vehicleTypes?: string[];
  relatedDestinations?: string[];
  gallery: string[];
  difficulty?: string;
  priceFrom?: string;
  included?: string[];
  excluded?: string[];
  faq?: FaqEntry[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface PracticalInfo {
  bestPeriod: string;
  daysRecommended: string;
  tips: string[];
}

export interface Review {
  author: string;
  location?: string;
  date?: string;
  rating?: number;
  text: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  guide: { name: string; role: string; bio: string; approach: string };
  contact: { email: string; phone: string; phoneRaw: string; whatsapp: string; address: string };
  social: { facebookPageName: string; facebookUrl: string | null };
  languages: string[];
  pricingNote: string;
  nav: { label: string; path: string }[];
}

/* ------------------------------ Helpers --------------------------------- */

async function readJson<T>(...segments: string[]): Promise<T> {
  const file = path.join(CONTENT_DIR, ...segments);
  return JSON.parse(await fs.readFile(file, 'utf8')) as T;
}

async function readDir(...segments: string[]): Promise<string[]> {
  const dir = path.join(CONTENT_DIR, ...segments);
  const entries = await fs.readdir(dir);
  return entries.filter((f) => f.endsWith('.json'));
}

/* ------------------------------ Loaders --------------------------------- */

export function getSite(): Promise<SiteConfig> {
  return readJson<SiteConfig>('site.json');
}

export async function getDestinations(): Promise<Destination[]> {
  const files = await readDir('destinations');
  return Promise.all(files.map((f) => readJson<Destination>('destinations', f)));
}

export function getDestination(slug: string): Promise<Destination> {
  return readJson<Destination>('destinations', `${slug}.json`);
}

export async function getExcursions(): Promise<Excursion[]> {
  const files = await readDir('excursions');
  return Promise.all(files.map((f) => readJson<Excursion>('excursions', f)));
}

export function getExcursion(slug: string): Promise<Excursion> {
  return readJson<Excursion>('excursions', `${slug}.json`);
}

export async function getReviews(): Promise<Review[]> {
  const data = await readJson<{ reviews: Review[] }>('testimonials', 'reviews.json');
  return data.reviews;
}
