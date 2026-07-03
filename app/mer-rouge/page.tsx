/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaWebPage } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions depuis la Mer Rouge | Guide Francophone — Hisham',
    description:
      'Depuis Hurghada, Makadi, Safaga, Soma Bay ou Marsa Alam, rejoignez Louxor, Le Caire ou Assouan avec Hisham, guide égyptologue francophone. Excursions privées sur mesure.',
    path: '/mer-rouge',
    ogImage: '/images/destinations/mer-rouge/coucher-soleil-mer-rouge-egypte.webp',
  });
}

const VILLES = [
  { name: 'Hurghada', path: '/mer-rouge/hurghada', desc: 'La station balnéaire la plus proche de Louxor. Excursion en 1 journée vers les temples du Nil.', badge: '~3h de Louxor' },
  { name: 'Makadi Bay', path: '/mer-rouge/makadi', desc: "Resort de luxe au sud d'Hurghada. Idéale pour une excursion vers Louxor ou Le Caire.", badge: '~3h30 de Louxor' },
  { name: 'Safaga', path: '/mer-rouge/safaga', desc: 'Port de la mer Rouge, point de départ idéal pour Louxor via la route du désert.', badge: '~2h30 de Louxor' },
  { name: 'Soma Bay', path: '/mer-rouge/soma-bay', desc: "Péninsule exclusive au sud d'Hurghada. Excursion d'une journée vers Louxor possible.", badge: '~3h30 de Louxor' },
  { name: 'Marsa Alam', path: '/mer-rouge/marsa-alam', desc: 'Destination plongée par excellence. Excursion vers Louxor en 1 longue journée.', badge: '~4h de Louxor' },
];

const ACTIVITES = [
  { name: 'Excursion vers Louxor', desc: 'Vallée des Rois, Temple de Karnak, Temple de Louxor — une journée pharaonique depuis votre resort.' },
  { name: 'Excursion vers Le Caire', desc: "Pyramides de Gizeh, Sphinx, Musée égyptien — le must de l'Égypte en une journée mémorable." },
  { name: 'Excursion vers Assouan', desc: "Abou Simbel, temple de Philae, barrage — le sud de l'Égypte depuis la Mer Rouge." },
  { name: 'Snorkeling & plongée', desc: 'Les récifs coralliens de la mer Rouge comptent parmi les plus beaux du monde. Je vous recommande les meilleurs spots.' },
  { name: 'Safari dans le désert', desc: 'Quad, jeep, soirée bédouine — le désert arabique à portée de main depuis votre hotel.' },
  { name: 'Excursion en bateau', desc: 'Îles, dauphins, coraux — les sorties en mer sont un passage obligé depuis la Mer Rouge.' },
];

export default function MerRougePage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaWebPage({
          name: 'Excursions depuis la Mer Rouge avec guide francophone',
          description: 'Depuis Hurghada, Makadi, Safaga, Soma Bay ou Marsa Alam — excursions privées vers les sites pharaoniques avec Hisham.',
          path: '/mer-rouge',
        })}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Mer Rouge', path: '/mer-rouge' }])} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/mer-rouge/coucher-soleil-mer-rouge-egypte.webp"
            alt="Mer Rouge, Égypte — excursions vers Louxor et Le Caire avec guide francophone"
            fill priority sizes="100vw" className="object-cover object-center"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Mer Rouge</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Hurghada · Makadi · Safaga · Soma Bay · Marsa Alam</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Excursions depuis la Mer Rouge avec guide francophone
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Vous êtes à Hurghada ou dans un resort de la Mer Rouge ? Je viens vous chercher pour vous emmener voir les plus grands sites pharaoniques d'Égypte.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md text-balance">La Mer Rouge et les pharaons : les deux visages de l'Égypte</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Beaucoup de voyageurs arrivent en Égypte pour les plages de la Mer Rouge et rentrent sans
                avoir vu un seul temple. C'est dommage, car depuis Hurghada ou Safaga, Louxor n'est qu'à
                2h30-3h de route à travers le désert arabique.
              </p>
              <p>
                Je suis guide francophone installé à Louxor, et j'organise des excursions privées depuis
                tous les resorts de la Mer Rouge. Je viens vous chercher à votre hôtel, je vous emmène
                sur les plus beaux sites pharaoniques d'Égypte, et je vous ramène le soir — en ayant
                vécu une journée inoubliable entre deux sessions de snorkeling.
              </p>
              <p>
                Ce que je propose n'est pas une excursion de groupe en bus bondé avec un arrêt dans une
                boutique de souvenirs. C'est une visite privée, en français, à votre rythme, avec un
                égyptologue diplômé qui transforme des pierres en histoires vivantes.
              </p>
            </div>
          </div>
        </section>

        {/* Villes de départ */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Votre ville de départ</h2>
            <p className="text-text-muted mt-4 max-w-xl">Choisissez votre resort et je calcule l'excursion idéale depuis votre emplacement.</p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {VILLES.map((ville) => (
                <li key={ville.name}>
                  <Link href={ville.path} className="card-luxury block group h-full p-6 hover:shadow-xl transition-shadow">
                    <span className="badge badge-gold text-xs">{ville.badge}</span>
                    <h3 className="font-display text-2xl mt-3 group-hover:text-gold transition-colors">{ville.name}</h3>
                    <p className="text-caption mt-3 leading-relaxed">{ville.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-gold text-xs font-medium mt-4 uppercase tracking-wide group-hover:gap-2.5 transition-all">
                      Voir les excursions <ArrowRight size={11} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activités */}
        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">Ce que je propose depuis la Mer Rouge</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {ACTIVITES.map((act, i) => (
                <li key={act.name} className="surface p-6 border-gold-accent">
                  <span className="text-xs font-mono text-gold/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl mt-1">{act.name}</h3>
                  <p className="text-caption mt-3">{act.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Excursions SEO links */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Excursions vers les sites pharaoniques</h2>
            <p className="text-text-muted mt-4 max-w-xl">Depuis votre resort de la Mer Rouge, je vous emmène sur les plus grands sites d'Égypte.</p>
            <ul className="grid sm:grid-cols-2 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Depuis Hurghada → Louxor', path: '/excursions/depuis-hurghada-vers-louxor' },
                { label: 'Depuis Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire' },
                { label: 'Depuis Makadi → Louxor', path: '/excursions/depuis-makadi-vers-louxor' },
                { label: 'Depuis Safaga → Louxor', path: '/excursions/depuis-safaga-vers-louxor' },
                { label: 'Depuis Soma Bay → Louxor', path: '/excursions/depuis-soma-bay-vers-louxor' },
                { label: 'Depuis Marsa Alam → Louxor', path: '/excursions/depuis-marsa-alam-vers-louxor' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center gap-3 surface p-4 rounded-xl hover:border-gold transition-colors group">
                    <Star size={14} className="text-gold fill-gold flex-shrink-0" />
                    <span className="group-hover:text-gold transition-colors font-medium">{link.label}</span>
                    <ArrowRight size={13} className="text-gold ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Organiser votre excursion depuis la Mer Rouge</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Dites-moi votre hôtel et la date souhaitée. Je vous envoie un devis personnalisé sous 24h.
            </p>
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
