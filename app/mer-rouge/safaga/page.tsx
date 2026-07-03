/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { generateMetadata as _gen } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions depuis Safaga | Guide Francophone — Hisham',
    description:
      'Depuis Safaga, rejoignez Louxor en 2h30 seulement avec Hisham, guide égyptologue francophone. Le trajet le plus court de la Mer Rouge vers la Vallée des Rois.',
    path: '/mer-rouge/safaga',
    ogImage: '/images/destinations/mer-rouge/bateau-excursion-mer-rouge.webp',
  });
}

export default function SafagaPage() {
  return (
    <>
      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/mer-rouge/bateau-excursion-mer-rouge.webp" alt="Excursion depuis Safaga vers Louxor — guide francophone Hisham" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge" className="text-white/75 hover:text-white transition-colors drop-shadow">Mer Rouge</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Safaga</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Mer Rouge · Safaga</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Excursions depuis Safaga</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Le trajet le plus court de la Mer Rouge vers Louxor — 2h30 seulement à travers le désert</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~2h30 de route vers Louxor</span>
            </div>
            <h2 className="text-display-md text-balance">Safaga : le point le plus proche de Louxor</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Safaga est souvent méconnue des touristes occidentaux, mais les plongeurs du monde entier
                savent que ses récifs coralliens sont parmi les plus beaux de la Mer Rouge. Ce qu'ils ne
                savent pas toujours, c'est que Safaga est aussi le point de départ le plus proche de
                Louxor depuis la Mer Rouge — à seulement 2h30 de route.
              </p>
              <p>
                Depuis votre hôtel à Safaga, je peux vous emmener à Louxor et vous faire découvrir la
                Vallée des Rois, le Temple de Karnak et le Temple de Louxor en une seule journée — en
                gardant du temps pour votre retour confortable avant le dîner.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Excursion recommandée</h2>
            <div className="mt-8">
              <Link href="/excursions/depuis-safaga-vers-louxor" className="card-luxury block group p-8 hover:shadow-xl transition-shadow max-w-2xl">
                <span className="badge badge-gold">Recommandé</span>
                <h3 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">Excursion Safaga → Louxor</h3>
                <p className="text-caption mt-3">Le trajet le plus rapide de la Mer Rouge vers les temples du Nil. Vallée des Rois, Karnak, Temple de Louxor.</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 font-medium uppercase tracking-wide group-hover:gap-2.5 transition-all">
                  Voir le programme <ArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis Safaga</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Le trajet le plus court — le plus de temps sur les sites. Devis gratuit sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a href="https://wa.me/201002086724" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
