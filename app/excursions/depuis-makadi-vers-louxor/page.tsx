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
    title: 'Excursion Makadi Bay → Louxor | Guide Francophone Hisham — Programme',
    description:
      'Excursion privée depuis Makadi Bay vers Louxor avec Hisham, guide égyptologue francophone. 3h de route, Vallée des Rois et Karnak en une journée. Devis gratuit.',
    path: '/excursions/depuis-makadi-vers-louxor',
    ogImage: '/images/destinations/louxor/temple-karnak-lumiere-doree.webp',
  });
}

const PROGRAMME = [
  { time: '06:00', event: 'Prise en charge à votre hôtel à Makadi Bay' },
  { time: '06:00 – 09:00', event: 'Trajet Makadi Bay → Louxor (3h à travers le désert arabique)' },
  { time: '09:00 – 12:00', event: 'Vallée des Rois : 3 tombes royales au choix' },
  { time: '12:00 – 13:00', event: 'Pause déjeuner dans un restaurant local' },
  { time: '13:00 – 15:30', event: 'Temple de Karnak : Salle Hypostyle, obélisques, lac sacré' },
  { time: '15:30 – 16:30', event: 'Temple de Louxor (optionnel selon votre énergie)' },
  { time: '16:30 – 19:30', event: 'Retour Louxor → Makadi Bay' },
  { time: '~19:30', event: 'Arrivée à votre hôtel à Makadi Bay' },
];

const FAQ = [
  {
    question: 'Quelle est la différence entre Makadi Bay et Hurghada pour partir à Louxor ?',
    answer: "Makadi Bay est à environ 30 km au sud d'Hurghada. Le trajet vers Louxor est sensiblement le même (~3h). La différence, c'est que depuis Makadi Bay vous évitez de traverser le centre d'Hurghada, ce qui peut faire gagner 20-30 minutes selon la circulation.",
  },
  {
    question: 'Est-ce que je peux voir la Vallée des Reines depuis Makadi Bay en une journée ?',
    answer: "Oui, en remplacement ou en complément de la Vallée des Rois. La Vallée des Reines abrite notamment la tombe de Néfertari, la plus belle tombe d'Égypte. Je vous aide à choisir selon vos priorités.",
  },
];

export default function DepuisMakadiVersLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Makadi → Louxor', path: '/excursions/depuis-makadi-vers-louxor' },
      ])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image src="/images/destinations/louxor/temple-karnak-lumiere-doree.webp" alt="Vallée des Rois — excursion depuis Makadi Bay avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/makadi" className="text-white/75 hover:text-white transition-colors drop-shadow">Makadi Bay</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Louxor</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Excursion privée · Journée complète</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Excursion Makadi Bay → Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Vallée des Rois · Temple de Karnak avec guide égyptologue francophone</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Durée : 13h (transport inclus)</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 120€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">100% privé</span>
            </div>
            <h2 className="text-display-md text-balance">De Makadi Bay aux temples pharaoniques</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Makadi Bay est un havre de tranquillité avec ses resorts haut de gamme et ses eaux
                cristallines. À 3 heures de route en voiture privée, Louxor — l'ancienne Thèbes, capitale
                de l'empire égyptien à son apogée — attend avec ses temples monumentaux et ses nécropoles royales.
              </p>
              <p>
                Je propose des excursions privées depuis Makadi Bay, avec prise en charge directement
                depuis votre resort. Le trajet à travers le désert est en lui-même une experience — et
                à notre arrivée à Louxor, je vous plonge dans 3 500 ans d'histoire.
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
                  {['Transport privé depuis votre resort', "Billets d'entrée des sites", 'Guide francophone toute la journée', 'Eau et déjeuner'].map((item) => (
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
            <h2 className="text-display-md text-white">Réserver votre excursion depuis Makadi Bay</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Devis personnalisé sous 24h. Aucun acompte à la réservation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Makadi%20Bay%20vers%20Louxor." className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> Réserver sur WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline-white">Formulaire de devis</Link>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">Autres excursions depuis la Mer Rouge</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Hurghada → Louxor', path: '/excursions/depuis-hurghada-vers-louxor' },
                { label: 'Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire' },
                { label: 'Safaga → Louxor', path: '/excursions/depuis-safaga-vers-louxor' },
                { label: 'Soma Bay → Louxor', path: '/excursions/depuis-soma-bay-vers-louxor' },
                { label: 'Marsa Alam → Louxor', path: '/excursions/depuis-marsa-alam-vers-louxor' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center gap-2 surface p-4 rounded-xl hover:border-gold transition-colors group">
                    <span className="text-gold">›</span>
                    <span className="group-hover:text-gold transition-colors text-sm font-medium">{link.label}</span>
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
