/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursion Hurghada → Louxor | Guide Francophone Hisham — Prix & Programme',
    description:
      'Excursion privée depuis Hurghada vers Louxor avec Hisham, guide égyptologue francophone. Vallée des Rois, Temple de Karnak, Temple de Louxor. Itinéraire, prix, réservation.',
    path: '/excursions/depuis-hurghada-vers-louxor',
    ogImage: '/images/destinations/louxor/vallee-des-rois-entree-tombe.webp',
  });
}

const FAQ = [
  {
    question: 'Combien de temps dure le trajet Hurghada – Louxor ?',
    answer: 'Environ 3 heures de route dans chaque sens, à travers le désert arabique. La route est bonne et le paysage est spectaculaire. Avec un départ à 6h, nous arrivons à Louxor vers 9h et avons toute la journée pour visiter.',
  },
  {
    question: 'Cette excursion est-elle fatigante ?',
    answer: "Elle est longue (environ 13-14 heures en tout) mais j'optimise le programme pour que vous ne vous sentiez jamais bousculé. Le transport est confortable, nous faisons des pauses, et je pace la visite selon votre énergie.",
  },
  {
    question: 'Puis-je choisir les sites à visiter ?',
    answer: "Oui, complètement. Le programme que je propose est une base que nous adaptons ensemble. Vous voulez voir uniquement la Vallée des Rois et Karnak ? Parfait. Vous voulez ajouter Médinet Habou ou la Vallée des Reines ? Pas de problème.",
  },
  {
    question: 'Le vol en avion est-il une alternative ?',
    answer: "Il existe des vols quotidiens Hurghada-Louxor (45 min). Je peux organiser l'excursion depuis l'aéroport de Louxor si vous préférez cette option — légèrement plus cher mais plus rapide. Demandez-moi un devis pour les deux options.",
  },
  {
    question: 'Que comprend le prix ?',
    answer: "Le transport aller-retour depuis votre hôtel, les billets d'entrée des sites, le guide pendant toute la journée, l'eau et les pauses déjeuner. Aucune surprise.",
  },
];

const PROGRAMME = [
  { time: '05:30', event: 'Prise en charge à votre hôtel à Hurghada' },
  { time: '05:30 – 09:00', event: 'Trajet Hurghada → Louxor via le désert arabique' },
  { time: '09:00 – 12:00', event: 'Vallée des Rois : 3 tombes royales au choix (optionnel : tombe de Toutânkhamon)' },
  { time: '12:00 – 13:00', event: 'Pause déjeuner dans un restaurant local' },
  { time: '13:00 – 15:30', event: 'Temple de Karnak : Grande Salle Hypostyle, obélisques, lac sacré' },
  { time: '15:30 – 17:00', event: "Temple de Louxor : pylône de Ramsès II, cour d'Amenhotep III" },
  { time: '17:00 – 20:00', event: 'Retour Louxor → Hurghada' },
  { time: '~20:00', event: 'Arrivée à votre hôtel à Hurghada' },
];

export default function DepuisHurghadaVersLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: 'Excursion depuis Hurghada vers Louxor — Guide Francophone',
          description: "Excursion privée d'une journée depuis Hurghada vers Louxor avec guide égyptologue francophone. Vallée des Rois, Karnak, Temple de Louxor.",
          url: 'https://guide-francophone-louxor.com/excursions/depuis-hurghada-vers-louxor',
          image: '/images/destinations/louxor/vallee-des-rois-entree-tombe.webp',
          provider: { '@type': 'Person', name: 'Hisham', jobTitle: 'Guide égyptologue francophone' },
        }}
      />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Depuis Hurghada vers Louxor', path: '/excursions/depuis-hurghada-vers-louxor' },
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
          <Image src="/images/destinations/louxor/vallee-des-rois-entree-tombe.webp" alt="Vallée des Rois — excursion depuis Hurghada avec guide francophone Hisham" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/hurghada" className="text-white/75 hover:text-white transition-colors drop-shadow">Hurghada</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Louxor</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Excursion privée · Journée complète</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">
              Excursion Hurghada → Louxor
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Vallée des Rois · Temple de Karnak · Temple de Louxor avec guide égyptologue francophone
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Durée : 13-14h (transport inclus)</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 120€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Visite 100% privée</span>
            </div>

            <h2 className="text-display-md text-balance">Louxor en une journée depuis Hurghada</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Vous êtes à Hurghada pour les plages et la mer Rouge, mais vous vous demandez si vous
                pouvez profiter de votre séjour pour voir les temples égyptiens ? La réponse est oui —
                et plus facilement que vous ne le pensez.
              </p>
              <p>
                À 3 heures de route à travers le désert arabique, Louxor est la ville archéologique
                la plus riche du monde. En une seule journée, je vous fais découvrir la Vallée des
                Rois, le Temple de Karnak et le Temple de Louxor — les trois sites incontournables
                de cette ville d'exception.
              </p>
              <p>
                Pourquoi choisir mon excursion plutôt qu'un bus de groupe ? Parce que vous serez en
                privé, avec un guide qui parle français couramment, qui est diplômé en égyptologie
                et qui transforme chaque temple en une histoire vivante. Ce n'est pas la même
                expérience — c'est une autre dimension.
              </p>
            </div>
          </div>
        </section>

        {/* Programme */}
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

        {/* Inclus / non inclus */}
        <section className="section-y">
          <div className="container-luxury">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-display-md mb-6">Inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {[
                    'Transport privé aller-retour depuis votre hôtel',
                    "Billets d'entrée de tous les sites visités",
                    'Guide égyptologue francophone pour toute la journée',
                    'Eau minérale pendant le trajet',
                    'Pause déjeuner dans un restaurant local',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-display-md mb-6">Non inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {[
                    'Billets optionnels (tombe de Toutânkhamon, tombe de Séthi Ier)',
                    'Dépenses personnelles et pourboires',
                    'Excursion en felouque sur le Nil (option disponible)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                      <XCircle size={16} className="text-warm-gray flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi moi */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 className="text-display-md">Pourquoi choisir mon excursion plutôt qu'une agence ?</h2>
            <ul className="mt-8 space-y-4 list-none p-0">
              {[
                { title: 'Vous êtes en privé', desc: 'Pas de bus avec 40 inconnus. Vous et votre groupe uniquement.' },
                { title: 'Guide diplômé en égyptologie', desc: 'Pas un guide récitant un script — un égyptologue qui comprend et explique.' },
                { title: 'Français courant', desc: 'Les explications sont claires, précises et adaptées à votre niveau de connaissance.' },
                { title: 'Programme flexible', desc: 'On adapte le rythme et les sites selon vos envies, pas selon un horaire rigide.' },
                { title: 'Contact direct', desc: "Vous réservez directement avec moi par WhatsApp ou email. Pas d'intermédiaire." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 surface p-5 rounded-xl">
                  <Star size={16} className="text-gold fill-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Réserver votre excursion Hurghada → Louxor</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Je réponds personnellement sous 24h. Aucun acompte à la réservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Hurghada%20vers%20Louxor."
                className="btn btn-primary flex items-center gap-2"
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Réserver sur WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline-white">Formulaire de devis</Link>
            </div>
          </div>
        </section>

        {/* Maillage */}
        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">Autres excursions depuis la Mer Rouge</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire' },
                { label: 'Safaga → Louxor', path: '/excursions/depuis-safaga-vers-louxor' },
                { label: 'Makadi → Louxor', path: '/excursions/depuis-makadi-vers-louxor' },
                { label: 'Soma Bay → Louxor', path: '/excursions/depuis-soma-bay-vers-louxor' },
                { label: 'Marsa Alam → Louxor', path: '/excursions/depuis-marsa-alam-vers-louxor' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center gap-2 surface p-4 rounded-xl hover:border-gold transition-colors group">
                    <Star size={12} className="text-gold fill-gold flex-shrink-0" />
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
