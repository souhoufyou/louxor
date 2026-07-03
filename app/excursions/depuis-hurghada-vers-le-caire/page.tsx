import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursion Hurghada → Le Caire Pyramides | Guide Francophone Hisham',
    description:
      'Excursion privée depuis Hurghada vers Le Caire et les Pyramides de Gizeh avec Hisham, guide francophone. Vol ou route, programme sur mesure. Devis gratuit.',
    path: '/excursions/depuis-hurghada-vers-le-caire',
    ogImage: '/images/destinations/caire/pyramides-gizeh-aerial-desert.webp',
  });
}

const PROGRAMME = [
  { time: '05:00', event: 'Prise en charge à votre hôtel à Hurghada (route) ou aéroport (vol)' },
  { time: '05:00 – 09:30', event: 'Trajet Hurghada → Le Caire (4h30 de route ou 45 min de vol)' },
  { time: '09:30 – 12:30', event: 'Pyramides de Gizeh et Grand Sphinx — visite détaillée' },
  { time: '12:30 – 13:30', event: 'Déjeuner avec vue sur les Pyramides' },
  { time: '13:30 – 15:30', event: 'Musée Égyptien du Caire — momies royales, trésor de Toutânkhamon' },
  { time: '15:30 – 17:00', event: 'Khan el-Khalili (optionnel) — marché médiéval du Caire islamique' },
  { time: '17:00 – 21:30', event: 'Retour Le Caire → Hurghada' },
  { time: '~21:30', event: 'Arrivée à votre hôtel à Hurghada' },
];

const FAQ = [
  {
    question: 'Vaut-il mieux faire Le Caire en avion ou en voiture depuis Hurghada ?',
    answer: "L'avion (45 min) est plus rapide et coûte environ 80-100€ aller-retour. La voiture (4h30) est moins chère et vous permet de voir le paysage du désert oriental. Je vous propose les deux options avec les prix comparés.",
  },
  {
    question: 'Peut-on visiter Le Caire et Louxor lors du même séjour ?',
    answer: "Oui ! Je propose souvent de combiner une excursion à Louxor depuis Hurghada et une excursion au Caire lors de deux jours différents de votre séjour. Les deux complètes votre expérience de l'Égypte pharaonique.",
  },
  {
    question: "Peut-on entrer à l'intérieur de la Grande Pyramide ?",
    answer: "Oui, moyennant un billet supplémentaire (environ 20€). L'intérieur est étroit et chaud — je vous conseille d'y aller tôt le matin. Je vous donne tous les conseils pratiques pour décider si ça vaut la peine pour vous.",
  },
];

export default function DepuisHurghadaVersCairePage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaBreadcrumb([
        { name: 'Excursions', path: '/excursions' },
        { name: 'Hurghada → Le Caire', path: '/excursions/depuis-hurghada-vers-le-caire' },
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
          <Image src="/images/destinations/caire/pyramides-gizeh-aerial-desert.webp" alt="Pyramides de Gizeh — excursion depuis Hurghada avec guide francophone" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">Excursions</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/mer-rouge/hurghada" className="text-white/75 hover:text-white transition-colors drop-shadow">Hurghada</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Vers Le Caire</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Excursion privée · Journée complète</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">Excursion Hurghada → Le Caire & Pyramides</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Pyramides de Gizeh · Grand Sphinx · Musée Égyptien avec guide francophone</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Durée : 14-16h (transport inclus)</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">À partir de 150€/personne</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold-accessible">Vol ou route disponibles</span>
            </div>
            <h2 className="text-display-md text-balance">Les Pyramides de Gizeh depuis Hurghada</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Les Pyramides de Gizeh sont les seules Merveilles du monde antique encore debout. Les voir
                depuis Hurghada en une journée est tout à fait faisable — soit 4h30 de route à travers le
                désert, soit 45 minutes de vol interne.
              </p>
              <p>
                Avec moi, vous ne vous perdez pas dans la foule. Je connais les horaires optimaux, je vous
                emmène aux endroits où les photos sont les plus belles, et je vous explique tout ce que vous
                regardez — la précision des ingénieurs de Khéops, le symbole du Sphinx, les secrets des
                chambres funéraires.
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
                  {['Transport privé aller-retour', "Billets d'entrée sites et musées", 'Guide francophone toute la journée', 'Eau minérale', 'Déjeuner'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm"><CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-display-md mb-6">Non inclus</h2>
                <ul className="space-y-3 list-none p-0">
                  {['Billet intérieur pyramide (optionnel)', 'Dépenses personnelles', 'Vol interne si option avion'].map((item) => (
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
            <h2 className="text-display-md text-white">Réserver votre excursion Hurghada → Le Caire</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Je réponds sous 24h. Aucun acompte à la réservation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20une%20excursion%20depuis%20Hurghada%20vers%20Le%20Caire." className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
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
