# Contenu — guidefrancophonelouxor.com (refonte)

Contenu extrait du site WebSelf existant (rendu JS), nettoyé (fautes, accents,
ponctuation, capitalisation) et restructuré en JSON typé. Chargé via
[`lib/content.ts`](../lib/content.ts).

## Structure

```
content/
├── site.json                 # Config globale : guide, contact, nav, langues, note tarifs
├── destinations/             # Guides « où aller »
│   ├── louxor.json
│   ├── caire.json
│   ├── assouan.json
│   └── hurghada.json
├── excursions/               # « quoi faire » (programmes, options, services)
│   ├── excursions-louxor.json
│   ├── excursions-assouan.json
│   ├── excursions-hurghada.json
│   ├── croisiere-nil.json
│   ├── montgolfiere.json
│   └── transfert-aeroport.json
└── testimonials/
    └── reviews.json          # 20 avis du livre d'or
```

## SEO — slugs hérités à préserver

Les URL existantes sont indexées par Google ; la refonte doit servir le nouveau
contenu **sous ces mêmes chemins**. Référence : [`lib/legacy-slugs.ts`](../lib/legacy-slugs.ts).

| Chemin hérité | Contenu | Fichier |
|---|---|---|
| `/accueil` | Accueil | `site.json` + sections |
| `/louxor` | Destination | `destinations/louxor.json` |
| `/caire` | Destination | `destinations/caire.json` |
| `/assouan` | Destination | `destinations/assouan.json` |
| `/hurghada` | Destination | `destinations/hurghada.json` |
| `/croisieres-en-egypte-sur-le-nil` | Croisière | `excursions/croisiere-nil.json` |
| `/montgolfiere` | Excursion | `excursions/montgolfiere.json` |
| `/service-de-transfert-aeroport` | Service | `excursions/transfert-aeroport.json` |
| `/visites` | Index excursions | `excursions/excursions-*.json` |
| `/livre-dor` | Témoignages | `testimonials/reviews.json` |

> Les meta `title`/`description` d'origine étaient vides ; chaque fichier
> contient un bloc `seo` réécrit (orienté requêtes « guide francophone + ville »).

## Images

- Toutes les images du site ont été téléchargées dans
  [`public/images/legacy/`](../public/images/legacy/) (112 fichiers).
- Chaque destination/excursion référence sa galerie (`gallery`) et une image
  `hero`. Les images **décoratives / icônes partagées** (bannière hiéroglyphes,
  `nil2`, `Temple-at-Philae`, icônes `ws-noun_*`, `selector.svg`…) ont été
  exclues des galeries.
- 2 images n'ont pas pu être téléchargées (URL source tronquée / variante de
  taille) ; des variantes équivalentes existent déjà en local.

## Re-scraper

Le pipeline d'extraction (Playwright) est dans
[`scripts/scrape.mjs`](../scripts/scrape.mjs) :

```bash
npm run scrape        # → écrit les JSON bruts dans scripts/.raw et les images dans public/images/legacy
```
