/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { generateMetadata as _gen } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions depuis Soma Bay | Guide Francophone — Hisham',
    description:
      'Depuis votre resort exclusif de Soma Bay, partez en excursion privée vers Louxor avec Hisham, guide égyptologue francophone. Programme sur mesure, transport inclus.',
    path: '/mer-rouge/soma-bay',
    ogImage: '/images/destinations/mer-rouge/mer-rouge-plongeur-recif.webp',
  });
}

export default function SomaBayPage() {
  return (
    <>
      <main id="main-content">
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image src="/images/destinations/mer-rouge/mer-rouge-plongeur-recif.webp" alt="Excursion depuis Soma Bay vers Louxor avec guide francophone Hisham" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge" className="text-white/75 hover:text-white transition-colors drop-shadow">Mer Rouge</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Soma Bay</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Mer Rouge · Soma Bay</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Excursions depuis Soma Bay</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">De votre péninsule exclusive aux temples pharaoniques de Louxor</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~3h30 de route vers Louxor</span>
            </div>
            <h2 className="text-display-md text-balance">Soma Bay : l'exclusivité au bord du désert antique</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Soma Bay est une péninsule privée au sud d'Hurghada, avec certains des resorts les plus
                luxueux d'Égypte : Sheraton, Kempinski, Cascades Golf Resort... Ses clients apprécient
                le calme, la discrétion et la qualité des services.
              </p>
              <p>
                Ce que peu de résidents de Soma Bay savent, c'est qu'à 3h30 de route — à travers le
                désert arabique dont les panoramas sont spectaculaires — se trouvent les temples et
                nécropoles royales de Louxor. Avec moi, vous pouvez vivre cette expérience unique en
                une journée, sans stress, avec tout organisé de A à Z.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Excursion recommandée</h2>
            <div className="mt-8">
              <Link href="/excursions/depuis-soma-bay-vers-louxor" className="card-luxury block group p-8 hover:shadow-xl transition-shadow max-w-2xl">
                <span className="badge badge-gold">Recommandé</span>
                <h3 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">Excursion Soma Bay → Louxor</h3>
                <p className="text-caption mt-3">Vallée des Rois, Temple de Karnak. Transport privé depuis votre resort. Itinéraire heure par heure.</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 font-medium uppercase tracking-wide group-hover:gap-2.5 transition-all">
                  Voir le programme <ArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis Soma Bay</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Service premium adapté aux standards de votre resort. Devis gratuit sous 24h.</p>
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
