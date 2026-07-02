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
    title: 'Excursion Soma Bay → Louxor | Guide Francophone Hisham — Programme',
    description:
      'Excursion privée depuis votre resort de Soma Bay vers Louxor avec Hisham, guide égyptologue francophone. Service premium adapté aux exigences de votre établissement.',
    path: '/excursions/depuis-soma-bay-vers-louxor',
    ogImage: '/images/destinations/louxor/temple-louxor-nuit-illumine.webp',
  });
}

const PROGRAMME = [
  { time: '06:00', event: 'Prise en charge à votre resort à Soma Bay' },
  { time: '06:00 – 09:30', event: 'Trajet Soma Bay → Louxor (3h30 à travers le désert arabique)' },
  { time: '09:30 – 12:30', event: 'Vallée des Rois : 3 tombes royales au choix' },
  { time: '12:30 – 13:30', event: 'Déjeuner dans un restaurant réputé de Louxor' },
  { time: '13:30 – 15:30', event: 'Temple de Karnak : Salle Hypostyle, obélisques, lac sacré' },
  { time: '15:30 – 16:30', event: 'Temple de Louxor (optionnel)' },
  { time: '16:30 – 20:00', event: 'Retour Louxor → Soma Bay' },
  { time: '~20:00', event: 'Arrivée à votre resort à Soma Bay' },
];

const FAQ = [
  {
    question: 'La prise en charge se fait directement depuis les grands resorts de Soma Bay ?',
    answer: "Oui, je me déplace directement à l'entrée de votre resort (Sheraton, Kempinski, Cascades, Robinson...). Pas besoin de vous déplacer jusqu'à Hurghada pour rejoindre un point de départ collectif.",
  },
  {
    question: "L'excursion est-elle adaptable aux clients de resorts haut de gamme ?",
    answer: "C'est précisément ce que je propose. Service entièrement privé, rythme flexible, restauration dans des établissements de qualité, et accompagnement attentionné tout au long de la journée. Pas de groupe, pas de pression commerciale.",
  },
];

export default function DepuisSomaBayVersLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Soma Bay → Louxor', path: '/excursions/depuis-soma-bay-vers-louxor' },
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
          <Image src="/images/destinations/louxor/temple-louxor-nuit-illumine.webp" alt="Vallée des Rois — excursion depuis Soma Bay avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/soma-bay" className="text-white/75 hover:text-white transition-colors drop-shadow">Soma Bay</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Louxor</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Excursion privée · Service premium</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Excursion Soma Bay → Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Prise en charge à votre resort · Vallée des Rois · Guide égyptologue francophone</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Durée : 14h (transport inclus)</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 130€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Service haut de gamme</span>
            </div>
            <h2 className="text-display-md text-balance">De votre péninsule exclusive aux temples pharaoniques</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Soma Bay est synonyme d'exclusivité et de discrétion. Mes excursions depuis Soma Bay
                sont conçues dans le même esprit : service entièrement privé, prise en charge directe
                à votre resort, véhicule confortable, rythme adapté à vos envies.
              </p>
              <p>
                À 3h30 de route, Louxor est accessible en une journée — avec suffisamment de temps pour
                voir la Vallée des Rois, le Temple de Karnak et même le Temple de Louxor. Je m'occupe
                de tout : billets, ordre de visite, déjeuner, et retour confortable en soirée.
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
                  {['Transport privé depuis votre resort', "Billets d'entrée de tous les sites", 'Guide égyptologue francophone', 'Eau minérale et déjeuner'].map((item) => (
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
            <h2 className="text-display-md text-white">Réserver votre excursion depuis Soma Bay</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Service premium à la hauteur de votre resort. Devis gratuit sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Soma%20Bay%20vers%20Louxor." className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
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
