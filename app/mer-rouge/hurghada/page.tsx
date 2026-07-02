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
    title: 'Excursions depuis Hurghada | Guide Francophone — Hisham',
    description:
      'Depuis votre hôtel à Hurghada, partez en excursion privée vers Louxor (Vallée des Rois) ou Le Caire (Pyramides) avec Hisham, guide égyptologue francophone diplômé.',
    path: '/mer-rouge/hurghada',
    ogImage: '/images/destinations/mer-rouge/hurghada-plage-eau-cristal.webp',
  });
}

export default function HurghadaPage() {
  const EXCURSIONS = [
    { label: 'Excursion Hurghada → Louxor', path: '/excursions/depuis-hurghada-vers-louxor', desc: 'Vallée des Rois, Temple de Karnak, Temple de Louxor. ~3h de route. Journée complète.' },
    { label: 'Excursion Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire', desc: 'Pyramides de Gizeh, Sphinx, Musée égyptien. ~4h de route ou vol interne.' },
  ];

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([{ name: 'Mer Rouge', path: '/mer-rouge' }, { name: 'Hurghada', path: '/mer-rouge/hurghada' }])} />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image src="/images/destinations/mer-rouge/hurghada-plage-eau-cristal.webp" alt="Excursion depuis Hurghada vers Louxor avec guide francophone Hisham" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge" className="text-white/75 hover:text-white transition-colors drop-shadow">Mer Rouge</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Hurghada</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Mer Rouge · Hurghada</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Excursions depuis Hurghada</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Depuis votre hôtel à Hurghada, découvrez Louxor, Le Caire ou Assouan avec un guide francophone privé</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~3h de route vers Louxor</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> ~4-5h vers Le Caire</span>
            </div>
            <h2 className="text-display-md text-balance">Hurghada, porte d'entrée vers les temples du Nil</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Hurghada est la station balnéaire la plus fréquentée d'Égypte — et l'une des mieux placées
                pour découvrir les trésors pharaoniques. À seulement 3 heures de route à travers le désert
                arabique, Louxor est accessible en excursion d'une journée depuis n'importe quel hôtel de
                la ville.
              </p>
              <p>
                Je viens vous chercher à votre hôtel le matin, nous traversons le désert ensemble — un
                paysage de dunes et de montagnes rocheuses magnifique en soi — puis nous arrivons à Louxor
                pour une journée de découverte des temples et des tombes royales. Je vous ramène à Hurghada
                en soirée.
              </p>
              <p>
                Tout est organisé par moi : transport confortable, billets d'entrée, programme personnalisé.
                Vous n'avez qu'à profiter.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Mes excursions depuis Hurghada</h2>
            <ul className="grid sm:grid-cols-2 gap-6 mt-10 list-none p-0">
              {EXCURSIONS.map((exc) => (
                <li key={exc.path}>
                  <Link href={exc.path} className="card-luxury block group p-6 hover:shadow-xl transition-shadow">
                    <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{exc.label}</h3>
                    <p className="text-caption mt-3">{exc.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 font-medium uppercase tracking-wide group-hover:gap-2.5 transition-all">
                      Voir le programme <ArrowRight size={11} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis Hurghada</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Dites-moi votre hôtel et la date souhaitée. Devis gratuit sous 24h.</p>
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
