/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Rive Est de Louxor | Guide Francophone — Hisham',
    description:
      'Explorez la rive est de Louxor avec Hisham : Temple de Karnak, Temple de Louxor, musée, souks. La ville vivante des pharaons. Visite privée guidée en français.',
    path: '/louxor/rive-est',
    ogImage: '/images/destinations/louxor/temple-louxor-egypte.webp',
  });
}

export default function RiveEstPage() {
  const SITES = [
    { name: 'Temple de Karnak', path: '/louxor/temple-de-karnak', desc: 'Le plus grand complexe religieux du monde antique sur 30 hectares.' },
    { name: 'Temple de Louxor', path: '/louxor/temple-de-louxor', desc: "Sanctuaire d'Amon au cœur de la ville, magnifique de jour comme de nuit." },
    { name: 'Musée de Louxor', path: '/louxor', desc: "Une des collections les mieux présentées d'Égypte, avec des chefs-d'œuvre du Nouvel Empire." },
    { name: 'Musée de la Momification', path: '/louxor', desc: 'Unique en Égypte, consacré aux techniques et rituels de momification.' },
    { name: 'Marché et souks', path: '/louxor', desc: 'La vie quotidienne de Louxor moderne — épices, artisanat, galabeyyas.' },
    { name: 'Promenade au bord du Nil', path: '/louxor', desc: 'La corniche de Louxor, avec ses calèches et ses felouques au coucher du soleil.' },
  ];

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([{ name: 'Louxor', path: '/louxor' }, { name: 'Rive Est', path: '/louxor/rive-est' }])} />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/louxor/temple-louxor-egypte.webp" alt="Rive est de Louxor — temples et vie de la ville" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Rive Est</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Est</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">La Rive Est de Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">La ville vivante — temples monumentaux, musées, souks et promenade au bord du Nil</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md text-balance">Là où les temples côtoient la vie moderne</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Pour les anciens Égyptiens, la rive est était la rive des vivants — là où le soleil se lève.
                C'est là qu'ils ont construit leurs temples dédiés aux dieux vivants : Karnak et le Temple de
                Louxor dominent le paysage depuis 3 500 ans.
              </p>
              <p>
                La rive est de Louxor aujourd'hui, c'est aussi une ville vivante avec ses marchés colorés,
                ses restaurants au bord du Nil, ses musées et son atmosphère unique où l'Antiquité et le
                quotidien se mêlent de façon fascinante. Avec moi, vous découvrez les deux : le Louxor des
                pharaons et le Louxor d'aujourd'hui.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Les sites de la rive est</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {SITES.map((site) => (
                <li key={site.name}>
                  <Link href={site.path} className="surface p-6 border-gold-accent block group hover:shadow-lg transition-shadow">
                    <h3 className="font-display text-xl group-hover:text-gold transition-colors">{site.name}</h3>
                    <p className="text-caption mt-3">{site.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-xs mt-4 font-medium group-hover:gap-2 transition-all">Voir <ArrowRight size={11} /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Explorer la rive est avec moi</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Programme sur mesure en français, transport inclus. Devis gratuit sous 24h.</p>
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
