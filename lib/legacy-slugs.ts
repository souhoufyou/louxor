/**
 * Slugs hérités du site WebSelf existant — À PRÉSERVER pour le SEO.
 *
 * Ces URL sont déjà indexées par Google et reçoivent du trafic. La refonte
 * doit servir le nouveau contenu SOUS CES MÊMES CHEMINS. Toute modification
 * d'un slug DOIT s'accompagner d'une redirection 301 (voir next.config.ts).
 *
 * `contentSlug` fait le lien vers le fichier de contenu dans /content
 * (destinations/*.json ou excursions/*.json).
 */
export type LegacyKind = 'home' | 'destination' | 'excursion' | 'service' | 'index' | 'testimonials';

export interface LegacySlug {
  path: string;
  label: string;
  kind: LegacyKind;
  contentSlug?: string;
}

export const LEGACY_SLUGS: LegacySlug[] = [
  { path: '/accueil',                         label: 'Accueil',                kind: 'home' },
  { path: '/louxor',                          label: 'Louxor',                 kind: 'destination', contentSlug: 'louxor' },
  { path: '/caire',                           label: 'Le Caire',               kind: 'destination', contentSlug: 'caire' },
  { path: '/assouan',                         label: 'Assouan',                kind: 'destination', contentSlug: 'assouan' },
  { path: '/hurghada',                        label: 'Hurghada',               kind: 'destination', contentSlug: 'hurghada' },
  { path: '/croisieres-en-egypte-sur-le-nil', label: 'Croisières sur le Nil',  kind: 'excursion',   contentSlug: 'croisieres-en-egypte-sur-le-nil' },
  { path: '/montgolfiere',                    label: 'Montgolfière',           kind: 'excursion',   contentSlug: 'montgolfiere' },
  { path: '/service-de-transfert-aeroport',   label: 'Transferts aéroport',    kind: 'service',     contentSlug: 'service-de-transfert-aeroport' },
  { path: '/visites',                         label: 'Excursions',             kind: 'index' },
  { path: '/livre-dor',                       label: "Livre d'or",             kind: 'testimonials' },
];

/** Tous les chemins hérités, utiles pour le sitemap et la vérification de couverture. */
export const LEGACY_PATHS: string[] = LEGACY_SLUGS.map((s) => s.path);
