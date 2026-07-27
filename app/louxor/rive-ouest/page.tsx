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
    title: 'Rive Ouest de Louxor | Guide Francophone — Hisham',
    description:
      'Explorez la rive ouest de Louxor avec Hisham : Vallée des Rois, Vallée des Reines, Deir el-Bahari, Colosses de Memnon. Visite privée guidée en français.',
    path: '/louxor/rive-ouest',
    ogImage: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
  });
}

export default function RiveOuestPage() {
  const SITES = [
    { name: 'Vallée des Rois', path: '/louxor/vallee-des-rois', desc: '63 tombes royales du Nouvel Empire, dont celle de Toutânkhamon.' },
    { name: 'Vallée des Reines', path: '/louxor/vallee-des-reines', desc: '90 tombes de reines et princes, dont la somptueuse Néfertari (QV 66).' },
    { name: 'Temple de Deir el-Bahari', path: '/louxor', desc: "Le temple funéraire de la reine Hatchepsout, chef-d'œuvre architectural de la XVIIIe dynastie." },
    { name: 'Colosses de Memnon', path: '/louxor', desc: "Deux statues colossales de 18 mètres qui gardent l'entrée de la nécropole thébaine." },
    { name: 'Village de Deir el-Médina', path: '/louxor', desc: 'Le village des artisans qui ont creusé et peint les tombes royales. Un témoignage unique sur la vie quotidienne.' },
    { name: 'Temple de Médinet Habou', path: '/louxor', desc: "Temple funéraire de Ramsès III, l'un des mieux conservés d'Égypte avec ses couleurs encore vives." },
  ];

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([{ name: 'Louxor', path: '/louxor' }, { name: 'Rive Ouest', path: '/louxor/rive-ouest' }])} />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/louxor/vallee-des-rois-panorama.webp" alt="Rive ouest de Louxor — nécropole thébaine avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Rive Ouest</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Ouest</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">La Rive Ouest de Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">La plus grande nécropole de l'Antiquité — vallées royales, temples funéraires et villages d'artisans</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md text-balance">Le royaume des morts des pharaons</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Pour les anciens Égyptiens, la rive ouest du Nil était le royaume des morts — là où
                le soleil se couche. C'est pourquoi tous les temples funéraires et toutes les nécropoles
                royales de Louxor ont été construits sur cette rive. Résultat : une concentration de
                monuments pharaoniques unique au monde.
              </p>
              <p>
                En une seule journée avec moi, vous pouvez combiner deux ou trois sites de la rive ouest
                selon vos intérêts. Je connais les horaires d'ouverture, les billets à acheter, les
                moments où l'affluence est la plus faible. Avec moi, vous optimisez votre temps sans
                jamais vous sentir pressé.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Les sites de la rive ouest</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {SITES.map((site) => (
                <li key={site.name}>
                  <Link href={site.path} className="surface p-6 border-gold-accent block group hover:shadow-lg transition-shadow">
                    <h3 className="font-display text-xl group-hover:text-gold transition-colors">{site.name}</h3>
                    <p className="text-caption mt-3">{site.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-xs mt-4 font-medium group-hover:gap-2 transition-all">
                      Voir <ArrowRight size={11} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 className="text-display-md">Et de l&apos;autre côté du Nil ?</h2>
            <p className="mt-6 text-lg text-text-muted leading-relaxed text-pretty">
              La rive ouest était le royaume des morts ; la rive est, celui des vivants. C&apos;est là que
              se dressent les deux temples les plus monumentaux de Louxor, et c&apos;est là que bat encore
              le cœur de la ville moderne. Beaucoup de mes clients consacrent une matinée à chaque rive.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/louxor/rive-est" className="btn btn-outline">Découvrir la rive est</Link>
              <Link href="/louxor/itineraire-2-jours" className="btn btn-outline">Louxor en 2 jours</Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Explorer la rive ouest avec moi</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Je crée votre programme sur mesure selon vos intérêts et votre disponibilité. Devis gratuit sous 24h.</p>
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
