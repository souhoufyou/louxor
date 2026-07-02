/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursion Safaga → Louxor | Guide Francophone Hisham — Programme & Prix',
    description:
      'Depuis Safaga, Louxor est à seulement 2h30 de route. Excursion privée avec Hisham, guide égyptologue francophone. Vallée des Rois, Karnak, Temple de Louxor en une journée.',
    path: '/excursions/depuis-safaga-vers-louxor',
    ogImage: '/images/destinations/louxor/colosses-memnon-louxor.webp',
  });
}

const PROGRAMME = [
  { time: '06:30', event: 'Prise en charge à votre hôtel à Safaga' },
  { time: '06:30 – 09:00', event: 'Trajet Safaga → Louxor (2h30 à travers le désert arabique)' },
  { time: '09:00 – 12:00', event: 'Vallée des Rois : 3 tombes royales au choix' },
  { time: '12:00 – 13:00', event: 'Pause déjeuner' },
  { time: '13:00 – 15:30', event: 'Temple de Karnak : Salle Hypostyle, obélisques, lac sacré' },
  { time: '15:30 – 17:00', event: 'Temple de Louxor (optionnel)' },
  { time: '17:00 – 19:30', event: 'Retour Louxor → Safaga' },
  { time: '~19:30', event: 'Arrivée à votre hôtel' },
];

const FAQ = [
  {
    question: 'Safaga est-elle vraiment plus proche de Louxor que Hurghada ?',
    answer: "Oui. Safaga est à environ 2h30 de Louxor, contre 3h depuis Hurghada. Safaga est à 60 km au sud d'Hurghada, ce qui la rapproche significativement des vallées de Louxor. C'est un avantage non négligeable pour une excursion à la journée.",
  },
  {
    question: 'Peut-on partir plus tôt pour voir le lever du soleil sur la Vallée des Rois ?',
    answer: "Absolument. En partant à 5h depuis Safaga, vous arrivez à Louxor vers 7h30 — juste pour l'ouverture des tombes et la lumière du matin sur la falaise. C'est une expérience mémorable que je recommande fortement.",
  },
];

export default function DepuisSafagaVersLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Safaga → Louxor', path: '/excursions/depuis-safaga-vers-louxor' },
      ])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image src="/images/destinations/louxor/colosses-memnon-louxor.webp" alt="Vallée des Rois — excursion depuis Safaga avec guide francophone Hisham" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/safaga" className="text-white/75 hover:text-white transition-colors drop-shadow">Safaga</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Louxor</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Excursion privée · Trajet le plus court depuis la Mer Rouge</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Excursion Safaga → Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">2h30 de route · Vallée des Rois · Karnak · Guide égyptologue francophone</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Trajet le + court de la Mer Rouge</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 110€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">100% privé</span>
            </div>
            <h2 className="text-display-md text-balance">Le chemin le plus direct vers la Vallée des Rois</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Parmi toutes les villes de la Mer Rouge, Safaga est la plus proche de Louxor — à seulement
                2h30 de route à travers le désert arabique. Ce n'est pas un hasard : la route de Safaga
                traverse Qena, au bord du Nil, et descend directement vers Louxor.
              </p>
              <p>
                Pour vous, cela signifie plus de temps sur les sites et moins de temps dans la voiture.
                En partant à 6h30 depuis votre hôtel, nous arrivons à Louxor à 9h — frais et reposés,
                prêts pour une journée intense dans les plus beaux sites de l'Égypte ancienne.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Itinéraire de la journée</h2>
            <div className="mt-10 space-y-0">
              {PROGRAMME.map((step, i) => (
                <div key={i} className={`flex gap-6 py-5 ${i < PROGRAMME.length - 1 ? 'border-b border-[var(--parchment)]' : ''}`}>
                  <div className="flex-shrink-0 w-28 text-sm font-mono text-gold font-medium">{step.time}</div>
                  <div className="text-text-muted">{step.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxury">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-display-md mb-6">Inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {['Transport privé aller-retour depuis Safaga', "Billets d'entrée de tous les sites", 'Guide égyptologue francophone', 'Eau minérale et déjeuner'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm"><CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-display-md mb-6">Non inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {['Billet tombe de Toutânkhamon (optionnel)', 'Dépenses personnelles'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-muted"><XCircle size={16} className="text-warm-gray flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
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
            <h2 className="text-display-md text-white">Réserver votre excursion Safaga → Louxor</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Le trajet le plus court, le plus de temps sur les sites. Devis sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Safaga%20vers%20Louxor." className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> Réserver sur WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline-white">Formulaire de devis</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
