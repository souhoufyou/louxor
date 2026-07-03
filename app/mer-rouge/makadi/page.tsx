/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions depuis Makadi Bay | Guide Francophone — Hisham',
    description:
      'Depuis votre hôtel à Makadi Bay, partez en excursion privée vers Louxor (Vallée des Rois) avec Hisham, guide égyptologue francophone. Journée complète sur mesure.',
    path: '/mer-rouge/makadi',
    ogImage: '/images/destinations/mer-rouge/mer-rouge-coraux-bleus.webp',
  });
}

export default function MakadiBayPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([{ name: 'Mer Rouge', path: '/mer-rouge' }, { name: 'Makadi Bay', path: '/mer-rouge/makadi' }])} />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/mer-rouge/mer-rouge-coraux-bleus.webp" alt="Excursion depuis Makadi Bay vers Louxor avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge" className="text-white/75 hover:text-white transition-colors drop-shadow">Mer Rouge</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Makadi Bay</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Mer Rouge · Makadi Bay</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Excursions depuis Makadi Bay</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">De votre resort de Makadi Bay aux temples pharaoniques de Louxor — une journée inoubliable</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~3h30 de route vers Louxor</span>
            </div>
            <h2 className="text-display-md text-balance">Makadi Bay : un resort de luxe à portée des pharaons</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Makadi Bay est une péninsule exclusive au sud d'Hurghada, avec certains des meilleurs
                resorts all-inclusive d'Égypte. Et pourtant, à seulement 3h30 de route, les temples et
                les tombes royales de Louxor vous attendent.
              </p>
              <p>
                Je viens vous chercher à votre hôtel à Makadi, nous traversons le désert arabique qui
                sépare la mer Rouge du Nil, et nous arrivons à Louxor pour une journée de découverte
                archéologique. Vallée des Rois, Temple de Karnak, Temple de Louxor — selon votre
                programme et votre rythme.
              </p>
              <p>
                Ce que vous vivrez ce jour-là changera votre regard sur l'Égypte. Ce n'est pas juste
                une visite de pierres anciennes — c'est une plongée dans l'une des civilisations les
                plus fascinantes de l'histoire humaine.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Excursion recommandée</h2>
            <div className="mt-8">
              <Link href="/excursions/depuis-makadi-vers-louxor" className="card-luxury block group p-8 hover:shadow-xl transition-shadow max-w-2xl">
                <span className="badge badge-gold">Recommandé</span>
                <h3 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">Excursion Makadi Bay → Louxor</h3>
                <p className="text-caption mt-3">Vallée des Rois, Temple de Karnak, Temple de Louxor. Journée complète avec transport depuis votre hôtel.</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 font-medium uppercase tracking-wide group-hover:gap-2.5 transition-all">
                  Voir le programme complet <ArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis Makadi Bay</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Dites-moi votre hôtel et la date. Devis gratuit sous 24h.</p>
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
