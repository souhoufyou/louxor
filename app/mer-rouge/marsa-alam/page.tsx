/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { generateMetadata as _gen } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions depuis Marsa Alam | Guide Francophone — Hisham',
    description:
      'Depuis Marsa Alam, excursion privée vers Louxor avec Hisham, guide égyptologue francophone. 4h de désert, une journée inoubliable dans la Vallée des Rois. Devis gratuit.',
    path: '/mer-rouge/marsa-alam',
    ogImage: '/images/destinations/mer-rouge/mer-rouge-tortue-marine.webp',
  });
}

export default function MarsaAlamPage() {
  return (
    <>
      <main id="main-content">
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image src="/images/destinations/mer-rouge/mer-rouge-tortue-marine.webp" alt="Excursion depuis Marsa Alam vers Louxor avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge" className="text-white/75 hover:text-white transition-colors drop-shadow">Mer Rouge</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Marsa Alam</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Mer Rouge · Marsa Alam</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Excursions depuis Marsa Alam</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">La destination plongée par excellence, à 4 heures seulement des temples de Louxor</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~4h de route vers Louxor</span>
            </div>
            <h2 className="text-display-md text-balance">Marsa Alam : entre coraux et pharaons</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Marsa Alam est la destination de plongée la plus prisée d'Égypte — et peut-être de
                toute la Mer Rouge. Ses récifs coralliens préservés, ses dugongs et ses raies mantas
                en font un paradis pour les amateurs de vie sous-marine.
              </p>
              <p>
                Mais Marsa Alam, c'est aussi une porte vers les trésors pharaoniques. À 4 heures de
                route au nord-ouest, Louxor attend avec ses temples monumentaux et ses nécropoles
                royales. Le trajet en voiture privée à travers le désert de l'Est est lui-même une
                expérience — une immensité de pierre et de sable qui donne une idée de ce que
                voyageaient les anciens Égyptiens.
              </p>
              <p>
                Je propose des départs tôt le matin depuis Marsa Alam pour maximiser le temps sur les
                sites. Nous visitons les incontournables et je vous ramène en soirée, prêt pour un
                plongeon dans les eaux turquoise du lendemain.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Excursion recommandée</h2>
            <div className="mt-8">
              <Link href="/excursions/depuis-marsa-alam-vers-louxor" className="card-luxury block group p-8 hover:shadow-xl transition-shadow max-w-2xl">
                <span className="badge badge-gold">Recommandé</span>
                <h3 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">Excursion Marsa Alam → Louxor</h3>
                <p className="text-caption mt-3">Départ à 5h, Vallée des Rois, Temple de Karnak, retour en soirée. Itinéraire heure par heure disponible.</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 font-medium uppercase tracking-wide group-hover:gap-2.5 transition-all">
                  Voir le programme <ArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis Marsa Alam</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Départ tôt, journée optimisée, retour confortable. Devis gratuit sous 24h.</p>
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
