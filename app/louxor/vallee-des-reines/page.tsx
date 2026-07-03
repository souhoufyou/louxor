/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Vallée des Reines à Louxor | Guide Francophone — Hisham',
    description:
      'Visitez la Vallée des Reines avec Hisham, guide égyptologue francophone. 90 tombes de reines et princes royaux dont la somptueuse tombe de Néfertari. Visite privée.',
    path: '/louxor/vallee-des-reines',
    ogImage: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
  });
}

export default function ValleeDesReinesPage() {
  const FAQ = [
    {
      question: 'La tombe de Néfertari est-elle accessible ?',
      answer:
        "La tombe de Néfertari (QV 66) est ouverte mais son accès est limité à un petit nombre de visiteurs par jour, avec un billet spécial plus cher. C'est la tombe la plus belle d'Égypte selon beaucoup d'égyptologues. Je vous arrange l'accès si vous le souhaitez.",
    },
    {
      question: 'Peut-on visiter la Vallée des Reines et la Vallée des Rois le même jour ?',
      answer:
        "Oui, les deux sites sont sur la rive ouest à quelques kilomètres. Je propose souvent de commencer par la Vallée des Rois le matin puis d'enchaîner avec la Vallée des Reines l'après-midi.",
    },
  ];

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: 'Vallée des Reines',
          description: 'Nécropole de la rive ouest de Louxor abritant les tombes des reines et princes royaux de la XIXe et XXe dynasties.',
          url: 'https://guide-francophone-louxor.com/louxor/vallee-des-reines',
          geo: { '@type': 'GeoCoordinates', latitude: 25.7285, longitude: 32.5961 },
        }}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Louxor', path: '/louxor' }, { name: 'Vallée des Reines', path: '/louxor/vallee-des-reines' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/louxor/colosses-memnon-louxor.webp" alt="Vallée des Reines, Louxor" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vallée des Reines</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Ouest</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Vallée des Reines</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">90 tombes royales dont la tombe de Néfertari — la plus belle d'Égypte</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> Durée : 2 à 3 heures</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><MapPin size={14} className="text-gold" /> Rive ouest de Louxor</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><Star size={14} className="text-gold fill-gold" /> À partir de 70€/personne</span>
            </div>
            <h2 className="text-display-md text-balance">Le dernier repos des épouses royales</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Moins fréquentée que la Vallée des Rois, la Vallée des Reines est un joyau que je recommande
                à tous mes clients qui veulent aller au-delà des circuits habituels. Elle abrite plus de
                90 tombes appartenant aux épouses et enfants des pharaons des XIXe et XXe dynasties.
              </p>
              <p>
                Son trésor absolu : la tombe de Néfertari (QV 66), épouse de Ramsès II. Ses peintures sont
                considérées par les égyptologues comme les plus belles et les mieux conservées d'Égypte.
                Les couleurs sont d'une vivacité extraordinaire — ocre, bleu lapis-lazuli, vert malachite —
                comme si le peintre avait travaillé il y a quelques siècles seulement.
              </p>
              <p>
                Avec moi, vous découvrez ces tombes dans leur contexte historique et religieux. Je vous
                explique qui était Néfertari, pourquoi Ramsès II lui a consacré un tel monument, et ce
                que chaque scène peinte révèle sur la croyance en l'au-delà.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Les tombes à voir</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                { num: 'QV 66', name: 'Néfertari', desc: 'La plus belle tombe d\'Égypte. Peintures d\'une perfection absolue, couleurs éclatantes après 3 200 ans.' },
                { num: 'QV 44', name: 'Khaemouaset', desc: 'Fils de Ramsès III. Des scènes religieuses d\'une grande finesse décorent ses couloirs.' },
                { num: 'QV 55', name: 'Amonherkepeshef', desc: 'Autre fils de Ramsès III. Couloirs ornés de scènes où le pharaon présente son fils aux dieux.' },
                { num: 'QV 52', name: 'Titi', desc: 'Reine de la XXe dynastie. Des déesses gardient ses couloirs dans des poses gracieuses.' },
              ].map((item) => (
                <li key={item.num} className="surface p-6 border-gold-accent">
                  <span className="text-xs font-mono text-gold/60">{item.num}</span>
                  <h3 className="font-display text-xl mt-1">{item.name}</h3>
                  <p className="text-caption mt-3">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md">Questions fréquentes</h2>
            <dl className="mt-10">
              {FAQ.map((item, i) => (
                <div key={item.question} className={`py-6 ${i > 0 ? 'border-t border-[var(--parchment)]' : ''}`}>
                  <dt className="font-display text-xl font-medium">{item.question}</dt>
                  <dd className="mt-3 text-text-muted leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Visiter la Vallée des Reines avec moi</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Visite privée, guide diplômé, transport inclus. Devis gratuit sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a href="https://wa.me/201002086724" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">D'autres sites à Louxor</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
                { label: 'Rive Ouest', path: '/louxor/rive-ouest' },
                { label: 'Montgolfière', path: '/louxor/montgolfiere' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center gap-2 surface p-4 rounded-xl hover:border-gold transition-colors group">
                    <ArrowRight size={14} className="text-gold flex-shrink-0" />
                    <span className="group-hover:text-gold transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
