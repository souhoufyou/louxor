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
    title: 'Excursion Marsa Alam → Louxor | Guide Francophone Hisham — Programme',
    description:
      'Excursion privée depuis Marsa Alam vers Louxor avec Hisham, guide égyptologue francophone. 4h de désert puis Vallée des Rois et Karnak. Programme et prix sur demande.',
    path: '/excursions/depuis-marsa-alam-vers-louxor',
    ogImage: '/images/destinations/louxor/vallee-des-rois-paysage-desert.webp',
  });
}

const PROGRAMME = [
  { time: '05:00', event: 'Prise en charge à votre hôtel à Marsa Alam' },
  { time: '05:00 – 09:00', event: 'Trajet Marsa Alam → Louxor (4h à travers le désert)' },
  { time: '09:00 – 12:00', event: 'Vallée des Rois : 3 tombes royales au choix' },
  { time: '12:00 – 13:00', event: 'Déjeuner dans un restaurant local' },
  { time: '13:00 – 15:30', event: 'Temple de Karnak : Salle Hypostyle, lac sacré' },
  { time: '15:30 – 17:00', event: 'Temple de Louxor ou Vallée des Reines (optionnel)' },
  { time: '17:00 – 21:00', event: 'Retour Louxor → Marsa Alam' },
  { time: '~21:00', event: 'Arrivée à votre hôtel à Marsa Alam' },
];

const FAQ = [
  {
    question: 'Le trajet de 4h depuis Marsa Alam vaut-il vraiment la peine ?',
    answer: "Je dis souvent à mes clients que la route elle-même fait partie du voyage. Traverser le désert oriental d'Égypte — avec ses formations rocheuses extraordinaires, ses couleurs changeantes au lever du soleil — est une expérience en soi. Arriver ensuite à Louxor rend l'expérience encore plus saisissante.",
  },
  {
    question: 'Peut-on faire une nuit à Louxor depuis Marsa Alam pour profiter de plus de temps ?',
    answer: "Oui, c'est une option que je propose souvent. Une nuit à Louxor permet de voir le son et lumière de Karnak le soir, puis les tombes de la Vallée des Rois le lendemain matin à l'ouverture — dans la fraîcheur et sans foule.",
  },
];

export default function DepuisMarsaAlamVersLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Marsa Alam → Louxor', path: '/excursions/depuis-marsa-alam-vers-louxor' },
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
          <Image src="/images/destinations/louxor/vallee-des-rois-paysage-desert.webp" alt="Vallée des Rois — excursion depuis Marsa Alam avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/marsa-alam" className="text-white/75 hover:text-white transition-colors drop-shadow">Marsa Alam</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Louxor</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Excursion privée · 4h de désert</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Excursion Marsa Alam → Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Désert arabique · Vallée des Rois · Temple de Karnak avec guide francophone</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Durée : 16h (transport inclus)</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 130€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Nuit à Louxor disponible</span>
            </div>
            <h2 className="text-display-md text-balance">Coraux le matin, pharaons le lendemain</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Marsa Alam est connue pour ses fonds marins exceptionnels. Ce que moins de visiteurs
                savent, c'est que cette ville est aussi un point de départ pour l'une des excursions
                les plus spectaculaires d'Égypte : la traversée du désert oriental jusqu'à Louxor.
              </p>
              <p>
                4 heures de route à travers le désert arabique — paysages de grès et de granite,
                couleurs ocre et rouge — puis, à l'arrivée, la verdure du Nil et la silhouette des
                pylônes pharaoniques. Ce contraste est inoubliable.
              </p>
              <p>
                Je pars tôt le matin pour maximiser le temps sur les sites. Nous visitons la Vallée
                des Rois, le Temple de Karnak, et je vous ramène à votre hôtel en début de soirée.
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
                  {['Transport privé depuis Marsa Alam', "Billets d'entrée de tous les sites", 'Guide égyptologue francophone', 'Eau minérale et déjeuner'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm"><CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-display-md mb-6">Non inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {['Billet tombe de Toutânkhamon (optionnel)', 'Hébergement (si nuit à Louxor)', 'Dépenses personnelles'].map((item) => (
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
            <h2 className="text-display-md text-white">Réserver votre excursion depuis Marsa Alam</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Devis personnalisé. Option nuit à Louxor disponible. Je réponds sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Marsa%20Alam%20vers%20Louxor." className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
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
